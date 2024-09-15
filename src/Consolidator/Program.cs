using CommandLine;
using Newtonsoft.Json;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

class Program
{
    static void Main(string[] args)
    {
        // Set up a service provider
        var serviceProvider = new ServiceCollection()
            .AddLogging(config =>
            {
                config.AddConsole(); // Add console logging
                config.AddDebug();   // Optionally add debug logging
            })
            .AddSingleton<Consolidator>()
            .BuildServiceProvider();
        // Get a logger instance
        var logger = serviceProvider.GetRequiredService<ILogger<Program>>();
        // Log something
        logger.LogInformation("Starting the consolidation process...");

        Parser.Default.ParseArguments<Options>(args)
            .WithParsed(options =>
            {
                var filePaths = GetFilePaths(options.Files);
                var consolidator = serviceProvider.GetRequiredService<Consolidator>();
                var consolidatedRecords = consolidator.Consolidate(filePaths);

                var jsonOutput = JsonConvert.SerializeObject(consolidatedRecords, Formatting.Indented);

                // Save the consolidated JSON to the output file
                File.WriteAllText(options.Output, jsonOutput);

                Console.WriteLine($"Consolidated records saved to: {options.Output}");
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
