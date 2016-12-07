using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BookMyShow.CommonLibrary;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Configuration;
using System.Web;
using MongoDB.Driver.Builders;
using System.Net;

namespace BackOffice.Class
{
    public class MongoMap
    {    
        #region Declaration
        const string udcErrorSource = "MongoMap.cs";
        clsDBEngine objDB;
        #endregion
        public MongoMap()
        {
            objDB = new clsDBEngine();
        }
        public static string ConnectionString
        {
            get
            {
                return "mongodb://bms:bms2012@192.168.42.208:27017/bookmyshow";
              //  return ConfigurationManager.AppSettings["Mongoconnection"];
            }
        }
        /* -----------------Mongo connection string---------------------------*/
        static MongoServer server = MongoServer.Create(ConnectionString);
        static MongoDatabase mydb = server.GetDatabase("bookmyshow");

        internal static void CreateSVG(string svgId, string SessionId, string EventCode, string CinemaCode, string svgData, string isActive, string isMobile)
        {
            MongoCollection<BsonDocument> svg = mydb.GetCollection<BsonDocument>("svgData");
            BsonDocument svgd = new BsonDocument {
                         {"_id", svgId },
                         {"SessionId", SessionId },
                         {"EventCode",EventCode},
                         {"CinemaCode",CinemaCode},
                         {"IsActive",isActive},
                         {"IsMobile",isMobile},
                         {"svgData",svgData.Replace("\"", "'").Replace("\n","").Replace("\r","")}
                        };
            svg.Insert(svgd);
        }

    }
}