var strBrowserType = "";

function blnIsBrowserCompatible()
{
    try
    {
        var arrBrowsers = new Array( new Array("MSIE", "ie"));
        var strAgent = navigator.userAgent.toLowerCase();
        for(var intCount = 0; intCount < arrBrowsers.length; intCount++)
        {
            if(strAgent.indexOf(arrBrowsers[intCount][0].toLowerCase()) > -1)
            {
                strBrowserType = arrBrowsers[intCount][1].toLowerCase();
                return true;
            }
        }
    }
    catch(e)
    {
        subDisplayError("BrowserCode.js", "blnIsBrowserCompatible()", e);
    }
    return false;
}

function blnIsCookieSupported()
{
    try
    {
        document.cookie="testcookie";
        if(document.cookie.indexOf("testcookie") >= 0)
        {
            return true;
        }
    }
    catch(e)
    {
        subDisplayError("BrowserCode.js", "blnIsCookieSupported()", e);
    }
    return false;
}

function blnCheckBrowser(blnCookie)
{
    try
    {
        var strURL = "ErrorPage.aspx?strMessage=";
//        if(blnIsBrowserCompatible() == false)
//        {
//            //strURL += "BWNC";
//            //window.location.href = strURL;
//            alert("BookMyShow Back-Office works properly in Internet Explorer. \nKindly change your browser to Internet Explorer!!!");
//            return false;
//        }
        if(blnCookie == true)
        {
            if(blnIsCookieSupported() == false)
            {
                strURL += "CKNS";
                window.location.href = strURL;
                return false;
            }
        }        
        return true;
    }
    catch(e)
    {
        subDisplayError("BrowserCode.js", "blnCheckBrowser('" + blnCookie + "')", e);
    }
    return false;
}

function blnCheckBrowserNew() {
    try {       
        if (blnIsBrowserCompatible() == false && blnCheckQueryString() == false) {         
            alert("BookMyShow Back-Office works properly in Internet Explorer. \nKindly change your browser to Internet Explorer!!!");
            return false;
        }       
        return true;
    }
    catch (e) {
        subDisplayError("BrowserCode.js", "blnCheckBrowserNew()", e);
    }
    return false;
}

function blnCheckQueryString() {
    try {
        var strQuery = window.location.search.substring(1);        
        strQuery = strQuery.split("?");
        if (strQuery == 'LOGOUT') 
        {
            return true;
        }    
        return false;
    }
    catch (e) {
        subDisplayError("BrowserCode.js", "blnCheckQueryString()", e);
    }
    return false;
}
