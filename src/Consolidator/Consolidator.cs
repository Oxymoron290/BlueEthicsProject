using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Extensions.Logging;

public class Consolidator
{
    private readonly ILogger<Consolidator> _logger;
    private Dictionary<Record, bool> ambiguousRecords = new Dictionary<Record, bool>();

    public Consolidator(ILogger<Consolidator> logger)
    {
        _logger = logger;
    }

    public List<Record> Consolidate(List<string> jsonFilePaths)
    {
        var allRecords = new List<Record>();

        // Load and parse each JSON file
        foreach (var path in jsonFilePaths)
        {
            var json = File.ReadAllText(path);
            var records = JsonConvert.DeserializeObject<List<Record>>(json);
            allRecords.AddRange(records);
        }
        
        allRecords = allRecords
            .OrderByDescending(r => IsInitial(r.FirstName) ? 0 : 1)  // Full first names first
            .ThenByDescending(r => IsInitial(r.LastName) ? 0 : 1)     // Full last names first
            .ToList();

        var groupedRecords = new List<List<Record>>();
        foreach (var record in allRecords)
        {
            // Find any existing group where the record matches based on names
            var matchingGroups = groupedRecords
                .Where(group =>
                    group.Any(existingRecord =>
                        IsInitialOrFullNameMatch(record.FirstName, existingRecord.FirstName) &&
                        existingRecord.LastName.Equals(record.LastName, StringComparison.OrdinalIgnoreCase)
                    )
                )
                .ToList();

            if (matchingGroups.Any())
            {
                var warning = "";
                if(matchingGroups.Count() > 1){
                    ambiguousRecords[record] = true;
                    warning += $"WARNING: Ambiguity for {record.FirstName} {record.LastName}\nPossible Matches:\n";
                }
                // Add the record to all matching groups
                foreach (var matchingGroup in matchingGroups)
                {
                    if(matchingGroups.Count() > 1){
                        warning += $"\t{matchingGroup.FirstOrDefault().FirstName} {matchingGroup.FirstOrDefault().LastName}\n";
                    }
                    matchingGroup.Add(record);
                }
                if(matchingGroups.Count() > 1){
                    _logger.LogWarning(warning);
                }
            }
            else
            {
                // Create a new group with this record
                groupedRecords.Add(new List<Record> { record });
            }
        }

        return groupedRecords.Select(MergeRecords).ToList();
    }

    private bool NamesMatch(string firstName1, string firstName2, string lastName1, string lastName2)
    {
        firstName1 = firstName1?.Trim().ToLower();
        firstName2 = firstName2?.Trim().ToLower();
        lastName1 = lastName1?.Trim().ToLower();
        lastName2 = lastName2?.Trim().ToLower();

        return IsInitialOrFullNameMatch(firstName1, firstName2) && IsInitialOrFullNameMatch(lastName1, lastName2);
    }

    private bool IsInitialOrFullNameMatch(string name1, string name2)
    {
        if (string.IsNullOrWhiteSpace(name1) || string.IsNullOrWhiteSpace(name2)) return false;
        if(IsInitial(name1) || IsInitial(name2))
        {
            return (name1[0] == name2[0]);
        }
        return name1 == name2;
    }

    private bool IsInitial(string name)
    {
        return name.Length == 1 || (name.Length == 2 && name[1] == '.' && char.IsLetter(name[0]));
    }

    private string GetFullName(string targetName, string sourceName)
    {
        if (string.IsNullOrWhiteSpace(targetName)) return sourceName; // If target is null or empty, take source
        if (string.IsNullOrWhiteSpace(sourceName)) return targetName; // If source is null or empty, keep target

        // Normalize to lower case and trim
        targetName = targetName.Trim();
        sourceName = sourceName.Trim();

        // If target is just an initial and source is a full name, replace initial with full name
        if (IsInitial(targetName) && !IsInitial(sourceName))
        {
            return sourceName;
        }

        // If the target is already a full name, don't overwrite it with an initial
        return targetName;
    }

    private Record MergeRecords(List<Record> records)
    {
        return new Record
        {
            EmployeeId = MergeNullableProperty<int>(records, nameof(Record.EmployeeId)),
            TitleName = MergeProperty(records, nameof(Record.TitleName)),
            FirstName = MergeProperty(records, nameof(Record.FirstName)),
            LastName = MergeProperty(records, nameof(Record.LastName)),
            MiddleName = MergeProperty(records, nameof(Record.MiddleName)),
            NickName = MergeProperty(records, nameof(Record.NickName)),
            Department = MergeProperty(records, nameof(Record.Department)),
            Position = MergeProperty(records, nameof(Record.Position)),
            PositionTitle = MergeProperty(records, nameof(Record.PositionTitle)),
            Ethnicity = MergeProperty(records, nameof(Record.Ethnicity)),
            Gender = MergeProperty(records, nameof(Record.Gender)),
            AccrualProfile = MergeProperty(records, nameof(Record.AccrualProfile)),
            EmployeeStatus = MergeProperty(records, nameof(Record.EmployeeStatus)),
            DateHired = MergeNullableProperty<DateTime>(records, nameof(Record.DateHired)),
            Salary = MergeNullableProperty<decimal>(records, nameof(Record.Salary)),
            CertifiedOfficer = MergeBoolean(records, nameof(Record.CertifiedOfficer)),
            CurrentlyEmployed = MergeNullableBoolean(records, nameof(Record.CurrentlyEmployed)),
            Complaints = MergeNullableProperty<int>(records, nameof(Record.Complaints)),
            SustainedComplaints = MergeNullableProperty<int>(records, nameof(Record.SustainedComplaints)),
            PendingComplaints = MergeNullableProperty<int>(records, nameof(Record.PendingComplaints)),
            Commendations = MergeNullableProperty<int>(records, nameof(Record.Commendations))
        };
    }

    private T? MergeNullableProperty<T>(List<Record> records, string propertyName) where T : struct
    {
        var propertyValues = records
            .Select(r => r.GetType().GetProperty(propertyName)?.GetValue(r))
            .OfType<T?>()
            .Where(v => v.HasValue)
            .ToList();

        if (propertyValues.Count == 1)
        {
            return propertyValues.First();
        }

        var primary = records.FirstOrDefault();
        var primaryName = $"{primary?.FirstName} {primary?.LastName}";
        if(!propertyValues.Any()){
            _logger.LogDebug($"[{primaryName}] No values for {propertyName}");
            return null;
        }

        if (propertyValues.All(v => v.Value.Equals(propertyValues.First().Value)))
        {
            return propertyValues.First();
        }

        // Handle conflicting values with ambiguity and warnings, similar to the original logic
        var conflictingRecords = records.Where(r => r.GetType().GetProperty(propertyName)?.GetValue(r) != null).ToList();
        var nonAmbiguousConflictingRecords = conflictingRecords.Where(r => !ambiguousRecords.ContainsKey(r)).ToList();

        if (nonAmbiguousConflictingRecords.Count > 1)
        {
            // Use the most frequent value
            var mostFrequentValue = propertyValues
                .GroupBy(v => v)
                .OrderByDescending(g => g.Count())
                .First().Key;
            _logger.LogWarning($"[{primaryName}] Conflicting values for {propertyName}. Using most frequent value for {propertyName}: {mostFrequentValue}");

            return mostFrequentValue;
        }

        if (conflictingRecords.All(r => ambiguousRecords.ContainsKey(r)))
        {
            _logger.LogWarning($"[{primaryName}] Discarding {propertyName} due to ambiguity");
            return null;
        }

        return propertyValues.FirstOrDefault();
    }

    private bool MergeBoolean(List<Record> records, string propertyName)
    {
        var propertyValues = records
            .Select(r => (bool)r.GetType().GetProperty(propertyName)?.GetValue(r))
            .ToList();

        return propertyValues.Any(v => v); // If any record is true, return true
    }

    private bool? MergeNullableBoolean(List<Record> records, string propertyName)
    {
        var propertyValues = records
            .Select(r => (bool?)r.GetType().GetProperty(propertyName)?.GetValue(r))
            .Where(v => v.HasValue)
            .ToList();

        if (propertyValues.Count == 1)
        {
            return propertyValues.First();
        }

        var primary = records.FirstOrDefault();
        var primaryName = $"{primary?.FirstName} {primary?.LastName}";
        if(!propertyValues.Any()){
            _logger.LogDebug($"WARNING: [{primaryName}] No values for {propertyName}");
            return null;
        }

        if (propertyValues.All(v => v.Value == propertyValues.First().Value))
        {
            return propertyValues.First();
        }

        // Handle conflicting values and ambiguous records like in the nullable method
        var conflictingRecords = records.Where(r => r.GetType().GetProperty(propertyName)?.GetValue(r) != null).ToList();
        var nonAmbiguousConflictingRecords = conflictingRecords.Where(r => !ambiguousRecords.ContainsKey(r)).ToList();

        if (nonAmbiguousConflictingRecords.Count > 1)
        {
            // Use the most frequent value
            var mostFrequentValue = propertyValues
                .GroupBy(v => v)
                .OrderByDescending(g => g.Count())
                .First().Key;
            _logger.LogWarning($"WARNING: [{primaryName}] Conflicting values for {propertyName}. Using most frequent value for {propertyName}: {mostFrequentValue}");

            return mostFrequentValue;
        }

        if (conflictingRecords.All(r => ambiguousRecords.ContainsKey(r)))
        {
            _logger.LogWarning($"WARNING: [{primaryName}] Discarding {propertyName} due to ambiguity");
            return null;
        }

        return propertyValues.FirstOrDefault();
    }

    private string MergeProperty(List<Record> records, string propertyName)
    {
        var propertyValues = records
            .Select(r => r.GetType().GetProperty(propertyName)?.GetValue(r)?.ToString())
            .Where(v => !string.IsNullOrWhiteSpace(v))
            .ToList();

        // If only one value exists, return it
        if (propertyValues.Count == 1)
        {
            return propertyValues.First();
        }

        var primary = records.FirstOrDefault();
        var primaryName = $"{primary?.FirstName} {primary?.LastName}";
        if(!propertyValues.Any()){
            _logger.LogDebug($"[{primaryName}] No values for {propertyName}");
            return null;
        }

        // If all values are the same (ignoring case), return the value
        if (propertyValues.All(v => string.Equals(v, propertyValues.First(), StringComparison.OrdinalIgnoreCase)))
        {
            return propertyValues.First();
        }

        // If there are multiple conflicting values
        var conflictingRecords = records.Where(r => !string.IsNullOrWhiteSpace(r.GetType().GetProperty(propertyName)?.GetValue(r)?.ToString())).ToList();

        // Check if any conflicting records are in the ambiguousRecords dictionary
        var nonAmbiguousConflictingRecords = conflictingRecords.Where(r => !ambiguousRecords.ContainsKey(r)).ToList();

        if (nonAmbiguousConflictingRecords.Count > 1)
        {
            // There are multiple non-ambiguous conflicting records

            // Group values by their occurrence and take the most frequent one
            var mostFrequentValue = propertyValues
                .GroupBy(v => v.ToLower()) // Ignore case
                .OrderByDescending(g => g.Count())
                .First().Key;
            _logger.LogWarning($"WARNING: [{primaryName}] Conflicting values for {propertyName}. Using most frequent value for {propertyName}: {mostFrequentValue} won against [{string.Join(", ", propertyValues)}]");

            return mostFrequentValue;
        }

        // If all conflicting records are ambiguous, discard them and return null
        if (conflictingRecords.All(r => ambiguousRecords.ContainsKey(r)))
        {
            _logger.LogWarning($"WARNING: [{primary}] Discarding {propertyName} due to ambiguity");
            return null;
        }

        // Default case: return the first valid value
        return propertyValues.First();
    }
}
