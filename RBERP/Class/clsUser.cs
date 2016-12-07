#region Global Imports
using System;
using System.Data;
using BookMyShow.CommonLibrary;
#endregion

public class clsUser
{
    #region Declaration
        const string udcErrorSource = "clsUser.cs";
        clsDBEngine objDB;
    #endregion

    public clsUser()
    {
        objDB = new clsDBEngine();
    }

    #region subUserIsAuth
    public bool blnUserIsAuth(string strUser, string strCompany, string strCinemaID, string strEventCode, string strDebtId)
    {
        const string udcErrorMethod = "blnUserIsAuth";
        try
        {
            Int32 intReturnValue;                       
            
            objDB.blnParamClear();
            objDB.blnParamAdd(ParameterDirection.Input, "@strUserId", SqlDbType.VarChar, 50, strUser);
            objDB.blnParamAdd(ParameterDirection.Input, "@strCompanyCode", SqlDbType.VarChar, 10, strCompany);
            objDB.blnParamAdd(ParameterDirection.Input, "@strCinemaID", SqlDbType.VarChar, 10, strCinemaID);
            objDB.blnParamAdd(ParameterDirection.Input, "@strEventCode", SqlDbType.VarChar, 10, strEventCode);
            objDB.blnParamAdd(ParameterDirection.Input, "@strDebt_Id", SqlDbType.VarChar, 6, strDebtId);
            objDB.blnParamAdd(ParameterDirection.Output, "@strRights", SqlDbType.VarChar, 20, "");            

            intReturnValue = objDB.lngExecuteSP("spBOCheckRights");
            if (intReturnValue == 0)
            {
                string strRights = objDB.objParamValue("@strRights").ToString();
                clsLog.blnLogInfo(udcErrorSource, udcErrorMethod, "Checking user is authorised - Sucess, Rights -" + strRights, "User Id = " + strUser + " Company Code = " + strCompany + " Cinema ID = " + strCinemaID + " EventCode = " + strEventCode + " Debt Id = " + strDebtId);
                return true;
            }
            else
            {
                clsLog.blnLogInfo(udcErrorSource, udcErrorMethod, "Checking user is authorised - Fail", "User Id = " + strUser + " Company Code = " + strCompany + " Cinema ID = " + strCinemaID + " EventCode = " + strEventCode + " Debt Id = " + strDebtId);
                return false;
            }           
           
        }
        catch (Exception ex)
        {
            clsLog.blnLogError(udcErrorSource, udcErrorMethod, "Error in checking user is Authorised.", ex.ToString(), false);
            return false;
        }
        objDB.blnCloseConnection();
        objDB = null;
    }
    #endregion
}