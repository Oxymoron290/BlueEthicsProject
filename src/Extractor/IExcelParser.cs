using System.Data;

public interface IExcelParser
{
    IEnumerable<Record> Parse(DataTable table);
}
