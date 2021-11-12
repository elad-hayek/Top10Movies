using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Diagnostics;
using Top10Movies.Models;

namespace Top10Movies.Services
{
    public interface IDbHandlerService
    {
        public IEnumerable<T> GetData<T>(string fileName);
        public void AddData<T>(string fileName, T data);
        public void DeleteData<T>(string fileName, T data, string propertyNameForFindingEntry); 

    }

    public class DbHandlerService : IDbHandlerService
    {
        public IEnumerable<T> GetData<T>(string fileName)
        {
            var serializer = new JsonSerializer();

            try
            {
                using (FileStream s = File.Open(fileName, FileMode.Open))
                using (var sr = new StreamReader(s))
                using (var jsonTextReader = new JsonTextReader(sr))
                {

                    IEnumerable<T>? dbList =  serializer.Deserialize<IEnumerable<T>>(jsonTextReader);
                    return dbList;
                }
            }
            catch (Exception e) { throw; }
        }
        public void AddData<T>(string fileName, T data)
        {
            var serializer = new JsonSerializer();

            try
            {
                using (FileStream s = File.Open(fileName, FileMode.Open))
                using (var sr = new StreamReader(s))
                using (var jsonTextReader = new JsonTextReader(sr))
                {
                    List<T>? dbList = serializer.Deserialize<List<T>>(jsonTextReader);
                    if (dbList != null)
                        dbList.Add(data);
                    else
                    {
                        dbList = new List<T>();
                        dbList.Add(data);
                    }

                    var convertedJson = JsonConvert.SerializeObject(dbList, Formatting.Indented);
                    s.Dispose();
                    File.WriteAllText(fileName, convertedJson);
                }
            }
            catch (Exception e) { throw; }
        }
        public  void DeleteData<T>(string fileName, T data, string propertyNameForFindingEntry)
        {
            var serializer = new JsonSerializer();

            try
            {
                using (FileStream s = File.Open(fileName, FileMode.Open))
                using (var sr = new StreamReader(s))
                using (var jsonTextReader = new JsonTextReader(sr))
                {
                    List<T>? dbList = serializer.Deserialize<List<T>>(jsonTextReader);

                    var identifier = data.GetType().GetProperty(propertyNameForFindingEntry).GetValue(data, null);

                    foreach (T dbEntry in dbList)
                    {
                        var dbIdentifier = dbEntry.GetType().GetProperty(propertyNameForFindingEntry).GetValue(dbEntry, null);
                        if (identifier.ToString() == dbIdentifier.ToString())
                        {
                            dbList.Remove(dbEntry);
                            break;
                        }
                    }


                    var convertedJson = JsonConvert.SerializeObject(dbList, Formatting.Indented);
                    s.Dispose();
                    File.WriteAllText(fileName, convertedJson);
                }
            }
             catch (Exception e) { throw; }
        }
    }
}
