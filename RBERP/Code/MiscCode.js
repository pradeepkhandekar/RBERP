var arrObjectEvent = new Array();
//subDisableRightClick();


// Function Below

function strTimeStamp()
{
    try 
    {
        var dtmDate = new Date();
        return "&stamp=" + dtmDate.toString();
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "strTimeStamp()", e);
    }
}

function subCheckMode()
{
    try
    {
        if(strGetCookie("strMode", "") == "DEBUG")
        {
            document.getElementById("divError").innerHTML += "DEBUG MODE<BR>";
            document.getElementById("divError").style.display = "block";
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subCheckMode()", e);
    }
}

function subSetCursor(objElement, strCursor)
{
    try
    {
        switch(strBrowserType)
        {
            case "ie":
                if(strCursor.toLowerCase() == "hand")
                {
                    strCursor = "pointer";
                }
                break;
        }
        objElement.style.cursor = strCursor;
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subSetCursor(" + objElement.id + ", '" + strCursor + "')", e);
    }
}

function blnIsScriptLoaded(strScriptId, strArrayName)
{
    try
    {
        var objS = document.getElementById(strScriptId);
        if(objS)
        {
            if(strBrowserType == "ie")
            {
                if(objS.readyState == "complete" || objS.readyState == "loaded")
                {
                    if(eval(strArrayName))
                    {
                        return true;
                    }
                }
            }
            else
            {
                if(eval(strArrayName))
                {
                    return true;
                }
            }
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "blnIsScriptLoaded('" + strScriptId + "', '" + strArrayName + "')", e);
    }
    return false;
}

function strTrimString(strValue) 
{
    try
    {
        strValue = this != window? this : strValue;
        return strValue.replace(/^\s+/g, '').replace(/\s+$/g, '');
    } catch(e)
    {
        subDisplayError("MiscCode.js", "strTrimString('" + strValue + "')", e);
    }
    return "";
}

function subHideSection(strSectionId)
{
    subEmptySection(strSectionId);
    try
    {
        var objDiv = document.getElementById('divSchedule');
        if(objDiv)
        {
            objDiv.style.display='none';
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subHideSection('" + strSectionId + "')", e);
    }
}

function strGetEventImage(strImageCode, strImageType)
{
    try
    {
        switch(strImageType.toUpperCase())
        {
            case 'S' : 
                var strReturn = 'Events/Small/' + strImageCode + '.jpg';
                return strReturn;
                break;
            case 'L' :
                var strReturn = 'Events/Large/' + strImageCode + '.jpg';
                return strReturn;
                break;
            default :
                return "";
                break;
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "strGetEventImage('" + strImageCode + "', '" + strImageType + "')", e);
    }
    return "";
}

function strGetRatingImage(strRating)
{
    try
    {
        var strReturn = '';
        switch(strRating.toUpperCase())
        {
            case 'U' : 
                //strReturn = 'Common/ratings/U.gif';
                strReturn = 'U';
                break;
            case 'UA' : 
                //strReturn = 'Common/ratings/UA.gif';
                strReturn = 'U/A';
                break;
            case 'A' :
                //strReturn = 'Common/ratings/A.gif';
                strReturn = 'A';
                break;
        }
        return strReturn;
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "strGetRatingImage('" + strRating + "')", e);
    }
    return "";
}

function subAuthenticateUser()
{
    try
    {
        var strUserName = document.getElementById('txtUserName').value;
        var strPassword = document.getElementById('txtUserCode').value;
        var blnOk = false;
        
        blnOk = (strUserName.length > 0);
        blnOk = blnOk && (strUserName.search("@") > 0);

        if(blnOk == false)
        {
            alert('Please enter a valid email address !!!');
            return;
        }
        
        blnOk = blnOk && (strPassword.length > 0)
        
        if(blnOk == false)
        {
            alert('Please enter a valid password !!!');
            return;
        }
        else
        {
            var strURL = "GetData.aspx?dt=atu&u=" + escape(strUserName) + "&p=" + escape(strPassword) + strTimeStamp();
            subGetDataAndExecute("Login", strURL, "subValidateUser();");
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subAuthenticateUser()", e);
    }
}

function subForgotPassword()
{
    try
    {
        var strUserName = document.getElementById('txtUserId').value;
        var blnOk = false;
        
        blnOk = (strUserName.length > 0);
        blnOk = blnOk && (strUserName.search("@") > 0);
        
        if(blnOk == false)
        {
            alert('Please enter a valid email address !!!');
            return;
        }
        else
        {
            var strURL = "GetData.aspx?dt=fgp&u=" + strUserName + strTimeStamp();
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subForgotPassword()", e);
    }
}

function subRegistrationConfirm()
{
    alert(arrRegistrationInfo[0]);
    window.close();
}
function subForgotPasswordConfirm()
{
    alert(arrForgotPassword[0]);
}

function subValidateUser()
{
    try
    {
        if(arrLoginData)
        {
            if(arrLoginData[0][0] == '0')
            {
                var strCookieData = "";
                for(var intCount = 1; intCount < arrLoginData[0].length; intCount++)
                {
                    if(strCookieData.length > 0)
                    {
                        strCookieData += "|";
                    }
                    strCookieData += arrLoginData[0][intCount];
                }
                blnSetCookie("mtuData", strCookieData, false);
                blnSetCookie("mtuLastData", arrLoginData[0][2], true);
            }
            else
            {
                alert(arrLoginData[0][1]);
            }
        }
        else
        {
            alert("Please try again !!!");
        }
        subUpdateSigninSection();
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subValidateUser()", e);
    }
}

function subLoginKeyPress(argEvent)
{
    var objEvent = window.event ? window.event : argEvent;
    if(objEvent.keyCode == 13)
    {
        subAuthenticateUser();
    }
}

function blnIsUserLoggedIn()
{
    try
    {
        var strLogin = strGetCookie("mtuData", "");
        if(strLogin.length > 0)
        {
            if(strLogin.indexOf("|") > 0)
            {
                return true;
            }
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "blnIsUserLoggedIn()", e);
    }
    return false;
}

function strGetUserSession(strName)
{
    try
    {
        if(blnIsUserLoggedIn() == true)
        {
            var strLogin = strGetCookie("mtuData", "");
            
            if(strLogin.length > 0)
            {
                var arrUserData = strLogin.split("|");
                if(arrUserData.length == 5)
                {
                    switch(strName.toUpperCase())
                    {
                        case "SESSIONID":
                            return arrUserData[0];
                            break;
                        case "EMAIL":
                            return arrUserData[1];
                            break;
                        case "NAME":
                            return arrUserData[2];
                            break;
                        case "MOB":
                            return arrUserData[3];
                            break;
                        case "VER":
                            return arrUserData[4];
                            break;
                        default:
                            return "";
                            break;
                    }
                }
            }
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "strGetUserSession('" + strName + "')", e);
    }
    return "";
}

function subSignOut()
{
    try
    {
        blnSetCookie("mtuData", "", false);
        subUpdateSigninSection();
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subSignOut()", e);
    }
}

function objCreateHiddenField(strElementId, strValue)
{
    try
    {
        var objRet = document.createElement("input");
        objRet.type = 'hidden';
        objRet.id = strElementId;
        objRet.name = strElementId;
        objRet.value = strValue;
        return objRet;
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "objCreateHiddenField('" + strElementId + "', '" + strValue + "')", e);
    }
    return null;
}

function objCreateHyperLink(strText, strURL, strClassName, strStatus)
{
    try
    {
        var objRet = document.createElement("a");
        if(!strStatus)
        {
            strStatus = " ";
        }
        var strCommand = "window.status = '" + strStatus.replace("'", "\\\'") + "';";
        objRet.className = strClassName;
        objRet.innerHTML = strText;
        objRet.setAttribute("href", ("javascript:" + strURL));
        objRet.onmouseover = function () { eval(strCommand); return true }
        return objRet;
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "objCreateHyperLink", e);
    }
    return null;
}

function subAttachEvent(strComponentId, strEventName, strCallBack)
{
    try
    {
        var objComponent = document.getElementById(strComponentId);
        if(objComponent)
        {
            arrObjectEvent[arrObjectEvent.length] = new Array((strComponentId + "." + strEventName), strCallBack);
            switch(strBrowserType)
            {
                case "ie":
                    strEventName = "on" + strEventName;
                    objComponent.attachEvent(strEventName, function() { eval(strCallBack); });
                    break;
                case "ff":
                    objComponent.addEventListener(strEventName, function() { eval(strCallBack); }, false);
                    break;
            }
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subAttachEvent('" + strComponentId + "', '" + strEventName + "', '" + strCallBack + "')", e);
    }
}

function subExecuteEvent(strComponentId, strEventName)
{
    try
    {
        var strSearch = strComponentId + "." + strEventName;
        for(var intCount = 0; intCount < arrObjectEvent.length; intCount++)
        {
            if(arrObjectEvent[intCount][0] == strSearch)
            {
                try
                {
                    eval(arrObjectEvent[intCount][1]);
                }
                catch(e)
                {
                }
                break;
            }
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subExecuteEvent('" + strComponentId + "', '" + strEventName + "')", e);
    }
}

function subRemoveChild(strElementId)
{
    try
    {
        var objElement = document.getElementById(strElementId);
        if(!objElement) return;

        var objParent = objElement.parentNode;
        
        for(var intCount = 0; intCount < arrObjectEvent.length; intCount++)
        {
            if(arrObjectEvent[intCount][0].substring(0, strElementId.length) == strElementId)
            {
                arrObjectEvent[intCount][0] = "";
                arrObjectEvent[intCount][1] = "";
            }
        }
        objParent.removeChild(objElement);
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subRemoveChild('" + strElementId + "')", e);
    }
}

function subGoToHome()
{
    try
    {
        window.location.href = "home.aspx";
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subGoToHome()", e);
    }
}

function subOpenWindow(strFileName, blnShowModal, intHeight, intWidth)
{
    try
    {
        if(!intHeight)
        {
            intHeight = 552;
        }
        if(!intWidth)
        {
            intWidth = 800;
        }
        if(!blnShowModal)
        {
            blnShowModal = false;
        }
        switch(strBrowserType)
        {
            case "ie":
                if(blnShowModal)
                {
                    strParams = "dialogWidth:" + intWidth + "px; dialogHeight:" + intHeight + "px; center:yes; edge:sunken; help:no; scroll:yes; status:yes; dialogHide:yes; menubar:no;";
                    window.showModalDialog(strFileName, "", strParams);
                }
                else
                {
                    strParams = "width=" + intWidth + "px, height=" + intHeight + "px, center=yes, status=no, toolbar=no, location=no, menubar=no, scrollbars=yes, resizable=no";
                    window.open(strFileName, "_NewWindow", strParams);
                }
                break;
            case "ff":
                    strParams = "width=" + intWidth + "px, height=" + intHeight + "px, center=yes, status=no, toolbar=no, location=no, menubar=no, scrollbars=yes, resizable=no";
                    window.open(strFileName, "_NewWindow", strParams);
                break;
        }
    }
    catch (e)
    {
        subDisplayError("MiscCode.js", "subOpenWindow('" + strFileName + "', " + blnShowModal + ", " + intHeight + ", " + intWidth + ")", e);
    }
}

function strGetQueryVariable(strName) 
{
    try
    {
        var strQuery = window.location.search.substring(1);
        var arrValues = strQuery.split("&");
        for (var intCount = 0; intCount < arrValues.length; intCount++) 
        {
            var arrPair = arrValues[intCount].split("=");
            if (arrPair[0] == strName) 
            {
                return arrPair[1];
            }
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "strGetQueryVariable('" + strName + "')", e);
    }
    return "";
}

function subDisplayServerError(strFileName, strFunctionName, strError)
{
    try
    {
        if(strGetCookie("strMode", "") == "DEBUG")
        {
            document.getElementById("divError").innerHTML += "Class: " + strFileName + ", Function: " + strFunctionName + ", Error: " + strError + "<BR>";
            document.getElementById("divError").style.display = "block";
        }
        subHideBusy();
        subHideBusy();
        subHideBusy();
        subHideBusy();
        subHideBusy();
        alert('An error occurred on the server. Please try again after some time !!!');
    }
    catch(e)
    {
        alert("Class: " + strFileName + "\nFunction: " + strFunctionName + "\nError: " + strError);
    }
}

function subDisplayError(strFileName, strFunctionName, objError)
{
    try
    {
        if(strGetCookie("strMode", "") == "DEBUG")
        {
            document.getElementById("divError").innerHTML += "File: " + strFileName + ", Function: " + strFunctionName + ", Error: " + objError.message + "<BR>";
            document.getElementById("divError").style.display = "block";
        }
    }
    catch(e)
    {
        alert("File: " + strFileName + "\nFunction: " + strFunctionName + "\nError: " + objError.message + "\nError2: " + e.message);
    }
}

function subDisplayMessage(strMessage)
{
    try
    {
        if(strGetCookie("strMode", "") == "DEBUG")
        {
            document.getElementById("divError").innerHTML += "Message: " + strMessage + "<BR>";
            document.getElementById("divError").style.display = "block";
        }
    }
    catch(e)
    {
        alert("Message : " + strMessage + "\nError: " + e.message);
    }
}

function subEmptySection(strSectionId)
{
    try
    {
        var objSection = document.getElementById(strSectionId);
        if(objSection)
        {
            for(var intCount = objSection.childNodes.length; intCount > 0 ; intCount--)
            {
                var objChild = objSection.childNodes[(intCount - 1)];
                objSection.removeChild(objChild);
            }
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subEmptySection('" + strSectionId + "')", e);
    }
}

function subEmptyCombo(objCombo)
{
    try
    {
        objCombo.length = 0;
        if(objCombo.id != "cboCombo1")
        {
            subAddToCombo(objCombo, "Select", "", "");
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subEmptyCombo('" + objCombo.id + "')", e);
    }
}

function blnSetCookie(strName, strValue, blnPermanent)
{
    try
    {
        if(!blnPermanent) blnPermanent = false;
        var strCookie = escape(strName) + "=" + escape(strValue)
        if(blnPermanent == true)
        {
            var dtmDate = new Date ();
            dtmDate.setYear((dtmDate.getFullYear() + 1));
            strCookie += "; expires=" + dtmDate.toGMTString();
        }
        strCookie += "; path=/"
        document.cookie = strCookie;
        return true;
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "blnSetCookie('" + strName + "', '" + strValue + "')", e);
    }
    return false;
}

function strGetCookie(strName, strDefault)
{
    var strResult = strDefault;
    try
    {
        var strSearch = strName + "=";
        var strCookie = document.cookie;
        var intStart = -1;
        var intEnd = -1;
        if(strCookie.length > 0)
        {
            intStart = strCookie.indexOf(strSearch);
            if(intStart > -1)
            {
                intStart += strSearch.length;
                intEnd = strCookie.indexOf(";", intStart);
                if(intEnd == -1)
                {
                    intEnd = strCookie.length;
                }
                strResult = unescape(strCookie.substring(intStart, intEnd));         
            }
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "strGetCookie('" + strName + "', '" + strDefault + "')", e);
    }
    return strResult;
}



function subSelectComboByValue(objCombo, strValue, blnAutoSelectSingleItem)
{
    try
    {
        var intIndex = 0
        if(strValue.length > 0)
        {
            for(var intCount = 0; intCount < objCombo.length; intCount++)
            {
                if(objCombo.options[intCount].value.toUpperCase() == strValue.toUpperCase())
                {
                    intIndex = intCount;
                    break;
                }
            }
        }
        if(intIndex == 0 && objCombo.options.length == 2 && blnAutoSelectSingleItem == true)
        {
            if(objCombo.options[0].value.toUpperCase() == "")
            {
                intIndex = 1;
            }
        }
        try
        {
            objCombo.options[intIndex].selected = true;
        }
        catch(e)
        {
        }
        var strCommand = "subExecuteEvent('" + objCombo.id + "', 'change')";
        setTimeout(strCommand, 100);
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subSelectComboByValue(" + objCombo.id + ", '" + strValue + "', " + blnAutoSelectSingleItem + ")", e);
    }
}

//function subDisableRightClick(e)
//{
//    try
//      {
//        if(!document.blnRightClickDisabled)
//        {
//            if(document.layers)
//            {
//                document.captureEvents(Event.MOUSEDOWN);
//                document.onmousedown = subDisableRightClick;
//            }
//            else
//            {
//                document.oncontextmenu = subDisableRightClick;
//            }
//            return document.blnRightClickDisabled = true;
//        }
//        if(document.layers || (document.getElementById && !document.all))
//        {
//            if (e.which==2||e.which==3)
//            {
//                return false;
//            }
//        }
//        else
//        { 
//            return false;
//        }
//    }
//    catch(ex)
//    {
//        subDisplayError("MiscCode.js", "subDisableRightClick();", ex);
//    }
//}

//function subCheckUser(strModuleName, strMenuName, strUserGroup, strAppId)

function subCheckUser(strModuleName, strMenuName, strParent)
{
    var objcboUser = document.getElementById("cboUsertype");
    var objcboAppId = document.getElementById("cboAppId");
    var objchkRead = document.getElementById("chkRead");
    var objchkEdit = document.getElementById("chkEdit");
    var objchkAdd = document.getElementById("chkAdd");
    var objchkDelete = document.getElementById("chkDelete");
    var objhdnModule = document.getElementById("hdnModuleName");
    var objhdnMenu = document.getElementById("hdnMenu");
    var objhdnParent = document.getElementById("hdnParent");
        
    if(objcboUser.selectedIndex == 0)
    {
        alert('Please select User Group');
        objcboUser.enableViewState = false;
    }
    else if(objcboAppId.selectedIndex == 0)
    {
        alert('Please select App Id');
        objcboAppId.enableViewState = false;
    }
    else
    {
        objchkRead.checked = false;
        objchkEdit.checked = false;
        objchkAdd.checked = false;
        objchkDelete.checked = false;
        objhdnModule.value = strModuleName;
        objhdnMenu.value = strMenuName;
        objhdnParent.value = strParent;
        //frmGroupRights.submit();
        //subDisplayRights(strModuleName, strUserGroup, strAppId);
        subDisplayRights(strModuleName, objcboUser.value, objcboAppId.value, strMenuName);
    }

    parent.UpdateUniform();
}

function subDisplayRights(strModuleName, strUserGroup, strAppId, strMenuName)
{
    var objchkRead = document.getElementById("chkRead");
    var objchkEdit = document.getElementById("chkEdit");
    var objchkAdd = document.getElementById("chkAdd");
    var objchkDelete = document.getElementById("chkDelete");
    var objtdUserGroup = document.getElementById("tdUserGroup");
    var objtdMenu = document.getElementById("tdMenu");

    for(var intCount=0; intCount < arrGrRightValues.length; intCount++)
    {
        if(arrGrRightValues[intCount][0] == strAppId && arrGrRightValues[intCount][1] == strUserGroup && arrGrRightValues[intCount][2] == strModuleName)
        {
             var strRights = arrGrRightValues[intCount][3];
             //var arrValues = strRights.split(",");
             var strValues = strRights;
             
             objtdUserGroup.innerText = "User GroupId - " + strUserGroup;
             objtdMenu.innerText = "Menu Name - " + strMenuName;
             //for(var intI = 0; intI < strValues.length; intI++)
             //{
                //switch(strValues[intI].touppercase())
                switch(strValues.toUpperCase())
                {
                    case 'R' : 
                        objchkRead.checked = true;
                        break;
                    //case 'E' : 
                    case 'RE' :
                        objchkRead.checked = true;
                        objchkEdit.checked = true;
                        break;
                    //case 'A' :
                    case 'REA' :
                        objchkRead.checked = true;
                        objchkEdit.checked = true;
                        objchkAdd.checked = true;
                        break;
                    //case 'D' :
                    case 'READ' :
                        objchkRead.checked = true;
                        objchkEdit.checked = true;
                        objchkAdd.checked = true;
                        objchkDelete.checked = true;
                        break;
                }
             //}
             break;
        }
        objtdUserGroup.innerText = "User GroupId - " + strUserGroup;
        objtdMenu.innerText = "Menu Name - " + strMenuName;
    }
}

function subValidatePayReceiptForm()
{
    try
    {
        var strChqNo = document.getElementById('txtChequeNo').value;
        var strBankName = document.getElementById('txtBankName').value;
        var strChqDate = document.getElementById('txtChequeDate').value;
        var strChqAmt = document.getElementById('txtChequeAmt').value;
        
        if(strChqNo == "")
        {
            alert('Please enter Cheque No !!!');
            return;
        }
        
        if(strBankName == "")
        {
            alert('Please enter Bank Name !!!');
            return;
        }

        if(strChqDate == "")
        {
            alert('Please enter Cheque Date !!!');
            return;
        }
        
        if(strChqAmt == "")
        {
            alert('Please enter Cheque Amount!!!');
            return;
        }

    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "subValidatePayReceiptForm()", e);
    }
}

function strFormatTotal(strData)
{
    if(strData.indexOf(".") > 0)
    {
        strData = strData.split(".")[0].toString() + "." + (strData.split(".")[1].toString() + "0").substring(0,2).toString();
    }
    else
    {
        strData += ".00";
    }
    
    return strData;
}

function blnValidateTicketSwapping()
{
    try
    {   
        var objDebtorList = document.getElementById("cboDebtorList");
        if(objDebtorList.options[objDebtorList.selectedIndex].value == "")
        {
            alert('Select Debtor from the list!!!');
            return false;
        }
        else if(document.getElementById("hdSelTransID").value == "")
        {
            alert('Transaction ID Missing!!!');
            return false;
        }
        
        var objtxtSelTktDetails = document.getElementById("hdSelTktDetails");
        objtxtSelTktDetails.value = "";
        
        var objarrInputTags = document.getElementsByTagName('input');
        for(i=0; i<objarrInputTags.length; i++)
        {
            if(objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 10) == 'chkTicket_')
            {
                if(objarrInputTags[i].checked == true)
                {
                    objtxtSelTktDetails.value = objtxtSelTktDetails.value + objarrInputTags[i].value;
                }
            }
            else continue;
        }
        
        if(objtxtSelTktDetails.value.length > 0)
        {
            return true;
        }
        else
        {
            alert('Select atleast One Ticket for swapping!!!');
            return false;
        }
    }
    catch(e)
    {
        subDisplayError("MiscCode.js", "blnValidateTicketSwapping()", e);
    }
}

function strTrim(strData)
{
    return strData.replace(/^\s*/, "").replace(/\s*$/, "");
}