using System.Data;
using System.Reflection;
using CommandLine;
using Newtonsoft.Json;

public class Program
{
    public static void Main(string[] args)
    {
        Parser.Default.ParseArguments<Options>(args)
            .WithParsed(options =>
            {
                IEnumerable<Record>? results = null;
                var parserType = options.ParserType.ToLower();
                var parser = GetParserByType(parserType);

                if (parser == null)
                {
                    Console.WriteLine($"Unknown parser type: {parserType}");
                    return;
                }

                var dataSet = ExcelReader.ReadExcelFile(options.FileName, options.UseHeaderRow);

                if (!string.IsNullOrEmpty(options.Worksheet))
                {
                    // Parse a specific worksheet
                    var worksheet = ExcelReader.SelectWorksheet(dataSet, options.Worksheet);
                    results = parser.Parse(worksheet);
                }
                else
                {
                    // Assume all worksheets are of the same format
                    foreach (DataTable table in dataSet.Tables)
                    {
                        results = parser.Parse(table);
                    }
                }
                var jsonSettings = new JsonSerializerSettings { 
                    Formatting = Formatting.Indented,
                    NullValueHandling = NullValueHandling.Ignore
                };
                var json = JsonConvert.SerializeObject(results, jsonSettings);

                // Extract the base filename (without extension) from the input file
                var baseFileName = Path.GetFileNameWithoutExtension(options.FileName);

                // Append the worksheet name or index if provided
                if (!string.IsNullOrEmpty(options.Worksheet))
                {
                    baseFileName = $"{baseFileName}_{options.Worksheet}";
                }

                // Create output file path
                var outputFilePath = Path.Combine(options.OutputPath, $"{baseFileName}.json");
                File.WriteAllText(outputFilePath, json);

                Console.WriteLine($"Output saved to: {outputFilePath}");
            });
    }

    private static IExcelParser? GetParserByType(string parserType)
    {
        var parser = Assembly.GetExecutingAssembly()
            .GetTypes()
            .Where(t => typeof(IExcelParser).IsAssignableFrom(t) && !t.IsInterface && !t.IsAbstract)
            .Select(t => new
            {
                Type = t,
                Attribute = t.GetCustomAttribute<ParserTypeAttribute>()
            })
            .FirstOrDefault(x => x.Attribute?.ParserType == parserType);

        return parser?.Type != null ? Activator.CreateInstance(parser.Type) as IExcelParser : null;
    }
}