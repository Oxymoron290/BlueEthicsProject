using Newtonsoft.Json;

public class DateOnlyConverter : JsonConverter<DateTime?>
{
    private const string DateFormat = "yyyy-MM-dd";

    public override void WriteJson(JsonWriter writer, DateTime? value, JsonSerializer serializer)
    {
        if (value.HasValue)
        {
            writer.WriteValue(value.Value.ToString(DateFormat));
        }
        else
        {
            writer.WriteNull();
        }
    }

    public override DateTime? ReadJson(JsonReader reader, Type objectType, DateTime? existingValue, bool hasExistingValue, JsonSerializer serializer)
    {
        if (reader.TokenType == JsonToken.Null)
        {
            return null;
        }

        if (DateTime.TryParse(reader.Value.ToString(), out var date))
        {
            return date;
        }

        throw new JsonSerializationException($"Invalid date format for {reader.Value}");
    }
}
