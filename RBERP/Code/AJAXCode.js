var intBusyCount = 0;
var strBrowserType;
blnIsBrowserCompatible();

function subGetDataAndExecute(strScriptId, strURLData, strCallBackCode)
{
    subShowBusy();
    try
    {
        var objHead = document.getElementsByTagName("head").item(0);
        var objScript = document.getElementById(strScriptId);
        if(objScript)
        {
            objHead.removeChild(objScript);
        }
        objScript = document.createElement("script");
        objScript.setAttribute("src", strURLData);
        objScript.setAttribute("id", strScriptId);
        if(strCallBackCode.length > 0) {
    
            switch(strBrowserType)
            {
                case "ie":
                    objScript.onreadystatechange = function()
                    {
                        if(this.readyState == "complete" || this.readyState == "loaded")
                        {
                            subExecuteCommand(strCallBackCode, 0);
                        }
                    }
                    break;
                case "ff":
                    objScript.onload = function()
                    {
                        subExecuteCommand(strCallBackCode, 0);
                    }
                    break;
                case "":
                    objScript.onload = function () {
                        subExecuteCommand(strCallBackCode, 0);
                    }
                    break;
                default:
                    alert('ERROR:: Unknown browser detected !!!');
                    break;
            }
        }
        objHead.appendChild(objScript);

    }
    catch(e)
    {
        subDisplayError("AJAXCode.js", "subGetDataAndExecute('" + strScriptId + "', '" + strURLData + "', '" + strCallBackCode + "')", e);
    }
}

function subExecuteCommand(strCommand, intTimeOut)
{
    try
    {
        if(strBrowserType == "ie")
        {
            if(document.readyState == "complete")
            {
                if(intTimeOut == 0)
                {
                    intTimeOut = 500;
                }
                strCommand = "try{" + strCommand + ";}catch(e){alert('Error: '+e.message);};subHideBusy();";
                window.setTimeout(strCommand, intTimeOut);
            }
            else
            {
                var strCode = "subExecuteCommand(\"" + strCommand + "\", 0);";
                window.setTimeout(strCode, 1000);
            }
        }
        else
        {
            strCommand = "try{" + strCommand + ";}catch(e){alert('Error: '+e.message);};subHideBusy();";
            window.setTimeout(strCommand, intTimeOut);
        }
    }
    catch(e)
    {
        subDisplayError("AJAXCode.js", "subExecuteCommand('" + strCommand + "', " + intTimeOut + ")", e);
    }
}

function subShowBusy()
{
    try
    {
        var objDivStatus = document.getElementById("divStatus");
        var objTblStatus = document.getElementById("tblStatus");
        
        if((objDivStatus) && (objTblStatus))
        {
            objTblStatus.style.backgroundImage = 'url(Common/images/waitbg.gif)';
            objDivStatus.style.display="block";
        }
        intBusyCount++;
    }
    catch(e)
    {
        subDisplayError("AJAXCode.js", "subShowBusy();", e);
    }
}

function subHideBusy()
{
    try
    {
        intBusyCount--;
        if(intBusyCount == 0)
        {
            document.getElementById("divStatus").style.display="none";
        }
    }
    catch(e)
    {
        subDisplayError("AJAXCode.js", "subHideBusy()", e);
    }
}

function subAddToCombo(objCombo, strText, strValue)
{
    try
    {
        var strComboId = objCombo.id;
        var strOptionId = strComboId + "_opt_" + strValue;
        var objOption = document.getElementById(strOptionId);
        if(!objOption)
        {
            objOption = document.createElement("option");
            objOption.setAttribute("id", (strComboId + "_opt_" + strValue));
            objOption.setAttribute("value", strValue);
            objOption.innerHTML = strText;
            objCombo.appendChild(objOption);
            
        }
    } catch(e) {
    subDisplayError("AJAXCode.js", "subAddToCombo('" + objCombo.id + "', '" + strText + "', '" + strValue + "')", e);
    }
}

function blnIsBrowserCompatible() {
    try {
        var arrBrowsers = new Array(new Array("MSIE", "ie"), new Array("FireFox", "ff"), new Array("Opera", "ff"));
        var strAgent = navigator.userAgent.toLowerCase();
        for (var intCount = 0; intCount < arrBrowsers.length; intCount++) {
            if (strAgent.indexOf(arrBrowsers[intCount][0].toLowerCase()) > -1) {
                strBrowserType = arrBrowsers[intCount][1].toLowerCase();
                return true;
            }
        }
    } catch (e) {
    subDisplayError("AJAXCode.js", "blnIsBrowserCompatible()", e);
    }
    return false;
}

//function subGetDataAndExecute(strScriptId, u, c) {
//    subShowBusy();
//    try {
//        var ox = ((window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
//        if (ox) {
//            ox.open("GET", u);
//            ox.setRequestHeader("Content-Type", "text/javascript");
//            ox.onreadystatechange = function() {
//                if (ox.readyState == 4) {
//                    if (ox.status == 200) {
//                        eval(ox.responseText);
//                        eval(c);
//                    } else {
//                        alert("Technical problem !!! Please contact admin !!!");
//                    }
//                }
//            }
//            ox.send(null);
//            subHideBusy();
//        }
//    } catch (e) {
//        subHideBusy();
//        subDisplayError("", "getData('" + u + "', '" + c + "')", e);
//    }
//}