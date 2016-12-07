#region Global Imports
using System;
using System.Data;
using System.Configuration;
using System.IO;
using System.Web;
using System.Collections;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using BookMyShow.CommonLibrary;
//using iTextSharp;
//using iTextSharp.text;
//using iTextSharp.text.pdf;
#endregion

public class clsCreatePDF
{
    //#region Declaration
    //const string udcErrorSource = "clsCreatePDF";
    //public static ArrayList arrColumns, arlColFormatValues;
    //#endregion

    //#region CreatePDF
    //public static void CreatePDF(System.Web.UI.Page objPage, DataSet dsDataSet, string strFileName, string strTableName)
    //{
    //    const string udcErrorMethod = "CreatePDF";
    //    try
    //    {
    //        Document doc = new Document();//new Rectangle(1,1), 0, 0, 1, 0);
    //        doc.SetMargins(0, 0, 30, 30);

    //        string strFilePath = @"C:\WINDOWS\Temp\";

    //        PdfWriter PDFWriter = PdfWriter.GetInstance(doc, new FileStream(strFilePath + strFileName.Replace(":", "_") + ".tmp", FileMode.Create));
    //        doc.Open();

    //        PdfContentByte cb = PDFWriter.DirectContent;

    //        PdfPTable tblTransDetails;
    //        PdfPCell tdRptHeader, tdColHeader, tdTransDetails, tdFooter;

    //        BaseFont bf = BaseFont.CreateFont(@"C:\WINDOWS\Fonts\Verdana.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
    //        Font fntRptHeading = new Font(bf, 9, Font.BOLD);
    //        Font fntColHeading = new Font(bf, 8, Font.BOLD);
    //        Font fntContent = new Font(bf, 8, Font.NORMAL);
    //        Font fntFooter = new Font(bf, 8, Font.BOLD);

    //        int intRowCount = 0, intColCount = 0;
    //        if(dsDataSet.Tables[0].Rows.Count > 0)
    //        {
    //            intRowCount = dsDataSet.Tables[0].Rows.Count;
    //            intColCount = dsDataSet.Tables[0].Columns.Count;
    //        }

    //        //Formatting Array
    //        subCreateArray(strTableName);

    //        //Creating Table
    //        tblTransDetails = new PdfPTable(arrColumns.Count);

    //        //Report Header Section
    //        tdRptHeader = new PdfPCell(new Phrase(strFileName.Replace("_", " ").ToString(), fntRptHeading));
    //        tdRptHeader.HorizontalAlignment = Element.ALIGN_CENTER;
    //        tdRptHeader.VerticalAlignment = Element.ALIGN_MIDDLE;
    //        tdRptHeader.Colspan = (arrColumns.Count);
    //        tdRptHeader.Border = Rectangle.BOX;
    //        tblTransDetails.AddCell(tdRptHeader);
            
    //        int intRows = 0, intCols = 0;
    //        if (intRowCount > 0)
    //        {
    //            //Column Headings
    //            intCols = 0;
    //            while (intCols < intColCount)
    //            {
    //               subCreateColFormatValuesArr(dsDataSet.Tables[0].Columns[intCols].ColumnName.ToString());
    //               if (arlColFormatValues != null)
    //               {
    //                    tdColHeader = new PdfPCell(new Phrase(strGetColFormatValue("HEADERTEXT"), fntColHeading));
    //                    tdColHeader.HorizontalAlignment = Element.ALIGN_CENTER;
    //                    tdColHeader.VerticalAlignment = Element.ALIGN_MIDDLE;
    //                    tdColHeader.Border = Rectangle.BOX;

    //                    tblTransDetails.AddCell(tdColHeader);
    //                }
    //                intCols++;
    //            }

    //            //Transaction Details
    //            intRows = 0;
    //            while (intRows < intRowCount)
    //            {
    //                intCols = 0;
    //                while (intCols < intColCount)
    //                {
    //                    subCreateColFormatValuesArr(dsDataSet.Tables[0].Columns[intCols].ColumnName.ToString());
    //                    if (arlColFormatValues != null)
    //                    {
    //                        string strDataType = "", strFormat = "", strAlign = "";
    //                        strDataType = strGetColFormatValue("DATATYPE");
    //                        strFormat = strGetColFormatValue("FORMAT");
    //                        strAlign = strGetColFormatValue("ALIGN");

    //                        string strValue = dsDataSet.Tables[0].Rows[intRows].ItemArray[intCols].ToString();
    //                        switch (strDataType)
    //                        {
    //                            case "I":
    //                                int intValue = Convert.ToInt32(strValue.ToString());
    //                                tdTransDetails = new PdfPCell(new Phrase(intValue.ToString(strFormat), fntContent));
    //                                break;
    //                            case "M":
    //                                double dblValue = Convert.ToDouble(strValue.ToString());
    //                                tdTransDetails = new PdfPCell(new Phrase(dblValue.ToString(strFormat), fntContent));
    //                                break;
    //                            case "D":
    //                                DateTime dtmValue = Convert.ToDateTime(strValue.ToString());
    //                                tdTransDetails = new PdfPCell(new Phrase(dtmValue.ToString(strFormat), fntContent));
    //                                break;
    //                            default:
    //                                tdTransDetails = new PdfPCell(new Phrase(strValue, fntContent));
    //                                break;
    //                        }
    //                        tdTransDetails.VerticalAlignment = Element.ALIGN_MIDDLE;
    //                        tdTransDetails.Border = Rectangle.BOX;

    //                        switch (strAlign)
    //                        {
    //                            case "C":
    //                                tdTransDetails.HorizontalAlignment = Element.ALIGN_CENTER;
    //                                break;
    //                            case "R":
    //                                tdTransDetails.HorizontalAlignment = Element.ALIGN_RIGHT;
    //                                break;
    //                            default:
    //                                tdTransDetails.HorizontalAlignment = Element.ALIGN_LEFT;
    //                                break;
    //                        }
    //                        tblTransDetails.AddCell(tdTransDetails);
    //                    }
    //                    intCols++;
    //                }
    //                intRows++;
    //            }
    //        }

    //        //Footer
    //        intCols = 0;
    //        Int16 intBGColCnt = 1;
    //        while (intCols < intColCount)
    //        {
    //            string strFtrValue = "";
    //            subCreateColFormatValuesArr(dsDataSet.Tables[0].Columns[intCols].ColumnName.ToString());
    //            if (arlColFormatValues != null)
    //            {
    //                if (intBGColCnt == 1)
    //                    strFtrValue = "Total : ";
    //                else
    //                {
    //                    string strCommd = strGetColFormatValue("TOTAL").ToString();
    //                    switch (strCommd)
    //                    {
    //                        case "S":
    //                        case "A":
    //                            string strFormat = strGetColFormatValue("FORMAT").ToString();
    //                            strFtrValue = strGetFtrTotal(strCommd, dsDataSet.Tables[0], intCols, strFormat);
    //                            break;
    //                        case "C":
    //                            strFtrValue = intRowCount.ToString("0");
    //                            break;
    //                        default:
    //                            strFtrValue = "";
    //                            break;
    //                    }
    //                }
    //                tdFooter = new PdfPCell(new Phrase(strFtrValue, fntFooter));
    //                tdFooter.VerticalAlignment = Element.ALIGN_MIDDLE;
    //                tdFooter.HorizontalAlignment = Element.ALIGN_CENTER;
    //                tdFooter.Border = Rectangle.BOX;

    //                tblTransDetails.AddCell(tdFooter);
    //                intBGColCnt++;
    //            }
    //            intCols++;
    //        }
            
    //        doc.Add(tblTransDetails);
    //        doc.NewPage();
    //        doc.Close();
    //        HttpContext.Current.Response.ContentType = "application/pdf";

    //        CopyFileToThis(strFilePath, strFileName);
            
    //        //DeleteFile
    //        File.Delete(strFilePath + strFileName.Replace(":", "_") + ".tmp");
    //    }
    //    catch (Exception ex)
    //    {
    //        clsBOMisc.subDisplayError(objPage, udcErrorSource, udcErrorMethod, "ERROR", ex.ToString());
    //    }
    //}
    //#endregion

    //#region subCreateArray
    //public static void subCreateArray(string strTableName)
    //{
    //    clsDBEngine objDb = new clsDBEngine();
    //    arrColumns = new ArrayList();
    //    string strValue = "|";

    //    string strSQL = "SELECT * FROM tblBgColumns WHERE Column_vcTableName = '" + strTableName + "' ORDER BY Column_intSequence ASC";
    //    if (objDb.blnOpenResultSet(strSQL) == true)
    //    {
    //        while (objDb.blnResultsMoveNextRow() == true)
    //        {
    //            strValue = "|COLUMNNAME=" + objDb.objResultsValue("Column_vcColumnName").ToString();
    //            strValue += "|HEADERTEXT=" + objDb.objResultsValue("Column_vcHeaderText").ToString();
    //            strValue += "|COLSEQ=" + objDb.objResultsValue("Column_intSequence").ToString();
    //            strValue += "|DATATYPE=" + objDb.objResultsValue("Column_vcDataType").ToString();
    //            strValue += "|FORMAT=" + objDb.objResultsValue("Column_vcFormatString").ToString();
    //            strValue += "|ALIGN=" + objDb.objResultsValue("Column_vcAlign").ToString();
    //            strValue += "|TOTAL=" + objDb.objResultsValue("Column_vcTotal").ToString();
    //            strValue += "|";
    //            arrColumns.Add(strValue);
    //        }
    //    }
    //}
    //#endregion

    //#region subCreateColFormatValuesArr
    //public static void subCreateColFormatValuesArr(string strColName)
    //{
    //    string strFormatValues = "";
    //    Int16 intCntr = 0;
        
    //    while (intCntr < arrColumns.Count)
    //    {
    //        foreach (string strKeyValuePair in arrColumns[intCntr].ToString().Split(new char[] { '|' }))
    //        {
    //            if (strKeyValuePair != "")
    //            {
    //                string[] arrKeyValue = strKeyValuePair.Split(new char[] { '=' });
    //                if (arrKeyValue[0].ToString() == "COLUMNNAME" && arrKeyValue[1].ToString() == strColName)
    //                {
    //                    strFormatValues = arrColumns[intCntr].ToString();
    //                    intCntr = Convert.ToInt16(arrColumns.Count);
    //                    break;
    //                }
    //            }
    //        }
    //        intCntr++;
    //    }

    //    if (strFormatValues.Length > 0)
    //    {
    //        arlColFormatValues = new ArrayList();
    //        foreach (string strKeyValuePair in strFormatValues.Split(new char[] { '|' }))
    //        {
    //            if (strKeyValuePair != "")
    //            {
    //                arlColFormatValues.Add(strKeyValuePair);
    //            }
    //        }
    //    }
    //    else
    //    {
    //        arlColFormatValues = null;
    //    }
    //}
    //#endregion

    //#region strGetColFormatValue
    //public static string strGetColFormatValue(string strKeyName)
    //{
    //    Int16 intCntr = 0;
    //    string strValue = "";
        
    //    while (intCntr < arlColFormatValues.Count)
    //    {
    //        string[] arrKeyValue = arlColFormatValues[intCntr].ToString().Split(new char[] {'='});
    //        if (arrKeyValue[0] == strKeyName)
    //        {
    //            strValue = arrKeyValue[1].ToString();
    //        }
    //        intCntr++;
    //    }
    //    return strValue;
    //}
    //#endregion

    //#region strGetFtrTotal
    //public static string strGetFtrTotal(string strCommd, System.Data.DataTable dtDataTable, int intColPos, string strFormat)
    //{
    //    int intCntr = 0;
    //    double dblValue = 0;
    //    string strRetValue = "0";

    //    while (intCntr < dtDataTable.Rows.Count)
    //    {
    //        dblValue = dblValue + double.Parse(dtDataTable.Rows[intCntr].ItemArray[intColPos].ToString());
    //        intCntr++;
    //    }

    //    if (strCommd == "S")
    //    {
    //        strRetValue = dblValue.ToString(strFormat);
    //    }
    //    else if (strCommd == "A")
    //    {
    //        strRetValue = String.Format("{0:0.00}", Convert.ToString(dblValue / dtDataTable.Rows.Count));
    //    }
    //    return strRetValue;
    //}
    //#endregion

    //#region CopyFileToThis
    //public static void CopyFileToThis(string strFilePath, string strFileName)
    //{
    //    HttpContext.Current.Response.AddHeader("content-disposition", "attachment;filename=" + strFileName + ".pdf");
    //    FileStream objInput = new FileStream(strFilePath + strFileName.Replace(":", "_") + ".tmp", FileMode.Open);
    //    Stream objOutput;
        
    //    objOutput = HttpContext.Current.Response.OutputStream;
    //    if (objInput == null)
    //        throw new ArgumentNullException("input");

    //    if (objOutput == null)
    //        throw new ArgumentNullException("output");
    //    if (!objInput.CanRead)
    //        throw new ArgumentException("Input stream must support CanRead");

    //    if (!objOutput.CanWrite)
    //        throw new ArgumentException("Output stream must support CanWrite");

    //    if ((!objInput.CanSeek) || (!(objInput.Length == 0L)))
    //    {
    //        Byte[] bytBuffer = new byte[1025];
    //        int intLength = bytBuffer.Length;
    //        while (true)
    //        {
    //            intLength = objInput.Read(bytBuffer, 0, intLength);
    //            if ((intLength == 0))
    //            {
    //                break; // TODO: might not be correct. Was : Exit While
    //            }
    //            objOutput.Write(bytBuffer, 0, intLength);
    //        }
    //        objInput.Close();
    //        objInput.Dispose();
    //    }
    //}
    //#endregion
}
