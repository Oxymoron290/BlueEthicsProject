using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

public class Consolidator
{
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
            var matchingGroup = groupedRecords.FirstOrDefault(group =>
                group.Any(existingRecord =>
                    NamesMatch(existingRecord.FirstName, record.FirstName, existingRecord.LastName, record.LastName)
                )
            );

            if (matchingGroup != null)
            {
                matchingGroup.Add(record); // Add to existing group
            }
            else
            {
                // Create a new group with this record
                groupedRecords.Add(new List<Record> { record });
            }
        }

        // TODO: Consolidate and merge Records
        foreach(var records in groupedRecords)
        {
            var fullFirstName = records.FirstOrDefault().FirstName;
            var fullLastName = records.FirstOrDefault().LastName;
            // Compare all records in the group to get the most complete names
            foreach (var record in records.Skip(1)) // Start from the second record
            {
                fullFirstName = GetFullName(fullFirstName, record.FirstName);
                fullLastName = GetFullName(fullLastName, record.LastName);
            }

            var namesList = string.Join(", ", records.Select(r => $"{r.FirstName} {r.LastName}"));
            Console.WriteLine($"{fullFirstName} {fullLastName} - {records.Count}: [{namesList}]");
        }

        return null;
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

    private void MergeRecords(Record target, Record source)
    {
        // Merge the source record into the target record, filling in missing data

        target.FirstName = GetFullName(target.FirstName, source.FirstName);
        target.LastName = GetFullName(target.LastName, source.LastName);
        target.TitleName ??= source.TitleName;
        target.MiddleName ??= source.MiddleName;
        target.NickName ??= source.NickName;
        target.Department ??= source.Department;
        target.Position ??= source.Position;
        target.PositionTitle ??= source.PositionTitle;
        target.Ethnicity ??= source.Ethnicity;
        target.Gender ??= source.Gender;
        target.AccrualProfile ??= source.AccrualProfile;
        target.EmployeeStatus ??= source.EmployeeStatus;
        target.DateHired ??= source.DateHired;
        target.Salary ??= source.Salary;
        target.CertifiedOfficer |= source.CertifiedOfficer; // Assume CertifiedOfficer is true if true in any record
        target.CurrentlyEmployed ??= source.CurrentlyEmployed;
        target.Complaints ??= source.Complaints;
        target.SustainedComplaints ??= source.SustainedComplaints;
        target.PendingComplaints ??= source.PendingComplaints;
        target.Commendations ??= source.Commendations;
    }
}
