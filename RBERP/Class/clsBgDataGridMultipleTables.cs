using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Collections;
using BookMyShow.CommonLibrary;
using System.Collections.Generic;


/// <summary>
/// Summary description for clsBgDataGrid
/// </summary>
namespace BackOffice.Class
{
    public class clsBgDataGridMultipleTables
    {

        clsDBEngine objDB;
        ArrayList arlColumns;
        double[] arrTotals;
        bool blnDisplayTotals = false;

        private struct udsColumns
        {
            public string strColumnName;
            public string strHeaderText;
            public string strHeaderClass;
            public string strColumnClass;
            public int intColumnSequence;
            public string strDataType;
            public string strFormat;
            public string strAlign;
            public string strTotal;
        }

        public clsBgDataGridMultipleTables(Page objPage, string strTableName) : this(objPage, strTableName, "") { }

        public clsBgDataGridMultipleTables(Page objPage, string strTableName, string strConString)
        {
            objDB = new clsDBEngine(strConString);
            subCreateArray(strTableName);
        }

        public List<HtmlTable> htbDisplayData(DataSet objDataSet, string strWidth)
        {
            List<HtmlTable> htbReturn = new List<HtmlTable>();
            HtmlTableRow htrRow = new HtmlTableRow();
            List<HtmlTableRow> objRow = new List<HtmlTableRow>();           
            bool blnDisplayHeader = false;
            string strValue = "";
            int intRowCount = 0;                     

            for (int intTable = 0; intTable < objDataSet.Tables.Count; intTable++)
            {
                double[] arrColumn = new double[arrTotals.Length];                
                htbReturn.Add(new HtmlTable());
                objRow = new List<HtmlTableRow>();
                htbReturn[intTable].CellSpacing = 0;
                htbReturn[intTable].Border = 1;
                //int intRowCount = 0;
                //int intCount = 0;                

                for (int intCount = 0; intCount < arlColumns.Count; intCount++)
                {
                    udsColumns objC = (udsColumns)arlColumns[intCount];
                    if (objC.strHeaderText.Length > 0)
                    {
                        blnDisplayHeader = true;
                        break;
                    }
                }
                if (blnDisplayHeader == true)
                {
                    if (strWidth != "")
                    {
                        htbReturn[intTable].Style.Add("width", strWidth);
                    }

                    htrRow = new HtmlTableRow();
                    for (int intCount = 0; intCount < arlColumns.Count; intCount++)
                    {                       
                        udsColumns objC = (udsColumns)arlColumns[intCount];
                        HtmlTableCell htcCell = new HtmlTableCell();
                        htcCell.InnerText = objC.strHeaderText;
                        htcCell.ID = "tc_" + objC.strHeaderText;
                        htcCell.Attributes.Add("class", objC.strHeaderClass);
                        htcCell.Attributes.Add("style", "text-align:center");
                        htrRow.Controls.Add(htcCell);                                               
                    }
                    htbReturn[intTable].Controls.Add(htrRow);
                }

                if (objDataSet.Tables[intTable].Rows.Count > 0)
                {
                    DataTable objDataTable = objDataSet.Tables[intTable];

                    foreach (DataRow Row in objDataTable.Rows)
                    {
                        htrRow = new HtmlTableRow();
                        for (int intColumn = 0; intColumn < arlColumns.Count; intColumn++)
                        {                            
                            udsColumns objC = (udsColumns)arlColumns[intColumn];
                            string strColumnName = objC.strColumnName.ToString();
                            string strColumnValue = Row[strColumnName].ToString();
                            string strBackgroundColor;
                            double dblToAdd = 0;
                            if (objDataSet.Tables[0].Columns[0].ColumnName.ToString() == "BackgroundColor")
                            {
                                strBackgroundColor = Row["BackgroundColor"].ToString();
                            }
                            else
                            {
                                strBackgroundColor = "#FFFFFF";
                            }
                            switch (objC.strTotal)
                            {
                                case "S":
                                    dblToAdd = double.Parse(Row[strColumnName].ToString());
                                    break;
                                case "C":
                                    dblToAdd = 1;
                                    break;
                                case "A":
                                    dblToAdd = double.Parse(Row[strColumnName].ToString());
                                    break;
                            }
                            arrColumn[intColumn] = arrColumn[intColumn] + dblToAdd;
                            if (strValue == "") strValue = "&nbsp";
                            htrRow.Controls.Add(htcDisplayRecords(strColumnValue, objC.strDataType, objC.strFormat, objC.strColumnClass, objC.strAlign));
                            htrRow.BgColor = strBackgroundColor;
                            htrRow.Attributes.Add("onmouseover", "this.style.backgroundColor='#CCCCCC';");
                            htrRow.Attributes.Add("onmouseout", "this.style.backgroundColor='" + strBackgroundColor + "';");
                        }
                        htbReturn[intTable].Controls.Add(htrRow);
                    }

                    if (blnDisplayTotals == true)
                    {
                        htrRow = new HtmlTableRow();
                        for (int intCount = 0; intCount < arlColumns.Count; intCount++)
                        {
                            udsColumns objC = (udsColumns)arlColumns[intCount];
                            HtmlTableCell htcCell = new HtmlTableCell();
                            switch (objC.strTotal)
                            {
                                case "S":
                                    strValue = arrColumn[intCount].ToString(objC.strFormat);
                                    break;
                                case "C":
                                    strValue = arrColumn[intCount].ToString(objC.strFormat);
                                    break;
                                case "A":
                                    strValue = ((arrColumn[intCount]) / (intRowCount)).ToString(objC.strFormat);
                                    break;
                                default:
                                    strValue = "&nbsp;";
                                    break;
                            }
                            if (intCount == 0) strValue = "Total : ";
                            htcCell.InnerHtml = strValue;
                            htcCell.ID = "tc_" + objC.strColumnName;
                            htcCell.Attributes.Add("class", objC.strHeaderClass);
                            htcCell.Attributes.Add("style", "text-align:center");
                            htrRow.Controls.Add(htcCell);
                        }
                        htbReturn[intTable].Controls.Add(htrRow);
                    }
                }
                else
                {
                    htrRow = new HtmlTableRow();
                    HtmlTableCell tdCell = new HtmlTableCell();
                    tdCell.InnerText = "----------------NO RECORD FOUND----------------------";
                    tdCell.ColSpan = arlColumns.Count;
                    tdCell.Attributes.Add("style", "text-align:center;color:#FF0000");
                    htrRow.Controls.Add(tdCell);
                    htbReturn[intTable].Controls.Add(htrRow);
                    return htbReturn;
                }

                
                //htbReturn[intTable].Controls.Add(new LiteralControl("<br/>"));
                //HtmlTable htbBreak = new HtmlTable();
                //htrRow = new HtmlTableRow();
                //for (int intCount = 0; intCount < arlColumns.Count; intCount++)
                //{
                //    udsColumns objC = (udsColumns)arlColumns[intCount];
                //    HtmlTableCell htcCell = new HtmlTableCell();
                //    strValue = "&nbsp;";
                //    htcCell.InnerHtml = strValue;
                //    htcCell.ID = "tc_" + objC.strColumnName;
                //    //htcCell.Attributes.Add("class", objC.strHeaderClass);
                //    //htcCell.Attributes.Add("style", "text-align:center");
                //    htrRow.Controls.Add(htcCell);
                //}
                ////htbBreak.Controls.Add(htrRow);
                //htbReturn[intTable].Controls.Add(htrRow);                
            }                   

            return htbReturn;
        }

        public HtmlTable htbDisplayVerticalData(string strQuery)
        {
            HtmlTable htbReturn = new HtmlTable();
            HtmlTableRow htrRow = new HtmlTableRow();
            string strValue = "";

            if (objDB.blnOpenResultSet(strQuery) == true)
            {
                while (objDB.blnResultsMoveNextRow() == true)
                {
                    for (int intCount = 0; intCount < arlColumns.Count; intCount++)
                    {
                        htrRow = new HtmlTableRow();
                        udsColumns objC = (udsColumns)arlColumns[intCount];
                        HtmlTableCell htcCell = new HtmlTableCell();
                        htcCell.InnerText = objC.strHeaderText;
                        htcCell.ID = "tc_" + objC.strHeaderText;
                        htcCell.Attributes.Add("class", objC.strHeaderClass);
                        htcCell.Attributes.Add("style", "text-align:left");
                        htrRow.Controls.Add(htcCell);
                        strValue = objDB.objResultsValue(objC.strColumnName).ToString();
                        string strBackgroundColor;
                        double dblToAdd = 0;
                        if (objDB.objResultsValue("BackgroundColor") == null)
                        {
                            strBackgroundColor = "#FFFFFF";
                        }
                        else
                        {
                            strBackgroundColor = objDB.objResultsValue("BackgroundColor").ToString();
                        }
                        switch (objC.strTotal)
                        {
                            case "S":
                                dblToAdd = double.Parse(objDB.objResultsValue(objC.strColumnName).ToString());
                                break;
                            case "C":
                                dblToAdd = 1;
                                break;
                        }
                        arrTotals[intCount] = arrTotals[intCount] + dblToAdd;
                        if (strValue == "") strValue = "&nbsp";
                        htrRow.Controls.Add(htcDisplayRecords(strValue, objC.strDataType, objC.strFormat, objC.strColumnClass, objC.strAlign));
                        htrRow.BgColor = strBackgroundColor;
                        htrRow.Attributes.Add("onmouseover", "this.style.backgroundColor='#CCCCCC';");
                        htrRow.Attributes.Add("onmouseout", "this.style.backgroundColor='" + strBackgroundColor + "';");
                        htbReturn.Controls.Add(htrRow);                        
                    }

                }
            }
            objDB.blnCloseConnection();

            return htbReturn;
        }

        private HtmlTableCell htcDisplayRecords(object objText, string strDataType, string strFormat, string strClass, string strAlign)
        {
            HtmlTableCell htcCell = new HtmlTableCell();
            string strText, strAlignValue;
            switch (strAlign.ToUpper())
            {
                case "C":
                    strAlignValue = "center";
                    break;
                case "R":
                    strAlignValue = "right";
                    break;
                default:
                    strAlignValue = "left";
                    break;
            }
            switch (strDataType.ToUpper())
            {
                case "D":
                    strText = Convert.ToDateTime(objText).ToString(strFormat);
                    break;
                case "I":
                    strText = Convert.ToInt32(objText).ToString(strFormat);
                    break;
                case "M":
                    strText = Convert.ToDecimal(objText).ToString(strFormat);
                    break;
                case "H":
                    if (objText.ToString().Length > 0)
                    {
                        HtmlImage imgPrint = new HtmlImage();
                        strText = "subOpenWindow('" + objText.ToString() + "', true);";
                        imgPrint.Src = strFormat;
                        imgPrint.Attributes.Add("onclick", strText);
                        imgPrint.Attributes.Add("onmouseover", "javascript:subSetCursor(this, 'hand');");
                        //HtmlAnchor htaPrint = new HtmlAnchor();
                        //htaPrint.Controls.Add(imgPrint);
                        //htaPrint.HRef = strText;
                        //htcCell.Controls.Add(htaPrint);
                        htcCell.Controls.Add(imgPrint);
                        return htcCell;
                    }
                    else
                    {
                        strText = objText.ToString();
                    }
                    break;
                default:
                    strText = objText.ToString();
                    break;
            }
            htcCell.InnerHtml = strText;
            htcCell.Attributes.Add("class", strClass);
            htcCell.Attributes.Add("style", "text-align:" + strAlignValue);
            return htcCell;
        }

        public void subCreateArray(string strTableName)
        {
            string strSQL = "SELECT * FROM tblBgColumns WHERE Column_vcTableName = '" + strTableName + "' ORDER BY Column_intSequence ASC";
            arlColumns = new ArrayList();
            int intCount = 0;
            if (objDB.blnOpenResultSet(strSQL) == true)
            {
                while (objDB.blnResultsMoveNextRow() == true)
                {
                    udsColumns objC = new udsColumns();
                    objC.strColumnName = objDB.objResultsValue("Column_vcColumnName").ToString();
                    objC.strColumnClass = objDB.objResultsValue("Column_vcDataClass").ToString();
                    objC.strHeaderText = objDB.objResultsValue("Column_vcHeaderText").ToString();
                    objC.strHeaderClass = objDB.objResultsValue("Column_vcHeaderClass").ToString();
                    objC.strDataType = objDB.objResultsValue("Column_vcDataType").ToString();
                    objC.intColumnSequence = Convert.ToInt16(objDB.objResultsValue("Column_intSequence"));
                    objC.strFormat = objDB.objResultsValue("Column_vcFormatString").ToString();
                    objC.strAlign = objDB.objResultsValue("Column_vcAlign").ToString();
                    objC.strTotal = objDB.objResultsValue("Column_vcTotal").ToString();
                    if (objC.strTotal != "N") blnDisplayTotals = true;
                    arlColumns.Add(objC);
                    intCount++;
                }
            }
            arrTotals = new double[intCount];
        }

    }
}