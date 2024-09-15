[AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = false)]
public class ParserTypeAttribute : Attribute
{
    public string ParserType { get; }

    public ParserTypeAttribute(string parserType)
    {
        ParserType = parserType.ToLower();
    }
}
