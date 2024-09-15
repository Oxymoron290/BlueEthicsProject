using System.Data;
using NameParser;

[ParserType("jan24roster1")]
public class Jan24Roster1Parser : IExcelParser
{
    public IEnumerable<Record> Parse(DataTable table)
    {
        var people = new List<Record>();
        foreach (DataRow row in table.Rows)
        {
            var name = new HumanName($"{row[2]} {row[3]}");
            var dateHired = DateTime.TryParse(row[7].ToString(), out DateTime date) ? date : (DateTime?)null;
            var person = new Record
            {
                TitleName = name.Title,
                FirstName = name.First,
                LastName = name.Last,
                MiddleName = name.Middle,
                NickName = name.Nickname,
                Department = row[0].ToString(),
                EmployeeId = int.TryParse(row[1].ToString(), out int employeeId) ? employeeId : null,
                Position = row[4].ToString(),
                Ethnicity = row[5].ToString(),
                Gender = row[6].ToString() == "M" ? "Male" : "Female",
                DateHired = dateHired,
                Salary = ParseSalary(row[8].ToString())
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
}
