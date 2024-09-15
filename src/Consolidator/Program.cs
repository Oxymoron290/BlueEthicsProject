using CommandLine;
using Newtonsoft.Json;

class Program
{
    static void Main(string[] args)
    {
        Parser.Default.ParseArguments<Options>(args)
            .WithParsed(options =>
            {
                var filePaths = GetFilePaths(options.Files);
                var consolidator = new Consolidator();
                var consolidatedRecords = consolidator.Consolidate(filePaths);

                // var jsonOutput = JsonConvert.SerializeObject(consolidatedRecords, Formatting.Indented);

                // // Save the consolidated JSON to the output file
                // File.WriteAllText(options.Output, jsonOutput);

                // Console.WriteLine($"Consolidated records saved to: {options.Output}");
            });
    }
    
    private static List<string> GetFilePaths(IEnumerable<string> filesOrDirectory)
    {
        var filePaths = new List<string>();

        foreach (var path in filesOrDirectory)
        {
            if (Directory.Exists(path))
            {
                // If it's a directory, get all JSON files in the directory
                filePaths.AddRange(Directory.GetFiles(path, "*.json"));
            }
            else if (File.Exists(path))
            {
                // If it's a file, add it to the list
                filePaths.Add(path);
            }
            else
            {
                Console.WriteLine($"Warning: {path} does not exist.");
            }
        }

        return filePaths;
    }
}
