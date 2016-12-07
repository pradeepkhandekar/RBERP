//Code for search Transaction Starts Here
function subCheckInputFieldsForSearch() {
    var objSearch = document.getElementById("txtSearch");
    var objCriteria = document.getElementById("cboCriteria");

    if (objCriteria.value == "optTransId" || objCriteria.value == "optBookingId") {
        if (objSearch.value == "") {
            alert("Search String Cannot Be Blank!!!");
            return false;
        }
        //        if(isNaN(objSearch.value) == true)
        //        {
        //            alert("Search String Is Not Valid!!!");
        //            return false;
        //        }
    }
//    else if (objCriteria.value == "optDate") {
//        var objVenue = document.getElementById("cmbVenue")
//        if (objVenue.value == "") {
//            alert("No Match Selected!!!");
//            return false;
//        }
//    }
    return true;
}

function setCheckAll(param) {
    try {
        var grid = document.getElementById("dgDisplay");
        var gridChk;
        var grdRunSheetValue;
        var intCount;
        if (grid.rows.length > 0) {
            for (intCount = 2; intCount <= grid.rows.length; intCount++) {

                if (intCount < 10) {
                    grdRunSheetValue = document.getElementById("dgDisplay_ctl0" + intCount + "_lblRunsheetNo").innerHTML;
                    gridChk = document.getElementById("dgDisplay_ctl0" + intCount + "_chkTrans");

                }
                else {
                    grdRunSheetValue = document.getElementById("dgDisplay_ctl" + intCount + "_lblRunsheetNo").innerHTML;
                    gridChk = document.getElementById("dgDisplay_ctl" + intCount + "_chkTrans");
                }


                switch (param) {
                    case 'ST':
                        if (grdRunSheetValue.replace(/^\s*/, "") == "" || grdRunSheetValue.replace(/^\s*/, "") == "3" || grdRunSheetValue.replace(/^\s*/, "") == "4") {
                            if (gridChk != null || gridChk != 'undefined') {
                                if (gridChk.checked == false) {
                                    gridChk.checked = true;
                                }
                                else {
                                    gridChk.checked = false;
                                }
                            }
                        }
                        else {
                            if (gridChk != null && gridChk != 'undefined') {
                                gridChk.checked = false;
                            }
                        }

                        break;
                    case 'RM':
                        if (gridChk != null || gridChk != 'undefined') {
                            if (gridChk.checked == false) {
                                gridChk.checked = true;
                            }
                            else {
                                gridChk.checked = false;
                            }
                        }
                        break;
                    case 'AR':

                        if (gridChk != null || gridChk != 'undefined') {
                            if (gridChk.checked == false) {
                                gridChk.checked = true;
                            }
                            else {
                                gridChk.checked = false;
                            }
                        }
                        break;

                }
            }
        }

    }
    catch (e) {
        return;
    }
}


function setCheckTransAll() {
    try {

        var grid = document.getElementById("dgDisplay");
        var gridChk;
        var grdIssuedValue;
        var intCount;

        if (grid.rows.length > 0) {
            for (intCount = 2; intCount <= grid.rows.length; intCount++) {

                if (intCount < 10) {

                    //grdIssuedValue = document.getElementById("dgDisplay_ctl0" + intCount + "_lblTicketIssued").innerHTML;
                    gridChk = document.getElementById("dgDisplay_ctl0" + intCount + "_chkTrans");

                }
                else {
                    //grdIssuedValue = document.getElementById("dgDisplay_ctl" + intCount + "_lblTicketIssued").innerHTML;
                    gridChk = document.getElementById("dgDisplay_ctl" + intCount + "_chkTrans");
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

//Code for search Transaction Ends Here

//Code for Runsheet Manage Starts Here

function subchkInputForRM() {
    try {
        var objSearch = document.getElementById("txtSearch");
        if (objSearch.value == "" || isNaN(objSearch.value) == true) {
            alert("Please Enter Valid Runsheet Id!!!");
            return false;
        }
        return true;
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subchkInputForRM()", e);
    }
}

function subCheckDeliveryCode() {
    try {
        var objDeliveryCodes = document.getElementById("cboDeliveryCodes");
        if (objDeliveryCodes.value == "") {
            alert("Please Select A Delivery Code!!!");
            return false;
        }
        return true
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subCheckDeliveryCode()", e);
    }
}

//Code for Runsheet Manage Ends Here


//Code for Cancellation Approval Rejection Starts Here

function subCheckInputFieldsForAR() {
    var objSearch = document.getElementById("txtSearch");
    var objCriteria = document.getElementById("cboCriteria");
    if (objSearch.value == "") {
        alert("Search String Cannot Be Blank!!!");
        return false;
    }
    if (objCriteria.value == "optTransId") {
        if (isNaN(objSearch.value) == true) {
            alert("Search String Is Not Valid!!!");
            return false;
        }
    }
    //var objFrm = document.getElementById("frmSearchTransaction");
    // objFrm.submit();
    return true;
}

function setCheckAllForAR() {
    try {
        var grid = document.getElementById("dgDisplay");
        var gridChk;
        var grdRunSheetValue;
        var intCount;
        if (grid.rows.length > 0) {
            for (intCount = 2; intCount <= grid.rows.length; intCount++) {

                if (intCount < 10) {
                    gridChk = document.getElementById("dgDisplay_ctl0" + intCount + "_chkTrans");
                }
                else {
                    gridChk = document.getElementById("dgDisplay_ctl" + intCount + "_chkTrans");
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

//Code for Search Transaction Ends Here

//Code for Update Booking Starts Here

function subValidateDetails() {
    var objFrm = document.getElementById("frmUpdateBooking");
    objFrm.submit();
}

function subCheckAreaId() {
    try {
        var objcmbAreaId = document.getElementById("cmbAreaId");
        if (objcmbAreaId.value == "") {
            alert("Area Not Available!!");
            objcmbAreaId.selectedIndex = 0;
        }
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subCheckAreaId()", e);
    }
}

//Code for Update Booking Ends Here

//Code for Runsheet Print Starts Here

function subSearchCriteria() {
    try {
        var objRunsheetId = document.getElementById("txtRunsheetId");
        var objDate = document.getElementById("txtDate");
        var objrdbById = document.getElementById("rdbById");
        var objrdbByDate = document.getElementById("rdbByDate");
        if (objrdbById.checked == true) {
            objDate.value = "";
            objRunsheetId.value = "";
            objDate.disabled = true;
            objRunsheetId.disabled = false;
        }
        if (objrdbByDate.checked == true) {
            objDate.value = "";
            objRunsheetId.value = "";
            objRunsheetId.disabled = true;
            objDate.disabled = false;
        }
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subSearchCriteria()", e);
    }
}

function subCheckInputForPR() {
    try {
        var objDate = document.getElementById("txtDate");
        var objRunsheetId = document.getElementById("txtRunsheetId");
        var objrdbById = document.getElementById("rdbById");
        var objrdbByDate = document.getElementById("rdbByDate");
        if (objrdbById.checked == true) {
            if (objRunsheetId.value == "" || isNaN(objRunsheetId.value)) {
                alert("Please Enter Valid Runsheet Id!!");
                objRunsheetId.value = '';
                return false;
            }
        }
        if (objrdbByDate.checked == true) {
            if (objDate.value == "") {
                alert("Please Enter Delivery Date!!");
                return false;
            }
        }
        return true;
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subCheckInputForPR()", e);
    }
}

function subPrintRunsheet() {
    try {
        window.print();
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subPrintRunsheet()", e);
    }
}


function subPrintSelectRow() {
    try {
        var grid = document.getElementById("dgDisplay");
        var gridChk;
        var grdIssuedValue;
        var intCount;
        var boolToPrint = "NO";

        if (grid.rows.length > 0) {
            for (intCount = 2; intCount <= grid.rows.length; intCount++) {

                if (intCount < 10) {
                    gridChk = document.getElementById("dgDisplay_ctl0" + intCount + "_chkTrans");
                }
                else {
                    gridChk = document.getElementById("dgDisplay_ctl" + intCount + "_chkTrans");
                }

                if (gridChk != null && gridChk != 'undefined') {
                    if (!gridChk.checked) {
                        document.getElementById("TR_" + (intCount - 2)).style.display = "none";
                    }
                    else {
                        gridChk.style.display = "none";
                        boolToPrint = "YES";
                    }
                }
                else {
                    document.getElementById("TR_" + (intCount - 2)).style.display = "none";
                }
            }
        }
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subPrintSelectRow()", e);
        return;
    }
    if (boolToPrint == "YES") {
        window.print();
    }
    else {
        alert("Select Atleast One Transaction To Print A Runsheet/Voucher!!");
    }
}

//Code for Runsheet Print Ends Here




//Code For Agent Booking History Starts Here

function subCheckInputForABH() {
    try {
        var objBookingStatus = document.getElementById("cmbBookingStatus");
        var objcmbAgent = document.getElementById("cmbAgent");
        if (objBookingStatus.value == "" && objcmbAgent.value == "") {
            alert("Please Select AgentName / Booking Status!!!");
            return false;
        }
        return true;
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subCheckInputForABH()", e);
    }

}

//Code For Agent Booking History Ends Here

//Code For Print Voucher Starts Here

function subPrintVoucherCriteria() {
    try {
        var objrdbById = document.getElementById("rdbById");
        var objrdbByRunsheetId = document.getElementById("rdbByRunsheetId");
        var objrdbTodaysAll = document.getElementById("rdbTodayAll");
        var objtxtTransactionId = document.getElementById("txtTransactionId");
        var objtxtRunsheetId = document.getElementById("txtRunsheetId");
        if (objrdbById.checked == true) {
            objtxtRunsheetId.value = "";
            objtxtRunsheetId.disabled = true;
            objtxtTransactionId.value = "";
            objtxtTransactionId.disabled = false;
        }
        if (objrdbByRunsheetId.checked == true) {
            objtxtTransactionId.value = "";
            objtxtTransactionId.disabled = true;
            objtxtRunsheetId.value = "";
            objtxtRunsheetId.disabled = false;
        }
        if (objrdbTodaysAll.checked == true) {
            objtxtRunsheetId.value = "";
            objtxtRunsheetId.disabled = true;
            objtxtTransactionId.value = "";
            objtxtTransactionId.disabled = true;
        }

    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subPrintVoucherCriteria()", e);
    }
}

function subValidateInput() {
    try {
        var objrdbById = document.getElementById("rdbById");
        var objrdbByRunsheetId = document.getElementById("rdbByRunsheetId");
        var objtxtTransactionId = document.getElementById("txtTransactionId");
        var objtxtRunsheetId = document.getElementById("txtRunsheetId");

        if (objrdbById.checked == true) {
            if (isNaN(objtxtTransactionId.value) || objtxtTransactionId.value == "") {
                alert("Enter a valid Transaction Id ");
                objtxtTransactionId.value = '';
                return false;
            }
        }

        if (objrdbByRunsheetId.checked == true) {
            if (isNaN(objtxtRunsheetId.value) || objtxtRunsheetId.value == '') {
                alert("Enter a valid RunSheetId");
                objtxtRunsheetId.value = '';
                return false;
            }
        }
        return;
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "blnValidateInput()", e);
    }
}
//Code For Print Voucher Ends Here


//Code For Close Runsheet Starts Here

function subAddComments(strTransId) {
    try {

        strCommandName = event.srcElement.innerHTML;

        if (strCommandName == "Add") {
            event.srcElement.innerHTML = "Cancel";
            document.getElementById('hdnTransId').value = strTransId;
            document.getElementById('txtTransComment').disabled = false;
            document.getElementById('tdTransId').innerText = "(" + strTransId + ")";
            document.getElementById('txtTransComment').focus();
        }
        else {
            event.srcElement.innerHTML = "Add";
            document.getElementById('hdnTransId').value = "";
            document.getElementById('txtTransComment').value = "";
            document.getElementById('txtTransComment').disabled = true;
            document.getElementById('tdTransId').innerText = "";
        }
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subAddComments()", e);
    }
}

function subCRCheckComments() {
    try {
        if (document.getElementById('txtTransComment').value == "") {
            alert('Please Add Your Comments!!');
            return false;
        }
        return true;
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subCRCheckComments()", e);
    }

}

function subCRCheckRunsheetComments() {
    try {
        if (document.getElementById('txtRunsheetComment').value == "") {
            alert('Please Add Your Comments!!');
            return false;
        }
        return true;
    }
    catch (e) {
        subDisplayError("BMSCBO.js", "subCRCheckComments()", e);
    }
}


function subCloseRunsheetOptions() {
    try {
        if (document.getElementById('rdbById').checked == true) {
            document.getElementById('txtRunsheetId').value = "";
            document.getElementById('txtDeliveredDate').value = "";
            document.getElementById('txtRunsheetId').disabled = false;
            document.getElementById('aCalender').style.display = "none";
            //document.getElementById('txtDeliveredDate').disabled = true;
            if (document.getElementById('hdnIsSuperUser').value == "Y") {
                document.getElementById('cmbAgent').style.display = "block";
                document.getElementById('cmbHubs').style.display = "block";
                document.getElementById('cmbAgent').disabled = true;
                document.getElementById('cmbHubs').disabled = true;
            }
            else {
                document.getElementById('cmbAgent').style.display = "none";
                document.getElementById('cmbHubs').style.display = "none";
            }

        }
        else {
            document.getElementById('txtRunsheetId').value = "";
            var allMonths = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
            var objTodayDate = new Date();
            document.getElementById('txtDeliveredDate').value = objTodayDate.getDate() + "-" + allMonths[objTodayDate.getMonth()] + "-" + objTodayDate.getFullYear();
            document.getElementById('txtRunsheetId').disabled = true;
            document.getElementById('aCalender').style.display = "block";
            //document.getElementById('txtDeliveredDate').disabled = false;
            if (document.getElementById('hdnIsSuperUser').value == "Y") {
                document.getElementById('cmbAgent').style.display = "block";
                document.getElementById('cmbHubs').style.display = "block";
                document.getElementById('cmbAgent').disabled = false;
                document.getElementById('cmbHubs').disabled = false;
            }
            else {
                document.getElementById('cmbAgent').style.display = "none";
                document.getElementById('cmbHubs').style.display = "none";
            }
        }

    }
    catch (e) {
        alert(e);
    }
}

function subViewMerchandiseDetails(lngTransId) {
    var strURL = "MerchandiseDetails.aspx?lngTransId=" + lngTransId;
    subOpenWindow(strURL, true);
}
//Code For Close Runsheet Ends Here