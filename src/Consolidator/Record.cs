using Newtonsoft.Json;

public class Record
{
    public int? EmployeeId { get; set; }
    public string? TitleName { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? MiddleName { get; set; }
    public string? NickName { get; set; }
    public string? Department { get; set; }
    public string? Position { get; set; }
    public string? PositionTitle { get; set; }
    public string? Ethnicity { get; set; }
    public string? Gender { get; set; }
    public string? AccrualProfile { get; set; }
    public string? EmployeeStatus { get; set; }
    [JsonConverter(typeof(DateOnlyConverter))]
    public DateTime? DateHired { get; set; }
    public decimal? Salary { get; set; }
    public bool CertifiedOfficer { get; set; }
    public bool? CurrentlyEmployed { get; set; }
    public int? Complaints { get; set; }
    public int? SustainedComplaints { get; set; }
    public int? PendingComplaints { get; set; }
    public int? Commendations { get; set; }
}