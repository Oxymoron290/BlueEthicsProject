using System.Data;
using NameParser;

[ParserType("jan24roster2")]
public class Jan24Roster2Parser : IExcelParser
{
    public IEnumerable<Record> Parse(DataTable table)
    {
        var people = new List<Record>();
        foreach (DataRow row in table.Rows)
        {
            //Console.WriteLine($"{row[0]}, {row[1]}, {row[2]}, {row[3]}, {row[4]}, {row[5]}, {row[6]}, {row[7]}");
            var name = new HumanName($"{row[0]}, {row[1]}");
            DateTime.TryParse(row[5].ToString(), out DateTime dateHired);
            var person = new Record
            {
                TitleName = name.Title,
                FirstName = name.First,
                LastName = name.Last,
                MiddleName = name.Middle,
                NickName = name.Nickname,
                PositionTitle = row[2].ToString(),
                AccrualProfile = row[3].ToString(), 
                EmployeeStatus = row[4].ToString(),
                Gender = ParseGender(row[5].ToString()),
                Ethnicity = row[6].ToString(),
                Salary = ParseSalary(row[7].ToString())
            };
            people.Add(person);
        }
        return people;
    }

    private decimal? ParseSalary(string salary)
    {
        if (decimal.TryParse(salary.Replace("$", "").Replace(",", ""), out decimal result))
        {
            return result;
        }
        return null;
    }

    private string ParseGender(string gender)
    {
        return gender switch
        {
            "M" => "Male",
            "F" => "Female",
            "U" => "Unidentified",
            _ => "Unknown"
        };
    }
}
