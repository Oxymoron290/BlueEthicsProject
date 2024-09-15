using CommandLine;

public class Options
{
    [Option('o', "output-path", Required = true, HelpText = "Directory to save output file.")]
    public string OutputPath { get; set; }
    
    [Option('f', "file", Required = true, HelpText = "Excel file to be parsed.")]
    public string FileName { get; set; }

    [Option('p', "parser", Required = true, HelpText = "Parser type to be used.")]
    public string ParserType { get; set; }

    [Option('w', "worksheet", Required = false, HelpText = "Worksheet name or index to be parsed.")]
    public string Worksheet { get; set; }

    [Option("header", Required = false, HelpText = "Indicates if the first row is a header (default: true).")]
    public bool UseHeaderRow { get; set; } = true;
}
