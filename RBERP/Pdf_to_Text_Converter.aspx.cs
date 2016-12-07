using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iTextSharp.text.pdf;
using iTextSharp.text.pdf.parser;
using System.IO;


namespace RBERP
{
    public partial class Pdf_to_Text_Converter : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            txtEditer.Text = "";

            if (FileUpload1.HasFile)
            {
                if (FileUpload1.PostedFile.ContentType == "application/pdf")
                {
                    Label1.Text = "File upload";
                    string path = "PDF_Files/" + FileUpload1.PostedFile.FileName;
                    FileUpload1.SaveAs(Server.MapPath(path));

                    txtEditer.Text = ExtractTextFromPdf(Server.MapPath(path));
                }


            }

        }

        public static string ExtractTextFromPdf(string path)
        {
            using (PdfReader reader = new PdfReader(path))
            {
                StringBuilder text = new StringBuilder();

                for (int i = 1; i <= reader.NumberOfPages; i++)
                {
                    text.Append(PdfTextExtractor.GetTextFromPage(reader, i));
                }

                return text.ToString();
            }
        }

        protected void btnReset_Click(object sender, EventArgs e)
        {
            FileUpload1.Attributes.Clear();
        }



        //public static string ExtractTextFromPdf(string path)
        //{
        //    ITextExtractionStrategy its = new iTextSharp.text.pdf.parser.LocationTextExtractionStrategy();

        //    using (PdfReader reader = new PdfReader(path))
        //    {
        //        StringBuilder text = new StringBuilder();

        //        for (int i = 1; i <= reader.NumberOfPages; i++)
        //        {
        //            string thePage = PdfTextExtractor.GetTextFromPage(reader, i, its);
        //            string[] theLines = thePage.Split('\n');
        //            foreach (var theLine in theLines)
        //            {
        //                text.AppendLine(theLine);
        //            }
        //        }
        //        return text.ToString();
        //    }
        //}
    }
}