using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Script.Serialization;
using System.Threading;
using System.Configuration;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB;
using ZMQ;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json.Utilities;
using BookMyShow.CommonLibrary;

namespace CommonClasses
{
    public static class PushObject
    {
        /**
        * Created By: Amol M Kulkarni
        * Created Date: 27-03-2013
        * Description : To serialize the object and push to node via ZMQ
        * Modified By: Amol M Kulkarni
        * Modified Date: 10-05-2013
        * Modification Description:   N/A
        * Remarks: N/A
        **/
        public static int SendJSONtoNode(this object obj, string strConnect = "", string strVenueCode = "", string strEventCode = "")
        {
            try
            {
                // clsLog.blnLogError("PushObject", "SendJSonToNode", "tcpsetting : 1 " + clsAppSettings.Get("tcpPort", ""), "");
                int flag = 0;

                if (strConnect == "")
                {
                    flag = 1;
                    //strConnect = clsAppSettings.Get("tcpPort", "");
                    strConnect = clsSettings.Get("BackOffice", "tcpPort", "");
                }
                else
                {
                    //strConnect = clsAppSettings.Get(strConnect, "");
                    strConnect = clsSettings.Get("BackOffice", strConnect, "");
                }

                using (var context = new Context(1))
                {
                    // clsLog.blnLogError("PushObject", "SendJSonToNode", "tcpsetting : 2" + clsAppSettings.Get("tcpPort", ""), "");

                    using (var client = context.Socket(SocketType.PUSH))
                    {
                        //clsLog.blnLogError("PushObject", "SendJSonToNode", "tcpsetting : 3" + strConnect, flag.ToString() + strVenueCode);
                        client.Connect(strConnect);
                        clsLog.blnLogInfo("PushObject", "SendJSonToNode", "Connected to " + strConnect + "..", strVenueCode);
                        if (flag == 1)
                        {
                            client.Send("{\"Name\":" + "\"" + obj.GetType().Name + "\"" + ", \"Object\":" + obj.ToBsonDocument() + "}", Encoding.Default);
                            clsLog.blnLogError("PushObject", "SendJSonToNode", "object sent : ", obj.GetType().Name);
                        }
                        else
                        {
                            clsLog.blnLogInfo("PushObject", "SendJSonToNode", "Sending Start...", "");

                            client.Send("{\"cmd\":\"FULLVENUESYNC\", \"venueCode\":" + "\"" + strVenueCode + "\"" + ", \"eventCode\":" + "\"" + strEventCode + "\"" + ", \"source\":\"BOMAPPING\"}", Encoding.Default);

                            clsLog.blnLogInfo("PushObject", "SendJSonToNode", "Sended...", "");
                            //  clsLog.blnLogError("PushObject", "SendJSonToNode", "object sent : ", strVenueCode);
                        }

                        // clsLog.blnLogError("PushObject", "SendJSonToNode", "object sent : " , strVenueCode);

                        // System.Console.WriteLine(client.Recv(Encoding.Default).ToString()); //ACK from the Node.JS

                        clsLog.blnLogInfo("PushObject", "SendJSonToNode", "Return 1......", "");
                        return 1;
                    }
                }
            }
            catch (ZMQ.Exception exp)
            {
                clsLog.blnLogError("PushObject", "SendJSonToNode", "Error: ", exp.ToString() + "  " + exp.Errno + "  " + exp.HelpLink);
                return -1;
            }
        }



        public static int SendJSONtoNodeTSM(object obj1, string strConnect = "", string strVenueCode = "")
        {
            try
            {
                // clsLog.blnLogError("PushObject", "SendJSonToNode", "tcpsetting : 1 " + clsAppSettings.Get("tcpPort", ""), "");

                // strConnect = clsAppSettings.Get("tcpPortTSM", "tcp://192.168.42.213:1234");
                strConnect = clsSettings.Get("BackOffice", "tcpPortTSM", "tcp://192.168.42.213:1234");


                using (var context = new Context(1))
                {
                    // clsLog.blnLogError("PushObject", "SendJSonToNode", "tcpsetting : 2" + clsAppSettings.Get("tcpPort", ""), "");

                    using (var client = context.Socket(SocketType.PUSH))
                    {
                        //clsLog.blnLogError("PushObject", "SendJSonToNode", "tcpsetting : 3" + strConnect, flag.ToString() + strVenueCode);
                        client.Connect(strConnect);
                        clsLog.blnLogInfo("PushObject", "SendJSonToNodeTSM", "Connected..", "");

                        SendStatus status = client.Send("{\"Name\":" + "\"" + obj1.GetType().Name + "\"" + ", \"Object\":" + obj1.ToBsonDocument() + "}", Encoding.Default);
                        clsLog.blnLogError("PushObject", "SendJSonToNodeTSM", "sent status of TSM : ", status.ToString());
                        clsLog.blnLogError("PushObject", "SendJSonToNodeTSM", "object sent : ", obj1.GetType().Name);
                        clsLog.blnLogError("PushObject", "SendJSonToNodeTSM", "data sent : ", obj1.ToBsonDocument().ToString());
                        clsLog.blnLogError("PushObject", "SendJSonToNodeTSM", "I'm done", "done");
                        // clsLog.blnLogError("PushObject", "SendJSonToNode", "object sent : " , strVenueCode);

                        // System.Console.WriteLine(client.Recv(Encoding.Default).ToString()); //ACK from the Node.JS

                        return 1;
                    }
                }
            }
            catch (ZMQ.Exception exp)
            {
                clsLog.blnLogError("PushObject", "SendJSonToNodeTSM", "Error: ", exp.ToString() + "  " + exp.Errno + "  " + exp.HelpLink);
                return -1;
            }
        }

    }
}