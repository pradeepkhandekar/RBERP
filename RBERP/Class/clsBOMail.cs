#region Global Imports
using System;
using System.Web.UI;
using System.Collections;
using System.Net.Mail;
using BookMyShow.CommonLibrary;
#endregion

/// <summary>
/// Summary description for clsMail
/// </summary>
public class clsBOMail
{
    private string pstrHostName;
    MailMessage msgMail = new MailMessage();
    const string udcErrorSource = "clsBOMail";

    public clsBOMail()
    {
        pstrHostName = clsSettings.Get("Common", "SMTPServer", "");
    }

    public bool blnAddTo(string strName, string strAddress)
    {
        try
        {
            msgMail.To.Add(new MailAddress(strAddress, strName));
            return true;
        }
        catch
        {
        }
        return false;
    }

    public bool blnAddBCC(string strName, string strAddress)
    {
        try
        {
            msgMail.Bcc.Add(new MailAddress(strAddress, strName));
        }
        catch
        {
        }
        return false;
}

    public bool blnAddCC(string strName, string strAddress)
    {
        try
        {
            msgMail.CC.Add(new MailAddress(strAddress, strName));
        }
        catch
        {
        }
        return false;
    }

    public bool blnAttachment(string strFile)
    {
        try
        {
            msgMail.Attachments.Add(new Attachment(strFile));
        }
        catch
        {
        }
        return false;
    }

    public bool blnSendMail(string strFromName, string strFromAddress, string strSubject, string strBody)
    {
        const string udcErrorMethod = "blnSendMail";

        try
        {
            SmtpClient stcMail = new SmtpClient();

            msgMail.From = new MailAddress(strFromAddress, strFromName);
            msgMail.Subject = strSubject;
            msgMail.Body = strBody;
            msgMail.IsBodyHtml = true;
            stcMail.Host = pstrHostName;
            stcMail.Send(msgMail);

            return true;
        }
        catch (Exception ex)
        {
            clsLog.blnLogError(udcErrorSource, udcErrorMethod, "Error sending mail !!!", ex.ToString(), false);
        }
        return false;
    }
}