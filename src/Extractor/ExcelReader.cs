using System.Data;
using ExcelDataReader;

public class ExcelReader
{
    public static DataSet ReadExcelFile(string filePath, bool useHeaderRow = true)
    {
        System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);

        using (var stream = File.Open(filePath, FileMode.Open, FileAccess.Read))
        {
            IExcelDataReader reader = null;

            if (filePath.EndsWith(".xls"))
            {
                reader = ExcelReaderFactory.CreateBinaryReader(stream); // For .xls files
            }
            else if (filePath.EndsWith(".xlsx"))
            {
                reader = ExcelReaderFactory.CreateOpenXmlReader(stream); // For .xlsx files
            }
            else
            {
                throw new ArgumentException("The file format is not supported.");
            }

            var result = reader.AsDataSet(new ExcelDataSetConfiguration
            {
                ConfigureDataTable = _ => new ExcelDataTableConfiguration
                {
                    UseHeaderRow = useHeaderRow // This tells it to treat the first row as header
                }
            });
            reader.Close();
            return result;
        }
    }

    public static DataTable SelectWorksheet(DataSet dataSet, string worksheet)
    {
        if (int.TryParse(worksheet, out int index))
        {
            // Select by worksheet index
            if (index >= 0 && index < dataSet.Tables.Count)
            {
                return dataSet.Tables[index];
            }
        }
        else
        {
            // Select by worksheet name
            if (dataSet.Tables.Contains(worksheet))
            {
                return dataSet.Tables[worksheet];
            }
        }

        throw new ArgumentException("Worksheet not found.");
    }
}
