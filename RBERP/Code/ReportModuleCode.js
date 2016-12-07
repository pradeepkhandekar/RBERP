//code For rptHome.aspx
//--------------------

function subFillCompanyCombo()
{
    try {
        var intCount;
        var objCompanyCbo = document.getElementById("cboCompanyCode");
        var strSelectedCompanyCode = document.getElementById("hdnSelectedCompanyCode").value;
        for (intCount = 0; intCount < arrCompany.length; intCount++) 
        {            
            var objOpt = document.createElement("Option");
            if (typeof arrCompany[0] == "string") 
            {
                objOpt.setAttribute("value", arrCompany[intCount]);
                objOpt.innerHTML = arrCompany[intCount];
                objCompanyCbo.appendChild(objOpt);

            }else if(undefined != arrCompany[intCount][0])
            {
                objOpt.setAttribute("value", arrCompany[intCount][0]);
                objOpt.innerHTML = arrCompany[intCount][1];
                objCompanyCbo.appendChild(objOpt);
            } else 
            {
                objOpt.setAttribute("value", arrCompany[intCount][0]);
                objOpt.innerHTML = arrCompany[intCount][1];
                objCompanyCbo.appendChild(objOpt);            
            }
        }
        subSelectComboByValue(objCompanyCbo, strSelectedCompanyCode, true);
        subFillcboCinema(objCompanyCbo.value);
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "subFillCompanyCombo()", e);
    }

}

function subFillBankCombo() {
    try {
        var intCount;
        var objBankCbo = document.getElementById("cboBank");
        var strSelectedCompanyCode = document.getElementById("hdnSelectedBankCode").value;
        for (intCount = 0; intCount < arrBank.length; intCount++) {
            var objOpt = document.createElement("Option");
            if (undefined != arrBank[intCount][0]) {
                objOpt.setAttribute("value", arrBank[intCount][0]);
                objOpt.innerHTML = arrBank[intCount][1];
                objBankCbo.appendChild(objOpt);
            }
            else {
                objOpt.setAttribute("value", arrBank[intCount]);
                objOpt.innerHTML = arrBank[intCount];
                objBankCbo.appendChild(objOpt);
            }
        }
        subSelectComboByValue(objBankCbo, strSelectedCompanyCode, true);
        subFillcboMerch(objBankCbo.value);
    }
    catch (e) {
        subDisplayError("ReportModuleCode.js", "subFillBankCombo()", e);
    }

}


function subRedirectToDefault()
{
    var strRootDomain = window.location.protocol + '//' + window.location.host;
    window.location.href = strRootDomain + '/default.aspx';
}

function subRedirectToHome() {

  //  var strRootDomain = window.location.protocol + '//' + window.location.host;
    //  window.location.href = strRootDomain + '/home.aspx';
    parent.location.href = "home.aspx";
}

function subFillcboCinema(strCatalogue) {
  

    var objCinemaCbo = document.getElementById("cboCinemaCode");
    subClearList(objCinemaCbo);
    for(var intCount = 0; intCount < arrVenue.length; intCount++)
    {
        if(strCatalogue == arrVenue[intCount][2] || strCatalogue == "")
        {
            var objCinemaOpt = document.createElement("Option");
            objCinemaOpt.setAttribute("value",arrVenue[intCount][0]);
            objCinemaOpt.innerHTML = arrVenue[intCount][1];
         
            objCinemaCbo.appendChild(objCinemaOpt);
        }
    }
    try
    {
        var strSelectedCinemaCode = document.getElementById("hdnSelectedVenueCode").value;
        if(strSelectedCinemaCode.length > 0)
        {
            subSelectComboByValue(objCinemaCbo, strSelectedCinemaCode, true);
            document.getElementById("hdnSelectedVenueCode").value = "";
        }
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "subFillcboCinema('" + strCompanyCode + "')", e);
    }
    return false;
}

function subFillcboMerch(strCatalogue) {
    var objMerchCbo = document.getElementById("cboMerchId");
    subClearList(objMerchCbo);
    for (var intCount = 0; intCount < arrMerch.length; intCount++) {
        if (strCatalogue == arrMerch[intCount][2] || strCatalogue == "") {
            var objMerchOpt = document.createElement("Option");
            objMerchOpt.setAttribute("value", arrMerch[intCount][0]);
            objMerchOpt.innerHTML = arrMerch[intCount][1];
            objMerchCbo.appendChild(objMerchOpt);
        }
    }
    try {
        var strSelectedCinemaCode = document.getElementById("hdnSelectedMerchCode").value;
        if (strSelectedCinemaCode.length > 0) {
            subSelectComboByValue(objMerchCbo, strSelectedCinemaCode, true);
            document.getElementById("hdnSelectedMerchCode").value = "";
        }
    }
    catch (e) {
        subDisplayError("ReportModuleCode.js", "subFillcboMerch('" + strCompanyCode + "')", e);
    }
    return false;
}

function subClearList(objList)
{
	try
	{
		for(var intChildCount = (objList.childNodes.length - 1); intChildCount >= 0; intChildCount--)
		{
			var a = objList.childNodes[intChildCount];
			if(a.value != "")
			{
			    objList.removeChild(a);
			}
		}
	}
	catch(e)
	{
		subDisplayError("ReportModulecode.js", "subClearList(" + objList + ")", e);  
	}
}


function blnRptSalesReport()
{
    try
    {
        var objtxtStartDate = document.getElementById("dtStartDate");
        var objtxtEndDate = document.getElementById("dtEndDate");
        if(objtxtStartDate.value.length == 0 ||  objtxtEndDate.value.length == 0)
        {
            alert("Please Select valid date range!!!");
            return false;
        }
        frmReportHome.submit();
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "blnrptSalesReport()", e);
    }
}

function blnRptTranWiseSales()
{
    try
    {
        var objtxtStartDate = document.getElementById("dtStartDate");
        var objtxtEndDate = document.getElementById("dtEndDate");
        if(objtxtStartDate.value.length == 0 ||  objtxtEndDate.value.length == 0)
        {
            alert("Please Select valid date range!!!");
            return false;
        }
        frmTransactionWise.submit();
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "blnRptTranWiseSales()", e);
    }
}

//function frmSearchTransactionValidate()
//{
//    try
//    {
//        var objtxtTransId = document.getElementById("txtTransId");
//        var objtxtBookingId = document.getElementById("txtBookingId");
//        var objtxtEmailId = document.getElementById("txtEmailId");
//        var objtxtMobileNo = document.getElementById("txtMobileNo");
//        var objtxtCardNo = document.getElementById("txtCardNumber");
//        var objtxtAuthCode = document.getElementById("txtAuthCode");
//        var objtxtWinPin = document.getElementById("txtWinPin");
//        var objtxtGV = document.getElementById("txtGV");
//        var objtxtEncCardNo = document.getElementById("txtEncCardNo");
//        var objtxtBankRef = document.getElementById("txtBankRef");
//        var objtxtPGTranId = document.getElementById("txtPGTranId");
//        var strchkRetPass = document.getElementById("chkRetPass");

//        if (strchkRetPass)

//        if (objtxtTransId.value.length == 0 && objtxtBookingId.value.length == 0 && objtxtEmailId.value.length == 0 && objtxtMobileNo.value.length == 0 && objtxtCardNo.value.length == 0 && objtxtAuthCode.value.length == 0 && objtxtWinPin.value.length == 0 && objtxtGV.value.length == 0 && objtxtEncCardNo.value.length == 0 && objtxtBankRef.value.length == 0 && objtxtPGTranId.value.length == 0)
//        {
//            alert("Please Enter atleast one search parameter!!!");
//            return false;
//        }
//        
//        if(objtxtTransId.value.length > 0 && isNaN(objtxtTransId.value))
//        {
//            alert("Transaction ID is a Numeric Value!!!");
//            return false;
//        }
//        frmSearchTransaction.submit();
//    }
//    catch(e)
//    {
//        subDisplayError("ReportModuleCode.js", "blnRptTranWiseSales()", e);
//    }
//}

function subResetDates()
{
    try 
    {
        document.getElementById("dtStartDate").value = "";
        document.getElementById("dtEndDate").value = "";
    }
    catch (e) {
        subDisplayError("ReportModuleCode.js", "subResetDates()", e);
    }
}

function frmiMintSearchTransactionValidate()
{
    try
    {
        var objtxtOrderNo = document.getElementById("txtOrderNumber");
        var objtxtSerialNo = document.getElementById("txtSerialNumber");
        var objtxtCardNo = document.getElementById("txtCardNumber");        
        var objtxtEmailId = document.getElementById("txtEmailId");        
        var objtxtMobileNo = document.getElementById("txtMobileNumber");
        
        if(objtxtOrderNo.value.length == 0 && objtxtSerialNo.value.length == 0 && objtxtCardNo.value.length == 0 && objtxtEmailId.value.length == 0 && objtxtMobileNo.value.length == 0)
        {
            alert("Please Enter atleast one search parameter!!!");
            return false;
        }
        
        if(objtxtOrderNo.value.length > 0 && isNaN(objtxtOrderNo.value))
        {
            alert("Order Number is a Numeric Value!!!");
            return false;
        }
        
        if(objtxtSerialNo.value.length > 0 && isNaN(objtxtSerialNo.value))
        {
            alert("Serial Number is a Numeric Value!!!");
            return false;
        }
        
        if(objtxtCardNo.value.length > 0 && objtxtCardNo.value == "")
        {            
            alert("Card Number is a Numeric Value!!!");
            return false;
        }
        
        
        frmiMintSearchTransaction.submit();
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "blnRptTranWiseSales()", e);
    }
}

function blnRptSalesReports()
{
    try
    {
        var objtxtStartDate = document.getElementById("dtStartDate");
        var objtxtEndDate = document.getElementById("dtEndDate");
        if(objtxtStartDate.value.length == 0 ||  objtxtEndDate.value.length == 0)
        {
            alert("Please Select valid date range!!!");
            return false;
        }
        return true;
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "blnRptSalesReports()", e);
    }
}

function blnRptOfferSales()
{
    try {
        var objcboDiscount = document.getElementById("cboDiscounts");
        var objtxtStartDate = document.getElementById("dtStartDate");
        var objtxtEndDate = document.getElementById("dtEndDate");
        var objtxtOfferQty = document.getElementById("txtOfferQty");
        var objchkDates = document.getElementById("chkDates");
       
//        if (objtxtOfferQty.value.length == 0)
//        {
//            alert("Please Enter Quantity!!!");
//            return false;
//        }
        if (objchkDates.checked == true) 
        {
            if (objcboDiscount.value.length == 0) 
            {
                alert("Please Select One Discount!!!");
                return false;
            }
        }
        else 
        {
            if (objtxtStartDate.value.length == 0 || objtxtEndDate.value.length == 0) {
                alert("Please Select valid date range!!!");
                return false;
            }
        }

        var objReportView = document.getElementById("cboReportView");
       // var objComp = document.getElementById("cboCompanyCode");
        if (objReportView.value == "Trans") {
            if (objcboDiscount.value.length == 0) {
                alert("Please Select One Discount To View Transaction Wise Report!!!");
                return false;
            }
        }

        //frmOfferSales.submit();
        ShowProgress("btnShowReport", false);
        document.getElementById('hdnDiscount').value = document.getElementById('cboDiscounts').value;
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "blnRptOfferSales()", e);
    }
    return true;
}

function blnRptStatementReport()
{
    try
    {
        var objtxtStartDate = document.getElementById("dtStartDate");
        var objtxtEndDate = document.getElementById("dtEndDate");
        if(objtxtStartDate.value.length == 0 ||  objtxtEndDate.value.length == 0)
        {
            alert("Please Select valid date range!!!");
            return false;
        }
        frmStatementReport.submit();
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "blnRptStatementReport()", e);
    }
}

///BGVC0000122263, this

function blnTransactionVerified(strTransId)
{
    if(confirm("Verify  ???") ==  true)
    {
        var blnVerified = false;
        var strURL = "../jxData.aspx?dt=VER&bkid="+ strTransId;
        subGetDataAndExecute("Verify", strURL, "subChangeVerifiedStatus('a_" + strTransId + "');");
    }
}

function subChangeVerifiedStatus(strID)
{
   if(blnVerified == true)
   {
        var objDiv = document.getElementById(strID);
        var objUser = document.getElementById("hdnUser");
        objDiv.innerHTML = objUser.value;
   }
   else
   {
       alert('Could not Update. Please try again !!!');
   }
}
//End Of rptHome.aspx code
//------------------------

//CODE FOR rptPayment.aspx
//------------------------

function blnValidateForm()
{
    var objCompanyCode = document.getElementById("cboCompanyCode");
    var objCinemaCode = document.getElementById("cboCinemaCode");
    var objStartDate = document.getElementById("dtStartDate");
    var objEndDate = document.getElementById("dtEndDate");
    var objcboReportFilter = document.getElementById("cboReportFilter");
    var objChkPD = document.getElementById("chkPDC");
    
    var strCatalogue = "";
    var strCinemaCode = "";
    var strStartDate = "";
    var strEndDate = "";
    var strReportFilter = "";
    var strPDC = "";
    
    if(objStartDate.value == "")
    {
        alert("Please Select a valid Start Date");
        objStartDate.focus();
        return false;
    }
    else if(objEndDate.value == "")
    {
        alert("Please Select a valid End Date");
        objEndDate.focus();
        return false;
    }

    strCatalogue = objCompanyCode.options[objCompanyCode.selectedIndex].value;
    strCinemaCode = objCinemaCode.options[objCinemaCode.selectedIndex].value;
    strStartDate = objStartDate.value;
    strEndDate = objEndDate.value;
    strReportFilter = objcboReportFilter.value;
    if(objChkPD.checked == true)
    {
        strPDC = "Y";
    }
    else
    {
        strPDC = "N";
    }

    //ShowProgress("btnShowReport", false);
    var strURL = "rptPaymentReceipt.aspx?strCatalogue=" + strCatalogue + "&strCinema=" + strCinemaCode + "&dtStart=" + strStartDate + "&dtEnd=" + strEndDate + "&PDC=" + strPDC + "&PayMode=T&ReportFilter=" + strReportFilter;
    subOpenWindow(strURL, false);

}

function blnValidateDebtPaymentFrm()
{
    var objStartDate = document.getElementById("dtStartDate");
    var objEndDate = document.getElementById("dtEndDate");
    var objChkPD = document.getElementById("chkPDC");
    var objDebtor = document.getElementById("cboDebtor");
    

    var strPDC = "";
    var strStartDate = "";
    var strEndDate = "";
    var strDebtorId = "";

    if(objDebtor.value == "Select Debtor")
    {
        alert("Please Select Debtor From The List")
        objDebtor.focus();
        return false;
    }
    if(objChkPD.checked == true)
    {
        strPDC = "Y";
    }
    else
    {
        strPDC = "N";
    }
    strStartDate = objStartDate.value;
    strEndDate = objEndDate.value;
    strDebtorId = objDebtor.options[objDebtor.selectedIndex].value;
//    var strURL = "rptDebtorPaymentReceipt.aspx?strDebtorId=" + strDebtorId + "&dtStart=" + strStartDate + "&dtEnd=" + strEndDate + "&PDC=" + strPDC;
//    subOpenWindow(strURL, false);
    var intHeight = 750, intWidth = 800
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "rptDebtorPaymentReceipt.aspx?strDebtorId=" + strDebtorId + "&dtStart=" + strStartDate + "&dtEnd=" + strEndDate + "&PDC=" + strPDC;
    
    window.open(strURL, "", strParams);
}

function ValidateShowwisePayRpt()
{
    var objCinema = document.getElementById("cboCinemaCode");
    var objShowDate = document.getElementById("hdnShowDate");
    var objShowTime = document.getElementById("cboShowTime");
    var objChkPD = document.getElementById("chkPDC");
    
    var strCinema = "";
    var strSessionId = "";
    var strShowDate = "";
    var strShowTime = "";
    var strEventName = "";
    var strPDC = "";
    
    if(objShowTime.value == "No Shows")
    {
        alert("No Show Available For This Date");
        return false;
    }
    if(objChkPD.checked == true)
    {
        strPDC = "Y";
    }
    else
    {
        strPDC = "N";
    }

    strCinema = objCinema.options[objCinema.selectedIndex].value;
    strSessionId = objShowTime.options[objShowTime.selectedIndex].value;
    strShowDate = objShowDate.value;
    strEventName = objShowTime.options[objShowTime.selectedIndex].text;
    strShowTime = strEventName.substring(strEventName.indexOf(":")-2, strEventName.indexOf("(")-1);
    var strURL = "rptPaymentReceipt.aspx?strCinema=" + strCinema + "&strSessionId=" + strSessionId + "&strEventName=" + strEventName + "&strShowDate=" + strShowDate +  "&strShowTime=" + strShowTime + "&PDC=" + strPDC + "&PayMode=S";
    subOpenWindow(strURL, false);
}

function blnValidateCinemaOfferRpt()
{
    var objOfferID = document.getElementById("cboOffers");
    var objCompanyCode = document.getElementById("cboCompanyCode");
    var objCinemaCode = document.getElementById("cboCinemaCode");
    var objStartDate = document.getElementById("dtStartDate");
    var objEndDate = document.getElementById("dtEndDate");
    var objcboReportFilter = document.getElementById("cboReportFilter");
    var objChkPD = document.getElementById("chkPDC");
    
    var strOfferID = "";
    var strCatalogue = "";
    var strCinemaCode = "";
    var strStartDate = "";
    var strEndDate = "";
    var strReportFilter = "";
    var strPDC = "";
    
    if(objStartDate.value == "")
    {
        alert("Please Select a valid Start Date");
        objStartDate.focus();
        return false;
    }
    else if(objEndDate.value == "")
    {
        alert("Please Select a valid End Date");
        objEndDate.focus();
        return false;
    }

    strOfferID = objOfferID.options[objOfferID.selectedIndex].value;
    strCatalogue = objCompanyCode.options[objCompanyCode.selectedIndex].value;
    strCinemaCode = objCinemaCode.options[objCinemaCode.selectedIndex].value;
    strStartDate = objStartDate.value;
    strEndDate = objEndDate.value;
    strReportFilter = objcboReportFilter.value;
    if(objChkPD.checked == true)
    {
        strPDC = "Y";
    }
    else
    {
        strPDC = "N";
    }

    //ShowProgress("btnShowReport", false);
    var strURL = "rptCinemaOfferReceipt.aspx?strOfferID=" + strOfferID + "&strCatalogue=" + strCatalogue + "&strCinema=" + strCinemaCode + "&dtStart=" + strStartDate + "&dtEnd=" + strEndDate + "&PDC=" + strPDC + "&PayMode=T&ReportFilter=" + strReportFilter;
    subOpenWindow(strURL, false);

}

function subCancelHref()
{
    var objCancel = document.getElementById("HrefCancel");
    
    var objtblPaymentDetails = document.getElementById("tblEditPaymentDetails");
    var objhdnChequeNo = document.getElementById("hdnChequeNo");
    var objhdnChequeDate = document.getElementById("hdnChequeDate");
    var objhdnDrawnOn = document.getElementById("hdnDrawnOn");
    var objhdnDeliveryDate = document.getElementById("hdnDeliveryDate");
    
    var objtdChequeNo = document.getElementById("tdChequeNo");
    var objtdChequeDate = document.getElementById("tdChequeDate");
    var objtdDrawnOn = document.getElementById("tdDrawnOn");
    var objtdDeliveryDate = document.getElementById("tdDeliveryDate");
    
    
    var objtxtChequeNo = document.getElementById("txtChequeNo");
    var objtxtChequeDate = document.getElementById("txtChequeDate");
    var objtxtDrawnOn = document.getElementById("txtDrawnOn");
    var objtxtDeliveryDate = document.getElementById("txtDeliveryDate");
    var objStartDate = document.getElementById("spanStartDate");
    var objEndDate = document.getElementById("spanEndDate");
    
    
    subAppend(objtblPaymentDetails,objtxtChequeNo,0,0);
    subAppend(objtblPaymentDetails,objtxtDrawnOn,0,1);
    subAppend(objtblPaymentDetails,objtxtChequeDate,0,2);
    subAppend(objtblPaymentDetails,objStartDate,0,3);
    subAppend(objtblPaymentDetails,objtxtDeliveryDate,0,4);
    subAppend(objtblPaymentDetails,objEndDate,0,5);
    
    objtdChequeNo.innerHTML = objhdnChequeNo.value;
    objtdDrawnOn.innerHTML = objhdnDrawnOn.value;
    objtdChequeDate.innerHTML = objhdnChequeDate.value
    objtdDeliveryDate.innerHTML = objhdnDeliveryDate.value;
    
    subResetControl(objCancel.id);
}


function subRenderControls(strPaymentStatus)
{
    
    var objTDPaymentProcess = document.getElementById("tdPaymentProcess");
    var objSave = document.getElementById("HrefSave");
    var objEdit = document.getElementById("HrefEdit");
    var objUpdate = document.getElementById("HrefUpdate");
    var objCancel = document.getElementById("HrefCancel");
    var objSpan = document.getElementById("spanSeperator");
    objSpan.innerHTML = "  ";
    
    if(strPaymentStatus == "A")
    {
        objTDPaymentProcess.appendChild(objSave);  
        subPaymentDetails();  
    }
    else if(strPaymentStatus == "E")
    {
        objTDPaymentProcess.appendChild(objEdit);
    }
}

function subSaveHref()
{
    var objForm = document.getElementById("frmrptPaymentReceipt");
    var objtblPaymentDetails = document.getElementById("tblPaymentDetails");
    var objEditTable = document.getElementById("tblEditPaymentDetails");
    var objChequeNo = document.getElementById("tdChequeNo");
    var objDrawnOn = document.getElementById("tdDrawnOn");
    var objChequeDate = document.getElementById("tdChequeDate");
    var objDeliveryDate = document.getElementById("tdDeliveryDate");
    
    var objtxtChequeNo = document.getElementById("txtChequeNo");
    var objtxtChequeDate = document.getElementById("txtChequeDate");
    var objtxtDrawnOn = document.getElementById("txtDrawnOn");
    var objtxtDeliveryDate = document.getElementById("txtDeliveryDate");
    
    subAppend(objEditTable,objtxtChequeNo,0,0);
    subAppend(objEditTable,objtxtChequeDate,0,1);
    subAppend(objEditTable,objtxtDrawnOn,0,2);
    subAppend(objEditTable,objtxtDeliveryDate,0,3);
    objForm.submit();   
}

function subPaymentDetails()
{
    var objHdnPaymentStatus = document.getElementById("hdnPaymentStatus");
    var objsubmit = document.getElementById("btnSubmit");
    var objtblPaymentDetails = document.getElementById("tblPaymentDetails");
    var objtxtChequeNo = document.getElementById("txtChequeNo");
    var objtxtChequeDate = document.getElementById("txtChequeDate");
    var objtxtDrawnOn = document.getElementById("txtDrawnOn");
    var objtxtDeliveryDate = document.getElementById("txtDeliveryDate");
    var objStartDate = document.getElementById("spanStartDate");
    var objEndDate = document.getElementById("spanEndDate");
    
    objtxtChequeNo.value = objtblPaymentDetails.rows(0).cells(1).innerHTML;
    objtxtDrawnOn.value = objtblPaymentDetails.rows(0).cells(3).innerHTML;
    objtxtChequeDate.value = objtblPaymentDetails.rows(1).cells(1).innerHTML;
    objtxtDeliveryDate.value = objtblPaymentDetails.rows(1).cells(3).innerHTML;
        
    objtblPaymentDetails.rows(0).cells(1).innerHTML = "";
    objtblPaymentDetails.rows(0).cells(3).innerHTML = "";
    objtblPaymentDetails.rows(1).cells(1).innerHTML = "";
    objtblPaymentDetails.rows(1).cells(3).innerHTML = "";
        
    subAppend(objtblPaymentDetails,objtxtChequeNo,0,1);
    subAppend(objtblPaymentDetails,objtxtDrawnOn,0,3);
    subAppend(objtblPaymentDetails,objtxtChequeDate,1,1);
    subAppend(objtblPaymentDetails,objStartDate,1,1);
    subAppend(objtblPaymentDetails,objtxtDeliveryDate,1,3);
    subAppend(objtblPaymentDetails,objEndDate,1,3);
}

function subResetControl(objID)
{
    var objCancel = document.getElementById("HrefCancel");
    var objEdit = document.getElementById("HrefEdit");
    var objUpdate = document.getElementById("HrefUpdate");
    var objPayProcess = document.getElementById("tdPaymentProcess");
    var objtblEditTable = document.getElementById("tblEditPaymentDetails");
    var objControlId = document.getElementById(objID);
    var objSpan = document.getElementById("spanSeperator");
    objSpan.innerHTML = "  ";
    
    if(objID == "HrefEdit")
    {
        subAppend(objtblEditTable,objControlId,0,7);
        subAppend(objtblEditTable,objControlId,0,10);
        subAddComponent(objPayProcess, objCancel);
        subAddComponent(objPayProcess, objSpan);
        subAddComponent(objPayProcess, objUpdate);
    }
    else
    {
        subAppend(objtblEditTable,objControlId,0,9);
        subAppend(objtblEditTable,objUpdate,0,8);
        subRemoveComponent(objPayProcess,objSpan);
        subAddComponent(objPayProcess,objEdit);
        subAddComponent(objPayProcess,objSpan);
    }
}


function subEditHref()
{
    var objEdit = document.getElementById("HrefEdit");
    var objhdnChequeNo = document.getElementById("hdnChequeNo");
    var objhdnChequeDate = document.getElementById("hdnChequeDate");
    var objhdnDrawnOn = document.getElementById("hdnDrawnOn");
    var objhdnDeliveryDate = document.getElementById("hdnDeliveryDate");
    
    var objtxtChequeNo = document.getElementById("tdChequeNo");
    var objtxtChequeDate = document.getElementById("tdChequeDate");
    var objtxtDrawnOn = document.getElementById("tdDrawnOn");
    var objtxtDeliveryDate = document.getElementById("tdDeliveryDate");
    
    objhdnChequeNo.value = objtxtChequeNo.innerHTML;
    objhdnDrawnOn.value = objtxtDrawnOn.innerHTML;
    objhdnChequeDate.value = objtxtChequeDate.innerHTML;
    objhdnDeliveryDate.value = objtxtDeliveryDate.innerHTML;
    subPaymentDetails();
    subResetControl(objEdit.id);
}


function subUpdateHref()
{
    var objHdnPaymentStatus = document.getElementById("hdnPaymentStatus");
    var objForm = document.getElementById("frmrptPaymentReceipt");
    objHdnPaymentStatus.value = "U";
    objForm.submit();
    
}

function subAppend(objParent,ControlId, intRows, intCell)
{
   objParent.rows(intRows).cells(intCell).appendChild(ControlId);
}

function subRemoveComponent(ParentElement, ChildElement)
{
    ParentElement.removeChild(ChildElement);
}

function subAddComponent(ParentElement, ChildElement)
{
    ParentElement.appendChild(ChildElement);
}

function subViewPreBookDetails(lngPreBookId)
{
    var intHeight = 350, intWidth = 1400
    strParams = "width=" + intWidth + ",height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "../PreBook.aspx?strBookingId=" + lngPreBookId;
    
    window.open(strURL, "", strParams);
}

function subViewBookingDetails(lngTransId, strBookingId, strBkgStatus, strIsCardTran, strTransType)
{
    var intHeight = 750, intWidth = 800
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "../BookingDetails.aspx?lngTransId=" + lngTransId + "&strBookingId=" + strBookingId + "&strBkgStatus=" + strBkgStatus + "&strTransType=" + strTransType + "&strIsCardTran=" + strIsCardTran;

    window.open(strURL, "", strParams);
}

function subViewRMSDetails(lngTransId, strCinemaId, strBkgStatus, strIsCardTran, strTransType) {
    var intHeight = 750, intWidth = 800
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "../RMSDetails.aspx?lngTransId=" + lngTransId + "&strCinemaId=" + strCinemaId + "&strBkgStatus=" + strBkgStatus + "&strTransType=" + strTransType + "&strIsCardTran=" + strIsCardTran;

    window.open(strURL, "", strParams);
}

function subViewXMLDetails(lngTransId, strBookingId, strPaidUnpaid) {
    var intHeight = 750, intWidth = 800
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "UpdateXMLDetail.aspx?lngTransId=" + lngTransId + "&strBookingId=" + strBookingId + "&strPaidUnpaid=" + strPaidUnpaid;

    window.open(strURL, "", strParams);
}

function subViewIPLBookingDetails(lngTransId, strBookingId, strBkgStatus, strTransType) {
    var intHeight = 450, intWidth = 900
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "IPLTransDetails.aspx?lngTransId=" + lngTransId;

    window.open(strURL, "", strParams);
}

function subViewCategoryDetails(SessionId, strCinemaId, strAreaCode) 
{
    var intHeight = 450, intWidth = 900
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "CategoryDetails.aspx?SessionId=" +SessionId + "&strCinemaId=" + strCinemaId + "&strAreaCode=" + strAreaCode;

    window.open(strURL, "", strParams);
}

function subViewTandC(DiscountId) {
    var intHeight = 450, intWidth = 900
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "ViewTermAndCon.aspx?DiscountId=" + DiscountId;
    window.open(strURL, "", strParams);
}

function subViewTermsConditions() {
    var intHeight = 450, intWidth = 900
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px, scrollbars=yes, menubar=no,resizable=yes";
    var strUrl = "ViewTermAndCon.aspx?DiscountId=";
    window.open(strUrl, "", strParams);
}

function subViewIPLRefundDetails(lngTransId, strBookingId, strBkgStatus, strTransType) {
    var intHeight = 450, intWidth = 900
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "IPLRefundDetails.aspx";

    window.open(strURL, "", strParams);
}


function subETicketDownload(lngTransId) {
    var intHeight = 600, intWidth = 800
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "ETicketDownload.aspx?lngTransId=" + lngTransId;

    window.open(strURL, "", strParams);
}

function subViewChargebackDetails(lngChargeBackId)
{
    var intHeight = 550, intWidth = 700
    strParams = "dialogWidth:" + intWidth + "px; dialogHeight:" + intHeight + "px; center:yes; edge:sunken; help:no; scroll:yes; status:yes; dialogHide:yes; menubar:no;";
    var strURL = "../ChargebackDetails.aspx?lngChargeBackId=" + lngChargeBackId;

    window.open(strURL, "", strParams);
}

function subViewVoucherDetails(lngVoucherId, intHeight) {
    var intHeight = 450, intWidth = 700
    //strParams = "dialogWidth:" + intWidth + "px; dialogHeight:" + intHeight + "px; center:yes; edge:sunken; help:no; scroll:yes; status:yes; dialogHide:yes; menubar:no;";
    strParams = "width=" + intWidth + "px,height=" + intHeight + "px,scrollbars=yes,menubar=no,resizable=yes";
    var strURL = "../VoucherDetails.aspx?lngVoucherId=" + lngVoucherId;


    window.open(strURL, "", strParams);
}

function subViewImintOrderDetails(strSerialNo)
{       
    var strURL = "../ImintOrderDetails.aspx?strSerialNo=" + strSerialNo;    
    window.open(strURL, "_NewWindow", 'height=322,width=420,menubar=no,resizable=no,scrollbars=yes');    
}

function subViewCloseChargebackDetails(lngChargeBackId)
{
    var strURL = "../ChargebackDetails.aspx?lngChargeBackId=" + lngChargeBackId;    
    window.open(strURL, "_NewWindow", 'height=522,width=600,menubar=no,resizable=no,scrollbars=yes');    
}

function subViewUnderProcessedDetails(lngPaymentId,lngSequence)
{       
    var strURL = "../UnderProcessPaymentDetails.aspx?lngPaymentId=" + lngPaymentId + "&lngSequence=" + lngSequence;    
    window.open(strURL, "_NewWindow", 'height=522,width=600,menubar=no,resizable=no,scrollbars=yes');    
}

function subViewManualRefundDetails(lngTransId,displayRPT)
{  
    var strURL = "rptManualRefundDetails.aspx?lngTransId=" + lngTransId +"&displayRPT=" + displayRPT;    
    window.open(strURL, "_NewWindow", 'height=422,width=400,menubar=no,resizable=no,scrollbars=yes');    
}

function subViewManualRefundEditData(lngManualRefId) {
    var strURL = "../frmEditRefundDetails.aspx?lngManualRefId=" + lngManualRefId;
    window.open(strURL, "_NewWindow", 'height=522,width=600,menubar=no,resizable=yes,scrollbars=yes');
}



function subViewMerchandiseDetails(lngTransId)
{
   var strURL = "/Reports/Merchandise.aspx?lngTransId=" + lngTransId ;
   subOpenWindow(strURL, true);
}

function subSendMail()
{
    var strBookingId = document.getElementById("txtBookingId").value;
    var lngTransId = document.getElementById("txtTransId").value;
    if(document.getElementById("txtBkgStatus").value == 'Y')
    {
        var strURL = "../jxDo.aspx?p=SENDMAIL&strBookingId=" + strBookingId + "&lngTransId=" + lngTransId;
        subGetDataAndExecute("SendMail", strURL, "blnSendMailConfirm();");
    }
    else
    {
        if(confirm('Booking is NOT COMMITTED in BookMyShow system. \nDo you still want to send confirmation mail???'))
        {
            var strURL = "../jxDo.aspx?p=SENDMAIL&strBookingId=" + strBookingId + "&lngTransId=" + lngTransId;
            subGetDataAndExecute("SendMail", strURL, "blnSendMailConfirm();");
        }
    }
}

function blnSendMailConfirm()
{
    if(blnMailSent == true)
    {   
        alert("Mail sent successfully");
    }
    else
    {
        alert("Error sending mail!!!");
    }
}

function subVerify()
{
   var strBookingId = document.getElementById("txtBookingId").value;
   var lngTransId = document.getElementById("txtTransId").value;
   var strURL = "../jxDo.aspx?p=VERIFY&strBookingId=" + strBookingId + "&lngTransId=" + lngTransId;
   subGetDataAndExecute("Verify", strURL, "blnVerify();"); 
}

function blnVerify()
{
   alert(strCommitted);
}

function subRefundPay()
{
    var lngTransId = document.getElementById("txtTransId").value;
    var lngPayId = document.getElementById("txtPaymentId").value;
    var strURL = "../jxDo.aspx?p=REFUNDPAYMENT&lngPayId=" + lngPayId + "&lngTransId=" + lngTransId; 
    subGetDataAndExecute("RefundPayment", strURL, "blnRefPay();");
}

function blnRefPay()
{
    if(blnRefundPay == true)
    {
        alert("Transaction Status Updated!!!");
    }
    else
    {
        alert("There is some problem with the record.Transaction Status Not Updated!!!");
    }
}

function subViewBT2TransDetails(lngTransId, strBookingId, lngPayId)
{
   if(strBookingId == null)
     strBookingId = -1
   if(lngPayId == null)
     lngPayId = -1
   var strURL = "../BT2TransDetails.aspx?lngTransId=" + lngTransId + "&strBookingId=" + strBookingId + "&lngPayId=" + lngPayId;
   window.open(strURL, "_NewWindow", 'height=622,width=900,menubar=no,resizable=no,scrollbars=yes');    
   //subOpenWindow(strURL, true);   
}

function subEditTransStatus()
{
//    var objcboTransStatus = document.getElementById("cboTransStatus");
    var objtxtComments = document.getElementById("txtComments");
    var objbtnSetStatus = document.getElementById("btnSetStatus");
    
    if(document.getElementById("chkEditTrans").checked == true)
    {
//        objcboTransStatus.disabled = false;
        objtxtComments.disabled = false;
        objbtnSetStatus.disabled = false;
    }
    else
    {
//        objcboTransStatus.disabled = true;
        objtxtComments.disabled = true;
        objbtnSetStatus.disabled = true;
    }
}

function blnValidateBD2TransDetails()
{
	try
	{
//        if(document.getElementById("cboTransStatus").selectedIndex == 0)
//        {
//            alert("Please Select Transaction status!!!");
//            return;
//        }
        subUpdateBT2Trans();
        return;
    }
	catch(e)
	{
		subDisplayError("BackOfficeModuleCode.js", "blnValidateBD2TransDetails()", e);
	}

}

function subUpdateBT2Trans()
{
   var strTransId = document.getElementById("txtTransId").value;
   var strNewStatus = ""; //document.getElementById("cboTransStatus").value;
   var strComments =  document.getElementById("txtComments").value;
   var strUser =  getCookie("BO_UserId", "");
   var strURL = "../jxDo.aspx?p=UPDATEBD2TRANS&lngTransId=" + strTransId + "&strNewStatus=" + strNewStatus + "&strUserId=" + strUser + "&strComments=" + strComments;
   subGetDataAndExecute("subUpdateBT2Trans", strURL, "blnUpdateBT2();"); 
}

function blnUpdateBT2()
{
    if(blnUpdateTrans == true)
    {
        alert("Transaction status Updated Successfully!!!!");
        document.getElementById("btnSendMail").disabled = true;
        document.getElementById("btnSetStatus").disabled = true
    }
    else
    {
        if(intReturnValue == -1)
        {
            alert("Transaction is Not a Bad Transaction 2 type!!!!");
        }
        else if(intReturnValue == -2)
        {
            alert("Transaction does not exist!!!!");
        }
        else if(intReturnValue == -3)
        {
            alert("Amount already refunded. Status can not be set to Delivered!!!!");
        }
    }
}

function getCookie(strName, strDefault) 
{
    if(!strDefault) { strDefault = ""; }
    var r = strDefault;
    try {
        var s = strName + "=";
        var c = document.cookie;
        var i = -1;
        var j = -1;
        if(c.length > 0) {
            i = c.indexOf(s);
            if(i > -1) {
                i += s.length;
                j = c.indexOf(";", i);
                if(j == -1) {
                    j = c.length;
                }
                r = unescape(c.substring(i, j));         
            }
        }
    } catch(e) {
        showErr("getCookie('" + strName + "', '" + strDefault + "')", e);
    }
    return r;
}

//End Of Reports code
//------------------------

//CODE FOR Call Center Reports.aspx
//------------------------

function subFillHubCombo()
{
    try
    {
        var intHubCount;
        var objHubCbo = document.getElementById("cboHubList");
        var strSelectedHubId = document.getElementById("hdnSelectedHubId").value;
        for(intHubCount=0; intHubCount < arrHubList.length; intHubCount++)
        {
            var objOpt = document.createElement("Option");
            objOpt.setAttribute("value",arrHubList[intHubCount][0]);
            objOpt.innerHTML = arrHubList[intHubCount][1];
            objHubCbo.appendChild(objOpt);
        }
        subSelectComboByValue(objHubCbo, strSelectedHubId, true);
        subFillcboCinema(objHubCbo.value);
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "subFillHubCombo()", e);
    }

}

//CODE FOR Seat Selection Report (for Concerts)
//------------------------

function blnValidateSeatInfo() {
    try {
        var objcboVenueCode = document.getElementById("cboVenueCode");
        var objcboConcert = document.getElementById("cboConcert");
        var objcboShowTime = document.getElementById("cboShowTime");

        if (objcboVenueCode.value.length == 0 && objcboConcert.value.length == 0 && objcboShowTime.value.length == 0) {
            alert("Please Select a Venue !!!");
            return false;
        }

        if (objcboVenueCode.value.length == 0) {
            alert("Please Select a Venue !!!");
            return false;
        }

        if (objcboConcert.value.length == 0) {
            alert("Please Select a Concert !!!");
            return false;
        }

        if (objcboShowTime.value.length == 0) {
            alert("Please Select a Show Time !!!");
            return false;
        }

    }
    catch (e) {
        subDisplayError("ReportModuleCode.js", "blnValidateSeatInfo()", e);
    }
}


// Code Added by Ovais BookMyShow tested 
///c - combo box; t - default value
function clearOptions(c, t)
{
	for(var ic = c.childNodes.length - 1;ic >= 0;ic--)
    {
        ch = c.childNodes[ic];
        c.removeChild(ch);
    }
    
    if(t.length > 0)
        c.appendChild(addOption(t, "", ""));
}

///h - text; v - value, c - class name
function addOption(h, v, c) {
    var opt = document.createElement("option");
	opt.innerHTML = h;
	opt.className = c;
	opt.value = v;
	return opt;
}


//CODE FOR Chargeback settlement date Report Starts Here

function subValidateSetCBDate()
{
    try
    {
        var objtxtDate = document.getElementById("txtDate");
        var grid = document.getElementById("DGDetails");
        var gridChk;
        var intRowCount = 0;
        if(objtxtDate.value.length  == 0)
        {
            alert("Please Set A Date!!")
            return false;
        } 
        if (grid.rows.length > 0)
        {
            for (intCount = 2; intCount <= grid.rows.length; intCount++) {
                if (intCount < 10) {
                    gridChk = document.getElementById("DGDetails_ctl0" + intCount + "_chkTrans");
                }
                else {
                    gridChk = document.getElementById("DGDetails_ctl" + intCount + "_chkTrans");
                }
                if (gridChk != null || gridChk != 'undefined') {
                    if (gridChk.checked == false)
                    {
                        intRowCount = intRowCount + 1;
                    }
                   
                }
            }
        }
        if(intRowCount == (grid.rows.length - 1))
        {
            alert("Please Mark The Chargeback(s) To Set The Date For!!");
            return false;
        }
        return true;
    }
    catch(e)
    {
        subDisplayError("ReportModuleCode.js", "subValidateSetCBDate()", e);
    }
}

function setCheckTransAll() 
{
    try {
    
        var grid = document.getElementById("DGDetails");
        var gridChk;
        var intCount;
        
        if (grid.rows.length > 0) {
            for (intCount = 2; intCount <= grid.rows.length; intCount++) {

                if (intCount < 10) {

                    gridChk = document.getElementById("DGDetails_ctl0" + intCount + "_chkTrans");

                }
                else {
                    gridChk = document.getElementById("DGDetails_ctl" + intCount + "_chkTrans");
                }

                if (gridChk != null || gridChk != 'undefined') {
                    if (gridChk.checked == false) {
                        gridChk.checked = true;
                    }
                    else {
                        gridChk.checked = false;
                    }
                }

            }
        }

    }
    catch (e) {
        return;
    }

}

//CODE FOR Chargeback settlement date Report Ends Here

function ShowRevShareDetails() 
{
    if (document.getElementById('dtTillDate').value != document.getElementById("hdnTillDate").value)
    {
        alert('Date Changed!!! Generate Report Again.');
        return
    }

    var objCreditor = document.getElementById("hdnCreditor");
    var objTillDate = document.getElementById("hdnTillDate");
    
    var strCreditorID = objCreditor.value;
    var strTillDate = objTillDate.value;
    
    var strURL = "rptRevSharePaymentDetails.aspx?strCreditorID=" + strCreditorID + "&strTillDate=" + strTillDate;
    subOpenWindow(strURL, false);

}

function ShowProgress(btn, onlyBtn) {
    try {
        var objbtn = document.getElementById(btn);
        if (objbtn.style.visibility == "visible" || objbtn.style.visibility == "") {
            objbtn.style.visibility = "hidden";
        }
        else objbtn.style.visibility = "visible";

        if (onlyBtn == true)
            return 0;

        var objImgProcess = document.getElementById("imgProgress");
        if (objImgProcess.style.visibility == "visible" || objImgProcess.style.visibility == "") {
            objImgProcess.style.visibility = "hidden";
        }
        else objImgProcess.style.visibility = "visible";
    }
    catch (e) {
        subDisplayError("ReportModuleCode.js", "ShowProgress()", e);
    }
}



