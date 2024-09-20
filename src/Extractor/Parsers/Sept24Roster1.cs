using System.Data;
using NameParser;

[ParserType("sept24roster1")]
public class Sept24Roster1Parser : IExcelParser
{
    public IEnumerable<Record> Parse(DataTable table)
    {
        var people = new List<Record>();
        foreach (DataRow row in table.Rows)
        {
            var name = new HumanName($"{row[1]}, {row[2]}");
            var dateHired = DateTime.TryParse(row[6].ToString(), out DateTime hdate) ? hdate : (DateTime?)null;
            var dateSeperated = DateTime.TryParse(row[7].ToString(), out DateTime sdate) ? sdate : (DateTime?)null;
            var person = new Record
            {
                TitleName = name.Title,
                FirstName = name.First,
                LastName = name.Last,
                MiddleName = name.Middle,
                NickName = name.Nickname,
                Department = row[0].ToString(),
                Position = row[3].ToString(),
                Ethnicity = row[5].ToString(),
                Gender = row[4].ToString() == "M" ? "Male" : "Female",
                DateHired = dateHired,
                SeparationDate = dateSeperated,
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
