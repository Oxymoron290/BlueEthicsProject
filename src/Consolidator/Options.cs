using CommandLine;

public class Options
{
    [Option('f', "files", Required = true, HelpText = "List of JSON files to consolidate, or a directory.", Separator = ' ')]
    public IEnumerable<string> Files { get; set; }

    [Option('o', "output", Required = true, HelpText = "Output path for consolidated JSON file.")]
    public string Output { get; set; }
}
