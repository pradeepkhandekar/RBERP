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
using System.IO;
using System.Text;
/// <summary>
/// Summary description for clsBgDataGrid
/// </summary>

public class clsBgDataGridNew
{

    clsDBEngine objDB ;
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

    public clsBgDataGridNew(Page objPage, string strTableName) : this(objPage, strTableName, "") { }
  
    public clsBgDataGridNew(Page objPage, string strTableName,string strConString)
    {
        objDB = new clsDBEngine(strConString);
        subCreateArray(strTableName);
    }

    public HtmlTable htbDisplayData(string strQuery,string strWidth)
    {
        HtmlTable htbReturn = new HtmlTable();
        HtmlTableRow htrRow = new HtmlTableRow();

     


        bool blnDisplayHeader = false;
        string strValue = "";
        int intRowCount = 0;
        if (strWidth != "")
        {
            htbReturn.Style.Add("width", strWidth);
        }
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
            htbReturn.Controls.Add(htrRow);
        }

        if (objDB.blnOpenResultSet(strQuery) == true)
        {
            if (objDB.blnHasRecords == false)
            {
                htrRow = new HtmlTableRow();
                HtmlTableCell tdCell = new HtmlTableCell();
                tdCell.InnerText = "----------------NO RECORD FOUND----------------------";
                tdCell.ColSpan = arlColumns.Count;
                tdCell.Attributes.Add("style", "text-align:center;color:#FF0000");
                htrRow.Controls.Add(tdCell);
                htbReturn.Controls.Add(htrRow);
                return htbReturn;
                
            }
            while (objDB.blnResultsMoveNextRow() == true)
            {
                intRowCount++;
                htrRow = new HtmlTableRow();
                for (int intCount = 0; intCount < arlColumns.Count; intCount++)
                {
                    udsColumns objC = (udsColumns)arlColumns[intCount];
                    strValue = objDB.objResultsValue(objC.strColumnName).ToString();
                    string strBackgroundColor;
                    double dblToAdd = 0;
                    if(objDB.strResultsColName(0) != "BackgroundColor")
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
                        case "A":
                            dblToAdd = double.Parse(objDB.objResultsValue(objC.strColumnName).ToString());                            
                            break;
                    }
                    arrTotals[intCount] = arrTotals[intCount] + dblToAdd;
                    if (strValue == "") strValue = "&nbsp";
                    htrRow.Controls.Add(htcDisplayRecords(strValue, objC.strDataType, objC.strFormat, objC.strColumnClass, objC.strAlign));
                    htrRow.BgColor = strBackgroundColor;
                    htrRow.Attributes.Add("onmouseover", "this.style.backgroundColor='#CCCCCC';");
                    htrRow.Attributes.Add("onmouseout", "this.style.backgroundColor='" + strBackgroundColor + "';");
                }
                htbReturn.Controls.Add(htrRow);
            }
        }
        objDB.blnCloseConnection();

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
                        strValue = arrTotals[intCount].ToString(objC.strFormat);
                        break;
                    case "C":
                        strValue = arrTotals[intCount].ToString(objC.strFormat);
                        break;
                    case "A":
                        strValue = ((arrTotals[intCount]) / (intRowCount)).ToString(objC.strFormat);
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
            htbReturn.Controls.Add(htrRow);
        }

        return htbReturn;
    }

    /// <summary>
    /// function to execute query and return json from resultset
    /// </summary>
    /// <param name="strQuery"></param>
    /// <returns></returns>
    public string getJsonData(string strQuery)
    {
        StringBuilder jsonData = new StringBuilder();

        if (objDB.blnOpenResultSet(strQuery) == true)
        {
            jsonData.Append("<script type='text/javascript'>");
            jsonData.Append(" var data = '[");
            while (objDB.blnResultsMoveNextRow() == true)
            {
                jsonData.Append("{");
                for (int intCount = 0; intCount < arlColumns.Count; intCount++)
                {
                    udsColumns objC = (udsColumns)arlColumns[intCount];
                    jsonData.Append("\"" + objC.strColumnName + "\":");
                    jsonData.Append("\"" + objDB.objResultsValue(objC.strColumnName).ToString() + "\"");
                    jsonData.Append(",");
                }
                jsonData = jsonData.Remove(jsonData.ToString().LastIndexOf(","), 1);
                jsonData.Append("},");
               
            }
            jsonData = jsonData.Remove(jsonData.ToString().LastIndexOf(","), 1);
            jsonData.Append("]'");
            jsonData.Append("</script>");
        }
        objDB.blnCloseConnection();

        return jsonData.ToString();
    }

    /// <summary>
    /// ajay made this function for integrating with kendo ui
    /// </summary>
    /// <param name="strQuery"></param>
    /// <param name="strWidth"></param>
    /// <returns></returns>
    public Table htbDisplayTableData(string strQuery, string strWidth)
    {
        Table htbReturn = new Table();
        TableRow htrRow = new TableRow();

        TableHeaderRow thrRow = new TableHeaderRow();


        bool blnDisplayHeader = false;
        string strValue = "";
        int intRowCount = 0;
        if (strWidth != "")
        {
            htbReturn.Style.Add("width", strWidth);
        }
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
            for (int intCount = 0; intCount < arlColumns.Count; intCount++)
            {
                udsColumns objC = (udsColumns)arlColumns[intCount];
                TableHeaderCell htcCell = new TableHeaderCell();
                htcCell.Scope = TableHeaderScope.Column;
                htcCell.Text = objC.strHeaderText;
                htcCell.ID = "tc_" + objC.strHeaderText;
                htcCell.Attributes.Add("class", objC.strHeaderClass);
                htcCell.Attributes.Add("style", "text-align:center");
                thrRow.Cells.Add(htcCell);
            }
            thrRow.TableSection = TableRowSection.TableHeader;
            htbReturn.Rows.AddAt(0, thrRow);
        }

        if (objDB.blnOpenResultSet(strQuery) == true)
        {
            if (objDB.blnHasRecords == false)
            {
                htrRow = new TableRow();
                TableCell tdCell = new TableCell();
                tdCell.Text = "----------------NO RECORD FOUND----------------------";
                tdCell.ColumnSpan = arlColumns.Count;
                tdCell.Attributes.Add("style", "text-align:center;color:#FF0000");
                htrRow.Cells.Add(tdCell);
                htbReturn.Rows.Add(htrRow);
                return htbReturn;

            }
            while (objDB.blnResultsMoveNextRow() == true)
            {
                intRowCount++;
                htrRow = new TableRow();
                for (int intCount = 0; intCount < arlColumns.Count; intCount++)
                {
                    udsColumns objC = (udsColumns)arlColumns[intCount];
                    strValue = objDB.objResultsValue(objC.strColumnName).ToString();
                    string strBackgroundColor;
                    double dblToAdd = 0;
                    if (objDB.strResultsColName(0) != "BackgroundColor")
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
                        case "A":
                            dblToAdd = double.Parse(objDB.objResultsValue(objC.strColumnName).ToString());
                            break;
                    }
                    arrTotals[intCount] = arrTotals[intCount] + dblToAdd;
                    if (strValue == "") strValue = "&nbsp";
                    htrRow.Cells.Add(tcDisplayRecords(strValue, objC.strDataType, objC.strFormat, objC.strColumnClass, objC.strAlign));
                    //htrRow.BgColor = strBackgroundColor;
                    if (objDB.strResultsColName(0) == "BackgroundColor")
                    {
                        htrRow.Attributes.Add("style", "background-color:" + strBackgroundColor + " !important");
                    }
                    htrRow.Attributes.Add("onmouseover", "this.style.backgroundColor='#CCCCCC';");
                    htrRow.Attributes.Add("onmouseout", "this.style.backgroundColor='" + strBackgroundColor + "';");
                }
                htbReturn.Rows.Add(htrRow);
            }
        }
        objDB.blnCloseConnection();
        blnDisplayTotals = false;
        if (blnDisplayTotals == true)
        {
            htrRow = new TableRow();
            for (int intCount = 0; intCount < arlColumns.Count; intCount++)
            {
                udsColumns objC = (udsColumns)arlColumns[intCount];
                TableCell htcCell = new TableCell();
                switch (objC.strTotal)
                {
                    case "S":
                        strValue = arrTotals[intCount].ToString(objC.strFormat);
                        break;
                    case "C":
                        strValue = arrTotals[intCount].ToString(objC.strFormat);
                        break;
                    case "A":
                        strValue = ((arrTotals[intCount]) / (intRowCount)).ToString(objC.strFormat);
                        break;
                    default:
                        strValue = "&nbsp;";
                        break;
                }
                if (intCount == 0) strValue = "Total : ";
                htcCell.Text = strValue;
                htcCell.ID = "tc_" + objC.strColumnName;
                htcCell.Attributes.Add("class", objC.strHeaderClass);
                htcCell.Attributes.Add("style", "text-align:center");
                htrRow.Cells.Add(htcCell);
            }
            htbReturn.Rows.Add(htrRow);
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


    private TableCell tcDisplayRecords(object objText, string strDataType, string strFormat, string strClass, string strAlign)
    {
        TableCell htcCell = new TableCell();
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
        htcCell.Text = strText;
        htcCell.Attributes.Add("class", strClass);
        htcCell.Attributes.Add("style", "text-align:" + strAlignValue);
        return htcCell;
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
