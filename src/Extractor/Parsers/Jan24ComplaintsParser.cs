using System.Data;
using NameParser;

[ParserType("jan24complaints")]
public class Jan24ComplaintsParser : IExcelParser
{
    public IEnumerable<Record> Parse(DataTable table)
    {
        var people = new List<Record>();
        foreach (DataRow row in table.Rows)
        {
            //Console.WriteLine($"{row[0]}, {row[1]}, {row[2]}, {row[3]}, {row[4]}, {row[5]}, {row[6]}, {row[7]}");
            var name = new HumanName(row[0].ToString());
            var person = new Record
            {
                //Name = row[0].ToString(),
                TitleName = name.Title,
                FirstName = name.First,
                LastName = name.Last,
                MiddleName = name.Middle,
                NickName = name.Nickname,
                Department = row[1].ToString(),
                PositionTitle = row[2].ToString(),
                CertifiedOfficer = row[3].ToString() == "Y",
                CurrentlyEmployed = string.IsNullOrWhiteSpace(row[4].ToString()) ? null : row[4].ToString() == "Y" ? (bool?)true : false,
                Complaints = TryParseNullableInt(row[5].ToString()),
                SustainedComplaints = row[6].ToString() == "Pending" ? null : TryParseNullableInt(row[6].ToString()),
                PendingComplaints = row[6].ToString() == "Pending" ? 1 : 0,
                Commendations = TryParseNullableInt(row[7].ToString())
            };
            people.Add(person);
        }
        return people;
    }

    private int? TryParseNullableInt(string input)
    {
        if (int.TryParse(input, out int result))
        {
            return result;
        }
        return null; // Return null if parsing fails or input is empty
    }

}
