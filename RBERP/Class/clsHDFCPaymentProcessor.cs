//using System;
//using System.Data;
//using System.Web;
//using System.Data.SqlClient;
//using System.Security.Cryptography;
//using BookMyShow.CommonLibrary;

//internal class clsHDFCPaymentProcessor
//{

//    //TODO: Credit Card payment processing

//    const string udcErrorSource = "clsHDFCPaymentProcessor";
//    private int plngPaymentId = 0;
//    private string pstrException = "";
//    private string pstrReferenceCode = "";

//    internal clsHDFCPaymentProcessor()
//    {
//    }

//    internal int lngPaymentId
//    {
//        get
//        {
//            return plngPaymentId;
//        }
//    }

//    internal string strException
//    {
//        get
//        {
//            return pstrException;
//        }
//    }

//    internal string strRefernceCode
//    {
//        get
//        {
//            return pstrReferenceCode;
//        }
//    }

//    internal bool blnRefundPayment(int lngPaymentId, string strOperator)
//    {

//        const string udcErrorMethod = "blnRefundPayment";

//        clsDBEngine objDB = new clsDBEngine();
//        string strRawResponse = "", strSQL = "";
//        string strCustomerName = "", strStatus = "", strReceived = "", strTrackId = "", strTerminalAlias = "";
//        short intResponse = -99;
//        double dblAmount = 0;

//        plngPaymentId = lngPaymentId;
//        strSQL = "SELECT Trans_lngId, Payment_strBank, Payment_strReceived, Payment_mnyAmount, Payment_strCardName FROM tblCardTrackEx WHERE Payment_lngId = " + lngPaymentId.ToString("0");

//        if (objDB.blnOpenResultSet(strSQL) == true)
//        {
//            if (objDB.blnResultsMoveNextRow() == true)
//            {
//                strCustomerName = objDB.objResultsValue("Payment_strCardName").ToString();
//                dblAmount = double.Parse(objDB.objResultsValue("Payment_mnyAmount").ToString());
//                strStatus = objDB.objResultsValue("Payment_strReceived").ToString();
//                strTrackId = objDB.objResultsValue("Trans_lngId").ToString();
//                strTerminalAlias = objDB.objResultsValue("Payment_strBank").ToString();
//            }
//            else
//            {
//                pstrException = "Payment record NOT found !!!";
//                return false;
//            }
//        }
//        else
//        {
//            pstrException = "Error fetching Payment details from database.";
//            return false;
//        }

//        switch (strStatus)
//        {
//            case "R":
//                pstrException = "Payment ALREADY refunded !!!";
//                return false;
//            case "N":
//                pstrException = "Payment is NOT charged !!!";
//                return false;
//        }

//        strReceived = strStatus;

//        if (strTerminalAlias.Length > 1) { strTerminalAlias = strTerminalAlias.Substring(1); }

//        try
//        {
//            e24TranPipeLib.e24TranPipeCtlClass objPG = new e24TranPipeLib.e24TranPipeCtlClass();
//            objPG.Action = "2";
//            objPG.Member = strCustomerName;
//            objPG.Amt = dblAmount.ToString("0.00");
//            objPG.Currency = "356";
//            objPG.TrackId = strTrackId;
//            objPG.TransId = strTrackId;
//            objPG.Udf5 = "TrackID";
//            objPG.ResourcePath = strGetResourcePath(strTerminalAlias);
//            objPG.Alias = strTerminalAlias;

//            intResponse = objPG.PerformTransaction();  //Returns 0 for communication success -1 For communication failure and NOT payment processing failure
//            string strResult = objPG.Result;
//            string strErrorMsg = objPG.ErrorMsg;
//            strRawResponse = objPG.RawResponse;
//            strRawResponse = "|RESULT=" + strResult + "|ERRORMSG=" + strErrorMsg + "|RAWRESP=" + strRawResponse + "|";

//            if (strResult.ToUpper() == "CAPTURED") // This determines whether the card was charged successfully or not.
//            {
//                strReceived = "R";
//            }
//            else
//            {
//                clsLog.blnLogError(udcErrorSource, udcErrorMethod, "Payment Failed : " + strResult + ", " + strRawResponse, "");
//            }
//            objPG = null;
//        }
//        catch (Exception ex)
//        {
//            clsLog.blnLogError(udcErrorSource, udcErrorMethod, "Communicating with ePG", ex.Message.ToString());
//            intResponse = -1;
//        }

//        strSQL = "UPDATE tblCardTrackEx SET Payment_dtmRefundStamp = GETDATE(), Payment_strReceived = '" + strReceived + "', Payment_strRefundDetails = '" + strRawResponse + "', Payment_strRefundUser = '" + strOperator + "' WHERE Payment_lngId = " + lngPaymentId;

//        if (objDB.blnExecute(strSQL) == false)
//        {
//            clsLog.blnLogError(udcErrorSource, udcErrorMethod, "SQL Failed : " + strSQL, "");
//        }
//        objDB.blnCloseConnection();

//        if (strReceived == "R")
//        {
//            return true;
//        }
//        return false;
//    }

//    private string strAddDelimiter(string strCard, string strDel, int intLength)
//    {

//        int intCount;
//        int intPointer = 0;
//        string strReturn = "";
//        for (intCount = 0; intCount < strCard.Length; intCount++)
//        {
//            intPointer += 1;
//            strReturn = strReturn + strCard.Substring(intCount, 1);
//            if ((intPointer == intLength) && (intCount < strCard.Length - 1))
//            {
//                strReturn = strReturn + strDel;
//                intPointer = 0;
//            }
//        }

//        return strReturn;

//    }

//    private string strGetResourcePath(string strKeyFile)
//    {
//        string strReturnData = AppDomain.CurrentDomain.BaseDirectory.ToString();
//        if (strReturnData.Substring((strReturnData.Length - 1), 1) != @"\")
//        {
//            strReturnData += @"\";
//        }
//        if (strKeyFile.Trim().Length > 0)
//        {
//            strReturnData += @"PaymentGateway\" + strKeyFile.Trim() + @"\";
//        }
//        else
//        {
//            strReturnData = "";
//        }
//        return strReturnData;
//    }

//}
