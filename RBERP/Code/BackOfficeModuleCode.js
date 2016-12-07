var blnPopulate = false;
var intLimitTagIDSeq = 0;
var intPageNumber = 0;

//Code: frmGenMaintenenance Code:
//-------------------------------

function subButtonEnable() {
	try {
		frmGenMaintenance.txtGenCode.disabled = false;
		frmGenMaintenance.txtGenCode.readOnly = false;
		frmGenMaintenance.txtGenName.disabled = false;
		frmGenMaintenance.txtGenCode.focus();
		frmGenMaintenance.btnSave.disabled = false;
		frmGenMaintenance.btnAdd.disabled = true;
		frmGenMaintenance.hdEdit.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subButtonEnable()", e);
	}

}

function subDisplayControls() {
	try {
		frmGenMaintenance.btnSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayControls()", e);
	}
}

function blnValidatefrmGenMaintenance() {
	try {
		if (frmGenMaintenance.txtGenCode.value.length <= 0) {
			alert("Genre Code Cannot be left blank");
			frmGenMaintenance.txtGenCode.focus();
			return false;
		}
		if (frmGenMaintenance.txtGenName.value.length <= 0) {
			alert("Genre Name Cannot be left blank");
			frmGenMaintenance.txtGenName.focus();
			return false;
		}
		if (frmGenMaintenance.hdEdit.value == "false") {
			if (blnCheckForGenCode(frmGenMaintenance.txtGenCode.value.toUpperCase()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmGenMaintenance()", e);
	}
	return true;
}


function subSaveGenreDisable() {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveGenreDisable()", e);
	}

}

function subGenreMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subGenreMessage(" + objPage.id + ")", e);
	}
}

function funGenEditMode(strGenCode, strGenName, strAddAccess) {
	try {
		var objTxtGenCode = document.getElementById('txtGenCode');
		var objTxtGenName = document.getElementById('txtGenName');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		strCommandName = event.srcElement.innerHTML;
		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtGenCode.value = strGenCode;
			objTxtGenCode.disabled = false;
			objTxtGenCode.readOnly = true;
			objTxtGenName.disabled = false;
			objTxtGenName.value = strGenName;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtGenCode.value = "";
			objTxtGenName.value = "";
			objTxtGenCode.disabled = true;
			objTxtGenName.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenEditMode('" + strGenCode + "', '" + strGenName + "')", e);
	}
}

function blnCheckForGenCode(strGenreCode) {
	try {
		var objTbody = tblRecords;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountRows).cells(0).innerHTML.toUpperCase() == strGenreCode.toUpperCase()) {
				alert("This Code Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForGenCode('" + strGenreCode + "')", e);
	}
}

//Code For frmGenMaintenanceCode Completed HERE
//---------------------------------------------



//Code: frmLocnMaintenance Code:
//-------------------------------

function subfrmLocnBtnEnable() {
	try {
		frmLocnMaintenance.txtLocationCode.disabled = false;
		frmLocnMaintenance.txtLocationCode.readOnly = false;
		frmLocnMaintenance.txtLocationName.disabled = false;
		frmLocnMaintenance.txtLocationCode.focus();
		frmLocnMaintenance.btnSave.disabled = false;
		frmLocnMaintenance.btnAdd.disabled = true;
		frmLocnMaintenance.hdEdit.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmLocnBtnEnable()", e);
	}

}

function subDisplayControls() {
	try {
		frmLocnMaintenance.btnSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayControls()", e);
	}
}

function blnValidatefrmLocnMaintenance() {
	try {
		if (frmLocnMaintenance.txtLocationCode.value.length <= 0) {
			alert("Location Code Cannot be left blank");
			frmLocnMaintenance.txtLocationCode.focus();
			return false;
		}
		if (frmLocnMaintenance.txtLocationName.value.length <= 0) {
			alert("Location Name Cannot be left blank");
			frmLocnMaintenance.txtLocationName.focus();
			return false;
		}
		if (frmLocnMaintenance.hdEdit.value == "false") {
			if (blnCheckForLocationCode(frmLocnMaintenance.txtLocationCode.value.toUpperCase()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmLocnMaintenance()", e);
	}
	return true;
}


function subLocationMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subLocationMessage(" + objPage.id + ")", e);
	}
}

function frmLocnfunEditMode(strLocationCode, strLocationName, strCity, strAddAccess) {
	try {
		var objTxtLocationCode = document.getElementById('txtLocationCode');
		var objTxtLocationName = document.getElementById('txtLocationName');
		var objcboCity = document.getElementById('cboCity');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		strCommandName = event.srcElement.innerHTML;
		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtLocationCode.value = strLocationCode;
			objTxtLocationCode.disabled = false;
			objTxtLocationCode.readOnly = true;
			objTxtLocationName.disabled = false;
			objTxtLocationName.value = strLocationName;
			objcboCity.value = strCity;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtLocationCode.value = "";
			objTxtLocationName.value = "";
			objcboCity.selectedIndex = 0;
			objTxtLocationCode.disabled = true;
			objTxtLocationName.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmLocnfunEditMode('" + strLocationCode + "', '" + strLocationName + "')", e);
	}
}

function subSaveLocnDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');

		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveLocnDisable()", e);
	}

}

function blnCheckForLocationCode(strLocationCode) {
	try {
		var objTbody = tblLocnRec;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountRows).cells(0).innerHTML.toUpperCase() == strLocationCode.toUpperCase()) {
				alert("This Code Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForLocationCode('" + strLocationCode + "')", e);
	}
}

//Code For frmLocnMaintenance Completed HERE
//---------------------------------------------


//Code: frmCityMaintenance Code:
//-------------------------------

function subfrmCityBtnEnable() {
	try {
		frmCityMaintenance.txtCityCode.disabled = false;
		frmCityMaintenance.txtCityCode.readOnly = false;
		frmCityMaintenance.txtCityName.disabled = false;
		frmCityMaintenance.txtCityCode.focus();
		frmCityMaintenance.btnSave.disabled = false;
		frmCityMaintenance.btnAdd.disabled = true;
		frmCityMaintenance.hdEdit.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmCityBtnEnable()", e);
	}

}

function subDisplayControls() {
	try {
		frmCityMaintenance.btnSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayControls()", e);
	}
}

function blnValidatefrmCityMaintenance() {
	try {
		if (frmCityMaintenance.txtCityCode.value.length <= 0) {
			alert("City Code Cannot be left blank");
			frmCityMaintenance.txtCityCode.focus();
			return false;
		}
		if (frmCityMaintenance.txtCityName.value.length <= 0) {
			alert("City Name Cannot be left blank");
			frmCityMaintenance.txtCityName.focus();
			return false;
		}
		if (frmCityMaintenance.hdEdit.value == "false") {
			if (blnCheckForCityCode(frmCityMaintenance.txtCityCode.value.toUpperCase()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmCityMaintenance()", e);
	}
	return true;
}


function subCityMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subCityMessage(" + objPage.id + ")", e);
	}
}

function subSaveStateDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveStateDisable()", e);
	}

}


function frmCityfunEditMode(strCityCode, strCityName, strStateCode, bitLocal, strAddAccess) {
	try {
		var objTxtCityCode = document.getElementById('txtCityCode');
		var objTxtCityName = document.getElementById('txtCityName');
		var objcboState = document.getElementById('cboState');
		var objcbobitLocal = document.getElementById('cbobitLocal');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		strCommandName = event.srcElement.innerHTML;
		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtCityCode.value = strCityCode;
			objTxtCityCode.disabled = false;
			objTxtCityCode.readOnly = true;
			objTxtCityName.disabled = false;
			objTxtCityName.value = strCityName;
			objcboState.value = strStateCode;
			objcbobitLocal.value = bitLocal;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";

			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(3).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(3).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtCityCode.value = "";
			objTxtCityName.value = "";
			objcboState.selectedIndex = 0;
			objTxtCityCode.disabled = true;
			objTxtCityName.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmCityfunEditMode('" + strCityCode + "', '" + strCityName + "')", e);
	}
}

function blnCheckForCityCode(strCityCode) {
	try {
		var objTbody = tblCityRec;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountRows).cells(0).innerHTML.toUpperCase() == strCityCode.toUpperCase()) {
				alert("This Code Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForCityCode('" + strCityCode + "')", e);
	}
}

//Code For frmCityMaintenance Completed HERE
//---------------------------------------------


//Code: frmStateMaintenance Code:
//-------------------------------

function subfrmStateBtnEnable() {
	try {
		frmStateMaintenance.txtStateCode.disabled = false;
		frmStateMaintenance.txtStateCode.readOnly = false;
		frmStateMaintenance.txtStateName.disabled = false;
		frmStateMaintenance.txtStateCode.focus();
		frmStateMaintenance.btnSave.disabled = false;
		frmStateMaintenance.btnAdd.disabled = true;
		frmStateMaintenance.hdEdit.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmStateBtnEnable()", e);
	}

}

function subDisplayControls() {
	try {
		frmStateMaintenance.btnSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayControls()", e);
	}
}

function blnValidatefrmStateMaintenance() {
	try {
		if (frmStateMaintenance.txtStateCode.value.length <= 0) {
			alert("State Code Cannot be left blank");
			frmStateMaintenance.txtStateCode.focus();
			return false;
		}
		if (frmStateMaintenance.txtStateName.value.length <= 0) {
			alert("State Name Cannot be left blank");
			frmStateMaintenance.txtStateName.focus();
			return false;
		}
		if (frmStateMaintenance.hdEdit.value == "false") {
			if (blnCheckForStateCode(frmStateMaintenance.txtStateCode.value.toUpperCase()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmStateMaintenance()", e);
	}
	return true;
}


function subStateMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subStateMessage(" + objPage.id + ")", e);
	}
}

function subCinemaMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subCinemaMessage(" + objPage.id + ")", e);
	}
}

function subSaveCityDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveCityDisable()", e);
	}

}

function frmStfunEditMode(strStateCode, strStateName, strAddAccess) {
	try {
		var objTxtStateCode = document.getElementById('txtStateCode');
		var objTxtStateName = document.getElementById('txtStateName');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		strCommandName = event.srcElement.innerHTML;
		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtStateCode.value = strStateCode;
			objTxtStateCode.disabled = false;
			objTxtStateCode.readOnly = true;
			objTxtStateName.disabled = false;
			objTxtStateName.value = strStateName;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtStateCode.value = "";
			objTxtStateName.value = "";
			objTxtStateCode.disabled = true;
			objTxtStateName.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmStfunEditMode('" + strStateCode + "', '" + strStateName + "')", e);
	}
}

function blnCheckForStateCode(strStateCode) {
	try {
		var objTbody = tblStateRec;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountRows).cells(0).innerHTML.toUpperCase() == strStateCode.toUpperCase()) {
				alert("This Code Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForStateCode('" + strStateCode + "')", e);
	}
}

//Code For frmStateMaintenance Completed HERE
//---------------------------------------------


//Code: frmLanguageMaintenance Code:
//-------------------------------

function subfrmLangButtonEnable() {
	try {
		frmLanguageMaintenance.txtLanguage.disabled = false;
		frmLanguageMaintenance.txtLanguage.readOnly = false;
		frmLanguageMaintenance.txtLanguage.focus();
		frmLanguageMaintenance.txtSeqNo.disabled = false;
		frmLanguageMaintenance.txtSeqNo.readOnly = false;
		frmLanguageMaintenance.txtLanguage.focus();
		frmLanguageMaintenance.btnSave.disabled = false;
		frmLanguageMaintenance.btnAdd.disabled = true;
		frmLanguageMaintenance.hdEdit.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmLangButtonEnable()", e);
	}

}

function subfrmLangDisplayControls() {
	try {
		frmLanguageMaintenance.btnSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmLangDisplayControls()", e);
	}
}

function blnValidatefrmLanguageMaintenance() {
	try {
		if (frmLanguageMaintenance.txtLanguage.value.length <= 0) {
			alert("Language field Cannot be left blank");
			frmLanguageMaintenance.txtLanguage.focus();
			return false;
		}
		if (frmLanguageMaintenance.txtSeqNo.value.length <= 0) {
			alert("Sequence field Cannot be left blank");
			frmLanguageMaintenance.txtSeqNo.focus();
			return false;
		}
		if (frmLanguageMaintenance.hdEdit.value == "false") {
			if (blnCheckForLanguage(frmLanguageMaintenance.txtLanguage.value.toUpperCase()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmLanguageMaintenance()", e);
	}
	return true;
}


function subLanguageMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subLanguageMessage(" + objPage.id + ")", e);
	}
}

function subfrmLanguageSaveDisable() {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		if
		(strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmLanguageSaveDisable()", e);
	}

}

function frmLangfunEditMode(event, strLanguage, strSeqNo, strAddAccess) {
	try {
		var objTxtLanguage = document.getElementById('txtLanguage');
		var objTxtSeqNo = document.getElementById('txtSeqNo');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		var objHdnLang = document.getElementById('hdnLang');
		var objHdnSeq = document.getElementById('hdnSeq');
		strCommandName = event.innerHTML;
		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtLanguage.value = strLanguage;
			objTxtSeqNo.value = strSeqNo;
			objHdnLang.value = strLanguage;
			objHdnSeq.value = strSeqNo;
			objTxtLanguage.disabled = false;
			objTxtSeqNo.disabled = false;
			objAdd.disabled = true;
			objSave.disabled = false;

			event.innerHTML = "Cancel";
			var objTbody = event.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if
			(strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtLanguage.value = "";
			objTxtLanguage.disabled = true;
			objTxtSeqNo.value = "";
			objTxtSeqNo.disabled = true;
			event.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmLangfunEditMode('" + strLanguage + "')", e);
	}
}

function blnCheckForLanguage(strLanguage) {
	try {
		var objTbody = tblLangRec;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountRows).cells(0).innerHTML.toUpperCase() == strLanguage.toUpperCase()) {
				alert("This Language Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForLanguage('" + strLanguage + "')", e);
	}
}

//Code For frmLanguageMaintenance Completed HERE
//---------------------------------------------


//Code:frmPersonMaintenance Start Here
//------------------------------------

function subfrmPersonbtnEnable() {
	try {
		var objPerson = document.getElementById('txtPersonName');
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		var objSearch = document.getElementById('btnSearch');
		var objCancel = document.getElementById('btnCancel');

		objPerson.disabled = false;
		objPerson.focus();
		objSave.disabled = false;
		objAdd.disabled = true;
		objSearch.disabled = true;
		objCancel.disabled = false;

		if (objPerson.value != "") {
			alert("Click On save To Save Artist");
		}

		//        frmPersonMaintenance.txtPersonName.disabled=false;
		//        frmPersonMaintenance.txtPersonName.focus();
		//        frmPersonMaintenance.btnSave.disabled = false;
		//        frmPersonMaintenance.btnAdd.disabled = true;
		//       // frmPersonMaintenance.txtPersonName.value = "";
		//        frmPersonMaintenance.btnSearch.disabled = true;
		//        frmPersonMaintenance.btnCancel.disabled = false;
		//        if (frmPersonMaintenance.txtPersonName.value != "") {
		//            alert('Now Click On Save Button to Save Artist !!!');
		//        }
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmPersonbtnEnable()", e);
	}
}

function blnValidatefrmPersonMaintenance() {
	try {
		var objPerson = document.getElementById('txtPersonName');

		if (objPerson.value.length <= 0) {
			alert("Person Name can not be left blank !!!");
			objPerson.focus();
			return false;
		}

		//        if(frmPersonMaintenance.txtPersonName.value.length <= 0)
		//        {
		//            alert("PersonName Cannot be left blank");
		//            frmPersonMaintenance.txtPersonName.focus();
		//            return false;
		//        }
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmPersonMaintenance()", e);
	}
}

function blnValidatefrmUnSubscribe() {
	try {

		if (frmUnsubscribe.txtEmail.value.length <= 0) {
			alert(" Please Enter Email Id ");
			frmUnsubscribe.txtEmail.focus();
			return false;
		}
		else {
			return true;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmUnSubscribe()", e);
	}
}

function setArtistValue(strArtistId, strArtistName) {
	var objTxtPersonName = document.getElementById('txtPersonName');
	var objAdd = document.getElementById('btnAdd');
	var objSave = document.getElementById('btnSave');
	var objHdnEdit = document.getElementById('hdEdit');
	var objSearch = document.getElementById('btnSearch');
	var objCancel = document.getElementById('btnCancel');
	var objPersonId = document.getElementById('hdPersonId');

	objPersonId.value = strArtistId;
	objTxtPersonName.value = strArtistName;
	objAdd.disabled = true;
	objSearch.disabled = true;
	objSave.disabled = false;
	objCancel.disabled = false;

}

function fnEditMode(strPersonName, strPersonCode, strAdd) {
	try {
		var objTxtPersonName = document.getElementById('txtPersonName');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		var objSearch = document.getElementById('btnSearch');
		var objCancel = document.getElementById('btnCancel');
		var objPersonCategory = document.getElementById('cboPersonCategory');

		document.getElementById('hdPersonId').value = strPersonCode;
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtPersonName.disabled = false;
			objTxtPersonName.value = strPersonName;
			objAdd.disabled = true;
			objSave.disabled = false;
			objSearch.disabled = true;
			objCancel.disabled = false;
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if
			(strAdd == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objSearch.disabled = false;
			objCancel.disabled = true;
			objHdnEdit.value = "false";
			objTxtPersonName.value = "";
			objTxtPersonName.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "fnEditMode('" + strPersonName + "', '" + strPersonCode + "', '" + strPersonCategory + "')", e);
	}
}

function subfrmPersonSaveDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		var objCancel = document.getElementById('btnCancel');

		objAdd.disabled = true;
		objSave.disabled = true;
		objCancel.disabled = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmPersonSaveDisable()", e);
	}
}

//Code:frmPersonMaintenance Completed Here
//----------------------------------------


function subGetContent(strScriptId, strURL) {
	try {
		var objHead = document.getElementsByTagName("head").item(0);
		var objScript = document.getElementById(strScriptId);
		if (objScript) {
			objHead.removeChild(objScript);
		}
		objScript = document.createElement("script");
		objScript.setAttribute("src", strURL);
		objScript.setAttribute("id", strScriptId);
		objHead.appendChild(objScript);
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subGetContent('" + strScriptId + "', '" + strURL + "')", e);
	}
}

//CODE: for frmAddUser :
//---------------------

function ValidateFormAddUser() {
	try {
		if (frmAddUser.txtLoginId.value == "") {
			alert('Login Id Cannot Be Blank');
			frmAddUser.txtLoginId.focus();
			return false;
		}
		else if (frmAddUser.cboUserGroupId.selectedIndex == 0) {
			alert('Please Select User Type');
			return false;
		}
		else if (frmAddUser.txtPwd) {
			if (frmAddUser.txtPwd.value == "") {
				alert('Please Enter Password');
				frmAddUser.txtPwd.focus();
				return false;
			}
			else if (frmAddUser.txtRetypePwd.value == "") {
				alert('Please Enter Confirmation Password');
				frmAddUser.txtRetypePwd.focus();
				return false;
			}
			else if (frmAddUser.txtPwd.value != frmAddUser.txtRetypePwd.value) {
				alert('Password do not match');
				return false;
			}
		}

		if (frmAddUser.cboUserGroupId.value == "DEBTOR" && frmAddUser.cboDebtor.value == "") {
			alert('Select Debtor from the list');
			frmAddUser.cboDebtor.focus();
			return false;
		}
		frmAddUser.submit();
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateFormAddUser()", e);
	}
}


function ValidateFormAddUserNew() {
	try {
		if (frmAddUserNew.txtLoginId.value == "") {
			alert('Login Id Cannot Be Blank');
			frmAddUser.txtLoginId.focus();
			return false;
		}
		else if (frmAddUserNew.cboUserGroupId.selectedIndex == 0) {
			alert('Please Select User Type');
			return false;
		}
		else if (frmAddUserNew.txtPwd) {
			if (frmAddUserNew.txtPwd.value == "") {
				alert('Please Enter Password');
				frmAddUserNew.txtPwd.focus();
				return false;
			}
			else if (frmAddUserNew.txtRetypePwd.value == "") {
				alert('Please Enter Confirmation Password');
				frmAddUserNew.txtRetypePwd.focus();
				return false;
			}
			else if (frmAddUserNew.txtPwd.value != frmAddUserNew.txtRetypePwd.value) {
				alert('Password do not match');
				return false;
			}
		}

		if (frmAddUserNew.cboUserGroupId.value == "DEBTOR" && frmAddUserNew.cboDebtor.value == "") {
			alert('Select Debtor from the list');
			frmAddUserNew.cboDebtor.focus();
			return false;
		}
		frmAddUserNew.submit();
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateFormAddUserNew()", e);
	}
}


function subDisplayAlert(strLogin) {
	alert("Unable to create '" + strLogin + "'\nAccount Already Exist");
	return false;
}

function subFailedUpdate(strLogin) {
	alert("Unable to Update '" + strLogin + "'\nCannot Change User Level");
	return false;
}

function subSuccess(strLogin, strAdd) {
	try {
		if (strAdd.length == 0) {
			alert(strLogin + " Created Successfully");
		}
		else {
			alert("Role changed successfuly for '" + strLogin + "'");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSuccess('" + strLogin + "', '" + strAdd + "')", e);
	}
}



function ValidateForm() {
	try {
		if (frmChangePassword.txtOldPassword.value == "") {
			alert("Old Password Field Cannot Be Blank");
			frmChangePassword.txtOldPassword.focus();
			return false;
		}
		else if (frmChangePassword.txtNewPwd.value == "") {
			alert("New Password Field Cannot Be Left Blank");
			frmChangePassword.txtNewPwd.focus();
			return false;
		}
		else if (frmChangePassword.txtConfirmPwd.value == "") {
			alert("Confirmation Password Field Cannot Be Left Blank");
			frmChangePassword.txtConfirmPwd.focus();
			return false;
		}
		else if (frmChangePassword.txtNewPwd.value != frmChangePassword.txtConfirmPwd.value) {
			alert("New Password do not match");
			return false;
		}
		else {
			frmChangePassword.submit();
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateForm()", e);
	}

}

function blnCheckOldPassword(strError) {
	alert(strError);
	return false;
}

function subPwdSuccess() {
	alert("Password Updated Successfully");
	window.location.href = 'about:blank';
}

function pwdCancelEditing() {
	window.location.href = 'about:blank';
}

function subDisplayContents(strURL, strParam) {
	if (strParam == "parent") {
		window.location.href = strURL;
	}
	else {
		document.getElementById('frmContent').src = strURL;
	}
}

function subDisplayErr(strErrorStatement) {
	alert(strErrorStatement);
	return false;
}

function subRecordExists() {
	alert("No Records Found !!!");
	return false;
}

function subDisplayMsg() {
	alert("Please Select an Event Type");
	return false;
}

//CODE: For Event Maintenance Form
//--------------------------------
function blnValidateForm() {
	try {
		//	    alert(frmEventMaintenance.cboEventType.selectedIndex);

		//		if(frmEventMaintenance.cboEventType.selectedIndex == 0)
		//		{
		//			alert("Please Select Event Type");
		//			return false;

		//}


		if (frmEventMaintenance.txtSequence.value == "") {
			alert("Sequence Field Cannot Be Left Blank");
			frmEventMaintenance.txtSequence.focus();
			return false;
		}
		else if (isNaN(frmEventMaintenance.txtSequence.value)) {
			alert("Sequence Should be numeric");
			frmEventMaintenance.txtSequence.focus();
			return false;
		}
		else if (frmEventMaintenance.txtEventTitle.value == "") {
			alert("Event Title Cannot Be Left Blank");
			frmEventMaintenance.txtEventTitle.focus();
			return false;
		}
		else if (frmEventMaintenance.cboEventLanguage.selectedIndex == 0) {
			alert("Please Select Language");
			return false;
		}
		else if (frmEventMaintenance.txtShortName.value == "") {
			alert("Short Name Cannot Be Left Blank");
			frmEventMaintenance.txtShortName.focus();
			return false;
		}
		else if (frmEventMaintenance.txtShortCode.value == "") {
			alert("Short Code Cannot Be Left Blank");
			frmEventMaintenance.txtShortCode.focus();
			return false;
		}
		else if (frmEventMaintenance.txtFilmDuration.value == "") {
			alert("Event Duration Cannot Be Left Blank");
			frmEventMaintenance.txtFilmDuration.focus();
			return false;
		}
		else if ((isNaN(frmEventMaintenance.txtFilmDuration.value)) || (frmEventMaintenance.txtFilmDuration.value > 1440)) {
			alert("Invalid Duration Entry \n Please Enter Duartion in mintues");
			frmEventMaintenance.txtFilmDuration.focus();
			return false;
		}
		else if (frmEventMaintenance.cboSKUCode.selectedIndex == 0) {
			alert("Please select appropriate SKU Code");
			frmEventMaintenance.cboSKUCode.focus();
			return false;
		}
		else if (frmEventMaintenance.txtDescription.value == "") {
			alert("Synopsis Field Cannot Be Left Blank");
			frmEventMaintenance.txtDescription.focus();
			return false;
		}
		else if (frmEventMaintenance.txtSellingPoint.value.length > 120) {
			alert("Selling Point can be maximum 120 characters long!!!");
			return false;
		}
		else if (blnGetGenre() == false) {
			alert("Please Select a Genre");
			return false;
		}
		else {
			var blnChkSelectedPerson = blnCheckForDataInList(document.getElementById("lstSelectedPersons"));
			if (blnChkSelectedPerson == false) {
				alert("Crew Member List Cannot Be Empty");
				return false;
			}

			var retVal = blnIsValidDate(frmEventMaintenance.cboDate.value, frmEventMaintenance.cboMonth.value, frmEventMaintenance.cboYear.value);
			if (retVal == false) {
				alert("Invalid Date");
				return false;
			}
		}

		frmEventMaintenance.cmdSubmit.disabled = true;
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateForm()", e);
	}
}

function subFillSearchCntrls() {
	try {
		if (document.getElementById('txtEventTitle').value == "") {
			document.getElementById('txtEventTitle').value = "Event Title";
		}
		if (document.getElementById('txtEventCode').value == "") {
			document.getElementById('txtEventCode').value = "Event Code";
		}
		if (document.getElementById('txtLanguage').value == "") {
			document.getElementById('txtLanguage').value = "Language";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subFillSearchCntrls()", e);
	}
}


function blnIsValidDate(intDay, intMonth, intYear) {
	try {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateForm()", e);
		var arrDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
		var intMonthIndex = parseInt(intMonth - 1);
		if (intYear / 4 == parseInt(intYear / 4)) {
			arrDays[1] = 29;
		}
		if (intDay > arrDays[intMonthIndex]) {
			return false;
		}
		else {
			return true;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnIsValidDate(" + intDay + " , " + intMonth + " , " + intYear + ")", e);
	}
}

function SubmitEventData() {
	try {
		//		if(document.getElementById("tblMovieMaintenance"))
		//	    {
		//	        if(blnValidateForm() == true)
		//	        {
		frmEventMaintenance.submit();
		frmEventMaintenance.cmdSubmit.visible = false;
		//	        }
		//	    }
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "SubmitEventData()", e);
	}
}

function blnGetGenre() {
	try {
		var strGenre = "|"
		var obj = document.getElementById('CheckBoxList1');
		for (var intCount = 0; intCount < obj.rows.length; intCount++) {
			if (obj.rows(intCount).cells(0).firstChild.checked) {
				strGenre = strGenre + obj.rows(intCount).innerHTML + "|";
			}
		}
		if (strGenre.length <= 1) {
			return false;
		}
		frmEventMaintenance.hdnGenre.value = strGenre;
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnGetGenre()", e);
	}
}

function RedirectToListSearch() {
	window.location.href = "ListSearch.aspx";
}

function RedirectToDeleteEventMapping() {
	window.location.href = "DeleteEventMapping.aspx";
}

function subFillPerson() {
	try {
		subClearPersonList(document.getElementById("lstPerson"));
		if (document.getElementById("txtSearchPerson").value.length <= 0) {
			var objList = document.getElementById("lstPerson");
			alert("Please Enter Person Name");
			subClearPersonList(objList);
			blnPopulate = false;
			subDisplayCatButtons();
			return false;
		}

		var strURL = "jxData.aspx?dt=PERSON&pn=" + document.getElementById("txtSearchPerson").value;
		subGetDataAndExecute("Startup", strURL, "subPopulatePerson();");

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subFillPerson()", e);
	}
}

function subPopulatePerson() {
	try {
		var objList = document.getElementById("lstPerson");
		subClearPersonList(objList);
		// alert(arrActors);
		if (arrActors.length <= 0) {
			blnPopulate = false;
			alert("Person Not Found");
			document.getElementById("txtSearchPerson").focus();
			return;
		}
		for (var intCount = 0; intCount < arrActors.length; intCount++) {
			var objOption = document.createElement("option");
			objOption.innerHTML = arrActors[intCount][0];
			objOption.value = arrActors[intCount][1];
			objList.appendChild(objOption);
		}
		if (objList.children.length > 0) {
			blnPopulate = true;
		}
		subDisplayCatButtons();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subPopulatePerson()", e);
	}
}

function subClearPersonList(objList) {
	try {
		for (var intChildCount = 0; intChildCount < objList.children.length; intChildCount++) {
			var a = objList.children(intChildCount--);
			objList.removeChild(a);
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subClearPersonList(" + objList + ")", e);
	}
}

function subSelectPerson(objButton) {
	try {
		var objList = document.getElementById("lstPerson");
		var objSelectedPerson = document.getElementById("lstSelectedPersons");
		var strCategory = objButton.value.toUpperCase();

		switch (strCategory) {
			case 'ACTOR':
				if (objList.children.length <= 0) {
					return false;
				}
				blnSelectedPerson(strCategory);
				break;
			case 'WRITER':
				if (objList.children.length <= 0) {
					return false;
				}
				blnSelectedPerson(strCategory);
				break;
			case 'MUSIC':
				if (objList.children.length <= 0) {
					return false;
				}
				blnSelectedPerson(strCategory);
				break;
			case 'DIRECTOR':
				if (objList.children.length <= 0) {
					return false;
				}
				blnSelectedPerson(strCategory);
				break;
			case 'PRODUCER':
				if (objList.children.length <= 0) {
					return false;
				}
				blnSelectedPerson(strCategory);
				break;
			case 'VOICE':
				if (objList.children.length <= 0) {
					return false;
				}
				blnSelectedPerson(strCategory);
				break;
			case 'REMOVE':
				if (blnCheckSelectedPerson(objSelectedPerson) == false) {
					alert("Please Select a Person to remove");
					return false;
				}
				subRemoveChild(objSelectedPerson);
				break;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSelectPerson(" + objButton + ")", e);
	}
}

function subRemoveChild(objList) {
	try {
		var arrPerson;
		var strSelectedPerson;
		var strSelectedPersonId;
		for (var intCount = 0; intCount < objList.children.length; intCount++) {
			if (objList.item(intCount).selected == true) {
				strSelectedPerson = objList.item(intCount).innerHTML;
				arrPerson = strSelectedPerson.split(":");
				strSelectedPersonId = objList.item(intCount).value;
				subRemoveHiddenFieldValue(arrPerson[0], strSelectedPersonId);
				objList.removeChild(objList.item(intCount));
				if (objList.children.length <= 0) {
					document.getElementById("btnRemove").disabled = true;
					return false;
				}
				return;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subRemoveChild(" + objList + ")", e);
	}
}
function subRemoveHiddenFieldValue(strPersonCategory, strValue) {
	try {
		strValue = strTrimString(strValue + "|")
		var strHiddenFieldId = "hdn" + strPersonCategory;
		strHiddenFieldId = strTrimString(strHiddenFieldId);
		var objHdnCategory = document.getElementById(strHiddenFieldId);
		var strNew = new String(objHdnCategory.value);
		strNew = strTrimString(strNew);
		strNew = strNew.replace(strValue, "");
		strNew = strTrimString(strNew);
		objHdnCategory.value = strNew;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subRemoveHiddenFieldValue(" + strPersonCategory + ", " + strValue + ")", e);
	}
}

function subDisplayCatButtons() {
	try {
		var objList = document.getElementById("lstSelectedPersons");
		var objDiv = document.getElementById("divCategory");
		for (var intCount = 0; intCount < objDiv.children.length; intCount++) {
			if (intCount == objDiv.children.length - 1) {
				if (objList.children.length > 0) {
					blnPopulate = true;
				}
			}
			if (blnPopulate == false) {
				objDiv.children(intCount).disabled = true;
			}
			else {
				objDiv.children(intCount).disabled = false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayCatButtons()", e);
	}
}

function blnSelectedPerson(strCategory) {
	try {
		var strValue = "";
		var strhdnValue, strhdnText;
		var value = "";
		var strHidden = "hdn" + strCategory;
		var objHdn = document.getElementById(strHidden);
		var objPersonList = document.getElementById("lstPerson");
		if (blnCheckSelectedPerson(objPersonList) == false) {
			alert("Please Select a person");
			return false;
		}

		var objSelectedPersons = document.getElementById("lstSelectedPersons");

		for (var intCount = 0; intCount < objPersonList.children.length; intCount++) {
			if (objPersonList.item(intCount).selected == true) {
				strValue = strCategory + " : " + objPersonList.item(intCount).innerHTML;
				strhdnValue = objPersonList.item(intCount).value;
				var blnFound = false;
				for (var intCountSelected = 0; intCountSelected < objSelectedPersons.children.length; intCountSelected++) {
					var objT = objSelectedPersons.item(intCountSelected);
					if (objT.innerHTML == strValue) {
						blnFound = true;
						break;
					}
				}
				if (!blnFound) {
					var obj = document.createElement("option");
					obj.innerHTML = strValue;
					obj.value = strhdnValue;
					objSelectedPersons.appendChild(obj);
					value = strhdnValue + "|";
					objHdn.value = objHdn.value + value;
				}
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnSelectedPerson(" + strCategory + ")", e);
	}
}

function blnCheckSelectedPerson(objList) {
	try {
		for (var intCount = 0; intCount < objList.children.length; intCount++) {
			if (objList.item(intCount).selected == true) {
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckSelectedPerson(" + objList + ")", e);
	}

}

function blnCheckForDataInList(objList) {
	try {
		if (objList.children.length <= 0) {
			return false;
		}
		else {
			return true;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForDataInList(" + objList + ")", e);
	}
}

/*function SubmitEventData()
{
try
{
if(objList.children.length <= 0)
{
return false;
}
else
{
return true;
}
}
catch(e)
{
subDisplayError("BackOfficeModuleCode.js", "blnCheckForDataInList(" + objList + ")", e);  
}
}*/

function subSetSearchControls(strDisplayText) {
	objtxtEventTitle = document.getElementById("txtEventTitle");
	objtxtEventCode = document.getElementById("txtEventCode");
	objtxtLanguage = document.getElementById("txtLanguage");

	if (objtxtEventTitle.value == strDisplayText)
		objtxtEventTitle.value = '';
	else if (objtxtEventTitle.value.length == 0)
		objtxtEventTitle.value = 'Event Title';

	if (objtxtEventCode.value == strDisplayText)
		objtxtEventCode.value = '';
	else if (objtxtEventCode.value.length == 0)
		objtxtEventCode.value = 'Event Code';

	if (objtxtLanguage.value == strDisplayText)
		objtxtLanguage.value = '';
	else if (objtxtLanguage.value.length == 0)
		objtxtLanguage.value = 'Language';

}

function subValidate3PReviews() {
	if (frmEventMaintenance.txtTPRTitle.value == "") {
		alert("Review Title can not be left blank");
		return false;
	}

	if (frmEventMaintenance.txtTPRName.value == "") {
		alert("Reviewer Name can not be left blank");
		return false;
	}

	if (frmEventMaintenance.ddlTPRRating.selectedIndex == 0) {
		alert("Please Select Review Rating");
		return false;
	}

	if (frmEventMaintenance.txtTPRReview.value == "") {
		alert("Review can not be left blank");
		return false;
	}
	subAddUpdate3PReviews();
}

function subAddUpdate3PReviews() {
	objtxt3PReviews = document.getElementById("hdn3PReviews");
	if (objtxt3PReviews.value.length == 0) {
		objtxt3PReviews.value = "<REVIEWS></REVIEWS>";
	}

	var str3PRTitle = strTrim(document.getElementById("txtTPRTitle").value.replace(/\'/g, '`').replace(/\"/g, '`'));
	var str3PRName = strTrim(document.getElementById("txtTPRName").value.replace(/\'/g, '`').replace(/\"/g, '`'));
	var str3PRRating = strTrim(document.getElementById("ddlTPRRating").value.replace(/\'/g, '`').replace(/\"/g, '`'));
	var str3PRURL = strTrim(document.getElementById("txtTPRURL").value.replace(/\'/g, '`').replace(/\"/g, '`'));
	var str3PRReview = strTrim(document.getElementById("txtTPRReview").value.replace(/\'/g, "`").replace(/\"/g, '`'));

	var strReview = "<SEQNO>{%SeqNo%}</SEQNO>"
	strReview += "<TITLE>" + str3PRTitle + "</TITLE>"
	strReview += "<NAME>" + str3PRName + "</NAME>"
	strReview += "<RATING>" + str3PRRating + "</RATING>"
	strReview += "<URL>" + str3PRURL + "</URL>"
	strReview += "<REVIEWTEXT>" + str3PRReview + "</REVIEWTEXT>"

	var strReviewXML = "<REVIEW>" + strReview + "</REVIEW>";
	var strEditReview = frmEventMaintenance.hdn3PRSelReview.value;
	var intSeqNo = 0;
	if (strEditReview.length > 0) {
		intSeqNo = strEditReview.substring(strEditReview.indexOf("<SEQNO>") + 7, strEditReview.indexOf("</SEQNO>"));
		strReviewXML = strReviewXML.replace("{%SeqNo%}", intSeqNo);
		objtxt3PReviews.value = objtxt3PReviews.value.replace(strEditReview, strReviewXML);
		subAddUpdate3PReviewList("U", str3PRTitle, str3PRName, str3PRRating, str3PRURL, str3PRReview, strReviewXML, intSeqNo);
	}
	else {
		if (objtxt3PReviews.value == "<REVIEWS></REVIEWS>") {
			intSeqNo = 1
		}
		else if (objtxt3PReviews.value.indexOf('<REVIEWS />') > -1) {
			intSeqNo = 1
		}
		else {
			intSeqNo = objtxt3PReviews.value.substring(objtxt3PReviews.value.lastIndexOf("<SEQNO>") + 7, objtxt3PReviews.value.lastIndexOf("</SEQNO>"));
			intSeqNo = parseInt(intSeqNo) + 1;
		}
		strReviewXML = strReviewXML.replace("{%SeqNo%}", intSeqNo);
		if (objtxt3PReviews.value.indexOf('<REVIEWS />') > -1)
			objtxt3PReviews.value = objtxt3PReviews.value.replace("<REVIEWS />", "<REVIEWS>" + strReviewXML + "</REVIEWS>");
		else
			objtxt3PReviews.value = objtxt3PReviews.value.replace("</REVIEWS>", strReviewXML + "</REVIEWS>");
		subAddUpdate3PReviewList("A", str3PRTitle, str3PRName, str3PRRating, str3PRURL, str3PRReview, strReviewXML, intSeqNo);
	}
	subClear3PReviews();
}

function subClear3PReviews() {
	frmEventMaintenance.txtTPRTitle.value = "";
	frmEventMaintenance.txtTPRName.value = "";
	frmEventMaintenance.ddlTPRRating.selectedIndex = 0;
	frmEventMaintenance.txtTPRURL.value = "";
	frmEventMaintenance.txtTPRReview.value = "";
	frmEventMaintenance.hdn3PRSelReview.value = "";
}

function subAddUpdate3PReviewList(strCallType, strReviewTitle, strReviewerName, strRating, strURL, strReview, strReviewXML, intSeqNo) {
	objDivReviewList = document.getElementById("div3PReviewList");
	var strEditAncPrefix = "a3PReview_Ed", strDelAncPrefix = "a3PReview_Dl";

	if (strCallType == "A") {
		var strNewHtml = "<a id=\"" + strEditAncPrefix + intSeqNo + "\" class='rev'";
		strNewHtml += "style=\"text-decoration:underline; color:Blue;\" ";
		strNewHtml += "onclick=\"subEdit3PReview(this, '" + strReviewTitle + "', '" + strReviewerName + "', '" + strRating + "', '" + strURL + "', '" + strReview + "','" + strReviewXML + "');\">";
		strNewHtml += "Edit</a>&nbsp;";

		strNewHtml += "<a id=\"" + strDelAncPrefix + intSeqNo + "\" class='rev'";
		strNewHtml += "style=\"text-decoration:underline; color:Blue;\" ";
		strNewHtml += "onclick=\"subDelete3PReview('" + strReviewXML + "', '" + strEditAncPrefix + intSeqNo + "');\">";
		strNewHtml += "Delete</a>&nbsp;&nbsp;";
		strNewHtml += strReviewTitle + " - " + strReviewerName + "<br />";

		objDivReviewList.innerHTML = objDivReviewList.innerHTML + strNewHtml;
	}
	else {
		var aList = objDivReviewList.getElementsByTagName('a');
		for (var i = 0; i < aList.length; i++) {
			if (aList[i].id == strEditAncPrefix + intSeqNo) {
				aList[i].setAttribute("onclick", "subEdit3PReview(this, '" + strReviewTitle + "', '" + strReviewerName + "', '" + strRating + "', '" + strURL + "', '" + strReview + "','" + strReviewXML + "')");
			}

			if (aList[i].id == strDelAncPrefix + intSeqNo) {
				aList[i].setAttribute("onclick", "subDelete3PReview('" + strReviewXML + "', '" + strEditAncPrefix + intSeqNo + "')");

				var intStartIdx = -1, intEndIdx = -1;
				intStartIdx = objDivReviewList.innerHTML.indexOf(aList[i].outerHTML) + aList[i].outerHTML.length;
				intEndIdx = objDivReviewList.innerHTML.indexOf("<BR>", intStartIdx);
				objDivReviewList.innerHTML = objDivReviewList.innerHTML.replace(objDivReviewList.innerHTML.substring(intStartIdx, intEndIdx), "&nbsp;&nbsp;" + strReviewTitle + " - " + strReviewerName);
			}
		}

		subSetReviewLinkText();
	}
}

function subEdit3PReview(objLink, strReviewTitle, strReviewerName, strRating, strURL, strReview, strReviewXML) {
	if (objLink.innerHTML == "Edit") {
		subSetReviewLinkText(objLink);

		frmEventMaintenance.txtTPRTitle.value = strReviewTitle;
		frmEventMaintenance.txtTPRName.value = strReviewerName;
		frmEventMaintenance.txtTPRURL.value = strURL;
		frmEventMaintenance.txtTPRReview.value = strReview;
		frmEventMaintenance.hdn3PRSelReview.value = strReviewXML;

		objcboRating = document.getElementById("ddlTPRRating");
		for (var intIndex = 0; intIndex < objcboRating.length; intIndex++) {
			if (objcboRating.options[intIndex].value == strRating) {
				objcboRating.options[intIndex].selected = true;
			}
		}
	}
	else {
		objLink.innerHTML = "Edit";
		subClear3PReviews();
	}
}

function subDelete3PReview(strReviewXML, strEditAncId) {
	if (confirm("Do you want to Delete this Review???")) {
		objtxt3PReviews = document.getElementById("hdn3PReviews");
		objtxt3PReviews.value = objtxt3PReviews.value.replace(strReviewXML, "");

		var objDivReviewList = document.getElementById("div3PReviewList");
		var aList = objDivReviewList.getElementsByTagName('a');
		var strAncHTML = "", intStartIdx = 0, intEndIdx = 0;
		for (var i = 0; i < aList.length; i++) {
			if (aList[i].id == strEditAncId) {
				strAncHTML = aList[i].outerHTML;
				intStartIdx = objDivReviewList.innerHTML.indexOf(strAncHTML);
				intEndIdx = objDivReviewList.innerHTML.indexOf("<BR>", intStartIdx) + 4;
				break;
			}
		}
		objDivReviewList.innerHTML = objDivReviewList.innerHTML.replace(objDivReviewList.innerHTML.substring(intStartIdx, intEndIdx), "");
		subClear3PReviews();
	}
}

function subSetReviewLinkText(objLink) {
	var aList = document.getElementById("div3PReviewList").getElementsByTagName('a');
	for (var i = 0; i < aList.length; i++) {
		if (aList[i].innerHTML == "Cancel")
			aList[i].innerHTML = "Edit"
	}

	if (objLink != null) {
		objLink.innerHTML = "Cancel"
	}
}

//END OF Event Maintenance Code 
//-----------------------------


//Code For AddVenue.aspx
//-----------------------

function blnValidateVenueForm() {
	try {
		//	    if(frmVenueMaintenance.txtVenueId.value == "")
		//	    {
		//		    alert("Cinema Id Field Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtVenueId.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtVenueName.value == "")
		//	    {
		//		    alert("Cinema Name Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtVenueName.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtScreenList.value == "")
		//	    {
		//	        alert("Screen List Cannot Be Left Blank");
		//	        frmVenueMaintenance.txtScreenList.focus();
		//	        return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtWebServiceURL.value == "")
		//	    {
		//		    alert("WebServiceURL Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtWebServiceURL.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtWebServiceLogin.value == "")
		//	    {
		//		    alert("WebService Login Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtWebServiceLogin.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtWebServicePswd.value == "")
		//	    {
		//		    alert("WebService Password Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtWebServicePswd.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtWebServiceDomain.value == "")
		//	    {
		//		    alert("WebService Domain Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtWebServiceDomain.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtWebServiceTimeOut.value == "")
		//	    {
		//		    alert("WebService TimeoOut Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtWebServiceTimeOut.focus();
		//		    return false;
		//	    }
		//	    else if(isNaN(frmVenueMaintenance.txtWebServiceTimeOut.value))
		//	    {
		//		    alert("Invalid WebService TimeOut Entry \n Please Enter WebService TimeOut in Numeric");
		//		    frmVenueMaintenance.txtWebServiceTimeOut.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtSyncSequence.value == "")
		//	    {
		//		    alert("Sync Sequence Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtSyncSequence.focus();
		//		    return false;
		//	    }
		//	    else if(isNaN(frmVenueMaintenance.txtSyncSequence.value))
		//	    {
		//		    alert("Invalid Sync Sequence Entry \n Please Enter Sync     Sequence in Numeric");
		//		    frmVenueMaintenance.txtSyncSequence.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtCompanyCode.value == "")
		//	    {
		//		    alert("Company Code Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtCompanyCode.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtLicenseCode.value == "")
		//	    {
		//		    alert("License Code Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtLicenseCode.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtPayType.value == "")
		//	    {
		//		    alert("Pay Type Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtPayType.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.cboCinemaSubRegion.selectIndex == 0)
		//	    {
		//	        alert("Sub-Region Cannot Be Left Blank");
		//	        return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtPGCharge.value == "")
		//        {
		//            alert("PGCharges Cannot Be Left Blank");
		//            frmVenueMaintenance.txtPGCharge.focus();
		//            return false;
		//        }
		//        else if(isNaN(frmVenueMaintenance.txtPGCharge.value))
		//        {
		//	        alert("Invalid PGCharge Entry \n Please Enter PGCharge in Numeric");
		//	        frmVenueMaintenance.txtPGCharge.focus();
		//	        return false;
		//        }
		//        else if(frmVenueMaintenance.txtPayableTo.value == "")
		//        {
		//	        alert("PayableTo Cannot Be Left Blank");
		//	        frmVenueMaintenance.txtPayableTo.focus();
		//	        return false;
		//        }
		//	    else if(frmVenueMaintenance.txtareaMessage1.value == "")
		//	    {
		//		    alert("Message1 Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtMessage1.focus();
		//		    return false;
		//	    }
		//	    else if(frmVenueMaintenance.txtareaMessage2.value == "")
		//	    {
		//		    alert("Message2 Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtMessage2.focus();
		//		    return false;
		//	    }		
		//	    else if(frmVenueMaintenance.txtLogoFile.value == "")
		//	    {
		//		    alert("Logo File Cannot Be Left Blank");
		//		    frmVenueMaintenance.txtLogoFile.focus();
		//		    return false;
		//	    }
		//	    else if(blnGetCinemaLegends() == false)
		//		{
		//			 alert("Please Select a Legend");
		//			 return false;
		//		}


		//	        var re = new RegExp("?:180|(?:1[0-7]\d)|(?:\d?\d))([ -/])[0-5]?\d\1[0-5]?\d(\.\d{1,4})?\1[EW]");
		//	        if (frmVenueMaintenance.txtLongitude.value.match(re)) {
		//	            alert("Successful match");
		//	        } else {
		//	            alert("No match");

		//	        }


		if (frmVenueMaintenance.txtAddress.length > 200) {
			alert("Address can not have more than 200 charactes.");
			frmVenueMaintenance.txtAddress.focus();
			return false;
		}

		//var strLongitute = frmVenueMaintenance.txtLongitude.value.toString();
		if (frmVenueMaintenance.txtLongitude.value == "") {
			alert("Please enter Longitude!!");
			return false;
		}
		var strLongitute = frmVenueMaintenance.txtLongitude.value.toString();
		if (frmVenueMaintenance.txtLongitude.value.indexOf(".") == (strLongitute.length - 1)) {
			alert("Please enter valid Longitute!!");
			return false;
		}
		if (isNaN(strLongitute)) {
			alert("Please enter valid Longitute!!");
			return false;
		}
		if (strLongitute.length > 11) {
			alert("Longitude should not be more then 11 character!!!");
			return false;
		}
		if (frmVenueMaintenance.txtLongitude.value.indexOf(".") < 1) {
			alert("Please enter valid Longitute!!");
			return false;
		}


		var strLatitude = frmVenueMaintenance.txtLatitude.value.toString();
		if (frmVenueMaintenance.txtLatitude.value == "") {
			alert("Please enter Latitude!!");
			return false;
		}
		if (frmVenueMaintenance.txtLatitude.value.indexOf(".") < 1) {
			alert("Please enter valid Latitude!!");
			return false;
		}
		if (frmVenueMaintenance.txtLatitude.value.indexOf(".") == (strLatitude.length - 1)) {
			alert("Please enter valid Latitude!!");
			return false;
		}
		if (strLatitude.length > 11) {
			alert("Longitude should not be more then 11 character !!!");
			return false;
		}
		//var strLatitude = frmVenueMaintenance.txtLatitude.value;
		if (isNaN(strLatitude)) {
			alert("Please enter valid Latitude!!");
			return false;
		}

		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateVenueForm()", e);
	}
}


function SubmitVenueData() {
	try {
		if (document.getElementById("tblVenueMaintenance")) {
			if (blnValidateVenueForm() == true) {
				frmVenueMaintenance.submit();
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "SubmitVenueData()", e);
	}
}

function RedirectToDefaultVenue() {
	window.location.href = "Venue.aspx";
}



function RedirectToDefaultVoucher() {
	window.location.href = "NewVoucherRequest.aspx";
}

function blnGetCinemaLegends() {
	try {
		var strCinemaLegends = "|"
		var obj = document.getElementById('CheckBoxListLegends');
		for (var intCount = 0; intCount < obj.rows.length; intCount++) {
			if (obj.rows(intCount).cells(0).firstChild.checked) {
				strCinemaLegends = strCinemaLegends + obj.rows(intCount).innerHTML + "|";
			}
		}
		if (strCinemaLegends.length <= 1) {
			return false;
		}
		frmVenueMaintenance.hdnLegends.value = strCinemaLegends;
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnGetCinemaLegends()", e);
	}
}

//END OF AddVenue.aspx
//--------------------




//Code For UpdateVenue.aspx
//-------------------------

function blnValidateUpdateVenueForm() {
	try {
		if (frmUpdateVenue.txtPGCharge.value == "") {
			alert("PGCharges Cannot Be Left Blank");
			frmUpdateVenue.txtPGCharge.focus();
			return false;
		}
		else if (isNaN(frmUpdateVenue.txtPGCharge.value)) {
			alert("Invalid PGCharge Entry \n Please Enter PGCharge in Numeric");
			frmUpdateVenue.txtPGCharge.focus();
			return false;
		}
		else if (frmUpdateVenue.txtPayableTo.value == "") {
			alert("PayableTo Cannot Be Left Blank");
			frmUpdateVenue.txtPGCharge.focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateUpdateVenueForm()", e);
	}
}


function SubmitVenueEditData() {
	try {
		if (document.getElementById("tblUpdateVenue")) {
			if (blnValidateUpdateVenueForm() == true) {
				frmUpdateVenue.submit();
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "SubmitVenueEditData()", e);
	}
}

function RedirectToUpdateVenue() {
	window.location.href = "VenueEdit.aspx";
}


//End Of UpdateVenue.aspx
//-----------------------



//Code For PastEventList.aspx
//---------------------------


function subLoadPastEventArray() {
	try {
		var strURL = "../jx.aspx?dt=PEL";
		subGetDataAndExecute("Startup", strURL, "subDisplayPastEvents()");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subLoadPastEventArray()", e);
	}
}

function subDisplayPastEvents() {
	var objTB = document.getElementById("tbPastEventList");
	var objList = document.getElementById('cboPastEvent');
	var strValue = objList.value;
	switch (strValue) {
		case "A":
			var objTR = document.createElement("TR");
			for (var intCount = 0; intCount < arrPastEventsList.length; intCount++) {
				for (var intCountIndex = 0; intCountIndex < arrPastEventsList[intCount].length; intCountIndex++) {
					if (arrPastEventsList[intCount][intCountIndex].toUpperCase() == "Y") {
						var objTD = document.createElement("TD");
						var objChk = document.createElement("input");
						objChk.type = "checkbox";
						objChk.id = "chk_" + arrPastEventsList[intCount][0];
						objTD.appendChild(objChk);
						objTR.appendChild(objTD);

					}
					else {
						var objTD = document.createElement("TD");
						objTD.innerHTML = arrPastEventsList[intCount][intCountIndex];
						objTR.appendChild(objTD);
					}

				}
				//alert(objTR.innerHTML);
				objTB.appendChild(objTR);
			}
			break;
		case "ALL":
			alert("ALL");
			break;
	}
}

function subGetSeletedValue() {
	var objTBody = document.getElementById('tbPastEventList');
	//alert(objTBody.rows.length);
	var strEventId;

	for (var intRowsCount = 1; intRowsCount < objTBody.rows.length; intRowsCount++) {
		var objhdneventCode = document.getElementById('hdnEventCode');
		strEventId = objTBody.rows(intRowsCount).cells(4).firstChild.id;
		if (objTBody.rows(intRowsCount).cells(4).firstChild.checked == true) {
			strEventId = strEventId.replace("chk_", "");
			objhdneventCode.value = objhdneventCode.value + "|" + strEventId;
		}
	}
	objhdneventCode.value = objhdneventCode.value + "|";
	alert(objhdneventCode.value);
	return false;
}

//END Of PasteventList.aspx Code
//------------------------------


function subRedirectToDefault() {

	parent.location.href = "default.aspx?LOGOUT";
}

//CODE: For Discount Maintenance Form
//-----------------------------------


function blnValidateDiscountForm() {
	try {
		if (frmDiscountMaintenance.txtDiscountName.value == "") {
			alert("Discount Name Cannot Be Left Blank");
			frmDiscountMaintenance.txtDiscountName.focus();
			return false;
		}
		if (frmDiscountMaintenance.cboDiscountType.selectedIndex == 0) {
			alert("Please Select Discount Type");
			return false;
		}
		if (frmDiscountMaintenance.dtStartDate.value == "") {
			alert("Please select a valid Date for Discount Valid From");
			frmDiscountMaintenance.dtStartDate.focus();
			return false;
		}
		if (frmDiscountMaintenance.cboDiscountPrcTyp.selectedIndex == 0) {
			alert("Please select a Discount Price Type");
			return false;
		}
		if (frmDiscountMaintenance.txtDiscountPrice1.value == "") {
			alert("Discount Price Value1 Cannot Be Left Blank");
			frmDiscountMaintenance.txtDiscountPrice1.focus();
			return false;
		}
		else if (isNaN(frmDiscountMaintenance.txtDiscountPrice1.value)) {
			alert("Price Value1 Should be numeric");
			frmDiscountMaintenance.txtDiscountPrice1.focus();
			return false;
		}
		if (frmDiscountMaintenance.txtDiscountPrice2.value == "") {
			if (frmDiscountMaintenance.cboDiscountPrcTyp.selectedIndex == 4) {
				alert("Discount Price Value2 Cannot Be Left Blank For Discount Price Type 'Buy Ticket/s Get Ticket/s' ")
				return false;
			}
			if (frmDiscountMaintenance.cboDiscountPrcTyp.selectedIndex == 5) {
				alert("Discount Price Value2 Cannot Be Left Blank For Discount Price Type 'Buy Ticket/s Get Food' ")
				return false;
			}
			if (frmDiscountMaintenance.cboDiscountPrcTyp.selectedIndex == 6) {
				alert("Discount Price Value2 Cannot Be Left Blank For Discount Price Type 'Buy Value of Tickets Get Food' ")
				return false;
			}
		}
		else if (isNaN(frmDiscountMaintenance.txtDiscountPrice2.value)) {
			alert("Price Value2 Should be numeric");
			frmDiscountMaintenance.txtDiscountPrice2.focus();
			return false;
		}
		if (frmDiscountMaintenance.txtLimitMaxVal.value == "") {
			alert("Limit Max Value Cannot Be Left Blank");
			frmDiscountMaintenance.txtLimitMaxVal.focus();
			return false;
		}
		if (isNaN(frmDiscountMaintenance.txtLimitMaxVal.value)) {
			alert("Limit Max Value Should be numeric");
			frmDiscountMaintenance.txtLimitMaxVal.focus();
			return false;
		}
		//		else if(frmDiscountMaintenance.txtLimitUsdVal.value == "")
		//		{
		//			alert("Limit Used Value Cannot Be Left Blank. Insert 0");
		//			frmDiscountMaintenance.txtLimitUsdVal.focus();
		//			return false;
		//		}
		if (isNaN(frmDiscountMaintenance.txtLimitUsdVal.value)) {
			alert("Limit Used Value Should be numeric");
			frmDiscountMaintenance.txtLimitUsdVal.focus();
			return false;
		}
		frmDiscountMaintenance.cmdSubmit.disabled = true;
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateDiscountForm()", e);
	}
}

function SubmitDiscountData() {
	try {
		if (document.getElementById("tblDiscountMaintenance")) {
			if (blnValidateDiscountForm() == true) {
				frmDiscountMaintenance.submit();
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "SubmitDiscountData()", e);
	}
}

function RedirectToDiscounts() {
	window.location.href = "Discounts.aspx";
}

function RedirectToDefaultDiscount() {
	window.location.href = "Discounts.aspx";
}


//END OF Discount Maintenance Code 
//--------------------------------

//Code: frmDiscountFilters Code:
//-------------------------------

function subfrmDiscountFiltersBtnEnable() {
	try {
		frmDiscountFilters.txtFilterCode.disabled = false;
		frmDiscountFilters.txtFilterCode.readOnly = false;
		frmDiscountFilters.txtFilterCode.focus();
		frmDiscountFilters.btnSave.disabled = false;
		frmDiscountFilters.btnAdd.disabled = true;
		frmDiscountFilters.hdDelete.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmDiscountFiltersBtnEnable()", e);
	}

}

function subDisplayControls() {
	try {
		frmDiscountFilters.btnSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayControls()", e);
	}
}

function blnValidatefrmDiscountFilters() {
	try {
		if (frmDiscountFilters.cboDiscountName.selectedIndex == 0) {
			alert("Please Select Discount Name");
			return false;
		}
		if (frmDiscountFilters.cboDiscountFilter.selectedIndex == 0) {
			alert("Please Select Discount Filter");
			return false;
		}
		if (frmDiscountFilters.txtFilterCode.value.length <= 0) {
			alert("Filter Code Cannot be left blank");
			frmDiscountFilters.txtFilterCode.focus();
			return false;
		}
		if (frmDiscountFilters.hdEdit.value == "false") {
			if (blnCheckForFilterCode(frmDiscountFilters.txtFilterCode.value.toUpperCase()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmDiscountFilters()", e);
	}
	return true;
}

function blnCheckForFilterCode(strFilterCode) {
	try {
		var objTbody = gvDiscountFilters;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountRows).cells(0).innerHTML.toUpperCase() == strFilterCode.toUpperCase()) {
				alert("This Code Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForFilterCode('" + strFilterCode + "')", e);
	}
}

function subDiscountFiltersMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDiscountFiltersMessage(" + objPage.id + ")", e);
	}
}

function subSaveDiscountFiltersDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');

		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveDiscountFiltersDisable()", e);
	}

}

//function frmDisFiltrfunDeleteMode(strDiscountId, strFilterKey, strFilterCode, strAddAccess)
//{
//    try
//    {
//        var objcboDiscountName = document.getElementById('cboDiscountName');
//        var objcboDiscountFilter = document.getElementById('cboDiscountFilter');
//        var objTxtFilterCode = document.getElementById('txtFilterCode');
//        var objAdd = document.getElementById('btnAdd');
//        var objSave = document.getElementById('btnSave');
//        var objHdnDelete = document.getElementById('hdDelete');    
//        strCommandName = event.srcElement.innerHTML;
//        if(strCommandName == "Delete")
//         {
//           //string strSQL = "Delete from tblDiscounts_Filters where Discount_strId='" + strDiscountId + "' and Filter_strKey='" + strFilterKey + "' and Filter_strCode='" + strFilterCode + "'";
//           
//            objHdnEdit.value = "true";
//            objcboDiscountName.value = strDiscountId;
//            objcboDiscountFilter.value = strFilterKey;
//            objTxtFilterCode.disabled = false;
//            objTxtFilterCode.value = strFilterCode;
//            objAdd.disabled = true;
//            objSave.disabled = false;     
//            event.srcElement.innerHTML = "Cancel";    
//            
//            var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
//            for(var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++)
//            {
//                if(objTbody.rows(intCountRows).cells(3).firstChild.id != event.srcElement.id)
//                {
//                    objTbody.rows(intCountRows).cells(3).firstChild.innerHTML = "Delete";
//                }
//            }
//        }
//        else
//        {
//            if(strAddAccess == "No")
//            {
//			    objAdd.disabled = true;
//		    }
//		    else
//		    {
//		        objAdd.disabled = false;
//		    }
//		    
//		    
//            objSave.disabled = true;
//            objHdnDelete.value = "false";
//            objcboDiscountName.selectedIndex = 0;
//		    objcboDiscountFilter.selectedIndex = 0;
//            objTxtFilterCode.value = "";
//            objTxtFilterCode.disabled = true;
//            event.srcElement.innerHTML = "Delete";    
//        }   
//    }
//    catch(e)
//    {
//        subDisplayError("BackOfficeModuleCode.js", "frmDisFiltrfunDeleteMode('" + strDiscountId + "', '" + strFilterCode + "')", e);
//    }
//}



//Code For frmDiscountFilters Completed HERE
//---------------------------------------------


//Code: frmPromoCodeGeneration Code:
//----------------------------------


function blnValidatefrmPromoCodeGeneration() {
	try {
		if (frmPromoCodeGeneration.cboDiscountName.selectedIndex == 0) {
			alert("Please Select Discount Name");
			return false;
		}

		if (frmPromoCodeGeneration.txtQuantity.value.length <= 0) {
			alert("Filter Code Cannot be left blank");
			frmPromoCodeGeneration.txtQuantity.focus();
			return false;
		}

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmPromoCodeGeneration()", e);
	}
	return true;
}

function subPromoCodeSuccess() {
	alert("Promo Codes Generated Successfully");
	window.location.href = 'about:blank';
}

function subPromoCodeFail() {
	alert("Promo Code Generation Failed");
	window.location.href = 'about:blank';
}


//Code For frmPromoCodeGeneration Completed HERE
//---------------------------------------------


//Code: frmGvValuePack Code:
//--------------------------

function subfrmGvValuePackBtnEnable() {
	try {
		frmGvValuePack.txtGvValue.disabled = false;
		frmGvValuePack.txtGvValue.readOnly = false;
		frmGvValuePack.txtGvValue.focus();
		frmGvValuePack.btnSave.disabled = false;
		frmGvValuePack.btnAdd.disabled = true;
		frmGvValuePack.hdEdit.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmGvValuePackBtnEnable()", e);
	}

}

function subfrmGvOccasionBtnEnable() {
	try {
		frmGVOccasion.txtOccasionName.disabled = false;
		frmGVOccasion.txtOccasionName.readOnly = false;
		frmGVOccasion.txtOccasionName.focus();
		frmGVOccasion.btnSave.disabled = false;
		frmGVOccasion.btnAdd.disabled = true;
		frmGVOccasion.hdEdit.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmGvValuePackBtnEnable()", e);
	}

}

function blnValidatefrmGvValuePack() {
	try {
		if (frmGvValuePack.txtGvValue.value.length <= 0) {
			alert("Value Field Cannot be left blank");
			frmGvValuePack.txtGvValue.focus();
			return false;
		}
		if (frmGvValuePack.hdEdit.value == "false") {
			if (blnCheckForGvValuePack(frmGvValuePack.txtGvValue.value.toString()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmGvValuePack()", e);
	}
	return true;
}

function subGVMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subGvValuePackMessage(" + objPage.id + ")", e);
	}
}

function subSaveGvDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');

		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveGvDisable(strAddAccess)", e);
	}

}

function blnCheckForGvValuePack(strGvValuePack) {
	try {
		var objTbody = tblGvValuePackRec;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountrows).cells(0).innerHTML.toString() == strGvValuePack.toString()) {
				alert("This Value Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForGvValuePack('" + strGvValuePack + "')", e);
	}
}

function frmGvValuePackfunEditMode(strGvValuePack, strStatus, strAddAccess) {
	try {
		var objTxtGvValue = document.getElementById('txtGvValue');
		var objcboValuePackStatus = document.getElementById('cboValuePackStatus');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtGvValue.value = strGvValuePack;
			objTxtGvValue.disabled = false;
			objTxtGvValue.readOnly = true;

			objcboValuePackStatus.value = strStatus;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtGvValue.value = "";

			objcboValuePackStatus.selectedIndex = 0;
			objTxtGvValue.disabled = true;

			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmGvValuePackfunEditMode('" + strGvValuePack + "', '" + strStatus + "')", e);
	}
}

function strReplace(strData, strFindString, strReplaceString) {
	try {
		while (strData.search(strFindString) > 0) {
			strData = strData.replace(strFindString, strReplaceString)
		}

		return strData;
	} catch (e) {
		subDisplayError("MiscCode.js", "strReplace('" + strData + "', '" + strFindString + "', '" + strReplaceString + "');", e);
	}
	return strData;
}

function frmGvOccasionfunEditMode(strGvOccasion, strStatus, strAddAccess) {
	try {
		strGvOccasion = strReplace(strGvOccasion, "\"", "'")
		var objTxtGvOccasion = document.getElementById('txtOccasionName');
		var objcboStatus = document.getElementById('cboOccasionStatus');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtGvOccasion.value = strGvOccasion;
			objTxtGvOccasion.disabled = false;
			objTxtGvOccasion.readOnly = true;

			objcboStatus.value = strStatus;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtGvOccasion.value = "";

			objcboStatus.selectedIndex = 0;
			objTxtGvOccasion.disabled = true;

			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmGvOccasionfunEditMode('" + strGvOccasion + "', '" + strStatus + "')", e);
	}
}
//Code For frmGvValuePack Completed HERE
//--------------------------------------



//Code: frmGVCodeGeneration Code:
//-------------------------------

function blnValidatefrmGVCodeGeneration() {
	try {
		if (frmGVCodeGeneration.cboGvValue.selectedIndex == 0) {
			alert("Please Select Discount Name");
			return false;
		}

		if (frmGVCodeGeneration.txtGVQuantity.value.length <= 0) {
			alert("Filter Code Cannot be left blank");
			frmGVCodeGeneration.txtGVQuantity.focus();
			return false;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmGVCodeGeneration()", e);
	}
	return true;
}


//Code For frmGVCodeGeneration Completed HERE
//-------------------------------------------


//Code: frmPromoCodeMaintenance Code:
//-----------------------------------

function subfrmPromoCodeMaintenanceBtnEnable() {
	try {
		frmPromoCodeMaintenance.txtQuantityPc.disabled = false;
		frmPromoCodeMaintenance.txtQuantityPc.readOnly = true;
		frmPromoCodeMaintenance.txtQtyUse.disabled = false;
		frmPromoCodeMaintenance.txtQtyUse.readonly = false;
		frmPromoCodeMaintenance.txtQtyUse.focus();
		frmPromoCodeMaintenance.btnSave.disabled = false;
		frmPromoCodeMaintenance.btnEdit.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmPromoCodeMaintenanceBtnEnable()", e);
	}

}

function blnValidatefrmPromoCodeMaintenance() {
	try {
		if (frmPromoCodeMaintenance.txtQtyUse.value.length <= 0) {
			alert("No of Promo Codes to be Used field cannot be left blank");
			frmPromoCodeMaintenance.txtQtyUse.focus();
			return false;
		}
		if (isNaN(frmPromoCodeMaintenance.txtQtyUse.value)) {
			alert("Value for No of Promo Codes to be Used Should be numeric");
			frmPromoCodeMaintenance.txtQtyUse.focus();
			return false;
		}
		if (parse.Int(frmPromoCodeMaintenance.txtQtyUse.value) > parse.Int(frmPromoCodeMaintenance.txtQuantityPc.value)) {
			alert("No of Promo Codes to be Used should be less than or equal to No of Promo Codes Available ");
			frmPromoCodeMaintenance.txtQtyUse.focus();
			return false;
		}
		if (frmPromoCodeMaintenance.cboPromoStatus.selectedIndex == 0) {
			alert("Check if the status needs to be changed from Not Issued to Issued");
			return false;
		}
		if (frmPromoCodeMaintenance.cboDelvryMode.selectedIndex == 0) {
			alert("Please Select Promo Code Delivery Mode");
			return false;
		}
		if (frmPromoCodeMaintenance.dtDelvrdDate.value == "") {
			alert("Please select a valid Date for Promo Code Delivered Date");
			frmPromoCodeMaintenance.dtDelvrdDate.focus();
			return false;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmPromoCodeMaintenance()", e);
	}
	return true;
}


//Code For frmPromoCodeMaintenance Completed HERE
//-----------------------------------------------


//Code: frmGvCodeMaintenance Code:
//-----------------------------------

function subfrmGvCodeMaintenanceBtnEnable() {
	try {
		frmGvCodeMaintenance.txtQuantityGv.disabled = false;
		frmGvCodeMaintenance.txtQuantityGv.readOnly = true;
		frmGvCodeMaintenance.txtQtyUseGv.disabled = false;
		frmGvCodeMaintenance.txtQtyUseGv.readonly = false;
		frmGvCodeMaintenance.txtQtyUseGv.focus();
		frmGvCodeMaintenance.btnSave.disabled = false;
		frmGvCodeMaintenance.btnEdit.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmGvCodeMaintenanceBtnEnable()", e);
	}

}

function blnValidatefrmGvCodeMaintenance() {
	try {
		if (frmGvCodeMaintenance.cboGvValue.selectedIndex == 0) {
			alert("Please select Value-Pack Value !!!");
			return false;
		}
		if (frmGvCodeMaintenance.txtQtyUseGv.value.length <= 0) {
			alert("No of Gift Voucher Codes to be Used field cannot be left blank");
			frmGvCodeMaintenance.txtQtyUseGv.focus();
			return false;
		}
		if (isNaN(frmGvCodeMaintenance.txtQtyUseGv.value)) {
			alert("Value for No of Gift Voucher Codes to be Used Should be numeric");
			frmGvCodeMaintenance.txtQtyUseGv.focus();
			return false;
		}
		if (parse.Int(frmGvCodeMaintenance.txtQtyUseGv.value) > parse.Int(frmGvCodeMaintenance.txtQuantityGv.value)) {
			alert("No of Gift Voucher Codes to be Used should be less than or equal to No of Gift Voucher Codes Available ");
			frmGvCodeMaintenance.txtQtyUseGv.focus();
			return false;
		}

		if (frmGvCodeMaintenance.cboGvStatus.selectedIndex == 0) {
			alert("Check if the status needs to be changed from Not Issued to Issued");
			return false;
		}
		if (frmGvCodeMaintenance.cboGvDelvryMode.selectedIndex == 0) {
			alert("Please Select Promo Code Delivery Mode");
			return false;
		}
		if (frmGvCodeMaintenance.dtGvDelvrdDate.value == "") {
			alert("Please select a valid Date for Gift Voucher Code Delivered Date");
			frmGvCodeMaintenance.dtGvDelvrdDate.focus();
			return false;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmGvCodeMaintenance()", e);
	}
	return true;
}


//Code For frmGvCodeMaintenance Completed HERE
//-----------------------------------------------


//Code: frmRegionMaintenance Code:
//-------------------------------

function subfrmRegButtonEnable() {
	try {
		frmRegionMaintenance.txtRegCode.disabled = false;
		frmRegionMaintenance.txtRegCode.readOnly = false;
		frmRegionMaintenance.txtRegName.disabled = false;
		frmRegionMaintenance.txtRegSeq.disabled = false;
		frmRegionMaintenance.txtRegLang.disabled = false;
		frmRegionMaintenance.txtRegLat.disabled = false;
		frmRegionMaintenance.cboRegionGroup.disabled = false;
		frmRegionMaintenance.txtRegCode.focus();
		frmRegionMaintenance.btnSave.disabled = false;
		frmRegionMaintenance.btnAdd.disabled = true;
		frmRegionMaintenance.hdEdit.value = false;
		parent.UpdateUniform();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmRegButtonEnable()", e);
	}

}

function subDisplayControls() {
	try {
		frmRegionMaintenance.btnSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayControls()", e);
	}
}

function blnValidatefrmRegionMaintenance() {
	try {
		if (frmRegionMaintenance.txtRegCode.value.length <= 0) {
			alert("Region Code Cannot be left blank");
			frmRegionMaintenance.txtRegCode.focus();
			return false;
		}
		if (frmRegionMaintenance.txtRegName.value.length <= 0) {
			alert("Region Name Cannot be left blank");
			frmRegionMaintenance.txtRegName.focus();
			return false;
		}
		if (frmRegionMaintenance.txtRegSeq <= 0) {
			alert("Region Sequence Cannot be left blank");
			frmRegionMaintenance.txtRegSeq.focus();
			return false;
		}
		// if (frmRegionMaintenance.cboRegionGroup.value == "") {
			// alert("Select Region Group");
			// frmRegionMaintenance.cboRegionGroup.focus();
			// return false;
		// }
		//        if (frmRegionMaintenance.txtRegLang.value.length <= 0) 
		//        {
		//            alert("Region Langitude Cannot be Left blank");
		//            return false;
		//        }
		//        if (frmRegionMaintenance.txtRegLat.value.length <= 0) 
		//        {
		//            alert("Region Latitude Cannot be left blank");
		//            return false;
		//        }
		if (isNaN(frmRegionMaintenance.txtRegLang.value)) {
			alert("Region Langitude should be numeric");
			frmRegionMaintenance.txtRegLang.focus();
			return false;
		}
		if (isNaN(frmRegionMaintenance.txtRegLat.value)) {
			alert("Region Latitude should be numeric");
			frmRegionMaintenance.txtRegLat.focus();
			return false;
		}
		if (isNaN(frmRegionMaintenance.txtRegSeq.value)) {
			alert("Region Sequence Should be numeric");
			frmRegionMaintenance.txtRegSeq.focus();
			return false;
		}
		if (frmRegionMaintenance.hdEdit.value == "false") {
			if (blnCheckForRegCode(frmRegionMaintenance.txtRegCode.value.toUpperCase()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmRegionMaintenance()", e);
	}
	return true;
}

function subRegionMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subRegionMessage(" + objPage.id + ")", e);
	}
}

function subSaveRegionDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveRegionDisable()", e);
	}

}

function funRegEditMode(event, strRegCode, strRegName, strRegSeq, strAddAccess, strLongitude, strLatitude, intRegionGroupId,intId) {
	try {
		var objTxtRegCode = document.getElementById('txtRegCode');
		var objTxtRegName = document.getElementById('txtRegName');
		var objTxtRegSeq = document.getElementById('txtRegSeq');
		var objTxtRegLong = document.getElementById('txtRegLang');
		var objTxtRegLat = document.getElementById('txtRegLat');
		var objcboRegGrpId = document.getElementById('cboRegionGroup');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		strCommandName = event.innerHTML;
		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtRegCode.value = strRegCode;
			objTxtRegCode.disabled = false;
			objTxtRegCode.readOnly = true;
			objTxtRegName.disabled = false;
			objTxtRegName.value = strRegName;
			objTxtRegSeq.disabled = false;
			objTxtRegSeq.value = strRegSeq;
			objTxtRegLong.disabled = false;
			objTxtRegLong.value = strLongitude;
			objTxtRegLat.disabled = false;
			objTxtRegLat.value = strLatitude;
			objcboRegGrpId.disabled = false;
			objcboRegGrpId.value = intId;
			parent.UpdateUniform();

			objAdd.disabled = true;
			objSave.disabled = false;
			event.innerHTML = "Cancel";
			var objTbody = event.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(6).firstChild.id != event.id) {
					objTbody.rows(intCountRows).cells(6).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtRegCode.value = "";
			objTxtRegName.value = "";
			objTxtRegSeq.value = "";
			objTxtRegLong.value = "";
			objTxtRegLat.value = "";
			objcboRegGrpId.selectedIndex = 0
			objTxtRegCode.disabled = true;
			objTxtRegName.disabled = true;
			objTxtRegSeq.disabled = true;
			objTxtRegLong.disabled = true;
			objTxtRegLat.disabled = true;
			objcboRegGrpId.disabled = true;
			parent.UpdateUniform();
			event.innerHTML = "Edit";
			var objTbody = event.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
			    if (objTbody.rows(intCountRows).cells(6).firstChild.id != event.id) {
			        objTbody.rows(intCountRows).cells(6).firstChild.innerHTML = "Cancel";
			    }
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funRegEditMode('" + strRegCode + "', '" + strRegName + "', '" + strRegSeq + "')", e);
	}
}

function blnCheckForRegCode(strRegionCode) {
	try {
		var objTbody = tblRegRec;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountRows).cells(0).innerHTML.toUpperCase() == strRegionCode.toUpperCase()) {
				alert("This Code Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForRegCode('" + strRegionCode + "')", e);
	}
}

//Code For frmRegionMaintenance Completed HERE
//---------------------------------------------


//Code: frmSubRegnMaintenance Code:
//-------------------------------

function subfrmSRegButtonEnable() {
	try {
		frmSubRegnMaintenance.txtSubRegCode.disabled = false;
		frmSubRegnMaintenance.txtSubRegCode.readOnly = false;
		frmSubRegnMaintenance.txtSubRegName.disabled = false;
		frmSubRegnMaintenance.txtSubRegSeq.disabled = false;
		frmSubRegnMaintenance.txtSubRegLong.disabled = false;
		frmSubRegnMaintenance.txtSubRegLat.disabled = false;
		frmSubRegnMaintenance.txtCallCenterNo.disabled = false;
		frmSubRegnMaintenance.cboRegionName.disabled = false;

		frmSubRegnMaintenance.txtPlay.disabled = false;
		frmSubRegnMaintenance.txtMovie.disabled = false;
		frmSubRegnMaintenance.txtConsert.disabled = false;
		frmSubRegnMaintenance.txtSport.disabled = false;
		frmSubRegnMaintenance.txtComedy.disabled = false;
		frmSubRegnMaintenance.txtEvtPlay.disabled = false;
		frmSubRegnMaintenance.txtAddText.disabled = false;

		frmSubRegnMaintenance.txtAddText.value = "";
		frmSubRegnMaintenance.txtPlay.value = "25";
		frmSubRegnMaintenance.txtMovie.value = "10";
		frmSubRegnMaintenance.txtConsert.value = "200";
		frmSubRegnMaintenance.txtSport.value = "200";
		frmSubRegnMaintenance.txtComedy.value = "200";
		frmSubRegnMaintenance.txtEvtPlay.value = "500";

		frmSubRegnMaintenance.txtSubRegCode.focus();
		frmSubRegnMaintenance.btnSave.disabled = false;
		frmSubRegnMaintenance.btnAdd.disabled = true;
		frmSubRegnMaintenance.hdEdit.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmSRegButtonEnable()", e);
	}

}

function subDisplayControls() {
	try {
		frmSubRegnMaintenance.btnSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayControls()", e);
	}
}

function blnValidatefrmSRegnMaintenance() {
	try {
		if (frmSubRegnMaintenance.txtSubRegCode.value.length <= 0) {
			alert("Sub Region Code Cannot be left blank");
			frmSubRegnMaintenance.txtSubRegCode.focus();
			return false;
		}
		if (frmSubRegnMaintenance.txtSubRegName.value.length <= 0) {
			alert("Sub Region Name Cannot be left blank");
			frmSubRegnMaintenance.txtSubRegName.focus();
			return false;
		}
		if (frmSubRegnMaintenance.txtSubRegSeq.value.length <= 0) {
			alert("Region Sequence Cannot be left blank");
			frmSubRegnMaintenance.txtSubRegSeq.focus();
			return false;
		}
		else if (isNaN(frmSubRegnMaintenance.txtSubRegSeq.value)) {
			alert("Region Sequence Should be numeric");
			frmSubRegnMaintenance.txtSubRegSeq.focus();
			return false;
		}
		//        if (frmSubRegnMaintenance.txtSubRegLong.value.length <= 0) 
		//        {
		//            alert("Sub Region Longitude Cannot be left blank");
		//            frmSubRegnMaintenance.txtSubRegLong.focus();
		//            return false;
		//        }
		if (isNaN(frmSubRegnMaintenance.txtSubRegLong.value)) {
			alert("Sub Region Longitude should be numeric");
			frmSubRegnMaintenance.txtSubRegLong.focus();
			return false;
		}
		//        if (frmSubRegnMaintenance.txtSubRegLat.value.length <= 0) 
		//        {
		//            alert("Sub Region Latitude Cannot be left blank");
		//            frmSubRegnMaintenance.txtSubRegLat.focus();
		//            return false;
		//        }
		if (isNaN(frmSubRegnMaintenance.txtSubRegLat.value)) {
			alert("Sub Region Latitude Should be numeric");
			frmSubRegnMaintenance.txtSubRegLat.focus();
			return false;
		}
		if (frmSubRegnMaintenance.txtCallCenterNo.value.length <= 0) {
			alert("Call Center No Cannot be left blank");
			frmSubRegnMaintenance.txtCallCenterNo.focus();
			return false;
		}
		else if (isNaN(frmSubRegnMaintenance.txtCallCenterNo.value)) {
			alert("Call Center No. Should be numeric");
			frmSubRegnMaintenance.txtCallCenterNo.focus();
			return false;
		}

		//var txtPlay = document.getElementById('txtPlay');
		if (isNaN(frmSubRegnMaintenance.txtPlay.value)) {
			alert("The Radius value of Play Should be numeric");
			frmSubRegnMaintenance.txtPlay.focus();
			return false;
		}
		if (isNaN(frmSubRegnMaintenance.txtMovie.value)) {
			alert("The Radius value of Movie Should be numeric");
			frmSubRegnMaintenance.txtMovie.focus();
			return false;
		}
		if (isNaN(frmSubRegnMaintenance.txtSport.value)) {
			alert("The Radius value of Sport Should be numeric");
			frmSubRegnMaintenance.txtSport.focus();
			return false;
		}
		if (isNaN(frmSubRegnMaintenance.txtConsert.value)) {
			alert("The Radius value of Consert Should be numeric");
			frmSubRegnMaintenance.txtConsert.focus();
			return false;
		}
		if (isNaN(frmSubRegnMaintenance.txtComedy.value)) {
			alert("The Radius value of Comedy Should be numeric");
			frmSubRegnMaintenance.txtComedy.focus();
			return false;
		}
		if (isNaN(frmSubRegnMaintenance.txtEvtPlay.value)) {
			alert("The Radius value of Event-Play Should be numeric");
			frmSubRegnMaintenance.txtEvtPlay.focus();
			return false;
		}

		if (frmSubRegnMaintenance.cboRegionName.selectedIndex == 0) {
			alert("Please select Region Name !!!");
			return false;
		}
		if (frmSubRegnMaintenance.hdEdit.value == "false") {
			if (blnCheckForSubRegCode(frmSubRegnMaintenance.txtSubRegCode.value.toUpperCase()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmSRegnMaintenance()", e);
	}
	return true;
}

function subSRegionMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSRegionMessage(" + objPage.id + ")", e);
	}
}

function subSaveSRegionDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveSRegionDisable()", e);
	}

}

function funSubRegEditMode(event, strSubRegCode, strSubRegName, strSubRegSeq, strLongitude, strLatitude, strPlay, strMovie, strConsert, strEvent, strComedy, strEventPaly, strAddText, strCallCenterNo, strRegionCode, strAddAccess) {
	try {
		var objTxtSubRegCode = document.getElementById('txtSubRegCode');
		var objTxtSubRegName = document.getElementById('txtSubRegName');
		var objTxtSubRegSeq = document.getElementById('txtSubRegSeq');
		var objTxtSubRegLong = document.getElementById('txtSubRegLong');
		var objTxtSubRegLat = document.getElementById('txtSubRegLat');

		var objTxtSubPlay = document.getElementById('txtPlay');
		var objTxtSubMovie = document.getElementById('txtMovie');
		var objTxtSubConsert = document.getElementById('txtConsert');
		var objTxtSubEvent = document.getElementById('txtSport');
		var objTxtSubComedy = document.getElementById('txtComedy');
		var objTxtSubEventPlay = document.getElementById('txtEvtPlay');
		var objTxtAddText = document.getElementById('txtAddText');

		var objTxtCallCenterNo = document.getElementById('txtCallCenterNo');
		var objcboRegionName = document.getElementById('cboRegionName');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		strCommandName = event.innerHTML;
		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtSubRegCode.value = strSubRegCode;
			objTxtSubRegCode.disabled = false;
			objTxtSubRegCode.readOnly = true;
			objTxtSubRegName.disabled = false;
			objTxtSubRegName.value = strSubRegName;
			objTxtSubRegSeq.disabled = false;
			objTxtSubRegSeq.value = strSubRegSeq;
			objTxtSubRegLong.disabled = false;
			objTxtSubRegLong.value = strLongitude;
			objTxtSubRegLat.disabled = false;
			objTxtSubRegLat.value = strLatitude;
			objTxtCallCenterNo.disabled = false;
			objTxtCallCenterNo.value = strCallCenterNo;

			objTxtSubPlay.disabled = false;
			objTxtSubPlay.value = strPlay;
			objTxtSubMovie.disabled = false;
			objTxtSubMovie.value = strMovie;
			objTxtSubConsert.disabled = false;
			objTxtSubConsert.value = strConsert;
			objTxtSubEvent.disabled = false;
			objTxtSubEvent.value = strEvent;
			objTxtSubComedy.disabled = false;
			objTxtSubComedy.value = strComedy;
			objTxtSubEventPlay.disabled = false;
			objTxtSubEventPlay.value = strEventPaly;

			objTxtAddText.disabled = false;
			objTxtAddText.value = strAddText;

			objcboRegionName.disabled = false;
			objcboRegionName.value = strRegionCode;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.innerHTML = "Cancel";
			var objTbody = event.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(4).firstChild.id != event.id) {
					objTbody.rows(intCountRows).cells(4).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtSubRegCode.value = "";
			objTxtSubRegName.value = "";
			objTxtSubRegSeq.value = "";
			objTxtSubRegLong.value = "";
			objTxtSubRegLat.value = "";
			objTxtSubPlay.value = "";
			objTxtSubMovie.value = "";
			objTxtSubConsert.value = "";
			objTxtSubEvent.value = "";
			objTxtSubComedy.value = "";
			objTxtSubEventPlay.value = "";
			objTxtCallCenterNo.value = "";
			objTxtAddText.value = "";
			objcboRegionName.selectedIndex = 0;

			objTxtSubRegCode.disabled = true;
			objTxtSubRegName.disabled = true;
			objTxtSubRegSeq.disabled = true;
			objTxtSubRegLong.disabled = true;
			objTxtSubRegLat.disabled = true;
			objTxtCallCenterNo.disabled = true;
			objcboRegionName.disabled = true;
			objTxtSubPlay.disabled = true;
			objTxtSubMovie.disabled = true;
			objTxtSubConsert.disabled = true;
			objTxtSubEvent.disabled = true;
			objTxtSubComedy.disabled = true;
			objTxtSubEventPlay.disabled = true;
			objTxtAddText.disabled = true;

			event.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funSubRegEditMode('" + strSubRegCode + "', '" + strSubRegName + "', '" + strSubRegSeq + "')", e);
	}
}

function blnCheckForSubRegCode(strSubRegionCode) {
	try {
		var objTbody = tblSubRegRec;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountRows).cells(0).innerHTML.toUpperCase() == strSubRegionCode.toUpperCase()) {
				alert("This Code Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForSubRegCode('" + strSubRegionCode + "')", e);
	}
}

//Code For frmSubRegnMaintenance Completed HERE
//---------------------------------------------


//Code: frmUsrGrpMntnce Code:
//---------------------------

function subfrmUsrGrpBtnEnable() {
	try {
		frmUsrGrpMntnce.txtUGId.disabled = false;
		frmUsrGrpMntnce.txtUGId.readOnly = false;
		frmUsrGrpMntnce.txtUGName.disabled = false;
		frmUsrGrpMntnce.txtUGId.focus();
		frmUsrGrpMntnce.btnSave.disabled = false;
		frmUsrGrpMntnce.btnAdd.disabled = true;
		frmUsrGrpMntnce.hdEdit.value = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmUsrGrpBtnEnable()", e);
	}

}

function subDisplayControls() {
	try {
		frmUsrGrpMntnce.btnSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayControls()", e);
	}
}

function blnValidatefrmUsrGrpMntnce() {
	try {
		if (frmUsrGrpMntnce.txtUGId.value.length <= 0) {
			alert("User Group Id Cannot be left blank");
			frmUsrGrpMntnce.txtUGId.focus();
			return false;
		}
		if (frmUsrGrpMntnce.txtUGName.value.length <= 0) {
			alert("User Group Name Cannot be left blank");
			frmUsrGrpMntnce.txtUGName.focus();
			return false;
		}
		if (frmUsrGrpMntnce.hdEdit.value == "false") {
			if (blnCheckForUserGroupCode(frmUsrGrpMntnce.txtUGId.value.toUpperCase()) == true) {
				return false;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmUsrGrpMntnce()", e);
	}
	return true;
}

function subUserGroupMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subUserGroupMessage(" + objPage.id + ")", e);
	}
}

function subSaveUsrGrpDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveUsrGrpDisable()", e);
	}

}

function frmUsrGrpfunEditMode(strUGCode, strUGName, bitIsAdmin, strAddAccess) {
	try {
		var objTxtUGCode = document.getElementById('txtUGId');
		var objTxtUGName = document.getElementById('txtUGName');
		var objcbobitUGAdmin = document.getElementById('cbobitUGAdmin');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		strCommandName = event.srcElement.innerHTML;
		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtUGCode.value = strUGCode;
			objTxtUGCode.disabled = false;
			objTxtUGCode.readOnly = true;
			objTxtUGName.disabled = false;
			objTxtUGName.value = strUGName;
			objcbobitUGAdmin.value = bitIsAdmin;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";

			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(3).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(3).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtUGCode.value = "";
			objTxtUGName.value = "";
			objTxtUGCode.disabled = true;
			objTxtUGName.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmUsrGrpfunEditMode('" + strUGCode + "', '" + strUGName + "')", e);
	}
}



function blnCheckForUserGroupCode(strUsrGrpCode) {
	try {
		var objTbody = tblUsrGrpRec;
		for (var intCountRows = 0; intCountRows < objTbody.rows.length; intCountRows++) {
			if (objTbody.rows(intCountRows).cells(0).innerHTML.toUpperCase() == strUsrGrpCode.toUpperCase()) {
				alert("This Code Already Exist");
				return true;
			}
		}
		return false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnCheckForUserGroupCode('" + strUsrGrpCode + "')", e);
	}
}


//Code For frmUsrGrpMntnce Completed HERE
//---------------------------------------


// Code For frmDebtorDetails Code:
//--------------------------------


function subfrmDebtorBtnEnable() {
	try {
		frmDebtorDetails.txtDebtorName.disabled = false;
		frmDebtorDetails.txtDebtorName.readOnly = false;
		frmDebtorDetails.txtDebtorLimit.disabled = false;
		frmDebtorDetails.txtMnyCnsmd.value = "0.00";
		frmDebtorDetails.cboDebtorStatus.disabled = false;
		frmDebtorDetails.txtMaxAccnts.disabled = false;
		frmDebtorDetails.txtDebtorName.focus();
		frmDebtorDetails.btnSave.disabled = false;
		frmDebtorDetails.btnAdd.disabled = true;
		frmDebtorDetails.hdEdit.value = false;
		document.getElementById('hdDebtorId').value = "";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmDebtorBtnEnable()", e);
	}
}

function blnValidatefrmDebtorDetails() {
	try {
		if (frmDebtorDetails.txtDebtorName.value == "") {
			alert("Debtor Name Cannot Be Left Blank");
			frmDebtorDetails.txtDebtorName.focus();
			return false;
		}
		if (frmDebtorDetails.txtDebtorLimit.value == "") {
			alert("Debtor Limit Value Cannot Be Left Blank");
			frmDebtorDetails.txtDebtorLimit.focus();
			return false;
		}
		else if (isNaN(frmDebtorDetails.txtDebtorLimit.value)) {
			alert("Debtor Limit Value Should be numeric");
			frmDebtorDetails.txtDebtorLimit.focus();
			return false;
		}
		if (frmDebtorDetails.txtMaxAccnts.value == "") {
			alert("Debtor Max Accounts Cannot Be Left Blank");
			frmDebtorDetails.txtMaxAccnts.focus();
			return false;
		}
		else if (isNaN(frmDebtorDetails.txtMaxAccnts.value)) {
			alert("Debtor Max Accounts Value Should be numeric");
			frmDebtorDetails.txtMaxAccnts.focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmDebtorDetails()", e);
	}
}

function subDebtorMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDebtorMessage(" + objPage.id + ")", e);
	}
}

function subSaveDebtorDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
		alert('Update Successful');
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveDebtorDisable()", e);
	}

}

function frmDebtorfunEditMode(strDebtorName, curDebtorLimit, curDebtorConsumed, strDebtorStatus, strDebtorMaxAccounts, strDebtorId, strAddAccess) {
	try {
		var objTxtDebtorName = document.getElementById('txtDebtorName');
		var objTxtDebtorLimit = document.getElementById('txtDebtorLimit');
		var objTxtMnyCnsmd = document.getElementById('txtMnyCnsmd');
		var objcboDebtorStatus = document.getElementById('cboDebtorStatus');
		var objTxtMaxAccnts = document.getElementById('txtMaxAccnts');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');

		document.getElementById('hdDebtorId').value = strDebtorId;
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtDebtorName.value = strDebtorName;
			objTxtDebtorName.disabled = false;
			objTxtDebtorName.readOnly = false;
			objTxtDebtorLimit.value = strFormatTotal(curDebtorLimit);
			objTxtDebtorLimit.disabled = false;
			objTxtMnyCnsmd.value = strFormatTotal(curDebtorConsumed);
			objcboDebtorStatus.value = strDebtorStatus;
			objcboDebtorStatus.disabled = false;
			objTxtMaxAccnts.value = strDebtorMaxAccounts;
			objTxtMaxAccnts.disabled = false;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtDebtorName.value = "";
			objTxtDebtorLimit.value = "";
			objTxtMnyCnsmd.value = "";
			objcboDebtorStatus.value = "Y";
			objTxtMaxAccnts.value = "";
			objTxtDebtorName.disabled = true;
			objTxtDebtorLimit.disabled = true;
			objcboDebtorStatus.disabled = true;
			objTxtMaxAccnts.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmDebtorfunEditMode('" + strDebtorId + "')", e);
	}
}

//Code For frmDebtorDetails Completed HERE
//---------------------------------------

//Code For frmSubDebtorDetails
//---------------------------------------

function subfrmSubDebtorBtnEnable() {
	try {
		frmSubDebtorDetails.cboDebtorName.disabled = true;
		frmSubDebtorDetails.txtSubDebtorName.disabled = false;
		frmSubDebtorDetails.txtSubDebtorName.readOnly = false;
		frmSubDebtorDetails.txtPassword.disabled = false;
		frmSubDebtorDetails.chkPassword.checked = true;
		frmSubDebtorDetails.cboShareType.disabled = false;
		//frmSubDebtorDetails.cboShareOn.disabled = false;
		frmSubDebtorDetails.txtShare.disabled = false;
		frmSubDebtorDetails.cboSubDebtorStatus.disabled = false;
		frmSubDebtorDetails.txtSubDebtorName.focus();
		frmSubDebtorDetails.btnSave.disabled = false;
		frmSubDebtorDetails.btnAdd.disabled = true;
		frmSubDebtorDetails.hdEdit.value = false;
		document.getElementById('hdSubDebtorId').value = "";

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmSubDebtorBtnEnable()", e);
	}
}

function blnValidatefrmSubDebtorDetails() {
	try {
		if (frmSubDebtorDetails.txtSubDebtorName.value == "") {
			alert("Sub Debtor Name Cannot Be Left Blank");
			frmSubDebtorDetails.txtSubDebtorName.focus();
			return false;
		}
		if (frmSubDebtorDetails.chkPassword.checked == true) {
			if (frmSubDebtorDetails.txtPassword.value == "") {
				alert("Password Cannot Be Left Blank Or Uncheck Change Password Check Box");
				frmSubDebtorDetails.txtPassword.focus();
				return false;
			}
		}
		if (frmSubDebtorDetails.cboShareType.value == "") {
			alert("Share Type Value Cannot Be Left Blank");
			frmSubDebtorDetails.cboShareType.focus();
			return false;
		}
		if (frmSubDebtorDetails.txtShare.value == "") {
			alert("Share Value Cannot Be Left Blank");
			frmSubDebtorDetails.txtShare.focus();
			return false;
		}
		else if (isNaN(frmSubDebtorDetails.txtShare.value)) {
			alert("Share Value Should be numeric");
			frmSubDebtorDetails.txtShare.focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmSubDebtorDetails()", e);
	}
}

function frmSubDebtorfunEditMode(strSubDebtorName, strPassword, strShareType, strShareOn, strShare, strSubDebtorStatus, strSubDebtorId, strAddAccess) {
	try {
		var objTxtSubDebtorName = document.getElementById('txtSubDebtorName');
		var objTxtPassword = document.getElementById('txtPassword');
		var objchkPassword = document.getElementById('chkPassword');
		var objcboShareType = document.getElementById('cboShareType');
		var objcboShareOn = document.getElementById('cboShareOn');

		var objTxtShare = document.getElementById('txtShare');
		var objcboSubDebtorStatus = document.getElementById('cboSubDebtorStatus');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');
		var objhdnPassword = document.getElementById('hdnPassword');

		subClearList(objcboShareOn);
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			document.getElementById('hdSubDebtorId').value = strSubDebtorId;
			frmSubDebtorDetails.cboDebtorName.disabled = true;
			objHdnEdit.value = "true";
			objTxtSubDebtorName.value = strSubDebtorName;
			objTxtSubDebtorName.disabled = false;
			objTxtSubDebtorName.readOnly = false;
			objTxtPassword.disabled = true;
			objchkPassword.checked = false;
			//            objTxtPassword.value = strPassword;
			//            objhdnPassword.value = strPassword;
			objcboShareType.disabled = false;
			objcboShareType.value = strShareType;


			if (strShareType == "P") {
				var objShareOnOpt = document.createElement("option");
				objShareOnOpt.setAttribute("value", "BF");
				objShareOnOpt.innerHTML = "Booking Fee";
				objcboShareOn.appendChild(objShareOnOpt);

				var objShareOnOpt = document.createElement("option");
				objShareOnOpt.setAttribute("value", "TKT");
				objShareOnOpt.innerHTML = "Ticket(s) Amount";
				objcboShareOn.appendChild(objShareOnOpt);

				var objShareOnOpt = document.createElement("option");
				objShareOnOpt.setAttribute("value", "TR");
				objShareOnOpt.innerHTML = "Transaction Amount";
				objcboShareOn.appendChild(objShareOnOpt);
			}
			else if (strShareType == "F") {
				var objShareOnOpt = document.createElement("option");
				objShareOnOpt.setAttribute("value", "TKT");
				objShareOnOpt.innerHTML = "Per Ticket";
				objcboShareOn.appendChild(objShareOnOpt);

				var objShareOnOpt = document.createElement("option");
				objShareOnOpt.setAttribute("value", "TR");
				objShareOnOpt.innerHTML = "Per Transaction";
				objcboShareOn.appendChild(objShareOnOpt);
			}
			else {
				var objShareOnOpt = document.createElement("option");
				objShareOnOpt.setAttribute("value", "NA");
				objShareOnOpt.innerHTML = "Not Applicable";
				objcboShareOn.appendChild(objShareOnOpt);
			}

			objcboShareOn.disabled = false;
			objcboShareOn.value = strShareOn;
			objTxtShare.disabled = false;
			objTxtShare.value = strFormatTotal(strShare);
			objcboSubDebtorStatus.value = strSubDebtorStatus;
			objcboSubDebtorStatus.disabled = false;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			document.getElementById('hdSubDebtorId').value = "";
			frmSubDebtorDetails.cboDebtorName.disabled = false;
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objTxtSubDebtorName.value = "";
			objTxtPassword.value = "";
			objchkPassword.checked = false;
			objcboShareType.value = "NA";
			objTxtShare.value = "";
			objcboSubDebtorStatus.value = "Y";

			objTxtSubDebtorName.disabled = true;
			objTxtPassword.disabled = true;
			objcboShareType.disabled = true;
			objcboShareOn.disabled = true;
			objTxtShare.disabled = true;
			objcboSubDebtorStatus.disabled = true;

			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmSubDebtorfunEditMode('" + strSubDebtorId + "')", e);
	}
}


//Code For frmSubDebtorDetails Completed HERE
//---------------------------------------


//Code For frmCreditDebtorBalance Starts HERE
//---------------------------------------
function frmCreditDebtorBalanceValidate() {
	try {
		if (isNaN(document.getElementById('txtCreditBalance').value)) {
			alert("Amount Should be numeric");
			document.getElementById('txtCreditBalance').value = "";
			return false;
		}

		if (document.getElementById('txtCreditBalance').value == "") {
			alert("Please Enter Amount you want to Credit to the account.");
			return false;
		}

		if (document.getElementById('txtCreditBalance').value <= 0) {
			alert("Credit Amount should be greater than Zero!!!");
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmCreditDebtorBalanceValidate()", e);
	}
}

function frmCreditDebtorBalanceClear() {
	try {
		document.getElementById('cboDebtorList').selectedIndex = 0;
		document.getElementById('txtDebtLimit').value = "";
		document.getElementById('txtAmtConsumed').value = "";
		document.getElementById('txtDebtBalance').value = "";
		document.getElementById('txtCreditBalance').value = "";
		document.getElementById('txtRefCode').value = "";
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmCreditDebtorBalanceClear()", e);
	}
}

//Code For frmCreditDebtorBalance Completed HERE
//---------------------------------------


//---------------------------------------
//CODE For frmTopTen CODE:
//------------------------

function blnValidatefrmTopTen() {
	try {
		if (frmTopTen.cboCinema1.selectedIndex == 0) {
			alert("Please Select Top 1 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema2.selectedIndex == 0) {
			alert("Please Select Top 1 Movie At Rating!!!");
			return false;
		}
		if (frmTopTen.cboCinema3.selectedIndex == 0) {
			alert("Please Select Top 2 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema4.selectedIndex == 0) {
			alert("Please Select Top 2 Movie At Rating!!!");
			return false;
		}
		if (frmTopTen.cboCinema5.selectedIndex == 0) {
			alert("Please Select Top 3 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema6.selectedIndex == 0) {
			alert("Please Select Top 3 Movie At Rating!!!");
			return false;
		}
		if (frmTopTen.cboCinema7.selectedIndex == 0) {
			alert("Please Select Top 4 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema8.selectedIndex == 0) {
			alert("Please Select Top 4 Movie At Rating!!!");
			return false;
		}
		if (frmTopTen.cboCinema9.selectedIndex == 0) {
			alert("Please Select Top 5 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema10.selectedIndex == 0) {
			alert("Please Select Top 5 Movie At Rating!!!");
			return false;
		}
		if (frmTopTen.cboCinema11.selectedIndex == 0) {
			alert("Please Select Top 6 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema12.selectedIndex == 0) {
			alert("Please Select Top 6 Movie At Rating!!!");
			return false;
		}
		if (frmTopTen.cboCinema13.selectedIndex == 0) {
			alert("Please Select Top 7 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema14.selectedIndex == 0) {
			alert("Please Select Top 7 Movie Movie At Rating!!!");
			return false;
		}
		if (frmTopTen.cboCinema15.selectedIndex == 0) {
			alert("Please Select Top 8 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema16.selectedIndex == 0) {
			alert("Please Select Top 8 Movie At Rating!!!");
			return false;
		}
		if (frmTopTen.cboCinema17.selectedIndex == 0) {
			alert("Please Select Top 9 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema18.selectedIndex == 0) {
			alert("Please Select Top 9 Movie At Rating!!!");
			return false;
		}
		if (frmTopTen.cboCinema19.selectedIndex == 0) {
			alert("Please Select Top 10 Movie At Box Office!!!");
			return false;
		}
		if (frmTopTen.cboCinema20.selectedIndex == 0) {
			alert("Please Select Top 10 Movie Movie At Rating!!!");
			return false;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmTopTen()", e);
	}
	return true;
}

//CODE For frmTopTen Completed Here
//---------------------------------

//---------------------------------------
//CODE For frmSitemap CODE:
//------------------------

function subfrmSitemapBtnEnable() {
	try {
		frmSitemapIncludes.txtLocation.disabled = false;
		frmSitemapIncludes.cboChangeFreq.disabled = false;
		frmSitemapIncludes.cboPriority.disabled = false;
		frmSitemapIncludes.txtLocation.focus();
		frmSitemapIncludes.btnSave.disabled = false;
		frmSitemapIncludes.btnAdd.disabled = true;
		frmSitemapIncludes.hdEdit.value = "false";
		frmSitemapIncludes.cboPriority.selectedIndex = 5;
		document.getElementById('hdSitemapId').value = "";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmSubDebtorBtnEnable()", e);
	}
}

function subSitemapMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSitemapMessage(" + objPage.id + ")", e);
	}
}

function blnValidatefrmSitemapDetails() {
	try {
		if (frmSitemapIncludes.txtLocation.value == "") {
			alert("Location Cannot Be Left Blank");
			frmSitemapIncludes.txtLocation.focus();
			return false;
		}
		if (frmSitemapIncludes.txtLocation.value.substring(0, 7) != "http://") {
			alert("Location must start with 'http://'");
			frmSitemapIncludes.txtLocation.focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmSitemapDetails()", e);
	}
}

function subSaveSitemapDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		var objDelete = document.getElementById('btnDelete');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objDelete.disabled = true;
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveDebtorDisable()", e);
	}

}

function frmSitemapfunEditMode(strLocation, strFreq, strPriority, strSitemapId, strAddAccess, strDeleteAccess) {
	try {
		var objTxtLocation = document.getElementById('txtLocation');
		var objcboChangeFreq = document.getElementById('cboChangeFreq');
		var objcboPriority = document.getElementById('cboPriority');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objDelete = document.getElementById('btnDelete');
		var objHdnEdit = document.getElementById('hdEdit');

		document.getElementById('hdSitemapId').value = strSitemapId;
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			document.getElementById('hdLocation').value = strLocation;
			objTxtLocation.value = strLocation;
			objTxtLocation.disabled = false;
			objTxtLocation.readOnly = false;
			objcboChangeFreq.value = strFreq;
			objcboChangeFreq.disabled = false;
			objcboPriority.value = strPriority;
			objcboPriority.disabled = false;
			objAdd.disabled = true;
			objSave.disabled = false;
			if (strDeleteAccess == "No") {
				objDelete.disabled = true;
			}
			else {
				objDelete.disabled = false;
			}
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(3).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(3).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			document.getElementById('hdSitemapId').value = "0";
			document.getElementById('hdLocation').value = "";
			objHdnEdit.value = "false";
			objTxtLocation.value = "";
			objcboChangeFreq.selectedIndex = 0;
			objcboPriority.selectedIndex = 5;

			objSave.disabled = true;
			objDelete.disabled = true;
			objTxtLocation.disabled = true;
			objcboChangeFreq.disabled = true;
			objcboPriority.disabled = true;

			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmSitemapfunEditMode('" + strSitemapId + "')", e);
	}
}


//CODE For frmSitemap Completed Here
//---------------------------------

//---------------------------------------
//CODE For frmAdvertisement CODE:
//------------------------

function subfrmAdTextBtnEnable() {
	try {
		frmAdvertisement.txtAdText.disabled = false;
		frmAdvertisement.chkDeactive.disabled = false;
		frmAdvertisement.txtAdText.focus();
		frmAdvertisement.btnSave.disabled = false;
		frmAdvertisement.btnAdd.disabled = true;
		frmAdvertisement.hdEdit.value = "false";
		frmAdvertisement.hdAdTextId.value = "";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmAdTextBtnEnable()", e);
	}
}

function subAdTextMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAdd');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subAdTextMessage(" + objPage.id + ")", e);
	}
}

function blnValidatefrmAdTextDetails() {
	try {
		if (frmAdvertisement.txtAdText.value == "") {
			alert("Ad text field Cannot Be Left Blank");
			frmAdvertisement.txtAdText.focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmAdTextDetails()", e);
	}
}

function subSaveAdTextDisable(strAddAccess, strDeleteAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		var objDelete = document.getElementById('btnDelete');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objDelete.disabled = true;
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveAdTextDisable()", e);
	}

}

function frmAdTextfunEditMode(strAdText, strDeactivate, strAdTextId, strAddAccess, strDeleteAccess) {
	try {
		var objTxtAdText = document.getElementById('txtAdText');
		var objchkDeactivate = document.getElementById('chkDeactive');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objDelete = document.getElementById('btnDelete');
		var objHdnEdit = document.getElementById('hdEdit');

		document.getElementById('hdAdTextId').value = strAdTextId;
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtAdText.value = strAdText;
			objTxtAdText.disabled = false;
			objTxtAdText.readOnly = false;
			if (strDeactivate == "Y") {
				objchkDeactivate.checked = true;
			}
			else {
				objchkDeactivate.checked = false;
			}
			objchkDeactivate.disabled = false;
			objAdd.disabled = true;
			objSave.disabled = false;
			if (strDeleteAccess == "No") {
				objDelete.disabled = true;
			}
			else {
				objDelete.disabled = false;
			}
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			document.getElementById('hdAdTextId').value = "0";
			objHdnEdit.value = "false";
			objTxtAdText.value = "";
			objchkDeactivate.checked = false;

			objSave.disabled = true;
			objDelete.disabled = true;
			objTxtAdText.disabled = true;
			objchkDeactivate.disabled = true;

			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmAdTextfunEditMode('" + strAdTextId + "')", e);
	}
}


//CODE For frmAdvertisement Completed Here
//---------------------------------


//---------------------------------------
//CODE For frmSetOffers CODE:
//------------------------

function funGenXMLforChannels(strAppId) {
	try {
		var objchkAppID = document.getElementById("chk" + strAppId);
		var objtxtChannelXML = document.getElementById('hdChannelXML')
		if (objtxtChannelXML.value == "") {
			objtxtChannelXML.value = "<CHANNELS></CHANNELS>";
		}

		if (objchkAppID.checked == true) {
			objtxtChannelXML.value = objtxtChannelXML.value.replace("</CHANNELS>", "<CHANNEL>" + strAppId + "</CHANNEL></CHANNELS>");
		}
		else {
			objtxtChannelXML.value = objtxtChannelXML.value.replace("<CHANNEL>" + strAppId + "</CHANNEL>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforChannels()", e);
	}
}

function funGenXMLforPayModes(strPayMode) {
	try {
		var objchkPayModeID = document.getElementById("chkPM" + strPayMode);
		var objtxtPayModeXML = document.getElementById('hdPayModeXML');
		if (objtxtPayModeXML.value == "") {
			objtxtPayModeXML.value = "<PAYMENTMODES></PAYMENTMODES>";
		}

		if (objchkPayModeID.checked == true) {
			objtxtPayModeXML.value = objtxtPayModeXML.value.replace("</PAYMENTMODES>", "<PAYMENTMODE>" + strPayMode + "</PAYMENTMODE></PAYMENTMODES>");
		}
		else {
			objtxtPayModeXML.value = objtxtPayModeXML.value.replace("<PAYMENTMODE>" + strPayMode + "</PAYMENTMODE>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforPayModes()", e);
	}
}

function funGenXMLforReferrals(strReferral) {
	try {
		var objchkReferralID = document.getElementById("chkRef" + strReferral);
		var objtxtReferralXML = document.getElementById('hdReferralXML');
		if (objtxtReferralXML.value == "") {
			objtxtReferralXML.value = "<REFERRALS></REFERRALS>";
		}

		if (objchkReferralID.checked == true) {
			objtxtReferralXML.value = objtxtReferralXML.value.replace("</REFERRALS>", "<REFERRAL>" + strReferral + "</REFERRAL></REFERRALS>");
		}
		else {
			objtxtReferralXML.value = objtxtReferralXML.value.replace("<REFERRAL>" + strReferral + "</REFERRAL>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforReferrals()", e);
	}
}

function funCategoryValidation() {
	try {
		var objcboCategory = document.getElementById("cboCategory");
		var objcboConvType = document.getElementById("cboConvType");
		var objtxtConvValue = document.getElementById("txtConvValue");
		var objcboConvMode = document.getElementById("cboConvMode");
		var objtxtConvBuy = document.getElementById("txtConvBuy");
		var objtxtConvGet = document.getElementById("txtConvGet");

		if (objcboCategory.value == "POFF") {
			objtxtConvBuy.disabled = true;
			objtxtConvGet.disabled = true;
			objcboConvType.disabled = false;
			objtxtConvValue.disabled = false;
			objcboConvMode.disabled = false;
		}
		else {
			objtxtConvBuy.disabled = false;
			objtxtConvGet.disabled = false;
			objcboConvType.disabled = true;
			objtxtConvValue.disabled = true;
			objcboConvMode.disabled = true;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforReferrals()", e);
	}
}

function ResetLimits() {
	try {
		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 9) == 'chkLimit_') {
				objarrInputTags[i].checked = false;
				objarrInputTags[i].disabled = false;
			}
			else continue;
		}
		document.getElementById("chkAllLimitChannels").checked = false;
		document.getElementById("rdbIndividualLimit").checked = false;
		document.getElementById("rdbCombineLimit").checked = false;
		document.getElementById("rdbIndividualLimit").disabled = true;
		document.getElementById("rdbCombineLimit").disabled = true;
		funDisableLimitOptions();
		funClearAllLimitDivs();

		intPageNumber += 1;
		document.getElementById("tdPageNumbers").innerHTML += "<a onmouseover=\"this.style.cursor='hand'\" style=\"text-decoration:underline; color:Blue;\" onclick=\"'ChangeLimitPage(" + intPageNumber + ")';\">" + intPageNumber + "</a>" + " | ";

		var txtLimits = document.getElementById("hdLimitsXML").value.substring(document.getElementById("hdLimitsXML").value.indexOf("<LIMITS>") + 8, document.getElementById("hdLimitsXML").value.indexOf("</LIMITS>"));
		document.getElementById("hdPreviousLimits").value = document.getElementById("hdPreviousLimits").value.replace("</LIMITS>", txtLimits + "</LIMITS>");
		document.getElementById("hdLimitsXML").value = "<LIMITS></LIMITS>";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ResetLimits()", e);
	}
}

function ChangeLimitPage(intPageNo) {
	try {

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ChangeLimitPage()", e);
	}
}

//CODE For frmSetOffers Completed Here
//---------------------------------


//---------------------------------------
//CODE For frmFilterEvents CODE:
//------------------------
function funEnableMovies() {
	try {
		var objchkAllMovies = document.getElementById("chkAllMovies");
		var objbtnSearchMovies = document.getElementById("btnSearchMovies");
		var objtxtSearchMovies = document.getElementById("txtSearchMovies");
		var objblnDisableMovie = true;
		if (objchkAllMovies.checked == false) {
			objtxtSearchMovies.disabled = false;
			objbtnSearchMovies.disabled = false;
			objblnDisableMovie = false;
		}
		else {
			objtxtSearchMovies.disabled = true;
			objbtnSearchMovies.disabled = true;
			objblnDisableMovie = true;
		}

		var objtxtEventXML = document.getElementById("hdMoviesXML");
		objtxtEventXML.value = "";

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 11) == 'chkEVNT_MT_') {
				objarrInputTags[i].disabled = objblnDisableMovie;
				if (objchkAllMovies.checked == false) {
					objarrInputTags[i].checked = false;
				}
				else {
					objarrInputTags[i].checked = true;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funEnableMovies()", e);
	}
}

function funEnableConcerts() {
	try {
		var objchkAllConcerts = document.getElementById("chkAllConcerts");
		var objbtnSearchConcerts = document.getElementById("btnSearchConcert");
		var objtxtSearchConcerts = document.getElementById("txtSearchConcert");
		var objblnDisableConcerts = true;
		if (objchkAllConcerts.checked == false) {
			objtxtSearchConcerts.disabled = false;
			objbtnSearchConcerts.disabled = false;
			objblnDisableConcerts = false;
		}
		else {
			objtxtSearchConcerts.disabled = true;
			objbtnSearchConcerts.disabled = true;
			objblnDisableConcerts = true;
		}

		var objtxtEventXML = document.getElementById("hdConcertsXML");
		objtxtEventXML.value = "";

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 11) == 'chkEVNT_CT_') {
				objarrInputTags[i].disabled = objblnDisableConcerts;
				if (objchkAllConcerts.checked == false) {
					objarrInputTags[i].checked = false;
				}
				else {
					objarrInputTags[i].checked = true;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funEnableConcerts()", e);
	}
}

function funEnablePlays() {
	try {
		var objchkAllPlays = document.getElementById("chkAllPlays");
		var objbtnSearchPlays = document.getElementById("btnSearchPlay");
		var objtxtSearchPlays = document.getElementById("txtSearchPlay");
		var objblnDisablePlays = true;
		if (objchkAllPlays.checked == false) {
			objtxtSearchPlays.disabled = false;
			objbtnSearchPlays.disabled = false;
			objblnDisablePlays = false;
		}
		else {
			objtxtSearchPlays.disabled = true;
			objbtnSearchPlays.disabled = true;
			objblnDisablePlays = true;
		}

		var objtxtEventXML = document.getElementById("hdPlaysXML");
		objtxtEventXML.value = "";

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 11) == 'chkEVNT_PL_') {
				objarrInputTags[i].disabled = objblnDisablePlays;
				if (objchkAllPlays.checked == false) {
					objarrInputTags[i].checked = false;
				}
				else {
					objarrInputTags[i].checked = true;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funEnablePlays()", e);
	}
}

function funGenXMLforEvents(strEventType, strEventCode, strEventTitle) {
	try {
		if (strEventType == 'MT') {
			var objchkEventCode = document.getElementById("chkEVNT_MT_" + strEventCode);
			var objtxtEventXML = document.getElementById("hdMoviesXML");
			var objtxtEventList = document.getElementById("hdMovieList");
		}
		else if (strEventType == 'CT') {
			var objchkEventCode = document.getElementById("chkEVNT_CT_" + strEventCode);
			var objtxtEventXML = document.getElementById("hdConcertsXML");
			var objtxtEventList = document.getElementById("hdConcertList");
		}
		else if (strEventType == 'PL') {
			var objchkEventCode = document.getElementById("chkEVNT_PL_" + strEventCode);
			var objtxtEventXML = document.getElementById("hdPlaysXML");
			var objtxtEventList = document.getElementById("hdPlayList");
		}

		if (objchkEventCode.checked == true) {
			objtxtEventXML.value = objtxtEventXML.value + "<EVENT>" + strEventCode + "</EVENT>";
			objtxtEventList.value = objtxtEventList.value + "<EVENT>" + strEventTitle + "</EVENT>";
		}
		else {
			objtxtEventXML.value = objtxtEventXML.value.replace("<EVENT>" + strEventCode + "</EVENT>", "");
			objtxtEventList.value = objtxtEventList.value.replace("<EVENT>" + strEventTitle + "</EVENT>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforEvents()", e);
	}
}

function funGenFinalXMLforEvents(strButtonClicked) {
	try {
		var objtxtEventXML = window.opener.document.getElementById('hdEventsXML');
		objtxtEventXML.value = "<EVENTS></EVENTS>";
		if (strButtonClicked == 'Submit') {
			var objtxtMoviesXML = document.getElementById("hdMoviesXML");
			var objtxtConcertsXML = document.getElementById("hdConcertsXML");
			var objtxtPlaysXML = document.getElementById("hdPlaysXML");

			if (objtxtMoviesXML.value != "") {
				objtxtEventXML.value = objtxtEventXML.value.replace("</EVENTS>", objtxtMoviesXML.value + "</EVENTS>");
				funfillSelectedItemList("hdMovieList", "divSelectedFilterMovies", "<EVENT>", "</EVENT>");
			}
			else if (document.getElementById('chkAllMovies').checked == true) {
				window.opener.document.getElementById('divSelectedFilterMovies').innerHTML = window.opener.document.getElementById('divSelectedFilterMovies').innerHTML.substring(0, window.opener.document.getElementById('divSelectedFilterMovies').innerHTML.indexOf("</DIV>") + 6) + "1. All Movies";
			}
			else {
				window.opener.document.getElementById('divSelectedFilterMovies').innerHTML = window.opener.document.getElementById('divSelectedFilterMovies').innerHTML.substring(0, window.opener.document.getElementById('divSelectedFilterMovies').innerHTML.indexOf("</DIV>") + 6) + "Not Applicable On Movies!!!";
			}

			if (objtxtConcertsXML.value != "") {
				objtxtEventXML.value = objtxtEventXML.value.replace("</EVENTS>", objtxtConcertsXML.value + "</EVENTS>");
				funfillSelectedItemList("hdConcertList", "divSelectedFilterConcerts", "<EVENT>", "</EVENT>");
			}
			else if (document.getElementById('chkAllConcerts').checked == true) {
				window.opener.document.getElementById('divSelectedFilterConcerts').innerHTML = window.opener.document.getElementById('divSelectedFilterConcerts').innerHTML.substring(0, window.opener.document.getElementById('divSelectedFilterConcerts').innerHTML.indexOf("</DIV>") + 6) + "1. All Concerts";
			}
			else {
				window.opener.document.getElementById('divSelectedFilterConcerts').innerHTML = window.opener.document.getElementById('divSelectedFilterConcerts').innerHTML.substring(0, window.opener.document.getElementById('divSelectedFilterConcerts').innerHTML.indexOf("</DIV>") + 6) + "Not Applicable On Concerts!!!";
			}

			if (objtxtPlaysXML.value != "") {
				objtxtEventXML.value = objtxtEventXML.value.replace("</EVENTS>", objtxtPlaysXML.value + "</EVENTS>");
				funfillSelectedItemList("hdPlayList", "divSelectedFilterPlays", "<EVENT>", "</EVENT>");
			}
			else if (document.getElementById('chkAllPlays').checked == true) {
				window.opener.document.getElementById('divSelectedFilterPlays').innerHTML = window.opener.document.getElementById('divSelectedFilterPlays').innerHTML.substring(0, window.opener.document.getElementById('divSelectedFilterPlays').innerHTML.indexOf("</DIV>") + 6) + "1. All Plays";
			}
			else {
				window.opener.document.getElementById('divSelectedFilterPlays').innerHTML = window.opener.document.getElementById('divSelectedFilterPlays').innerHTML.substring(0, window.opener.document.getElementById('divSelectedFilterPlays').innerHTML.indexOf("</DIV>") + 6) + "Not Applicable On Plays!!!";
			}

			var objchkAllMovies = document.getElementById("chkAllMovies");
			var objchkAllConcerts = document.getElementById("chkAllConcerts");
			var objchkAllPlays = document.getElementById("chkAllPlays");

			var objtxtEventTypes = window.opener.document.getElementById('hdEventTypesXML');
			objtxtEventTypes.value = '<EVENTTYPES></EVENTTYPES>';
			if (objchkAllMovies.checked == true) {
				objtxtEventTypes.value = objtxtEventTypes.value.replace("</EVENTTYPES>", "<EVENTTYPE>MT</EVENTTYPE></EVENTTYPES>");
			}
			if (objchkAllConcerts.checked == true) {
				objtxtEventTypes.value = objtxtEventTypes.value.replace("</EVENTTYPES>", "<EVENTTYPE>CT</EVENTTYPE></EVENTTYPES>");
			}
			if (objchkAllPlays.checked == true) {
				objtxtEventTypes.value = objtxtEventTypes.value.replace("</EVENTTYPES>", "<EVENTTYPE>PL</EVENTTYPE></EVENTTYPES>");
			}
		}
		window.close();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforEvents()", e);
	}
}

//CODE For frmFilterEvents Completed Here
//---------------------------------


//---------------------------------------
//CODE For frmFilterCompanies CODE:
//------------------------
function funSelectAllCompanies() {
	try {
		var objchkAllCompanies = document.getElementById("chkAllCompanies");
		var objtxtCompanyXML = document.getElementById("hdCompanyXML");
		objtxtCompanyXML.value = "";

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 8) == 'chkComp_') {
				if (objchkAllCompanies.checked == true) {
					objarrInputTags[i].checked = true;
					objarrInputTags[i].disabled = true;
				}
				else {
					objarrInputTags[i].checked = false;
					objarrInputTags[i].disabled = false;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funSelectAllCompanies()", e);
	}
}

function funGenXMLforCompanies(strCode) {
	try {
		var objchkCompCode = document.getElementById("chkComp_" + strCode);
		var objtxtCompXML = document.getElementById("hdCompanyXML");
		if (objchkCompCode.checked == true) {
			objtxtCompXML.value = objtxtCompXML.value + "<COMPANY>" + strCode + "</COMPANY>";
		}
		else {
			objtxtCompXML.value = objtxtCompXML.value.replace("<COMPANY>" + strCode + "</COMPANY>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforCompanies()", e);
	}
}

function funGenFinalXMLforCompanies(strButtonClicked) {
	try {
		var objtxtFinalCompXML = window.opener.document.getElementById('hdCompaniesXML');
		objtxtFinalCompXML.value = "<COMPANIES></COMPANIES>";
		if (strButtonClicked == 'Submit') {
			var objtxtCompXML = document.getElementById("hdCompanyXML");

			if (objtxtCompXML.value != "") {
				objtxtFinalCompXML.value = objtxtFinalCompXML.value.replace("</COMPANIES>", objtxtCompXML.value + "</COMPANIES>");
				funfillSelectedItemList("hdCompanyXML", "divSelectedCompanies", "<COMPANY>", "</COMPANY>");
				window.close();
			}
			else if (document.getElementById('chkAllCompanies').checked == true) {
				window.opener.document.getElementById('divSelectedCompanies').innerHTML = window.opener.document.getElementById('divSelectedCompanies').innerHTML.substring(0, window.opener.document.getElementById('divSelectedCompanies').innerHTML.indexOf("</DIV>") + 6) + "1. All Companies";
				window.close();
			}
			else {
				alert('Select atleast One or All Companies!!!');
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforCompanies()", e);
	}
}

function funfillSelectedItemList(strControlName, strControlToBeFilled, strStartTag, strEndTag) {
	try {

		var objItemList = window.opener.document.getElementById(strControlToBeFilled);
		objItemList.innerHTML = objItemList.innerHTML.substring(0, objItemList.innerHTML.indexOf("</DIV>") + 6);

		var strSelectedItemList = document.getElementById(strControlName).value;
		var intSeqNo = 1;
		while (strSelectedItemList != "") {
			objItemList.innerHTML += intSeqNo + ". " + strSelectedItemList.substring(strSelectedItemList.indexOf(strStartTag) + strStartTag.length, strSelectedItemList.indexOf(strEndTag)) + "<br />";
			strSelectedItemList = strSelectedItemList.substr(strSelectedItemList.indexOf(strEndTag) + strEndTag.length);
			intSeqNo = intSeqNo + 1;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funfillSelectedItemList()", e);
	}
}

//CODE For frmSetOffers Completed Here
//---------------------------------


//---------------------------------------
//CODE For FilterShowDate CODE:
//------------------------


function funAddSelectedShowDates() {
	try {
		var objtxtFromDt = document.getElementById('dtStartDate');
		var objtxtToDt = document.getElementById('dtEndDate');
		var FromDtLength = objtxtFromDt.value.length;
		var ToDtLength = objtxtToDt.value.length;

		var FromDtYear = objtxtFromDt.value.substring(FromDtLength - 4);
		var ToDtYear = objtxtToDt.value.substring(ToDtLength - 4);
		var MonthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
					   "Aug", "Sep", "Oct", "Nov", "Dec"];
		var FromDtMth = 0;
		var ToDtMth = 0;
		for (i = 0; i < 12; i++) {
			if (MonthName[i] == objtxtFromDt.value.substr(objtxtFromDt.value.indexOf("-") + 1, 3))
				FromDtMth = i + 1;
			if (MonthName[i] == objtxtToDt.value.substr(objtxtToDt.value.indexOf("-") + 1, 3))
				ToDtMth = i + 1;
		}

		var FromDtDate = 0, ToDtDate = 0;
		FromDtDate = objtxtFromDt.value.substring(0, objtxtFromDt.value.indexOf("-"));
		ToDtDate = objtxtToDt.value.substring(0, objtxtToDt.value.indexOf("-"));

		if (FromDtMth.toString().length == 1)
			FromDtMth = "0" + FromDtMth;
		if (ToDtMth.toString().length == 1)
			ToDtMth = "0" + ToDtMth;
		if (FromDtDate.length == 1)
			FromDtDate = "0" + FromDtDate;
		if (ToDtDate.length == 1)
			ToDtDate = "0" + ToDtDate;

		var ConvFromDt = FromDtYear + FromDtMth + FromDtDate;
		var ConvToDt = ToDtYear + ToDtMth + ToDtDate;

		if (ConvToDt < ConvFromDt) {
			alert("From Date can not be Greater than To Date");
		}
		else {
			var objDivSelectedDates = document.getElementById('divSelectedShowDates');
			var objtxtSelectedDatesXML = document.getElementById('hdShowDateXML');
			var objtxtSelectedDatesList = document.getElementById('hdShowDateList');
			var SelStartDate = new Date(FromDtYear, FromDtMth - 1, FromDtDate);
			var SelEndDate = new Date(ToDtYear, ToDtMth - 1, ToDtDate);
			var DayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
			while (SelStartDate <= SelEndDate) {
				objDivSelectedDates.innerHTML += DayofWeek[SelStartDate.getDay()] + ", " + SelStartDate.getDate().toString() + "-" + MonthName[SelStartDate.getMonth()] + "-" + SelStartDate.getFullYear().toString() + "<br />";
				objtxtSelectedDatesXML.value += "<SHOWDATE>" + SelStartDate.getDate().toString() + MonthName[SelStartDate.getMonth()].toUpperCase() + SelStartDate.getFullYear().toString() + "</SHOWDATE>";
				objtxtSelectedDatesList.value += "<SHOWDATE>" + SelStartDate.getDate().toString() + "-" + MonthName[SelStartDate.getMonth()] + "-" + SelStartDate.getFullYear().toString() + "</SHOWDATE>";

				SelStartDate.setDate(SelStartDate.getDate() + 1);
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funAddSelectedShowDates()", e);
	}
}

function funGenFinalXMLforShowDates(strButtonClicked) {
	try {
		var objtxtFinalShowDateXML = window.opener.document.getElementById('hdShowDatesXML');
		objtxtFinalShowDateXML.value = "<SHOWDATES></SHOWDATES>";
		if (strButtonClicked == 'Submit') {
			var objtxtShowDateXML = document.getElementById("hdShowDateXML");

			if (objtxtShowDateXML.value != "") {
				objtxtFinalShowDateXML.value = objtxtFinalShowDateXML.value.replace("</SHOWDATES>", objtxtShowDateXML.value + "</SHOWDATES>");
				funfillSelectedItemList("hdShowDateList", "divSelectedShowDates", "<SHOWDATE>", "</SHOWDATE>");
			}
			else {
				window.opener.document.getElementById('divSelectedShowDates').innerHTML = window.opener.document.getElementById('divSelectedShowDates').innerHTML.substring(0, window.opener.document.getElementById('divSelectedShowDates').innerHTML.indexOf("</DIV>") + 6) + "1. All Show Dates";
			}
		}
		window.close();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforShowDates()", e);
	}
}

function funClearSelectedShowDates() {
	try {
		document.getElementById('divSelectedShowDates').innerHTML = "";
		document.getElementById('hdShowDateXML').value = "";
		document.getElementById('hdShowDateList').value = "";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funClearSelectedShowDates()", e);
	}
}


//CODE For FilterShowDate Completed Here
//---------------------------------


//---------------------------------------
//CODE For FilterTransDate CODE:
//------------------------


function funAddSelectedTransDates() {
	try {
		var objtxtFromDt = document.getElementById('dtStartDate');
		var objtxtToDt = document.getElementById('dtEndDate');
		var FromDtLength = objtxtFromDt.value.length;
		var ToDtLength = objtxtToDt.value.length;

		var FromDtYear = objtxtFromDt.value.substring(FromDtLength - 4);
		var ToDtYear = objtxtToDt.value.substring(ToDtLength - 4);
		var MonthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
					   "Aug", "Sep", "Oct", "Nov", "Dec"];
		var FromDtMth = 0;
		var ToDtMth = 0;
		for (i = 0; i < 12; i++) {
			if (MonthName[i] == objtxtFromDt.value.substr(objtxtFromDt.value.indexOf("-") + 1, 3))
				FromDtMth = i + 1;
			if (MonthName[i] == objtxtToDt.value.substr(objtxtToDt.value.indexOf("-") + 1, 3))
				ToDtMth = i + 1;
		}

		var FromDtDate = 0, ToDtDate = 0;
		FromDtDate = objtxtFromDt.value.substring(0, objtxtFromDt.value.indexOf("-"));
		ToDtDate = objtxtToDt.value.substring(0, objtxtToDt.value.indexOf("-"));

		if (FromDtMth.toString().length == 1)
			FromDtMth = "0" + FromDtMth;
		if (ToDtMth.toString().length == 1)
			ToDtMth = "0" + ToDtMth;
		if (FromDtDate.length == 1)
			FromDtDate = "0" + FromDtDate;
		if (ToDtDate.length == 1)
			ToDtDate = "0" + ToDtDate;

		var ConvFromDt = FromDtYear + FromDtMth + FromDtDate;
		var ConvToDt = ToDtYear + ToDtMth + ToDtDate;

		if (ConvToDt < ConvFromDt) {
			alert("From Date can not be Greater than To Date");
		}
		else {
			var objDivSelectedDates = document.getElementById('divSelectedTransDates');
			var objtxtSelectedDatesXML = document.getElementById('hdTransDateXML');
			var objtxtSelectedDatesList = document.getElementById('hdTransDateList');
			var SelStartDate = new Date(FromDtYear, FromDtMth - 1, FromDtDate);
			var SelEndDate = new Date(ToDtYear, ToDtMth - 1, ToDtDate);
			var DayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
			while (SelStartDate <= SelEndDate) {
				objDivSelectedDates.innerHTML += DayofWeek[SelStartDate.getDay()] + ", " + SelStartDate.getDate().toString() + "-" + MonthName[SelStartDate.getMonth()] + "-" + SelStartDate.getFullYear().toString() + "<br />";
				objtxtSelectedDatesXML.value += "<TRANSDATE>" + SelStartDate.getDate().toString() + MonthName[SelStartDate.getMonth()].toUpperCase() + SelStartDate.getFullYear().toString() + "</TRANSDATE>";
				objtxtSelectedDatesList.value += "<TRANSDATE>" + SelStartDate.getDate().toString() + "-" + MonthName[SelStartDate.getMonth()] + "-" + SelStartDate.getFullYear().toString() + "</TRANSDATE>";

				SelStartDate.setDate(SelStartDate.getDate() + 1);
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funAddSelectedTransDates()", e);
	}
}

function funGenFinalXMLforTransDates(strButtonClicked) {
	try {
		var objtxtFinalTransDateXML = window.opener.document.getElementById('hdTransDatesXML');
		objtxtFinalTransDateXML.value = "<TRANSDATES></TRANSDATES>";
		if (strButtonClicked == 'Submit') {
			var objtxtTransDateXML = document.getElementById("hdTransDateXML");

			if (objtxtTransDateXML.value != "") {
				objtxtFinalTransDateXML.value = objtxtFinalTransDateXML.value.replace("</TRANSDATES>", objtxtTransDateXML.value + "</TRANSDATES>");
				funfillSelectedItemList("hdTransDateList", "divSelectedTransDates", "<TRANSDATE>", "</TRANSDATE>");
			}
			else {
				window.opener.document.getElementById('divSelectedTransDates').innerHTML = window.opener.document.getElementById('divSelectedTransDates').innerHTML.substring(0, window.opener.document.getElementById('divSelectedTransDates').innerHTML.indexOf("</DIV>") + 6) + "1. All Transaction Dates";
			}
		}
		window.close();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforTransDates()", e);
	}
}

function funClearSelectedTransDates() {
	try {
		document.getElementById('divSelectedTransDates').innerHTML = "";
		document.getElementById('hdTransDateXML').value = "";
		document.getElementById('hdTransDateList').value = "";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funClearSelectedTransDates()", e);
	}
}



//CODE For FilterTransDate Completed Here
//---------------------------------


//---------------------------------------
//CODE For FilterShowTime CODE:
//------------------------


function funAddSelectedShowTime() {
	try {
		var objDivSelectedShowTime = document.getElementById('divSelectedShowTime');
		var objtxtSelectedShowTimeXML = document.getElementById('hdShowTimeXML');
		var objcboFromShowTime = document.getElementById('cboFromShowTime');
		var objcboToShowTime = document.getElementById('cboToShowTime');

		if (objcboToShowTime.selectedIndex <= objcboFromShowTime.selectedIndex)
			alert('To Show Time can not be GREATER than or EQUAL to From Show Time');
		else {
			var i = objcboFromShowTime.selectedIndex;
			while (i < objcboToShowTime.selectedIndex) {
				objDivSelectedShowTime.innerHTML += objcboFromShowTime.options[i].value + " - " + objcboFromShowTime.options[i + 1].value + "<br />";
				objtxtSelectedShowTimeXML.value += "<SHOWTIME>" + objcboFromShowTime.options[i].value + "-" + objcboFromShowTime.options[i + 1].value + "</SHOWTIME>";

				i = i + 1;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funAddSelectedShowTime()", e);
	}
}

function funGenFinalXMLforShowTime(strButtonClicked) {
	try {
		var objtxtFinalShowTimeXML = window.opener.document.getElementById('hdShowTimesXML');
		objtxtFinalShowTimeXML.value = "<SHOWTIMES></SHOWTIMES>";
		if (strButtonClicked == 'Submit') {
			var objtxtShowTimeXML = document.getElementById("hdShowTimeXML");

			if (objtxtShowTimeXML.value != "") {
				objtxtFinalShowTimeXML.value = objtxtFinalShowTimeXML.value.replace("</SHOWTIMES>", objtxtShowTimeXML.value + "</SHOWTIMES>");
				funfillSelectedItemList("hdShowTimeXML", "divSelectedShowTimes", "<SHOWTIME>", "</SHOWTIME>");
			}
			else {
				window.opener.document.getElementById('divSelectedShowTimes').innerHTML = window.opener.document.getElementById('divSelectedShowTimes').innerHTML.substring(0, window.opener.document.getElementById('divSelectedShowTimes').innerHTML.indexOf("</DIV>") + 6) + "1. All Show Timings";
			}
		}
		window.close();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforShowTime()", e);
	}
}

function funClearSelectedShowTime() {
	try {
		document.getElementById('divSelectedShowTime').innerHTML = "";
		document.getElementById('hdShowTimeXML').value = "";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funClearSelectedShowTime()", e);
	}
}


//---------------------------------------
//CODE For FilterShowTime Completed Here:
//---------------------------------------



//---------------------------------------
//CODE For FilterTransTime CODE:
//---------------------------------------


function funAddSelectedTransTime() {
	try {
		var objDivSelectedTransTime = document.getElementById('divSelectedTransTime');
		var objtxtSelectedTransTimeXML = document.getElementById('hdTransTimeXML');
		var objcboFromTransTime = document.getElementById('cboFromTransTime');
		var objcboToTransTime = document.getElementById('cboToTransTime');

		if (objcboToTransTime.selectedIndex <= objcboFromTransTime.selectedIndex)
			alert('To Transaction Time can not be GREATER than From Transaction Time');
		else {
			var i = objcboFromTransTime.selectedIndex;
			while (i < objcboToTransTime.selectedIndex) {
				objDivSelectedTransTime.innerHTML += objcboFromTransTime.options[i].value + " - " + objcboFromTransTime.options[i + 1].value + "<br />";
				objtxtSelectedTransTimeXML.value += "<TRANSTIME>" + objcboFromTransTime.options[i].value + "-" + objcboFromTransTime.options[i + 1].value + "</TRANSTIME>";

				i = i + 1;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funAddSelectedTransTime()", e);
	}
}

function funGenFinalXMLforTransTime(strButtonClicked) {
	try {
		var objtxtFinalTransTimeXML = window.opener.document.getElementById('hdTransTimesXML');
		objtxtFinalTransTimeXML.value = "<TRANSTIMES></TRANSTIMES>";
		if (strButtonClicked == 'Submit') {
			var objtxtTransTimeXML = document.getElementById("hdTransTimeXML");

			if (objtxtTransTimeXML.value != "") {
				objtxtFinalTransTimeXML.value = objtxtFinalTransTimeXML.value.replace("</TRANSTIMES>", objtxtTransTimeXML.value + "</TRANSTIMES>");
				funfillSelectedItemList("hdTransTimeXML", "divSelectedTransTimes", "<TRANSTIME>", "</TRANSTIME>");
			}
			else {
				window.opener.document.getElementById('divSelectedTransTimes').innerHTML = window.opener.document.getElementById('divSelectedTransTimes').innerHTML.substring(0, window.opener.document.getElementById('divSelectedTransTimes').innerHTML.indexOf("</DIV>") + 6) + "1. All Transaction Timings";
			}
		}
		window.close();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforTransTime()", e);
	}
}

function funClearSelectedTransTime() {
	try {
		document.getElementById('divSelectedTransTime').innerHTML = "";
		document.getElementById('hdTransTimeXML').value = "";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funClearSelectedTransTime()", e);
	}
}


//---------------------------------------
//CODE For FilterTransTime Completed Here:
//---------------------------------------

//---------------------------------------
//CODE For FilterShowDay CODE:
//---------------------------------------


function funEnableShowDays() {
	try {
		var objchkAllShowDays = document.getElementById("chkAllShowDays");
		var objtxtShowDaysXML = document.getElementById("hdShowDayXML");
		objtxtShowDaysXML.value = "";

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 11) == 'chkSHOWDAY_') {
				if (objchkAllShowDays.checked == false) {
					objarrInputTags[i].disabled = false;
					objarrInputTags[i].checked = false;
				}
				else {
					objarrInputTags[i].disabled = true;
					objarrInputTags[i].checked = true;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funEnableShowDays()", e);
	}
}

function funGenXMLforShowDays(strDayValue, strDayName) {
	try {
		var objchkShowDay = document.getElementById("chkSHOWDAY_" + strDayValue);
		var objShowDaysXML = document.getElementById("hdShowDayXML");
		var objShowDays = document.getElementById("hdSelectedShowDays");
		if (objchkShowDay.checked == true) {
			objShowDaysXML.value = objShowDaysXML.value + strDayValue;
			objShowDays.value = objShowDays.value + "<SHOWDAY>" + strDayName + "</SHOWDAY>"
		}
		else {
			objShowDaysXML.value = objShowDaysXML.value.replace(strDayValue, "");
			objShowDays.value = objShowDays.value.replace("<SHOWDAY>" + strDayName + "</SHOWDAY>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforShowDays()", e);
	}
}

function funGenFinalXMLforShowDay(strButtonClicked) {
	try {
		var objtxtFinalShowDayXML = window.opener.document.getElementById('hdShowDaysXML');
		objtxtFinalShowDayXML.value = "<SHOWDAYS></SHOWDAYS>";
		if (strButtonClicked == 'Submit') {
			var objtxtShowDayXML = document.getElementById("hdShowDayXML");

			if (objtxtShowDayXML.value != "") {
				objtxtFinalShowDayXML.value = objtxtFinalShowDayXML.value.replace("</SHOWDAYS>", objtxtShowDayXML.value + "</SHOWDAYS>");
				funfillSelectedItemList("hdSelectedShowDays", "divSelectedShowDays", "<SHOWDAY>", "</SHOWDAY>");
				window.close();
			}
			else if (document.getElementById('chkAllShowDays').checked == true) {
				window.opener.document.getElementById('divSelectedShowDays').innerHTML = window.opener.document.getElementById('divSelectedShowDays').innerHTML.substring(0, window.opener.document.getElementById('divSelectedShowDays').innerHTML.indexOf("</DIV>") + 6) + "1. All Show Days";
				window.close();
			}
			else {
				alert('Select atleast One or All Days!!!');
			}

		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforShowDay()", e);
	}
}

//---------------------------------------
//CODE For FilterShowDay Completed Here:
//---------------------------------------

//---------------------------------------
//CODE For FilterTransDay CODE:
//---------------------------------------


function funEnableTransDays() {
	try {
		var objchkAllTransDays = document.getElementById("chkAllTransDays");
		var objtxtTransDaysXML = document.getElementById("hdTransDayXML");
		objtxtTransDaysXML.value = "";

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 12) == 'chkTRANSDAY_') {
				if (objchkAllTransDays.checked == false) {
					objarrInputTags[i].disabled = false;
					objarrInputTags[i].checked = false;
				}
				else {
					objarrInputTags[i].disabled = true;
					objarrInputTags[i].checked = true;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funEnableTransDays()", e);
	}
}

function funGenXMLforTransDays(strDayValue, strDayName) {
	try {
		var objchkTransDay = document.getElementById("chkTRANSDAY_" + strDayValue);
		var objTransDaysXML = document.getElementById("hdTransDayXML");
		var objTransDays = document.getElementById("hdSelectedTransDays");
		if (objchkTransDay.checked == true) {
			objTransDaysXML.value = objTransDaysXML.value + strDayValue;
			objTransDays.value = objTransDays.value + "<TRANSDAY>" + strDayName + "</TRANSDAY>"
		}
		else {
			objTransDaysXML.value = objTransDaysXML.value.replace(strDayValue, "");
			objTransDays.value = objTransDays.value.replace("<TRANSDAY>" + strDayName + "</TRANSDAY>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforTransDays()", e);
	}
}

function funGenFinalXMLforTransDay(strButtonClicked) {
	try {
		var objtxtFinalTransDayXML = window.opener.document.getElementById('hdTransDaysXML');
		objtxtFinalTransDayXML.value = "<TRANSDAYS></TRANSDAYS>";
		if (strButtonClicked == 'Submit') {
			var objtxtTransDayXML = document.getElementById("hdTransDayXML");

			if (objtxtTransDayXML.value != "") {
				objtxtFinalTransDayXML.value = objtxtFinalTransDayXML.value.replace("</TRANSDAYS>", objtxtTransDayXML.value + "</TRANSDAYS>");
				funfillSelectedItemList("hdSelectedTransDays", "divSelectedTransDays", "<TRANSDAY>", "</TRANSDAY>");
			}
			else if (document.getElementById('chkAllTransDays').checked == true) {
				window.opener.document.getElementById('divSelectedTransDays').innerHTML = window.opener.document.getElementById('divSelectedTransDays').innerHTML.substring(0, window.opener.document.getElementById('divSelectedTransDays').innerHTML.indexOf("</DIV>") + 6) + "1. All Transaction Days";
			}
			else {
				alert('Select atleast One or All Days!!!');
			}
		}
		window.close();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforTransDay()", e);
	}
}

//---------------------------------------
//CODE For FilterTransDay Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For FilterVenues CODE:
//---------------------------------------

function funGenXMLforRegions(strRegionCode, strRegionName) {
	try {
		var objchkRegionCode = document.getElementById("chkRegion_" + strRegionCode);
		var objtxtRegionsXML = document.getElementById('hdRegionXML');
		var objtxtRegionList = document.getElementById('hdRegionList');

		if (objchkRegionCode.checked == true) {
			objtxtRegionsXML.value += "<REGION>" + strRegionCode + "</REGION>";
			objtxtRegionList.value += "<REGION>" + strRegionName + "</REGION>";
		}
		else {
			objtxtRegionsXML.value = objtxtRegionsXML.value.replace("<REGION>" + strRegionCode + "</REGION>", "");
			objtxtRegionList.value = objtxtRegionList.value.replace("<REGION>" + strRegionName + "</REGION>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforRegions()", e);
	}
}

function funGenXMLforSubRegions(strSubRegionCode, strSubRegionName) {
	try {
		var objchkSubRegionCode = document.getElementById("chkSubRegion_" + strSubRegionCode);
		var objtxtSubRegionsXML = document.getElementById('hdSubRegionXML');
		var objtxtSubRegionList = document.getElementById('hdSubRegionList');

		if (objchkSubRegionCode.checked == true) {
			objtxtSubRegionsXML.value += "<SUBREGION>" + strSubRegionCode + "</SUBREGION>";
			objtxtSubRegionList.value += "<SUBREGION>" + strSubRegionName + "</SUBREGION>";
		}
		else {
			objtxtSubRegionsXML.value = objtxtSubRegionsXML.value.replace("<SUBREGION>" + strSubRegionCode + "</SUBREGION>", "");
			objtxtSubRegionList.value = objtxtSubRegionList.value.replace("<SUBREGION>" + strSubRegionName + "</SUBREGION>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforSubRegions()", e);
	}
}

function funGenXMLforVenues(strVenue, strCinemaName) {
	try {
		var objchkVenue = document.getElementById("chkVenue_" + strVenue);
		var objtxtVenuesXML = document.getElementById('hdVenueXML');
		var objtxtCinemaList = document.getElementById('hdVenueList');

		if (objchkVenue.checked == true) {
			objtxtVenuesXML.value += "<VENUE>" + strVenue + "</VENUE>";
			objtxtCinemaList.value += "<VENUE>" + strCinemaName + "</VENUE>";
		}
		else {
			objtxtVenuesXML.value = objtxtVenuesXML.value.replace("<VENUE>" + strVenue + "</VENUE>", "");
			objtxtCinemaList.value = objtxtCinemaList.value.replace("<VENUE>" + strCinemaName + "</VENUE>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforVenues()", e);
	}
}

function funEnableCheckBoxList(strAllOptionName, strSelectedItemXML, strSelectedItemList, strControlType, strControlPrefix) {
	try {
		var objchkAllOption = document.getElementById(strAllOptionName);
		document.getElementById(strSelectedItemXML).value = "";
		document.getElementById(strSelectedItemList).value = "";

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == strControlType && objarrInputTags[i].id.substring(0, strControlPrefix.length) == strControlPrefix) {
				if (objchkAllOption.checked == false) {
					objarrInputTags[i].disabled = false;
					objarrInputTags[i].checked = false;
				}
				else {
					objarrInputTags[i].disabled = true;
					objarrInputTags[i].checked = true;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funEnableCheckBoxList()", e);
	}
}

function funGenFinalXMLforVenues(strButtonClicked) {
	try {
		var objtxtFinalRegionsXML = window.opener.document.getElementById('hdRegionsXML');
		var objtxtFinalSubRegionsXML = window.opener.document.getElementById('hdSubRegionsXML');
		var objtxtFinalVenuesXML = window.opener.document.getElementById('hdVenuesXML');

		objtxtFinalRegionsXML.value = "<REGIONS></REGIONS>";
		objtxtFinalSubRegionsXML.value = "<SUBREGIONS></SUBREGIONS>";
		objtxtFinalVenuesXML.value = "<VENUES></VENUES>";

		if (strButtonClicked == 'Submit') {
			var objtxtRegionXML = document.getElementById("hdRegionXML");
			var objtxtSubRegionXML = document.getElementById("hdSubRegionXML");
			var objtxtVenueXML = document.getElementById("hdVenueXML");

			if (objtxtRegionXML.value != "") {
				objtxtFinalRegionsXML.value = objtxtFinalRegionsXML.value.replace("</REGIONS>", objtxtRegionXML.value + "</REGIONS>");
				funfillSelectedItemList("hdRegionList", "divSelectedRegions", "<REGION>", "</REGION>");
				window.close();
			}
			else if (document.getElementById('chkAllRegions').checked == true) {
				window.opener.document.getElementById('divSelectedRegions').innerHTML = window.opener.document.getElementById('divSelectedRegions').innerHTML.substring(0, window.opener.document.getElementById('divSelectedRegions').innerHTML.indexOf("</DIV>") + 6) + "1. ALL Regions";
				window.close();
			}
			else {
				alert('Select Atleast One or All Regions!!!');
				return;
			}

			if (objtxtSubRegionXML.value != "") {
				objtxtFinalSubRegionsXML.value = objtxtFinalSubRegionsXML.value.replace("</SUBREGIONS>", objtxtSubRegionXML.value + "</SUBREGIONS>");
				funfillSelectedItemList("hdSubRegionList", "divSelectedSubRegions", "<SUBREGION>", "</SUBREGION>");
				window.close();
			}
			else if (document.getElementById('chkAllSubRegions').checked == true) {
				window.opener.document.getElementById('divSelectedSubRegions').innerHTML = window.opener.document.getElementById('divSelectedSubRegions').innerHTML.substring(0, window.opener.document.getElementById('divSelectedSubRegions').innerHTML.indexOf("</DIV>") + 6) + "1. ALL Sub Regions";
				window.close();
			}
			else {
				alert('Select Atleast One or All Sub Regions!!!');
				return;
			}

			if (objtxtVenueXML.value != "") {
				objtxtFinalVenuesXML.value = objtxtFinalVenuesXML.value.replace("</VENUES>", objtxtVenueXML.value + "</VENUES>");
				funfillSelectedItemList("hdVenueList", "divSelectedVenues", "<VENUE>", "</VENUE>");
				window.close();
			}
			else if (document.getElementById('chkAllVenues').checked == true) {
				window.opener.document.getElementById('divSelectedVenues').innerHTML = window.opener.document.getElementById('divSelectedVenues').innerHTML.substring(0, window.opener.document.getElementById('divSelectedVenues').innerHTML.indexOf("</DIV>") + 6) + "1. ALL Cinemas";
				window.close();
			}
			else {
				alert('Select Atleast One or All Venues!!!');
				return;
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforVenues()", e);
	}
}


//---------------------------------------
//CODE For FilterVenues Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For FilterLanguages CODE:
//---------------------------------------


function funEnableLanguages() {
	try {
		var objchkAllLangs = document.getElementById("chkAllLanguages");
		document.getElementById("hdLangXML").value = "";

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 8) == 'chkLANG_') {
				if (objchkAllLangs.checked == false) {
					objarrInputTags[i].disabled = false;
					objarrInputTags[i].checked = false;
				}
				else {
					objarrInputTags[i].disabled = true;
					objarrInputTags[i].checked = true;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funEnableLanguages()", e);
	}
}

function funGenXMLforLanguages(strLangText) {
	try {
		var objchkLangText = document.getElementById("chkLANG_" + strLangText);
		var objtxtLangXML = document.getElementById("hdLangXML");
		if (objchkLangText.checked == true) {
			objtxtLangXML.value = objtxtLangXML.value + "<LANGUAGE>" + strLangText + "</LANGUAGE>";
		}
		else {
			objtxtLangXML.value = objtxtLangXML.value.replace("<LANGUAGE>" + strLangText + "</LANGUAGE>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforLanguages()", e);
	}
}

function funGenFinalXMLforLangs(strButtonClicked) {
	try {
		if (document.getElementById("chkAllLanguages").checked == true || document.getElementById("hdLangXML").value != "") {
			var objtxtFinalLanguagesXML = window.opener.document.getElementById('hdLanguagesXML');

			objtxtFinalLanguagesXML.value = "<LANGUAGES></LANGUAGES>";

			if (strButtonClicked == 'Submit') {
				var objtxtLangXML = document.getElementById("hdLangXML");

				if (objtxtLangXML.value != "") {
					objtxtFinalLanguagesXML.value = objtxtFinalLanguagesXML.value.replace("</LANGUAGES>", objtxtLangXML.value + "</LANGUAGES>");
					funfillSelectedItemList("hdLangXML", "divSelectedLanguages", "<LANGUAGE>", "</LANGUAGE>");
				}
				else {
					window.opener.document.getElementById('divSelectedLanguages').innerHTML = window.opener.document.getElementById('divSelectedLanguages').innerHTML.substring(0, window.opener.document.getElementById('divSelectedLanguages').innerHTML.indexOf("</DIV>") + 6) + "1. All Languages";
				}
			}
			window.close();
		}
		else {
			alert('Select Anyone or All LANGUAGES !!!');
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforLangs()", e);
	}
}


//---------------------------------------
//CODE For FilterLanguages Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For FilterProducers CODE:
//---------------------------------------


function funEnableProducers() {
	try {
		var objchkAllProducers = document.getElementById("chkAllProducers");
		var objtxtProducersXML = document.getElementById("hdProducerXML");
		objtxtProducersXML.value = "";

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 8) == 'chkPROD_') {
				if (objchkAllProducers.checked == false) {
					objarrInputTags[i].disabled = false;
					objarrInputTags[i].checked = false;
				}
				else {
					objarrInputTags[i].disabled = true;
					objarrInputTags[i].checked = true;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funEnableProducers()", e);
	}
}

function funGenXMLforProducers(strProducer) {
	try {
		var objchkProducer = document.getElementById("chkPROD_" + strProducer);
		var objProducerXML = document.getElementById("hdProducerXML");
		if (objchkProducer.checked == true) {
			objProducerXML.value = objProducerXML.value + "<PRODUCERCODE>" + strProducer + "</PRODUCERCODE>";
		}
		else {
			objProducerXML.value = objProducerXML.value.replace("<PRODUCERCODE>" + strProducer + "</PRODUCERCODE>", "");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforProducers()", e);
	}
}

function funGenFinalXMLforProducers(strButtonClicked) {
	try {
		if (document.getElementById("chkAllProducers").checked == true || document.getElementById("hdProducerXML").value != "") {
			var objtxtFinalProducerXML = window.opener.document.getElementById('hdProducerCodesXML');

			objtxtFinalProducerXML.value = "<PRODUCERCODES></PRODUCERCODES>";

			if (strButtonClicked == 'Submit') {
				var objtxtProducerXML = document.getElementById("hdProducerXML");

				if (objtxtProducerXML.value != "") {
					objtxtFinalProducerXML.value = objtxtFinalProducerXML.value.replace("</PRODUCERCODES>", objtxtProducerXML.value + "</PRODUCERCODES>");
					funfillSelectedItemList("hdProducerXML", "divSelectedProducers", "<PRODUCERCODE>", "</PRODUCERCODE>");
				}
				else {
					window.opener.document.getElementById('divSelectedProducers').innerHTML = window.opener.document.getElementById('divSelectedProducers').innerHTML.substring(0, window.opener.document.getElementById('divSelectedProducers').innerHTML.indexOf("</DIV>") + 6) + "1. All Producers";
				}
			}
			window.close();
		}
		else {
			alert('Select Anyone or All PRODUCERS !!!');
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenFinalXMLforProducers()", e);
	}
}

//---------------------------------------
//CODE For FilterProducers Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For ChannelLimit CODE:
//---------------------------------------

function funLimitChannelSelected(strAppId) {
	try {
		var objchkAppID = document.getElementById("chkLimit_" + strAppId);
		var objtxtLimitXML = document.getElementById('hdLimitsXML')
		var LimitChannelsCount = 0;
		if (objtxtLimitXML.value == "") {
			objtxtLimitXML.value = "<LIMITS></LIMITS>";
		}


		if (objtxtLimitXML.value != "<LIMITS></LIMITS>") {
			if (document.getElementById('hdPreviousLimits').value != "<LIMITS></LIMITS>")
				intLimitTagIDSeq = parseInt(document.getElementById('hdPreviousLimits').value.substr(document.getElementById('hdPreviousLimits').value.lastIndexOf("ID=") + 3, 2));
			else
				intLimitTagIDSeq = 0;
			alert('Current Limits\' selection is Cleared OFF!!! Please Configure NEW Limits for NEW Channels\' SELECTION.');
			objtxtLimitXML.value = "<LIMITS></LIMITS>";
			document.getElementById('rdbIndividualLimit').checked = false;
			document.getElementById('rdbCombineLimit').checked = false;
			funClearAllLimitDivs();
			funDisableLimitOptions();
		}

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 9) == 'chkLimit_') {
				if (objarrInputTags[i].checked == true) {
					LimitChannelsCount = LimitChannelsCount + 1;
				}
			}
			else continue;
		}

		if (LimitChannelsCount == 1) {
			document.getElementById('rdbIndividualLimit').disabled = false;
			document.getElementById('rdbCombineLimit').disabled = true;
			document.getElementById('rdbCombineLimit').checked = false;
			document.getElementById('rdbIndividualLimit').checked = false;
		}
		else if (LimitChannelsCount > 1) {
			document.getElementById('rdbIndividualLimit').disabled = false;
			document.getElementById('rdbCombineLimit').disabled = false;
		}
		else {
			funDisableLimitOptions();
			document.getElementById('rdbIndividualLimit').disabled = true;
			document.getElementById('rdbIndividualLimit').checked = false;
			document.getElementById('rdbCombineLimit').disabled = true;
			document.getElementById('rdbCombineLimit').checked = false;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funLimitChannelSelected()", e);
	}
}

function funEnableLimitOptions() {
	try {
		document.getElementById('trLimitValue').disabled = false;
		document.getElementById('trLimitPeriod').disabled = false;
		document.getElementById('trLimitEvents').disabled = false;
		document.getElementById('trLimitLanguage').disabled = false;
		document.getElementById('trLimitRegions').disabled = false;
		document.getElementById('trLimitVenues').disabled = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funEnableLimitOptions()", e);
	}
}

function funDisableLimitOptions() {
	try {
		document.getElementById('trLimitValue').disabled = true;
		document.getElementById('trLimitPeriod').disabled = true;
		document.getElementById('trLimitEvents').disabled = true;
		document.getElementById('trLimitLanguage').disabled = true;
		document.getElementById('trLimitRegions').disabled = true;
		document.getElementById('trLimitVenues').disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funDisableLimitOptions()", e);
	}
}

function funrdbLimitTypeSelection(strButtonName) {
	try {
		var objtxtLimitXML = document.getElementById('hdLimitsXML');
		if (objtxtLimitXML.value != "<LIMITS></LIMITS>") {
			if (document.getElementById('hdPreviousLimits').value != "<LIMITS></LIMITS>")
				intLimitTagIDSeq = parseInt(document.getElementById('hdPreviousLimits').value.substr(document.getElementById('hdPreviousLimits').value.lastIndexOf("ID=") + 3, 2));
			else
				intLimitTagIDSeq = 0;
			alert('Current Limits\' selection is Cleared OFF!!! Please Configure NEW Limits for NEW Limit TYPE.');
			objtxtLimitXML.value = "<LIMITS></LIMITS>";
		}
		if (strButtonName == 'rdbIndividualLimit') {
			var objarrInputTags = document.getElementsByTagName('input');
			for (i = 0; i < objarrInputTags.length; i++) {
				if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 9) == 'chkLimit_') {
					if (objarrInputTags[i].checked == true) {
						intLimitTagIDSeq = intLimitTagIDSeq + 1;
						if (intLimitTagIDSeq < 10)
							objtxtLimitXML.value = objtxtLimitXML.value.replace("</LIMITS>", "<LIMIT ID=\"0" + intLimitTagIDSeq + "\"><CHANNELS>|" + objarrInputTags[i].id.substr(9) + "|</CHANNELS></LIMIT></LIMITS>");
						else
							objtxtLimitXML.value = objtxtLimitXML.value.replace("</LIMITS>", "<LIMIT ID=\"" + intLimitTagIDSeq + "\"><CHANNELS>|" + objarrInputTags[i].id.substr(9) + "|</CHANNELS></LIMIT></LIMITS>");
					}
				}
				else continue;
			}
		}
		else if (strButtonName == 'rdbCombineLimit') {
			var objarrInputTags = document.getElementsByTagName('input');
			for (i = 0; i < objarrInputTags.length; i++) {
				if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 9) == 'chkLimit_') {
					if (objarrInputTags[i].checked == true) {
						if (objtxtLimitXML.value == "<LIMITS></LIMITS>") {
							intLimitTagIDSeq = intLimitTagIDSeq + 1;
							if (intLimitTagIDSeq < 10)
								objtxtLimitXML.value = objtxtLimitXML.value.replace("</LIMITS>", "<LIMIT ID=\"0" + intLimitTagIDSeq + "\"><CHANNELS>|</CHANNELS></LIMIT></LIMITS>");
							else
								objtxtLimitXML.value = objtxtLimitXML.value.replace("</LIMITS>", "<LIMIT ID=\"" + intLimitTagIDSeq + "\"><CHANNELS>|</CHANNELS></LIMIT></LIMITS>");
						}
						objtxtLimitXML.value = objtxtLimitXML.value.replace("</CHANNELS>", objarrInputTags[i].value + "|</CHANNELS>");
					}
				}
				else continue;
			}
		}
		funEnableLimitOptions();
		funClearAllLimitDivs();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funrdbLimitTypeSelection()", e);
	}
}

function funClearAllLimitDivs() {
	try {
		document.getElementById('divValueList').innerHTML = document.getElementById('divValueList').innerHTML.substring(0, document.getElementById('divValueList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divAppliOnList').innerHTML = document.getElementById('divAppliOnList').innerHTML.substring(0, document.getElementById('divAppliOnList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divPeriodList').innerHTML = document.getElementById('divPeriodList').innerHTML.substring(0, document.getElementById('divPeriodList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divEventList').innerHTML = document.getElementById('divEventList').innerHTML.substring(0, document.getElementById('divEventList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divEventTypeList').innerHTML = document.getElementById('divEventTypeList').innerHTML.substring(0, document.getElementById('divEventTypeList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divCompList').innerHTML = document.getElementById('divCompList').innerHTML.substring(0, document.getElementById('divCompList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divRegionList').innerHTML = document.getElementById('divRegionList').innerHTML.substring(0, document.getElementById('divRegionList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divSubRegionList').innerHTML = document.getElementById('divSubRegionList').innerHTML.substring(0, document.getElementById('divSubRegionList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divVenueList').innerHTML = document.getElementById('divVenueList').innerHTML.substring(0, document.getElementById('divVenueList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divLanguageList').innerHTML = document.getElementById('divLanguageList').innerHTML.substring(0, document.getElementById('divLanguageList').innerHTML.indexOf("</DIV>") + 6);
		document.getElementById('divProducerList').innerHTML = document.getElementById('divProducerList').innerHTML.substring(0, document.getElementById('divProducerList').innerHTML.indexOf("</DIV>") + 6);
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funClearAllLimitDivs()", e);
	}
}

//---------------------------------------
//CODE For ChannelLimit Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For LimitValue CODE:
//---------------------------------------

function funSelectAllLimitChannels() {
	try {
		document.getElementById('rdbIndividualLimit').checked = false;
		document.getElementById('rdbCombineLimit').checked = false;

		if (document.getElementById('hdLimitsXML').value != "<LIMITS></LIMITS>") {
			alert('Current Limits\' selection is Cleared OFF!!! Please Configure NEW Limits for NEW Limit TYPE.');
			funClearAllLimitDivs();
			funDisableLimitOptions();
			document.getElementById('hdLimitsXML').value = "<LIMITS></LIMITS>";
		}

		if (document.getElementById('chkAllLimitChannels').checked == false) {
			document.getElementById('rdbIndividualLimit').disabled = true;
			document.getElementById('rdbCombineLimit').disabled = true;
		}
		else {
			document.getElementById('rdbIndividualLimit').disabled = false;
			document.getElementById('rdbCombineLimit').disabled = false;
		}

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 9) == 'chkLimit_') {
				if (document.getElementById('chkAllLimitChannels').checked == true) {
					objarrInputTags[i].checked = true;
					objarrInputTags[i].disabled = true;
				}
				else {
					objarrInputTags[i].checked = false;
					objarrInputTags[i].disabled = false;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funSelectAllLimitChannels()", e);
	}
}


//---------------------------------------
//CODE For ChannelLimit Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For LimitValue CODE:
//---------------------------------------

function subGenValueRows() {
	try {
		var ChannelList = document.getElementById('hdChannelList').value.substr(1);
		var objTB = document.getElementById("tbLimitValue");
		if (ChannelList != "") {
			var objTDCap = document.getElementById('tdCatpion');
			var i = 2;
			while (ChannelList.length > 0) {
				var objTR = document.createElement("TR");
				var objTDCaption = document.createElement("TD");
				var objTDTextBox = document.createElement("TD");
				var objTxt = document.createElement("input");
				objTDCap.rowSpan = i;
				objTxt.type = "text";
				objTxt.id = "txtLimit_" + ChannelList.substring(0, ChannelList.indexOf("|"));
				objTDCaption.className = "a06";
				objTDTextBox.className = "a06";
				objTDCaption.style.backgroundColor = "#cecece";
				objTDTextBox.style.backgroundColor = "#cecece";
				objTDCaption.innerText = ChannelList.substring(0, ChannelList.indexOf("|"));
				objTDTextBox.appendChild(objTxt);
				objTR.appendChild(objTDCaption);
				objTR.appendChild(objTDTextBox);
				objTB.appendChild(objTR);
				ChannelList = ChannelList.substr(ChannelList.indexOf("|") + 1);
				i = i + 1;
			}
		}
		else {
			var objTR = document.getElementById("trLimitValue");
			var objTDCaption = document.createElement("TD");
			var objTDTextBox = document.createElement("TD");
			var objTxt = document.createElement("input");
			objTxt.type = "text";
			objTxt.id = "txtLimit_";
			objTDCaption.className = "a06";
			objTDTextBox.className = "a06";
			objTDCaption.style.backgroundColor = "#cecece";
			objTDTextBox.style.backgroundColor = "#cecece";
			objTDCaption.innerText = "Combine Limit";
			objTDTextBox.appendChild(objTxt);
			objTR.appendChild(objTDCaption);
			objTR.appendChild(objTDTextBox);
			objTB.appendChild(objTR);
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subGenValueRows()", e);
	}
}

function funValidateLimitValue(strButtonClicked) {
	try {
		if (strButtonClicked == 'Submit') {
			if (document.getElementById('hdChannelList').value == "") {
				if (document.getElementById('txtLimit_').value == "") {
					alert('Please Enter Combine LIMIT');
					return;
				}
			}
			else {
				var objarrInputTags = document.getElementsByTagName('input');
				for (i = 0; i < objarrInputTags.length; i++) {
					if (objarrInputTags[i].type == 'text' && objarrInputTags[i].id.substring(0, 9) == 'txtLimit_') {
						if (objarrInputTags[i].value == "") {
							alert('Please Enter LIMIT for ' + objarrInputTags[i].id.substr(9));
							return;
						}
						else if (objarrInputTags[i].value < 1) {
							alert('LIMIT VALUE can not be set less than ONE!!!');
							return;
						}
					}
					else continue;
				}
			}
			funGenXMLforAllLimits('Submit', 'txtLimit_', '<VALUE>', '</VALUE>', 'divValueList');
		}
		window.close();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funValidateLimitValue()", e);
	}
}

//---------------------------------------
//CODE For LimitValue Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For Limit Applicable On CODE:
//---------------------------------------

function subGenAppliOnRows() {
	try {
		var ChannelList = document.getElementById('hdChannelList').value.substr(1);
		var objTB = document.getElementById("tbLimitAppliOn");
		if (ChannelList != "") {
			var objTDCap = document.getElementById('tdCatpion');
			var i = 2;
			while (ChannelList.length > 0) {
				var objTR = document.createElement("TR");
				var objTDCaption = document.createElement("TD");
				var objTDSelect = document.createElement("TD");
				var objAppliOnSelect = document.createElement("select");
				objTDCap.rowSpan = i;
				objAppliOnSelect.id = "cboApplOn_" + ChannelList.substring(0, ChannelList.indexOf("|"));
				objTDCaption.className = "a06";
				objTDSelect.className = "a06";
				objTDCaption.style.backgroundColor = "#cecece";
				objTDSelect.style.backgroundColor = "#cecece";

				var objAppliOnOpt = document.createElement("option");
				objAppliOnOpt.value = "TRANS";
				objAppliOnOpt.innerHTML = "Transaction";
				objAppliOnSelect.appendChild(objAppliOnOpt);

				var objAppliOnOpt = document.createElement("option");
				objAppliOnOpt.value = "TKTS";
				objAppliOnOpt.innerHTML = "Tickets";
				objAppliOnSelect.appendChild(objAppliOnOpt);

				var objAppliOnOpt = document.createElement("option");
				objAppliOnOpt.value = "AMT";
				objAppliOnOpt.innerHTML = "Amount";
				objAppliOnSelect.appendChild(objAppliOnOpt);

				objTDCaption.innerText = ChannelList.substring(0, ChannelList.indexOf("|"));
				objTDSelect.appendChild(objAppliOnSelect);
				objTR.appendChild(objTDCaption);
				objTR.appendChild(objTDSelect);
				objTB.appendChild(objTR);
				ChannelList = ChannelList.substr(ChannelList.indexOf("|") + 1);
				i = i + 1;
			}
		}
		else {
			var objTR = document.getElementById("trLimitAppliOn");
			var objTDSelect = document.createElement("TD");
			var objAppliOnSelect = document.createElement("select");
			objAppliOnSelect.id = "cboApplOn_";
			objTDSelect.className = "a06";
			objTDSelect.style.backgroundColor = "#cecece";

			var objAppliOnOpt = document.createElement("option");
			objAppliOnOpt.value = "TRANS";
			objAppliOnOpt.innerHTML = "Transaction";
			objAppliOnSelect.appendChild(objAppliOnOpt);

			var objAppliOnOpt = document.createElement("option");
			objAppliOnOpt.value = "TKTS";
			objAppliOnOpt.innerHTML = "Tickets";
			objAppliOnSelect.appendChild(objAppliOnOpt);

			var objAppliOnOpt = document.createElement("option");
			objAppliOnOpt.value = "AMT";
			objAppliOnOpt.innerHTML = "Amount";
			objAppliOnSelect.appendChild(objAppliOnOpt);

			objTDSelect.appendChild(objAppliOnSelect);
			objTR.appendChild(objTDSelect);
			objTB.appendChild(objTR);
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subGenValueRows()", e);
	}
}

//---------------------------------------
//CODE For Limit Applicable On Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For Limit Period CODE:
//---------------------------------------


function subGenPeriodRows() {
	try {
		var ChannelList = document.getElementById('hdChannelList').value.substr(1);
		var objTB = document.getElementById("tbLimitPeriod");
		if (ChannelList != "") {
			var objTDCap = document.getElementById('tdCatpion');
			var i = 2;
			while (ChannelList.length > 0) {
				var objTR = document.createElement("TR");
				var objTDCaption = document.createElement("TD");
				var objTDSelect = document.createElement("TD");
				var objPeriodSelect = document.createElement("select");
				objTDCap.rowSpan = i;
				objPeriodSelect.id = "cboPeriod_" + ChannelList.substring(0, ChannelList.indexOf("|"));
				objTDCaption.className = "a06";
				objTDSelect.className = "a06";
				objTDCaption.style.backgroundColor = "#cecece";
				objTDSelect.style.backgroundColor = "#cecece";

				subfillPeriodSelect(objPeriodSelect);
				objTDCaption.innerText = ChannelList.substring(0, ChannelList.indexOf("|"));
				objTDSelect.appendChild(objPeriodSelect);
				objTR.appendChild(objTDCaption);
				objTR.appendChild(objTDSelect);
				objTB.appendChild(objTR);
				ChannelList = ChannelList.substr(ChannelList.indexOf("|") + 1);
				i = i + 1;
			}
		}
		else {
			var objTR = document.getElementById("trLimitPeriod");
			var objTDSelect = document.createElement("TD");
			var objPeriodSelect = document.createElement("select");
			objPeriodSelect.id = "cboPeriod_";
			objTDSelect.className = "a06";
			objTDSelect.style.backgroundColor = "#cecece";

			subfillPeriodSelect(objPeriodSelect);
			objTDSelect.appendChild(objPeriodSelect);
			objTR.appendChild(objTDSelect);
			objTB.appendChild(objTR);
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subGenPeriodRows()", e);
	}
}

function subfillPeriodSelect(objPeriodSelect) {
	try {
		var objPeriodOpt = document.createElement("option");
		objPeriodOpt.value = "DAILY";
		objPeriodOpt.innerHTML = "Daily";
		objPeriodSelect.appendChild(objPeriodOpt);

		var objPeriodOpt = document.createElement("option");
		objPeriodOpt.value = "WEEKLY";
		objPeriodOpt.innerHTML = "Weekly";
		objPeriodSelect.appendChild(objPeriodOpt);

		var objPeriodOpt = document.createElement("option");
		objPeriodOpt.value = "MONTHLY";
		objPeriodOpt.innerHTML = "Monthly";
		objPeriodSelect.appendChild(objPeriodOpt);

		var objPeriodOpt = document.createElement("option");
		objPeriodOpt.value = "QUATERLY";
		objPeriodOpt.innerHTML = "Quaterly";
		objPeriodSelect.appendChild(objPeriodOpt);

		var objPeriodOpt = document.createElement("option");
		objPeriodOpt.value = "HALFYEARLY";
		objPeriodOpt.innerHTML = "Half Yearly";
		objPeriodSelect.appendChild(objPeriodOpt);

		var objPeriodOpt = document.createElement("option");
		objPeriodOpt.value = "YEARLY";
		objPeriodOpt.innerHTML = "Yearly";
		objPeriodSelect.appendChild(objPeriodOpt);

		var objPeriodOpt = document.createElement("option");
		objPeriodOpt.value = "OVERALL";
		objPeriodOpt.innerHTML = "Overall";
		objPeriodSelect.appendChild(objPeriodOpt);
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfillPeriodSelect()", e);
	}
}


//---------------------------------------
//CODE For Limit Period Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For LimitEvents CODE:
//---------------------------------------

function funGenEventList(strChannel, strEventCode, strEventTitle) {
	try {
		var objchkEventCode = document.getElementById("chk_" + strChannel + "_" + strEventCode);
		var objtxtEventXML = document.getElementById("hdSelectedItemList_" + strChannel);
		var objtxtEventTitle = document.getElementById("txtLimitItemName_" + strChannel);
		var objtxtSelectedEvents = document.getElementById("txtSelectedEvents");

		if (objchkEventCode.checked == true) {
			if (objtxtEventXML.value == "") {
				objtxtEventXML.value = "|";
				objtxtEventTitle.value = "|";
			}
			objtxtEventXML.value = objtxtEventXML.value + strEventCode + "|";
			objtxtEventTitle.value = objtxtEventTitle.value + strEventTitle + "|";
			if (objtxtSelectedEvents.value.search("<" + strChannel + ">") < 0)
				objtxtSelectedEvents.value = objtxtSelectedEvents.value + "<" + strChannel + ">|</" + strChannel + ">";
			objtxtSelectedEvents.value = objtxtSelectedEvents.value.replace("</" + strChannel + ">", strEventCode + "|</" + strChannel + ">");
		}
		else {
			objtxtEventXML.value = objtxtEventXML.value.replace(strEventCode + "|", "");
			if (objtxtEventXML.value == "|") {
				objtxtEventXML.value = "";
				objtxtEventTitle.value = "";
			}
			objtxtSelectedEvents.value = objtxtSelectedEvents.value.replace(strEventCode + "|", "");
			objtxtEventTitle.value = objtxtEventTitle.value.replace(strEventTitle + "|", "");
			if (objtxtSelectedEvents.value.search("<" + strChannel + ">|</" + strChannel + ">") > -1) {
				objtxtSelectedEvents.value = objtxtSelectedEvents.value.replace("<" + strChannel + ">|</" + strChannel + ">", "");
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenEventList()", e);
	}
}

function subSaveSearchString(strChannelName) {
	try {
		document.getElementById("txtSearchString").value = strChannelName + "|" + document.getElementById("txtSearch_" + strChannelName).value + "|";

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveSearchString()", e);
	}
}

//---------------------------------------
//CODE For LimitEvents Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For LimitVenues CODE:
//---------------------------------------

function funLimitVenues() {
	try {
		funGenXMLforAllLimits('Submit', 'hdSelectedItemList_REGION_', '<REGION>', '</REGION>', 'divRegionList');
		funGenXMLforAllLimits('Submit', 'hdSelectedItemList_SUBREGION_', '<SUBREGION>', '</SUBREGION>', 'divSubRegionList');
		funGenXMLforAllLimits('Submit', 'hdSelectedItemList_VENUE_', '<VENUE>', '</VENUE>', 'divVenueList');
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenVanueList()", e);
	}
}

//---------------------------------------
//CODE For LimitVenues On Completed Here:
//---------------------------------------


//---------------------------------------
//CODE For Common Limit CODE:
//---------------------------------------

function subGetChannelList(strElementName) {
	try {
		var txtLimit = window.opener.document.getElementById('hdLimitsXML').value;
		var objChannelList = document.getElementById('hdChannelList');
		var intStartIndex = 0;
		var intEndIndex = 0;
		objChannelList.value = "";
		if (window.opener.document.getElementById('rdbIndividualLimit').checked == true) {
			while (txtLimit.search("<CHANNELS>") > 0) {
				intStartIndex = txtLimit.search("<CHANNELS>") + 10;
				intEndIndex = txtLimit.search("</CHANNELS>");
				objChannelList.value += txtLimit.substring(intStartIndex, intEndIndex - 1);

				txtLimit = txtLimit.replace("<CHANNELS>" + txtLimit.substring(intStartIndex, intEndIndex) + "</CHANNELS>", "");
			}
			objChannelList.value += "|";
		}
		else {
			objChannelList.value = "";
		}
		if (strElementName == '<VALUE>')
			subGenValueRows();
		else if (strElementName == '<APPLICABLEON>')
			subGenAppliOnRows();
		else if (strElementName == '<PERIOD>')
			subGenPeriodRows();

		switch (strElementName) {
			case "<VALUE>":
				subfillSelectedPageValues("<VALUE>", "</VALUE>", "txtLimit_", "");
				break;
			case "<APPLICABLEON>":
				subfillSelectedPageValues("<APPLICABLEON>", "</APPLICABLEON>", "cboApplOn_", "");
				break;
			case "<PERIOD>":
				subfillSelectedPageValues("<PERIOD>", "</PERIOD>", "cboPeriod_", "");
				break;
			case "<VENUE>":
				subfillSelectedPageValues("<REGION>", "</REGION>", "chk_", "_REGION");
				subfillSelectedPageValues("<SUBREGION>", "</SUBREGION>", "chk_", "_SUBREGION");
				subfillSelectedPageValues("<VENUE>", "</VENUE>", "chk_", "_VENUE");
				break;
			default:
				var strEndTag = strElementName.substring(0, 1) + "/" + strElementName.substr(1);
				subfillSelectedPageValues(strElementName, strEndTag, "chk_", "");
				break;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subGetChannelList()", e);
	}
}

function subfillSelectedPageValues(StartElement, EndElement, ControlPrefix, strArea) {
	try {
		var strLimitXML = window.opener.document.getElementById('hdLimitsXML').value;
		if (strLimitXML.indexOf(StartElement) > -1) {
			if (ControlPrefix.substring(0, 3) == 'cbo')
				var objarrInputTags = document.getElementsByTagName('select');
			else
				var objarrInputTags = document.getElementsByTagName('input');

			var strChannelList = document.getElementById('hdChannelList').value.substr(1);
			var strChannelName = strChannelList.substring(0, strChannelList.indexOf("|"));
			do {
				if (ControlPrefix.substring(0, 3) == 'txt') {
					document.getElementById(ControlPrefix + strChannelName).value = strLimitXML.substring(strLimitXML.indexOf(StartElement) + StartElement.length, strLimitXML.indexOf(EndElement));
				}
				else if (ControlPrefix.substring(0, 3) == 'cbo') {
					document.getElementById(ControlPrefix + strChannelName).value = strLimitXML.substring(strLimitXML.indexOf(StartElement) + StartElement.length, strLimitXML.indexOf(EndElement));
				}
				else if (ControlPrefix.substring(0, 3) == 'chk') {
					var strCodeList = strLimitXML.substring(strLimitXML.indexOf(StartElement) + StartElement.length, strLimitXML.indexOf(EndElement));
					document.getElementById("hdSelectedItemList" + strArea + "_" + strChannelName).value = strCodeList;
					strCodeList = strCodeList.substr(1);
					var strCode = strCodeList.substring(0, strCodeList.indexOf("|"));
					while (strCode != "") {
						document.getElementById(ControlPrefix + strChannelName + strArea + "_" + strCode).checked = true;
						if (StartElement == "<EVENTTYPES>" || StartElement == "<REGION>" || StartElement == "<SUBREGION>" || StartElement == "<VENUE>") {
							if (document.getElementById("txtLimitItemName_" + strChannelName + strArea).value == "")
								document.getElementById("txtLimitItemName_" + strChannelName + strArea).value = "|";
							document.getElementById("txtLimitItemName_" + strChannelName + strArea).value += document.getElementById(ControlPrefix + strChannelName + strArea + "_" + strCode).value + "|";
						}
						strCodeList = strCodeList.replace(strCode + "|", "");
						strCode = strCodeList.substring(0, strCodeList.indexOf("|"));
					}
				}
				strLimitXML = strLimitXML.substr(strLimitXML.indexOf("</LIMIT>") + 8);
				strChannelList = strChannelList.replace(strChannelName + "|", "");
				strChannelName = strChannelList.substring(0, strChannelList.indexOf("|"));
			} while (strChannelName != "")
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfillSelectedPageValues()", e);
	}
}

function funGenXMLforAllLimits(strButtonClicked, ControlPrefix, StartTag, EndTag, strControlToBeFilled) {
	try {
		if (strButtonClicked == 'Submit') {
			var objtxtLimitsXML = window.opener.document.getElementById('hdLimitsXML');
			if (document.getElementById('hdChannelList').value != "") {
				if (ControlPrefix.substring(0, 3) == 'cbo')
					var objarrTags = document.getElementsByTagName('select');
				else
					var objarrTags = document.getElementsByTagName('input');
				var LimitsXML = window.opener.document.getElementById('hdLimitsXML').value;
				LimitsXML = LimitsXML.substring(LimitsXML.indexOf("<LIMITS>") + 8, LimitsXML.indexOf("</LIMITS>"));
				var intLimitTagId = 1;
				var strTagID = "";
				for (i = 0; i < objarrTags.length; i++) {
					if (objarrTags[i].id.substring(0, ControlPrefix.length) == ControlPrefix) {
						if (intLimitTagId < 10)
							strTagID = "0" + intLimitTagId;
						else
							strTagID = intLimitTagId;
						var StartIndex = LimitsXML.indexOf("<LIMIT ID=\"" + strTagID + "\">");
						var EndIndex = LimitsXML.indexOf("</LIMIT>") + 8;
						while ('a' != 'b') {
							var OriginalValue = LimitsXML.substring(StartIndex, EndIndex);
							var strTemp = "";
							if (OriginalValue.search("|" + objarrTags[i].id.substr(ControlPrefix.length) + "|") < 0) {
								StartIndex = EndIndex;
								strTemp = LimitsXML.substr(StartIndex);
								EndIndex = StartIndex + strTemp.indexOf("</LIMIT>") + 8;
								if (strTemp == "") {
									alert('There is a problem with ' + objarrTags[i].id.substr(ControlPrefix.length) + ' Value.Value not inserted!!!');
									break;
								}
							}
							else
								break;
						}
						var ReplaceValue = "";
						if (OriginalValue.search(StartTag) > -1) {
							if (objarrTags[i].value != "") {
								ReplaceValue = OriginalValue.substring(0, OriginalValue.indexOf(StartTag));
								ReplaceValue += StartTag + objarrTags[i].value + EndTag;
								ReplaceValue += OriginalValue.substr(OriginalValue.indexOf(EndTag) + EndTag.length);
								objtxtLimitsXML.value = objtxtLimitsXML.value.replace(OriginalValue, ReplaceValue);
							}
							else {
								ReplaceValue = OriginalValue.substring(0, OriginalValue.indexOf(StartTag));
								ReplaceValue += OriginalValue.substr(OriginalValue.indexOf(EndTag) + EndTag.length);
								objtxtLimitsXML.value = objtxtLimitsXML.value.replace(OriginalValue, ReplaceValue);
							}
							LimitsXML = LimitsXML.replace(OriginalValue, "");
						}
						else {
							if (objarrTags[i].value != "") {
								ReplaceValue = OriginalValue.substring(0, OriginalValue.indexOf("</CHANNELS>") + 11);
								ReplaceValue += StartTag + objarrTags[i].value + EndTag;
								ReplaceValue += OriginalValue.substr(OriginalValue.indexOf("</CHANNELS>") + 11);
								objtxtLimitsXML.value = objtxtLimitsXML.value.replace(OriginalValue, ReplaceValue);
							}
							LimitsXML = LimitsXML.replace(OriginalValue, "");
							intLimitTagId = intLimitTagId + 1;
						}
					}
					else continue;
				}
			}
			else {
				var OriginalValue = objtxtLimitsXML.value.substring(objtxtLimitsXML.value.indexOf("<LIMITS>") + 8, objtxtLimitsXML.value.indexOf("</LIMIT>") + 8);
				var ReplaceValue = "";
				if (OriginalValue.search(StartTag) > -1) {
					if (document.getElementById(ControlPrefix).value != "") {
						ReplaceValue = OriginalValue.substring(0, OriginalValue.indexOf(StartTag));
						ReplaceValue += StartTag + document.getElementById(ControlPrefix).value + EndTag;
						ReplaceValue += OriginalValue.substr(OriginalValue.indexOf(EndTag) + EndTag.length);
						objtxtLimitsXML.value = objtxtLimitsXML.value.replace(OriginalValue, ReplaceValue);
					}
					else {
						ReplaceValue = OriginalValue.substring(0, OriginalValue.indexOf(StartTag));
						ReplaceValue += OriginalValue.substr(OriginalValue.indexOf(EndTag) + EndTag.length);
						objtxtLimitsXML.value = objtxtLimitsXML.value.replace(OriginalValue, ReplaceValue);
					}
				}
				else {
					if (document.getElementById(ControlPrefix).value != "") {
						ReplaceValue = OriginalValue.substring(0, OriginalValue.indexOf("</CHANNELS>") + 11);
						ReplaceValue += StartTag + document.getElementById(ControlPrefix).value + EndTag;
						ReplaceValue += OriginalValue.substr(OriginalValue.indexOf("</CHANNELS>") + 11);
						objtxtLimitsXML.value = objtxtLimitsXML.value.replace(OriginalValue, ReplaceValue);
					}
				}
			}
			LimitsXML = objtxtLimitsXML.value.substring(objtxtLimitsXML.value.indexOf("<LIMITS>") + 8, objtxtLimitsXML.value.indexOf("</LIMITS>"));
			if (StartTag == "<EVENTS>" || StartTag == "<EVENTTYPES>" || StartTag == "<REGION>" || StartTag == "<SUBREGION>" || StartTag == "<VENUE>")
				funDisplayLimits(LimitsXML, strControlToBeFilled, "Name", StartTag, EndTag);
			else
				funDisplayLimits(LimitsXML, strControlToBeFilled, "Code", StartTag, EndTag);
		}
		window.close();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenXMLforAllLimits()", e);
	}
}

function funDisplayLimits(LimitsXML, strControlToBeFilled, strDisplay, StartTag, EndTag) {
	try {
		var strLimitValue = "";
		var strChannel = "";
		var strTitle = "";
		var strAreaName = "";
		var objItemList = window.opener.document.getElementById(strControlToBeFilled);
		objItemList.innerHTML = objItemList.innerHTML.substring(0, objItemList.innerHTML.indexOf("</DIV>") + 6);
		while (LimitsXML.search("<CHANNELS>") > -1) {
			if (StartTag == "<REGION>" || StartTag == "<SUBREGION>" || StartTag == "<VENUE>")
				strAreaName = "_" + StartTag.substring(1, StartTag.length - 1);
			else
				strAreaName = "";

			if (document.getElementById('hdChannelList').value != "") {
				strTitle = LimitsXML.substring(LimitsXML.indexOf("<CHANNELS>|") + 11, LimitsXML.indexOf("|</CHANNELS>"));
				strChannel = strTitle;
			}
			else {
				strTitle = "Combine Limit";
				strChannel = "";
			}

			if (LimitsXML.substring(0, LimitsXML.indexOf("</LIMIT>")).search(StartTag) > -1) {
				if (strDisplay == "Code")
					strLimitValue = LimitsXML.substring(LimitsXML.indexOf(StartTag) + StartTag.length, LimitsXML.indexOf(EndTag));
				else
					strLimitValue = document.getElementById('txtLimitItemName_' + strChannel + strAreaName).value;
			}
			else if (StartTag == "<EVENTS>") {
				alert("Please select appropriate EVENT TYPE to apply Limit to a particular EVENT TYPE and not to a particular Event for " + strChannel + "!!!");
				strLimitValue = "|No Movies Selected|No Concerts Selected|No Plays Selected|";
			}
			else {
				var objarrInputTags = document.getElementsByTagName('input');
				for (i = 0; i < objarrInputTags.length; i++) {
					if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id == 'chkSelectAll_' + strChannel + strAreaName) {
						if (objarrInputTags[i].checked == true) {
							strLimitValue = "|All " + subGenMessageForDiffTag(StartTag) + "|";
						}
					}
				}
				if (strLimitValue != "|All " + subGenMessageForDiffTag(StartTag) + "|") {
					alert("All " + subGenMessageForDiffTag(StartTag) + " selected for " + strTitle + "!!!");
					strLimitValue = "|All " + subGenMessageForDiffTag(StartTag) + "|"
				}
			}

			if (strLimitValue.indexOf("|") > -1) {
				objItemList.innerHTML += "<DIV style=\"COLOR: DarkOrchid; TEXT-ALIGN: center\">" + strTitle + "</DIV>";
				var intSeqNo = 1;
				strLimitValue = strLimitValue.substr(1);
				while (strLimitValue.indexOf("|") > -1) {
					objItemList.innerHTML += intSeqNo + ". " + strLimitValue.substring(0, strLimitValue.indexOf("|")) + "<br />";
					strLimitValue = strLimitValue.substr(strLimitValue.indexOf("|") + 1);
					intSeqNo = intSeqNo + 1;
				}
			}
			else {
				objItemList.innerHTML += strTitle + " - " + strLimitValue + "<br />";
			}
			LimitsXML = LimitsXML.substr(LimitsXML.indexOf("</LIMIT>") + 8);
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funDisplayLimits()", e);
	}
}

function subGenMessageForDiffTag(strTagName) {
	try {
		switch (strTagName) {
			case "<COMPANY>":
				return "COMPANIES";
				break;
			case "<EVENTS>":
				return "EVENTS";
				break;
			case "<EVENTTYPES>":
				return "EVENT TYPES";
				break;
			case "<LANGUAGES>":
				return "LANGUAGES";
				break;
			case "<PRODUCERS>":
				return "PRODUCERS";
				break;
			case "<REGION>":
				return "REGIONS";
				break;
			case "<SUBREGION>":
				return "SUB REGIONS";
				break;
			case "<VENUE>":
				return "VENUES";
				break;
			default:
				return strTagName;
				break;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subGenMessageForDiffTag()", e);
	}
}

function funSelectAllOption(SelectAllchkBoxID, strChannelName, txtCodeID, strName, txtNameID) {
	try {
		var objchkSelectAll = document.getElementById(SelectAllchkBoxID);

		var objarrInputTags = document.getElementsByTagName('input');
		for (i = 0; i < objarrInputTags.length; i++) {
			if (objarrInputTags[i].type == 'checkbox' && objarrInputTags[i].id.substring(0, 5 + strChannelName.length + strName.length) == 'chk_' + strChannelName + "_" + strName) {
				if (objchkSelectAll.checked == false) {
					objarrInputTags[i].disabled = false;
					objarrInputTags[i].checked = false;
				}
				else {
					document.getElementById(txtCodeID).value = "";
					if (strName != "")
						document.getElementById(txtNameID).value = "";
					objarrInputTags[i].disabled = true;
					objarrInputTags[i].checked = true;
				}
			}
			else continue;
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funSelectAllOption()", e);
	}
}

function funGenSelectedItemList(chkBoxID, txtCodeID, strItemCode) {
	try {
		var objchkBox = document.getElementById(chkBoxID);
		var objtxtCodeID = document.getElementById(txtCodeID);

		if (objchkBox.checked == true) {
			if (objtxtCodeID.value == "") {
				objtxtCodeID.value = "|";
			}
			objtxtCodeID.value = objtxtCodeID.value + strItemCode + "|";
		}
		else {
			objtxtCodeID.value = objtxtCodeID.value.replace(strItemCode + "|", "");
			if (objtxtCodeID.value == "|") {
				objtxtCodeID.value = "";
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenSelectedItemList()", e);
	}
}

function funGenSelectedItemList2(chkBoxID, txtCodeID, strItemCode, txtNameID, strItemName) {
	try {
		var objchkBox = document.getElementById(chkBoxID);
		var objtxtCodeID = document.getElementById(txtCodeID);
		var objtxtNameID = document.getElementById(txtNameID);

		if (objchkBox.checked == true) {
			if (objtxtCodeID.value == "") {
				objtxtCodeID.value = "|";
				objtxtNameID.value = "|";
			}
			objtxtCodeID.value = objtxtCodeID.value + strItemCode + "|";
			objtxtNameID.value = objtxtNameID.value + strItemName + "|";
		}
		else {
			objtxtCodeID.value = objtxtCodeID.value.replace(strItemCode + "|", "");
			objtxtNameID.value = objtxtNameID.value.replace(strItemName + "|", "");
			if (objtxtCodeID.value == "|") {
				objtxtCodeID.value = "";
				objtxtNameID.value = "";
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "funGenSelectedItemList2()", e);
	}
}

//---------------------------------------
//CODE For Common Limit Completed Here:
//---------------------------------------

function GenWindowSettings2(PageName, DefalutHeight, Width, Height) {
	try {
		var LimitsXML = document.getElementById('hdLimitsXML').value.substring(document.getElementById('hdLimitsXML').value.indexOf("<LIMIT ID="), document.getElementById('hdLimitsXML').value.indexOf("</LIMITS>"));
		var LimitXML = LimitsXML.substring(LimitsXML.indexOf("<LIMIT ID=\"01\">"), LimitsXML.indexOf("</LIMIT>") + 8);
		var QryString = "?ChannelList=";
		if (document.getElementById('rdbIndividualLimit').checked == true) {
			var StartIndex = 0;
			var EndIndex = 0;
			var WindowHeight = DefalutHeight;
			var intCounter = 1;
			while (LimitXML.indexOf("<CHANNELS>") > -1) {
				StartIndex = LimitXML.indexOf("<CHANNELS>") + 10;
				EndIndex = LimitXML.indexOf("|</CHANNELS>");
				var strChannelName = LimitXML.substring(StartIndex, EndIndex);
				QryString += "&" + strChannelName.substr(1) + "=";
				if (LimitXML.indexOf("<EVENTS>") > -1) {
					var strSelectedEvents = LimitXML.substring(LimitXML.indexOf("<EVENTS>") + 8, LimitXML.indexOf("</EVENTS>"));
					QryString += "<" + strChannelName.substr(1) + ">" + strSelectedEvents + "</" + strChannelName.substr(1) + ">";
				}
				QryString = QryString.replace("&", strChannelName + "&");
				WindowHeight = WindowHeight + Height

				LimitsXML = LimitsXML.replace(LimitsXML.substring(LimitsXML.indexOf("<LIMIT ID=\"0" + intCounter + "\">"), LimitsXML.indexOf("</LIMIT>") + 8), "");
				if (LimitsXML != "") {
					intCounter++;
					if (intCounter < 10)
						LimitXML = LimitsXML.substring(LimitsXML.indexOf("<LIMIT ID=\"0" + intCounter + "\">"), LimitsXML.indexOf("</LIMIT>") + 8);
					else
						LimitXML = LimitsXML.substring(LimitsXML.indexOf("<LIMIT ID=\"" + intCounter + "\">"), LimitsXML.indexOf("</LIMIT>") + 8);
				}
				else
					LimitXML = "";
			}
			QryString = QryString.replace("&", "|&");
			PopupCenter(PageName + QryString, '', Width, WindowHeight);
		}
		else if (document.getElementById('rdbCombineLimit').checked == true) {
			QryString += "&CombineLimit=";
			if (LimitXML.indexOf("<EVENTS>") > -1) {
				QryString += "<>" + LimitXML.substring(LimitXML.indexOf("<EVENTS>") + 8, LimitXML.indexOf("</EVENTS>")) + "</>"
			}
			PopupCenter(PageName + QryString, '', Width, Height + DefalutHeight);
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "GenWindowSettings()", e);
	}
}


//Code For frmSubDebtorChangePass
//---------------------------------------

function blnValidatefrmSubDebtorChangePass() {
	try {
		var objtxtSubDebtorCode = document.getElementById('txtSubDebtorCode');
		var objtxtCurrPassword = document.getElementById('txtCurrPassword');
		var objtxtNewPassword = document.getElementById('txtNewPassword');
		var objtxtConfirmPassword = document.getElementById('txtConfirmPassword');

		if (objtxtSubDebtorCode.value == "") {
			alert("Please enter Sub Debtor code!!!");
			objtxtSubDebtorCode.focus();
			return false;
		}
		if (objtxtSubDebtorCode.value.length != 16) {
			alert("Enter proper 16 digit Sub Debtor code!!!");
			objtxtSubDebtorCode.focus();
			return false;
		}
		if (objtxtCurrPassword.value == "") {
			alert("Please enter current password!!!");
			objtxtCurrPassword.focus();
			return false;
		}
		if (objtxtCurrPassword.value.length > 20) {
			alert("Password must be less than 20 characters!!!");
			objtxtCurrPassword.focus();
			return false;
		}
		if (objtxtNewPassword.value == "") {
			alert("Please enter New Password!!!");
			objtxtNewPassword.focus();
			return false;
		}
		if (objtxtNewPassword.value.length > 20) {
			alert("New Password must be less than 20 characters!!!");
			objtxtNewPassword.focus();
			return false;
		}
		if (objtxtConfirmPassword.value == "") {
			alert("Please confirm your New Password!!!");
			objtxtConfirmPassword.focus();
			return false;
		}
		if (objtxtConfirmPassword.value != objtxtNewPassword.value) {
			alert("New Password and Confirm Password does not match!!!");
			objtxtNewPassword.value = "";
			objtxtConfirmPassword.value = "";
			objtxtNewPassword.focus();
			return false;
		}

		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmSubDebtorChangePass()", e);
	}
}

//Code For frmSubDebtorChangePass Completed HERE
//---------------------------------------

//Code for Dial NDR starts HERE

function frmNDREditMode(strAdTextId, strAdText, strAddAccess) {
	try {
		var objTxtAdText = document.getElementById('txtAdText');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');

		document.getElementById('hdAdTextId').value = strAdTextId;
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtAdText.value = strAdText;
			objTxtAdText.disabled = false;
			objTxtAdText.readOnly = false;

			objAdd.disabled = true;
			objSave.disabled = false;

			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			document.getElementById('hdAdTextId').value = "0";
			objHdnEdit.value = "false";
			objTxtAdText.value = "";
			objSave.disabled = true;
			objTxtAdText.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmAdTextfunEditMode('" + strAdTextId + "')", e);
	}
}

function subSaveNDRTextDisable(strAddAccess, strDeleteAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');

		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveAdTextDisable()", e);
	}

}


function subNDRTxtBtnEnable() {
	try {
		var objtxtAdText = document.getElementById("txtAdText");
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');

		objtxtAdText.disabled = false;
		objtxtAdText.focus();
		objAdd.disabled = true;
		objSave.disabled = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subNDRTxtBtnEnable()", e);
	}
}

function blnValidatefrmNDRTextDetails() {
	try {
		var objtxtAdText = document.getElementById("txtAdText");
		if (objtxtAdText.value == "") {
			alert("Delivery Status field Cannot Be Left Blank");
			objtxtAdText.focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmNDRTextDetails()", e);
	}
}

//Code for Dial NDR completed HERE


//Code for Dial Agent Group starts HERE

function frmAgEditMode(strAgTextId, strAgText, strAddAccess) {
	try {
		var objTxtAgText = document.getElementById('txtAgText');
		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');

		document.getElementById('hdAgTextId').value = strAgTextId;
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objTxtAgText.value = strAgText;
			objTxtAgText.disabled = false;
			objTxtAgText.readOnly = false;

			objAdd.disabled = true;
			objSave.disabled = false;

			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			document.getElementById('hdAgTextId').value = "";
			objHdnEdit.value = "false";
			objTxtAgText.value = "";

			objSave.disabled = true;
			objTxtAgText.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmAgEditMode()", e);
	}
}

function subSaveUgTextDisable(strAddAccess, strDeleteAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');

		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveUgTextDisable()", e);
	}

}

function subAgTxtBtnEnable() {
	try {
		var objtxtAgText = document.getElementById("txtAgText");
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		document.getElementById('hdAgTextId').value = "";
		document.getElementById('hdEdit').value = "false";
		objtxtAgText.disabled = false;
		objtxtAgText.focus();
		objAdd.disabled = true;
		objSave.disabled = false;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subNDRTxtBtnEnable()", e);
	}
}

function blnValidatefrmAgTextDetails() {
	try {
		var objtxtAgText = document.getElementById("txtAgText");
		if (objtxtAgText.value == "") {
			alert("User Group text field Cannot Be Left Blank");
			objtxtAgText.focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmUgTextDetails()", e);
	}
}

//Code for Dial Agent Group ends HERE

//Code for Dial Agent Management starts HERE

function ValidateFormAddAgents() {
	try {
		if (frmAddAgents.txtLoginId.value == "") {
			alert('Login Id Cannot Be Blank');
			frmAddAgent.txtLoginId.focus();
			return false;
		}
		if (frmAddAgents.cboAgentGroupId.selectedIndex == 0) {
			alert('Please Select Agent Group');
			return false;
		}
		if (frmAddAgents.txtPwd) {
			if (frmAddAgents.txtPwd.value == "") {
				alert('Please Enter Password');
				frmAddAgents.txtPwd.focus();
				return false;
			}
			else if (frmAddAgents.txtRetypePwd.value == "") {
				alert('Please Enter Confirmation Password');
				frmAddAgents.txtRetypePwd.focus();
				return false;
			}
			else if (frmAddAgents.txtPwd.value != frmAddAgents.txtRetypePwd.value) {
				alert('Password do not match');
				return false;
			}
		}
		if (frmAddAgents.txtFName.value == "") {
			alert('Please Enter First Name');
			frmAddAgents.txtFName.focus();
			return false;
		}
		if (frmAddAgents.txtLName.value == "") {
			alert('Please Enter Last Name');
			frmAddAgents.txtLName.focus();
			return false;
		}
		frmAddAgents.submit();
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateFormAddAgents()", e);
	}
}

function subSuccess(strLogin, strAdd) {
	try {
		if (strAdd.length == 0) {
			alert(strLogin + " Created Successfully");
		}
		else {
			alert("Role changed successfuly for '" + strLogin + "'");
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSuccess('" + strLogin + "', '" + strAdd + "')", e);
	}
}


function subDisplayAlert(strLogin) {
	alert("Unable to create '" + strLogin + "'\nAccount Already Exist");
	return false;
}

function CancelUserModification() {
	try {
		window.location.href = "frmAgentManagement.aspx";
	} catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "CancelUserModification()", e);
	}
}

function subFailedAgentUpdate(strLogin) {
	alert("Unable to Update '" + strLogin);
	return false;
}

function subDisplayAgentAlert(strLogin) {
	alert("Unable to create '" + strLogin);
	return false;
}


//Code for Dial Agent Management ends Here


//Code for Dial Area Management starts Here

function ValidateFormAddArea() {
	try {
		if (frmAddArea.txtAreaName.value == "") {
			alert('Area Name Cannot Be Blank');
			frmAddArea.txtAreaName.focus();
			return false;
		}
		if (frmAddArea.cboSubRegion.selectedIndex == 0) {
			alert('Please Select Sub Region');
			return false;
		}

		if (frmAddArea.txtPinCode.value == "") {
			alert('Please Enter Pin Code');
			frmAddArea.txtPinCode.focus();
			return false;
		}


		if (frmAddArea.txtCutOff.value == "") {
			alert('Please Enter Area Cut Off');
			frmAddArea.txtCutOff.focus();
			return false;
		}
		if (frmAddArea.cboAreaStatus.value == "") {
			alert('Please Enter Area Status');
			return false;
		}
		if (frmAddArea.txtGroupCode.value == "") {
			alert('Please Enter Area Group');
			return false;
		}
		frmAddArea.submit();
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateFormAddArea()", e);
	}
}


function CancelAreaModification() {
	try {
		window.location.href = "frmAreaManagement.aspx";
	} catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "CancelAreaModification()", e);
	}
}

function subFailedAreaUpdate(strLogin) {
	alert("Unable to Update '" + strLogin);
	return false;
}

function subDisplayAreaAlert(strLogin) {
	alert("Unable to create '" + strLogin);
	return false;
}



//Code for Dial Area Management Ends Here


//Code for Dial Hub Management starts Here

function subHubGroupMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAddHub');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subUserGroupMessage(" + objPage.id + ")", e);
	}
}

function ValidateFormAddHub() {
	try {
		if (frmAddHub.txtHubName.value == "") {
			alert('Hub Name Cannot Be Blank');
			frmAddArea.txtHubName.focus();
			return false;
		}

		frmAddHub.submit();
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateFormAddHub()", e);
	}
}


function CancelPModification() {
	try {
		window.location.href = "Person2.aspx";
	} catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "CancelPModification()", e);
	}
}

function CancelHubModification() {
	try {
		window.location.href = "frmHubManagement.aspx";
	} catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "CancelAreaModification()", e);
	}
}

function subFailedHubUpdate(strLogin) {
	alert("Unable to Update '" + strLogin + "'");
	return false;
}

function subDisplayHubAlert(strLogin) {
	alert("Unable to create '" + strLogin + "'");
	return false;
}


//Code for Dial Hub Management Ends Here


//Code for Dial Co-ordinator Management starts Here

function subCoordinatorGroupMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAddCoordinator');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subCoordinatorGroupMessage(" + objPage.id + ")", e);
	}
}


function ValidateFormAddCoordinator() {
	try {
		if (frmAddCoordinators.txtLoginId.value == "") {
			alert('Login Id Cannot Be Blank');
			frmAddAgent.txtLoginId.focus();
			return false;
		}

		if (frmAddCoordinators.txtPwd) {
			if (frmAddCoordinators.txtPwd.value == "") {
				alert('Please Enter Password');
				frmAddCoordinators.txtPwd.focus();
				return false;
			}
			else if (frmAddCoordinators.txtRetypePwd.value == "") {
				alert('Please Enter Confirmation Password');
				frmAddCoordinators.txtRetypePwd.focus();
				return false;
			}
			else if (frmAddCoordinators.txtPwd.value != frmAddCoordinators.txtRetypePwd.value) {
				alert('Password do not match');
				return false;
			}
		}
		if (frmAddCoordinators.txtFName.value == "") {
			alert('Please Enter First Name');
			frmAddCoordinators.txtFName.focus();
			return false;
		}
		if (frmAddCoordinators.txtLName.value == "") {
			alert('Please Enter Last Name');
			frmAddCoordinators.txtLName.focus();
			return false;
		}

		if (frmAddCoordinators.cboCoordinatorStatus.value == "") {
			alert('Please Enter Coordinator Status');
			return false;
		}
		if (frmAddCoordinators.rdbSuperUserYes.checked == true) {
			if (frmAddCoordinators.cboAgentGroup.selectedIndex == 0) {
				alert('Please Select An Agent Group');
				return false;
			}
		}

		frmAddCoordinators.submit();
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateFormAddCoordinator()", e);
	}
}

function CancelCModification() {
	try {
		window.location.href = "frmCoordinatorManagement.aspx";
	} catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "CancelAreaModification()", e);
	}
}

function subFailedCUpdate(strLogin) {
	alert("Unable to Update '" + strLogin + "'");
	return false;
}

function subDisplayCAlert(strLogin) {
	alert("Unable to create '" + strLogin + "'");
	return false;
}

function subDisplayAreaGroup() {
	try {
		var objAgentGroup = document.getElementById("trAgentGroup");
		objAgentGroup.style.display = "block";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDisplayAreaGroup()", e);
	}
}

function subHideAreaGroup() {
	try {
		var objAgentGroup = document.getElementById("trAgentGroup");
		objAgentGroup.style.display = "none";

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subHideAreaGroup()", e);
	}
}
//Code for Dial Co-ordinator Management Ends Here

//Code for Dial Delivery Fee Management Starts Here

function subDeliveryFeeMessage(objPage) {
	try {
		var objAdd = document.getElementById('btnAddDeliveryFee');
		objAdd.disabled = false;
		alert("No Records Available Please Add Some Records");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subDeliveryFeeMessage(" + objPage.id + ")", e);
	}
}

function ValidateFormAddDF() {
	try {
		if (frmAddDeliveryFee.cboCinema.value == "-- Select Cinema --") {
			alert('Select Cinema');
			return false;
		}

		if (frmAddDeliveryFee.txtDeliveryFee.value == "") {
			alert('Delivery Fee Cannot Be Blank');
			frmAddDeliveryFee.txtDeliveryFee.focus();
			return false;
		}

		if (frmAddDeliveryFee.txtMaxDeliveryFee.value == "") {
			alert('Max Delivery Fee Cannot Be Blank');
			frmAddDeliveryFee.txtMaxDeliveryFee.focus();
			return false;
		}

		if (frmAddDeliveryFee.txtPriority.value == "") {
			alert('Priority Cannot Be Blank');
			frmAddDeliveryFee.txtPriority.focus();
			return false;
		}

		frmAddDeliveryFee.submit();
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateFormAddDF()", e);
	}
}

function CancelDFModification() {
	try {
		window.location.href = "frmDeliveryFeeManagement.aspx";
	} catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "CancelAreaModification()", e);
	}
}

function subFailedDFUpdate(strLogin) {
	alert("Unable to Update '" + strLogin + "'");
	return false;
}

function subDisplayDFAlert(strLogin) {
	alert("Unable to create " + strLogin + "'");
	return false;
}


//Code for Dial Delivery Fee Management Ends Here

//Code for Change Password Starts Here

function ValidateFormPassword() {
	if (frmChangePassword.txtLoginId.value == "") {
		alert("Login Id Cannot Be Blank!!");
		frmChangePassword.txtLoginId.focus();
		return false
	}
	//     if (frmChangePassword.txtOldPassword.value == "")
	//     {
	//        alert("Old Password Cannot Be Blank!!");
	//        frmChangePassword.txtOldPassword.focus();
	//        return false
	//     }
	if (frmChangePassword.txtNewPassword) {
		if (frmChangePassword.txtNewPassword.value == "") {
			alert('Please New Enter Password');
			frmChangePassword.txtNewPassword.focus();
			return false;
		}
		else if (frmChangePassword.txtRetypePassword.value == "") {
			alert('Please Enter Confirmation Password');
			frmChangePassword.txtRetypePassword.focus();
			return false;
		}
		else if (frmChangePassword.txtNewPassword.value != frmChangePassword.txtRetypePassword.value) {
			alert('Password do not match');
			return false;
		}
	}
	frmChangePassword.submit();
	return true;
}

function CancelChangePassword() {
	window.location.href = "home.aspx"
}

//Code for Change Password Ends Here



//Code for frmCoordinatorHub Starts Here

function subValidateFrmCH() {
	try {
		var objcboCoordinator = document.getElementById("cmbCoordinator");
		if (objcboCoordinator.value == "") {
			alert("Select A Coordinator!!");
			return false;
		}
		return true;

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subValidateFrmCH()", e);
	}
}
//Code for frmCoordinatorHub Ends Here
//Code for frmHubArea Starts Here

function subValidateFrmAH() {
	try {
		var objcmbHub = document.getElementById("cmbHub");
		if (objcmbHub.value == "") {
			alert("Select A Hub!!");
			return false;
		}
		return true;

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subValidateFrmAH()", e);
	}
}
//Code for frmHubArea Ends Here

// Code For frmVerifyRunSheetDeposite Starts

function subNoRecMsgForVerifyRunSheet(objPage) {
	try {
		document.getElementById('tbButtons').visible = false;
		document.getElementById('tbRunSheetList').visible = false;
		alert("Hurray!!! No RunSheet is pending to verify.");
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subNoRecMsgForVerifyRunSheet(" + objPage.id + ")", e);
	}
}

//Code for frmVerifyRunSheetDeposite Ends Here

//Code for frmAddPersons 
function ValidateFormAddPersons() {
	try {

		if (frmAddPersons.txtName.value == "") {
			alert('Persons Name Cannot Be Blank');
			frmAddPersons.txtName.focus();
			return false;
		}
		else {
			frmAddPersons.txtName.value = replaceSingleQuotewithApostrophe(frmAddPersons.txtName.value);
		}

		if (frmAddPersons.dtDateOfBirth.value == "") {
			alert('Persons DateOfBirth Cannot Be Blank');
			frmAddPersons.dtDateOfBirth.focus();
			return false;
		}

		if (frmAddPersons.txtMiniBiography.value == "") {
			alert('Persons MiniBiography Cannot Be Blank');
			frmAddPersons.txtMiniBiography.focus();
			return false;
		}
		else {
			frmAddPersons.txtMiniBiography.value = replaceSingleQuotewithApostrophe(frmAddPersons.txtMiniBiography.value);
		}

		frmAddPersons.submit();
		return true;
	}
	catch (e) {
		subDisplayError("ValidateFormAddPerson.js", "ValidateFormAddPerson()", e);
	}
}



function onfocus(id) {
	try {
		var mytext = document.getElementById(id);
		if (mytext != null) { mytext.focus(); }

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "onfocus()", e);
	}

}

function replaceSingleQuotewithApostrophe(strText) {
	var strReplaceAll = strText;
	var intIndexOfMatch = strReplaceAll.indexOf("'");

	// Loop over the string value replacing out each matching
	// substring.
	while (intIndexOfMatch != -1) {
		// Relace out the current instance.
		strReplaceAll = strReplaceAll.replace("'", "`")

		// Get the index of any next matching substring.
		intIndexOfMatch = strReplaceAll.indexOf("'");
	}
	return (strReplaceAll);
}

function subSetSearchControlsPerson(strDisplayText) {

	var objtxtPersonName = document.getElementById("txtPersonName");


	if (objtxtPersonName.value == strDisplayText)
		objtxtPersonName.value = '';
	else if (objtxtPersonName.value.length == 0)
		objtxtPersonName.value = 'Person Name';



}

function subFillSearchCntrlsPerson() {
	try {
		if (document.getElementById('txtPersonName').value == "") {
			document.getElementById('txtPersonName').value = "Person Name";
		}

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subFillSearchCntrlsPerson()", e);
	}
}


//Code for OrganizerManagement Starts Here

function subfrmThirdPartyBtnEnable() {
	try {
		ThirdPartyManagement.txtThirdPartyCode.disabled = false;
		ThirdPartyManagement.txtThirdPartyCode.readOnly = false;
		ThirdPartyManagement.txtThirdPartyName.disabled = false;
		ThirdPartyManagement.txtThirdPartyName.readOnly = false;
		ThirdPartyManagement.cboThirdPartyStatus.disabled = true;
		ThirdPartyManagement.txtThirdPartyPayTo.disabled = false;
		ThirdPartyManagement.txtThirdPartyPayTo.readOnly = false;


		//ThirdPartyManagement.cboShareOn.disabled = false;

		//        ThirdPartyManagement.txtSharePerc.disabled = false;
		//        ThirdPartyManagement.txtSharePerc.readOnly = false;
		//        ThirdPartyManagement.txtServiceSharePerc.disabled = false;
		//        ThirdPartyManagement.txtServiceSharePerc.readOnly = false;


		ThirdPartyManagement.btnSave.disabled = false;
		ThirdPartyManagement.btnAdd.disabled = true;
		ThirdPartyManagement.hdEdit.value = false;
		document.getElementById('hdThirdPartyId').value = "";
		ThirdPartyManagement.txtThirdPartyCode.focus();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subfrmThirdPartyBtnEnable()", e);
	}
}


function blnValidateThirdPartyDetails() {
	try {
		if (ThirdPartyManagement.cboTPType.value == "R") {
			if (ThirdPartyManagement.txtThirdPartyCode.value == "") {
				alert("ThirdParty Code Cannot Be Left Blank!!");
				ThirdPartyManagement.txtThirdPartyCode.focus();
				return false;
			}
		}
		if (ThirdPartyManagement.txtThirdPartyName.value == "") {
			alert("ThirdParty Name Cannot Be Left Blank!!");
			ThirdPartyManagement.txtThirdPartyName.focus();
			return false;
		}
		if (ThirdPartyManagement.txtThirdPartyPayTo.value == "") {
			alert("ThirdParty Payable To Cannot Be Left Blank!!");
			ThirdPartyManagement.txtThirdPartyPayTo.focus();
			return false;
		}
		//		if(ThirdPartyManagement.txtSharePerc.value == "" || ThirdPartyManagement.txtSharePerc.value <= 0 || ThirdPartyManagement.txtSharePerc.value > 100 || isNaN(ThirdPartyManagement.txtSharePerc.value))
		//		{
		//			alert("ThirdParty Product Share Percent Should Be Between 0 And 100!!");
		//			ThirdPartyManagement.txtSharePerc.focus();
		//			return false;
		//		}

		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateThirdPartyDetails()", e);
	}
}

function subSaveThirdPartyDisable(strAddAccess) {
	try {
		var objSave = document.getElementById('btnSave');
		var objAdd = document.getElementById('btnAdd');
		if (strAddAccess == "No") {
			objAdd.disabled = true;
		}
		else {
			objAdd.disabled = false;
		}
		objSave.disabled = true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subSaveThirdPartyDisable()", e);
	}

}

function frmThirdPartyEditMode(strThirdPartyCode, strThirdPartyName, strCreditorID, strThirdPartyPayTo, strThirdPartyStatus, strThirdPartyID, strAddAccess) /*strProductShareOn, strNumSharePerc, strNumServiceChargePerc, */
{
	try {
		var objtxtThirdPartyCode = document.getElementById('txtThirdPartyCode');
		var objTxtThirdPartyName = document.getElementById('txtThirdPartyName');
		var objcboThirdPartyStatus = document.getElementById('cboThirdPartyStatus');
		var objtxtThirdPartyPayTo = document.getElementById('txtThirdPartyPayTo');

		//        var objcboShareOn = document.getElementById('cboShareOn');
		//        var objtxtSharePerc = document.getElementById('txtSharePerc');
		//        var objtxtServiceSharePerc = document.getElementById('txtServiceSharePerc');

		var objAdd = document.getElementById('btnAdd');
		var objSave = document.getElementById('btnSave');
		var objHdnEdit = document.getElementById('hdEdit');

		document.getElementById('hdThirdPartyId').value = strThirdPartyID;
		strCommandName = event.srcElement.innerHTML;

		if (strCommandName == "Edit") {
			objHdnEdit.value = "true";
			objtxtThirdPartyCode.value = strThirdPartyCode;
			objtxtThirdPartyCode.disabled = false;
			objtxtThirdPartyCode.readOnly = true;
			objTxtThirdPartyName.value = strThirdPartyName;
			objTxtThirdPartyName.disabled = false;
			objTxtThirdPartyName.readOnly = false;
			objcboThirdPartyStatus.value = strThirdPartyStatus;
			objcboThirdPartyStatus.disabled = false;
			objtxtThirdPartyPayTo.value = strThirdPartyPayTo;
			objtxtThirdPartyPayTo.disabled = false;
			//            objcboShareOn.value = strProductShareOn;
			//            objcboShareOn.disabled = false;
			//            objtxtSharePerc.value = strNumSharePerc;
			//            objtxtSharePerc.disabled = false;
			//            objtxtServiceSharePerc.value = strNumServiceChargePerc;
			//            objtxtServiceSharePerc.disabled = false;
			objAdd.disabled = true;
			objSave.disabled = false;
			event.srcElement.innerHTML = "Cancel";
			var objTbody = event.srcElement.parentElement.parentElement.parentElement.parentElement;
			for (var intCountRows = 1; intCountRows < objTbody.rows.length; intCountRows++) {
				if (objTbody.rows(intCountRows).cells(2).firstChild.id != event.srcElement.id) {
					objTbody.rows(intCountRows).cells(2).firstChild.innerHTML = "Edit";
				}
			}
		}
		else {
			if (strAddAccess == "No") {
				objAdd.disabled = true;
			}
			else {
				objAdd.disabled = false;
			}
			objSave.disabled = true;
			objHdnEdit.value = "false";
			objtxtThirdPartyCode.value = "";
			objTxtThirdPartyName.value = "";
			objcboThirdPartyStatus.value = "Y";
			objtxtThirdPartyPayTo.value = "";
			//            objcboShareOn.value = "";
			//            objtxtSharePerc.value = "";
			//            objtxtServiceSharePerc.value = "";
			objTxtThirdPartyName.disabled = true;
			objcboThirdPartyStatus.disabled = true;
			objtxtThirdPartyPayTo.disabled = true;
			//            objcboShareOn.disabled = true;
			//            objtxtSharePerc.disabled = true;
			//            objtxtServiceSharePerc.disabled = true;
			event.srcElement.innerHTML = "Edit";
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "frmThirdPartyEditMode('" + strThirdPartyID + "')", e);
	}
}

//Code for OrganizerManagement Ends Here

//Code for LinkOrganizersShows Starts Here

function subCboChangeForLink(strCompanyCode) {
	try {
		var objdtFromDate = document.getElementById('dtFromDate');
		var objdtToDate = document.getElementById('dtToDate');
		var objcboShowTime = document.getElementById('cboShowTime');
		objdtFromDate.value = "";
		objdtToDate.value = "";
		for (var intCount = objcboShowTime.childNodes.length - 1; intCount >= 0; intCount--) {
			objCh = objcboShowTime.childNodes[intCount];
			objcboShowTime.removeChild(objCh);
		}
		subFillcboCinema(strCompanyCode);
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateShowDate()", e);
	}

}

function subCinemaChangeForLink() {
	try {
		var objdtFromDate = document.getElementById('dtFromDate');
		var objdtToDate = document.getElementById('dtToDate');
		objdtFromDate.value = "";
		objdtToDate.value = "";
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateShowDate()", e);
	}

}

function blnValidateOrganizerShows() {
	try {
		var objCboOrganizers = document.getElementById('cboOrganizers');
		var objcboShowTime = document.getElementById('cboShowTime');
		var objdtFromDate = document.getElementById('dtFromDate');
		var objdtToDate = document.getElementById('dtToDate');
		if (objCboOrganizers.selectedIndex == 0) {
			alert("Please Select An Organizer!!");
			return false;
		}
		if (objdtFromDate.value.length == 0) {
			alert("Please Select A From Date!!");
			return false;
		}
		if (objdtToDate.value.length == 0) {
			alert("Please Select A To Date!!");
			return false;
		}
		if (objcboShowTime.selectedIndex == 0 || objcboShowTime.selectedIndex == -1) {
			alert("Please Select A Show!!");
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateOrganizerShows()", e);
	}
}

function blnValidateLinkShowDate() {
	try {
		var objdtFromDate = document.getElementById('dtFromDate');
		var objdtToDate = document.getElementById('dtToDate');
		if (objdtFromDate.value.length == 0) {
			alert("Please Select A From Date!!");
			return false;
		}
		if (objdtToDate.value.length == 0) {
			alert("Please Select A To Date!!");
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateShowDate()", e);
	}
}

//Code for LinkOrganizersShows Ends Here


//Code for ShowCancellation Starts Here


function blnValidateShowCancellation() {
	try {
		var objcboCancellationType = document.getElementById('cboCancelationTY');
		var objcboShowTime = document.getElementById('cboShowTime');
		var objcboReason = document.getElementById('cboReason');
		var objcboResult = document.getElementById('cboResult');
		var objtxtComments = document.getElementById('txtComments');
		var objtxtTransId = document.getElementById('txtTrans');
		//var objtxtBookingId = document.getElementById('txtBookingId');
		var objdtShowDate = document.getElementById('dtShowDate');
		var objcboRefundType = document.getElementById('cboRefundType');
		var objhdnLoading = document.getElementById('hdnLoading');
		var strCancellationType = objcboCancellationType.value;

		if (strCancellationType == 'SW') {
			if (objdtShowDate.value.length == 0) {
				alert("Please Select A Show Date!!");
				return false;
			}
			if (objcboShowTime.selectedIndex == 0 || objcboShowTime.selectedIndex == -1) {
				alert("Please Select A Show!!");
				return false;
			}
			if (objcboReason.selectedIndex == 0 || objcboReason.selectedIndex == -1) {
				alert("Please Select A Reason For The Cancellation Of The Show!!");
				return false;
			}
		}
		if (strCancellationType == 'TW') {
			if (objtxtTransId.value.length == 0) {
				alert("Please Enter Trans Id or Booking ID!!");
				return false;
			}
			if (objcboReason.selectedIndex == 0 || objcboReason.selectedIndex == -1) {
				alert("Please Select A Reason For The Cancellation Of The Show!!");
				return false;
			}
			if (objcboResult.selectedIndex == 0 || objcboResult.selectedIndex == -1) {
				alert("Please Select A Result Of Show Cancellation!!");
				return false;
			}
			if (objtxtComments.value.length == 0) {
				alert("Please Enter Some Comments!!");
				return false;
			}
		}

		if (objhdnLoading.value != "") {
			ShowProgress("btnCancelShow", true);
		}
		ShowProgress("btnReset", true);
		ShowProgress("btnReport", false);
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateOrganizerShows()", e);
	}

}

function blnValidateShowCanclRefund() {
	try {
		var objcboCancellationType = document.getElementById('cboCancelationTY');
		var objcboShowTime = document.getElementById('cboShowTime');
		var objtxtTransId = document.getElementById('txtTrans');
		// var objtxtBookingId = document.getElementById('txtBookingId');
		var objcboReason = document.getElementById('cboReason');
		var objcboResult = document.getElementById('cboResult');
		var objtxtComments = document.getElementById('txtComments');
		var objdtShowDate = document.getElementById('dtShowDate');
		var strCancellationType = objcboCancellationType.value;

		if (strCancellationType == 'SW') {
			if (objdtShowDate.value.length == 0) {
				alert("Please Select A Show Date!!");
				return false;
			}
			if (objcboShowTime.selectedIndex == 0 || objcboShowTime.selectedIndex == -1) {
				alert("Please Select A Show!!");
				return false;
			}
		}
		if (strCancellationType == 'TW') {
			if (objtxtTransId.value.length == 0) {
				alert("Please Enter Trans ID or Booking ID!!");
				return false;
			}
		}
		if (objcboReason.selectedIndex == 0 || objcboReason.selectedIndex == -1) {
			alert("Please Select A Reason For The Cancellation Of The Show!!");
			return false;
		}
		if (objcboResult.selectedIndex == 0 || objcboResult.selectedIndex == -1) {
			alert("Please Select A Result Of Show Cancellation!!");
			return false;
		}
		if (objtxtComments.value.length == 0) {
			alert("Please Enter Some Comments!!");
			return false;
		}

		document.getElementById('hdnCancellationType').value = strCancellationType

		ShowProgress("btnReset", true);
		ShowProgress("btnReport", true);
		ShowProgress("btnCancelShow", false);
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateOrganizerShows()", e);
	}

}

function blnValidateShowDate() {
	try {
		var objdtShowDate = document.getElementById('dtShowDate');
		if (objdtShowDate.value.length == 0) {
			alert("Please Select A Show Date!!");
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateShowDate()", e);
	}
}

function subShowCancelCboChange(strCompanyCode) {
	try {
		var objdtShowDate = document.getElementById('dtShowDate');
		//objdtShowDate.value = "";
		subFillcboCinema(strCompanyCode);
		subShowCancelCinemaChange();
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateShowDate()", e);
	}

}

function subShowCancelCinemaChange() {
	try {
		var select = document.getElementById("cboShowTime");
		var options = select.getElementsByTagName("option");
		var i;
		for (i = options.length - 1; i >= 0; i--) {
			select.removeChild(options[i]);
		}
		// end for i
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateShowDate()", e);
	}

}
//Code for ShowCancellation Starts Here

//Code for rptProcessPayments Starts Here

//function subValidateUPDD(objButton)
//{
//    try
//    {
//        var objtxtRefCode = document.getElementById('txtRefCode');
//        var objtxtComments = document.getElementById('txtComments');
//        if(objButton.toString() == "btnCompletePayment")
//        {
//            if(objtxtRefCode.value.length == 0)
//            {
//                alert("Please Enter A Reference Code!!");
//                objtxtRefCode.focus();
//                return false;
//            }
//        }
//        else
//        {
//            if(objtxtComments.value.length == 0)
//            {
//                alert("Please Enter Some Comments!!");
//                objtxtComments.focus();
//                return false;
//            }
//        }
//        
//        var grid = document.getElementById("DGDetails");
//        var objhdnSelectedId = document.getElementById("hdnSelectedId");
//        objhdnSelectedId.value = "";
//        var gridChk;
//        if (grid.rows.length > 0)
//        {
//            for (intCount = 2; intCount <= grid.rows.length; intCount++) {
//                if (intCount < 10) {
//                    var objHdnId = document.getElementById("DGDetails_ctl0" + intCount + "_hdnPaymentId");
//                    gridChk = document.getElementById(objHdnId.value);
//                }
//                else {
//                    var objHdnId = document.getElementById("DGDetails_ctl" + intCount + "_hdnPaymentId");
//                    gridChk = document.getElementById(strHdnId.value);
//                }
//                if (gridChk != null || gridChk != 'undefined') {
//                    if (gridChk.checked == true)
//                    {
//                        objhdnSelectedId.value = gridChk.value;
//                    }
//                }
//            }
//        }
//        if(objhdnSelectedId.value == "")
//        {
//            alert("Please Select A Payment!!");
//            return false;
//        }
//        
//        return true;
//    }
//    catch(e)
//    {
//        subDisplayError("BackOfficeModuleCode.js", "subValidateUPDD()", e);
//    }
//}

//Code for rptProcessPayments Ends Here

function subGenCinemaOffers(strChkID) {
	try {
		var objchkID = document.getElementById(strChkID);
		var objtxtCinemaOffers = document.getElementById("hdCinemaOffers");
		if (objchkID.checked == true) {
			if (objtxtCinemaOffers.value.length == 0) {
				objtxtCinemaOffers.value = ";";
			}
			objtxtCinemaOffers.value += objchkID.value + ";";
		}
		else {
			if (objtxtCinemaOffers.value == ";" + objchkID.value + ";") {
				objtxtCinemaOffers.value = "";
			}
			else {
				objtxtCinemaOffers.value = objtxtCinemaOffers.value.replace(objchkID.value + ";", "");
			}
		}
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "subGenCinemaOffers()", e);
	}
}

function blnAddCinemaOffer() {
	var objtxtCinemaOffer = document.getElementById('txtCinemaOffers');
	if (objtxtCinemaOffer.value == "") {
		alert("Please enter Offer Code!!!");
		return false;
	}
	if (objtxtCinemaOffer.value.indexOf(";") > -1) {
		alert("Offer Code should not contain semicolon(\";\")!!!");
		return false;
	}

	var strOfferID = ltrim(rtrim(objtxtCinemaOffer.value.toString().toUpperCase(), ''), '');

	var objdivCinemaOffers = document.getElementById('divCinemaOffers');
	var objChk = document.createElement('input');
	objChk.type = 'checkbox';
	objChk.id = 'chk_' + strOfferID;
	objChk.name = 'chk_' + strOfferID;
	objChk.value = strOfferID;

	var label = document.createElement('label');
	label.htmlFor = 'chk_' + strOfferID;
	label.appendChild(document.createTextNode(strOfferID));

	objdivCinemaOffers.appendChild(objChk);
	objdivCinemaOffers.appendChild(label);
	objdivCinemaOffers.appendChild(document.createElement('<br>'));

	objChk.checked = true;
	objChk.attachEvent('onclick', function (e) { subGenCinemaOffers(objChk.id); });
	subGenCinemaOffers(objChk.id);

	objtxtCinemaOffer.value = "";
	objtxtCinemaOffer.focus();
	return true;
}

function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

/// Item Group Validation Start
function ValidateFormAddItemGroup() {
	try {
		if (frmAddItemGroup.txtGroupDescription.value == "") {
			alert('Group Description Cannot Be Blank');
			frmAddItemGroup.txtGroupDescription.focus();
			return false;
		}
		if (frmAddItemGroup.txtGroupSequence.value == 0) {
			alert('Group Sequence Cannot Be Blank');
			frmAddItemGroup.txtGroupSequence.focus();
			return false;
		}
		frmAddItemGroup.submit();
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateFormAddItemGroup()", e);
	}
}

function subFailedItemGroupUpdate(strGroupId) {
	alert("Unable to Update " + strGroupId);
	return false;
}

function subDisplayItemGroupAlert(strGroupId) {
	alert("Unable to create " + strGroupId);
	return false;
}

function CancelGroupItemModification() {
	try {
		window.location.href = "frmItemGroupManagement.aspx";
	} catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "CancelGroupItemModification()", e);
	}
}
//// End Here

// Item Add Validation start Here

function $(elementName) {
	return document.getElementById(elementName);
}
function subValidateData(elementName, errorMessage1, errorMessage2) {
	if (elementName.value.length == 0) {
		alert(errorMessage1);
		elementName.select();
		elementName.focus();
		return false;
	}
	if (isNaN(elementName.value)) {
		alert(errorMessage2);
		elementName.select();
		elementName.focus();
		return false;
	}
	return true;
}
// Item Add Validation start Here
function ValidateFormAddItems() {
	try {
		//frmAddItems.txtItemShortName.length
		if ($("txtItemShortName").value.length == 0) {
			alert("Item Short Name Cannot be Blank");
			$("txtItemShortName").focus();
			return false;
		}

		//        if (!subValidateData($("txtDefaultSellingPrice"), "Default Selling Price Cannot Be Blank.", "Default Selling Price Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtDefaultCostPrice"), "Default Cost Price Cannot Be Blank.", "Default Cost Price Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtSalesTax1"), "Sales Tax-1 Cannot Be Blank.", "Sales Tax-1 Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtSalesTax2"), "Sales Tax-2 Cannot Be Blank.", "Sales Tax-2 Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtSalesTax3"), "Sales Tax-3 Cannot Be Blank.", "Sales Tax-3 Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtSalesTax4"), "Sales Tax-4 Cannot Be Blank.", "Sales Tax-4 Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtCostTax1"), "Cost Tax-1 Cannot Be Blank.", "Cost Tax-1 Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtCostTax2"), "Cost Tax-2 Cannot Be Blank.", "Cost Tax-2 Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtCostTax3"), "Cost Tax-3 Cannot Be Blank.", "Cost Tax-3 Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtCostTax4"), "Cost Tax-4 Cannot Be Blank.", "Cost Tax-4 Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtBookingFee"), "Booking Fee Cannot Be Blank.", "Booking Fee Should be Numeric.")) { return false; }
		//        if (!subValidateData($("txtDeliveryFee"), "Delivery Fee Cannot Be Blank.", "Delivery Fee Should be Numeric.")) { return false; }

		frmAddItems.submit();
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "ValidateFormAddItems()", e);
	}
}

function CancelItemModification() {
	try {
		window.location.href = "frmItemManagement.aspx";
	} catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "CancelItemModification()", e);
	}
}
//End Here

//Start Here
function ValidateFormAddItemStock() {
	try {
		if ($("drpItemVar").selectedIndex == 0) {
			alert("Please select Item Variant");
			$("drpItemVar").focus();
			return false;
		}
		//        if ($("drpCinema").selectedIndex == 0) {
		//            alert("Cinema not selected");
		//            $("drpCinema").focus();
		//            return false;
		//        }        
		//        if (frmAddItemStock.txtVendor.value == "") {
		//            alert("Please enter Vendor");
		//            frmAddItemStock.txtVendor.focus();
		//            return false;
		//        }
		if ($("drpLocationId").selectedIndex == 0) {
			alert("Please select Location Id");
			$("drpLocationId").focus();
			return false;
		}

		var objStockType = document.getElementById("drpStockType");
		var strStockType = objStockType.value;

		if (frmAddItemStock.txtAvailQty.value == "") {
			alert("Please enter Available Quantity");
			frmAddItemStock.txtAvailQty.focus();
			return false;
		}
		if (strStockType == 'AD') {
			//            if (frmAddItemStock.txtAvailQty.value.indexOf("-") != 0) {
			//                alert("Item available quantity should start with minus(-)");
			//                frmAddItemStock.txtAvailQty.focus();
			//                return false;
			//            }
			//            if (frmAddItemStock.txtAvailQty.value.indexOf("-") > 0) {
			//                alert("Item available quantity should start with minus(-)");
			//                frmAddItemStock.txtAvailQty.focus();
			//                return false;
			//            }
			var strAnswer = confirm("This action will deduct stock from current stock!!");
			if (strAnswer) {

			}
			else {
				return false;
			}
		}

		if (strStockType == 'AW') {
			//            if (frmAddItemStock.txtAvailQty.value.indexOf("-") != 0) {
			//                alert("Item available quantity should start with minus(-)");
			//                frmAddItemStock.txtAvailQty.focus();
			//                return false;
			//            }
			//            if (frmAddItemStock.txtAvailQty.value.indexOf("-") > 0) {
			//                alert("Item available quantity should start with minus(-)");
			//                frmAddItemStock.txtAvailQty.focus();
			//                return false;
			//            }

			var strAnswer = confirm("This action will deduct stock from current stock!!");
			if (strAnswer) {

			}
			else {
				return false;
			}
		}

		if (strStockType == 'RR') {
			if (frmAddItemStock.txtAvailQty.value.indexOf("-") != 0) {
				alert("Item available quantity should start with minus(-)");
				frmAddItemStock.txtAvailQty.focus();
				return false;
			}
			if (frmAddItemStock.txtAvailQty.value.indexOf("-") > 0) {
				alert("Item available quantity should start with minus(-)");
				frmAddItemStock.txtAvailQty.focus();
				return false;
			}

			var strAnswer = confirm("This action will deduct stock from current stock!!");
			if (strAnswer) {

			}
			else {
				return false;
			}
		}

		if (strStockType == 'AI') {
			//            if (frmAddItemStock.txtAvailQty.value.indexOf("-") == 0) {
			//                alert("Item available quantity should not start with minus(-)");
			//                frmAddItemStock.txtAvailQty.focus();
			//                return false;
			//            }
			//            if (frmAddItemStock.txtAvailQty.value.indexOf("-") > 0) {
			//                alert("Item available quantity should not start with minus(-)");
			//                frmAddItemStock.txtAvailQty.focus();
			//                return false;
			//            }

			var strAnswer = confirm("This action will add stock in current stock!!");
			if (strAnswer) {

			}
			else {
				return false;
			}
		}


		frmAddItemStock.submit();
		return true;
	}
	catch (e) {
	}
}
//End Here


function CancelItemStockModification() {
	try {
		window.location.href = "frmItemStockManagement.aspx";
	} catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "CancelItemStockModification()", e);
	}
}

//CODE: for frmWinPinStatus :
//---------------------

function blnValidatefrmWinPin() {
	try {
		if (document.getElementById('txtWinPin').value.length < 16) {
			alert(" Please Enter 16 digit WinPin Code ");
			document.getElementById('txtWinPin').focus();
			return false;
		}
		else {
			document.frmWinPinStatus.submit();
			return true;
		}

	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidatefrmWinPin()", e);
	}
}

//Code: frmVenueContactDetails Code:
//-------------------------------

function blnValidateCinema() {
	try {
		if (document.getElementById('txtEmailid').value == "") {
			alert(" Please Enter Cinema E-mail Id ");
			document.getElementById('txtEmailid').focus();
			return false;
		}
		else if (document.getElementById('txtBoardlineNo').value == "") {
			alert(" Please Enter Cinema Boardline No ");
			document.getElementById('txtBoardlineNo').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateCinema()", e);
	}
}

function blnValidateManager() {
	try {
		if (document.getElementById('txtManagerName').value == "") {
			alert(" Please Enter Manager Name ");
			document.getElementById('txtManagerName').focus();
			return false;
		}
		else if (document.getElementById('txtManagerEmailid').value == "") {
			alert(" Please Enter Manager E-mail Id ");
			document.getElementById('txtManagerEmailid').focus();
			return false;
		}
		else if (document.getElementById('txtManagerMobileNo').value == "") {
			alert(" Please Enter Manager Mobile No ");
			document.getElementById('txtManagerMobileNo').focus();
			return false;
		}
		else if (document.getElementById('txtManagerOfficeNo').value == "") {
			alert(" Please Enter Manager Office No ");
			document.getElementById('txtManagerOfficeNo').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateManager()", e);
	}
}

function blnValidateBoxOffice() {
	try {
		if (document.getElementById('txtBOMailId').value == "") {
			alert(" Please Enter Box-Office E-mail Id ");
			document.getElementById('txtBOMailId').focus();
			return false;
		}
		else if (document.getElementById('txtBOOfficeNo').value == "") {
			alert(" Please Enter Box-Office Office No ");
			document.getElementById('txtBOOfficeNo').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateBoxOffice()", e);
	}
}

function blnValidateSupervisor() {
	try {
		if (document.getElementById('txtSupervisorName').value == "") {
			alert(" Please Enter Supervisor Name ");
			document.getElementById('txtSupervisorName').focus();
			return false;
		}
		else if (document.getElementById('txtSupervisorEmailId').value == "") {
			alert(" Please Enter Supervisor E-mail Id ");
			document.getElementById('txtSupervisorEmailId').focus();
			return false;
		}
		else if (document.getElementById('txtSupervisorMobileNo').value == "") {
			alert(" Please Enter Supervisor Mobile No ");
			document.getElementById('txtSupervisorMobileNo').focus();
			return false;
		}
		else if (document.getElementById('txtSupervisorOfficeNo').value == "") {
			alert(" Please Enter Supervisor Office No ");
			document.getElementById('txtSupervisorOfficeNo').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateSupervisor()", e);
	}
}

function blnValidateAcconts() {
	try {
		if (document.getElementById('txtAccountsEmailId').value == "") {
			alert(" Please Enter Accounts E-mail Id ");
			document.getElementById('txtAccountsEmailId').focus();
			return false;
		}
		else if (document.getElementById('txtAccountsOfficeNo').value == "") {
			alert(" Please Enter Accounts Office No ");
			document.getElementById('txtAccountsOfficeNo').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateAcconts()", e);
	}
}

function blnValidateAccManager() {
	try {
		if (document.getElementById('txtAccManagerName').value == "") {
			alert(" Please Enter Accounts Manager Name ");
			document.getElementById('txtAccManagerName').focus();
			return false;
		}
		else if (document.getElementById('txtAccManagerEmailId').value == "") {
			alert(" Please Enter Accounts Manager E-mail Id ");
			document.getElementById('txtAccManagerEmailId').focus();
			return false;
		}
		else if (document.getElementById('txtAccManagerMobileNo').value == "") {
			alert(" Please Enter Accounts Manager Mobile No ");
			document.getElementById('txtAccManagerMobileNo').focus();
			return false;
		}
		else if (document.getElementById('txtAccManagerOfficeNo').value == "") {
			alert(" Please Enter Accounts Manager Office No ");
			document.getElementById('txtAccManagerOfficeNo').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateAccManager()", e);
	}
}

function blnValidateIT() {
	try {
		if (document.getElementById('txtITMailId').value == "") {
			alert(" Please Enter IT E-mail Id ");
			document.getElementById('txtITMailId').focus();
			return false;
		}
		else if (document.getElementById('txtITOfficeNo').value == "") {
			alert(" Please Enter IT Office No ");
			document.getElementById('txtITOfficeNo').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateIT()", e);
	}
}

function blnValidateITManager() {
	try {
		if (document.getElementById('txtITManagerName').value == "") {
			alert(" Please Enter IT Manager Name ");
			document.getElementById('txtITManagerName').focus();
			return false;
		}
		else if (document.getElementById('txtITManagerEmailId').value == "") {
			alert(" Please Enter IT Manager E-mail Id ");
			document.getElementById('txtITManagerEmailId').focus();
			return false;
		}
		else if (document.getElementById('txtITManagerMobileNo').value == "") {
			alert(" Please Enter IT Manager Mobile No ");
			document.getElementById('txtITManagerMobileNo').focus();
			return false;
		}
		else if (document.getElementById('txtITManagerOfficeNo').value == "") {
			alert(" Please Enter IT Manager Office No ");
			document.getElementById('txtITManagerOfficeNo').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateITManager()", e);
	}
}

function blnValidateContactDetails() {
	try {
		if (document.getElementById('txtEmailid').value == "") {
			alert(" Please Enter Cinema E-mail Id ");
			document.getElementById('txtEmailid').focus();
			return false;
		}
		else if (document.getElementById('txtBoardlineNo').value == "") {
			alert(" Please Enter Cinema Boardline No ");
			document.getElementById('txtBoardlineNo').focus();
			return false;
		}
		else if (document.getElementById('txtManagerName').value == "") {
			alert(" Please Enter Manager Name ");
			document.getElementById('txtManagerName').focus();
			return false;
		}
		else if (document.getElementById('txtManagerEmailid').value == "") {
			alert(" Please Enter Manager E-mail Id ");
			document.getElementById('txtManagerEmailid').focus();
			return false;
		}
		else if (document.getElementById('txtManagerMobileNo').value == "") {
			alert(" Please Enter Manager Mobile No ");
			document.getElementById('txtManagerMobileNo').focus();
			return false;
		}
		else if (document.getElementById('txtManagerOfficeNo').value == "") {
			alert(" Please Enter Manager Office No ");
			document.getElementById('txtManagerOfficeNo').focus();
			return false;
		}
		else if (document.getElementById('txtBOMailId').value == "") {
			alert(" Please Enter Box-Office E-mail Id ");
			document.getElementById('txtBOMailId').focus();
			return false;
		}
		else if (document.getElementById('txtBOOfficeNo').value == "") {
			alert(" Please Enter Box-Office Office No ");
			document.getElementById('txtBOOfficeNo').focus();
			return false;
		}
		else if (document.getElementById('txtSupervisorName').value == "") {
			alert(" Please Enter Supervisor Name ");
			document.getElementById('txtSupervisorName').focus();
			return false;
		}
		else if (document.getElementById('txtSupervisorEmailId').value == "") {
			alert(" Please Enter Supervisor E-mail Id ");
			document.getElementById('txtSupervisorEmailId').focus();
			return false;
		}
		else if (document.getElementById('txtSupervisorMobileNo').value == "") {
			alert(" Please Enter Supervisor Mobile No ");
			document.getElementById('txtSupervisorMobileNo').focus();
			return false;
		}
		else if (document.getElementById('txtSupervisorOfficeNo').value == "") {
			alert(" Please Enter Supervisor Office No ");
			document.getElementById('txtSupervisorOfficeNo').focus();
			return false;
		}
		else if (document.getElementById('txtAccountsEmailId').value == "") {
			alert(" Please Enter Accounts E-mail Id ");
			document.getElementById('txtAccountsEmailId').focus();
			return false;
		}
		else if (document.getElementById('txtAccountsOfficeNo').value == "") {
			alert(" Please Enter Accounts Office No ");
			document.getElementById('txtAccountsOfficeNo').focus();
			return false;
		}
		else if (document.getElementById('txtAccManagerName').value == "") {
			alert(" Please Enter Accounts Manager Name ");
			document.getElementById('txtAccManagerName').focus();
			return false;
		}
		else if (document.getElementById('txtAccManagerEmailId').value == "") {
			alert(" Please Enter Accounts Manager E-mail Id ");
			document.getElementById('txtAccManagerEmailId').focus();
			return false;
		}
		else if (document.getElementById('txtAccManagerMobileNo').value == "") {
			alert(" Please Enter Accounts Manager Mobile No ");
			document.getElementById('txtAccManagerMobileNo').focus();
			return false;
		}
		else if (document.getElementById('txtAccManagerOfficeNo').value == "") {
			alert(" Please Enter Accounts Manager Office No ");
			document.getElementById('txtAccManagerOfficeNo').focus();
			return false;
		}
		else if (document.getElementById('txtITMailId').value == "") {
			alert(" Please Enter IT E-mail Id ");
			document.getElementById('txtITMailId').focus();
			return false;
		}
		else if (document.getElementById('txtITOfficeNo').value == "") {
			alert(" Please Enter IT Office No ");
			document.getElementById('txtITOfficeNo').focus();
			return false;
		}
		else if (document.getElementById('txtITManagerName').value == "") {
			alert(" Please Enter IT Manager Name ");
			document.getElementById('txtITManagerName').focus();
			return false;
		}
		else if (document.getElementById('txtITManagerEmailId').value == "") {
			alert(" Please Enter IT Manager E-mail Id ");
			document.getElementById('txtITManagerEmailId').focus();
			return false;
		}
		else if (document.getElementById('txtITManagerMobileNo').value == "") {
			alert(" Please Enter IT Manager Mobile No ");
			document.getElementById('txtITManagerMobileNo').focus();
			return false;
		}
		else if (document.getElementById('txtITManagerOfficeNo').value == "") {
			alert(" Please Enter IT Manager Office No ");
			document.getElementById('txtITManagerOfficeNo').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateContactDetails()", e);
	}
}

function blnValidateSMSDetails() {
	if (document.getElementById('txtMobileNo').value == "") {
		alert(" Please Enter Mobile No ");
		document.getElementById('txtMobileNo').focus(); 
		return false;
	}
	return true;
}

//Code For frmVenueContactDetails Completed HERE
//---------------------------------------------

function blnValidateVoucherDetails() {
	try {
		if (document.getElementById('txtVName').value == "") {
			alert(" Please Enter Voucher Name ");
			document.getElementById('txtVName').focus();
			return false;
		}

		//        if (document.getElementById('cboVoucherType').value == 'WINPIN') {
		//            if (document.getElementById('txtVPrice1').value == "") {
		//                alert(" Please Enter Per Ticket Price ");
		//                document.getElementById('txtVPrice1').focus();
		//                return false;
		//            }
		////            else if (document.getElementById('txtMaxValue').value == "") {
		////                alert(" Please Enter No Max Ticket ");
		////                document.getElementById('txtMaxValue').focus();
		////                return false;
		////            }
		//        }

		//if (document.getElementById('cboVoucherType').value == 'GV') {
		if (document.getElementById('txtQty').value == "") {
			alert(" Please Enter Voucher Quantity ");
			document.getElementById('txtQty').focus();
			return false;
		}
		else if (isNaN(document.getElementById('txtQty').value)) {
			alert(" Quantity Should be numeric");
			document.getElementById('txtQty').focus();
			return false;
		}
		else if (document.getElementById('txtAmt').value == "") {
			alert(" Please Enter Voucher Amount ");
			document.getElementById('txtAmt').focus();
			return false;
		}
		else if (isNaN(document.getElementById('txtAmt').value)) {
			alert(" Amount Should be numeric");
			document.getElementById('txtAmt').focus();
			return false;
		}
		//}             

		if (document.getElementById('txtIssueCost').value == "") {
			alert(" Please Enter Issuance Cost ");
			document.getElementById('txtIssueCost').focus();
			return false;
		}
		else if (isNaN(document.getElementById('txtIssueCost').value)) {
			alert(" Issuance Cost Should be numeric");
			document.getElementById('txtIssueCost').focus();
			return false;
		}
		else if (document.getElementById('dtFromDate').value == "") {
			alert(" Please Select From Date ");
			document.getElementById('dtFromDate').focus();
			return false;
		}
		else if (document.getElementById('dtTillDate').value == "") {
			alert(" Please Select Till Date ");
			document.getElementById('dtTillDate').focus();
			return false;
		}
		else if (document.getElementById('txtPurpose').value == "") {
			alert(" Please Enter Voucher Purpose ");
			document.getElementById('txtPurpose').focus();
			return false;
		}
		else if (document.getElementById('txtClientName').value == "") {
			alert(" Please Enter Client Name ");
			document.getElementById('txtClientName').focus();
			return false;
		}
		else if (document.getElementById('txtBillName').value == "") {
			alert(" Please Enter Bill to Whom ");
			document.getElementById('txtBillName').focus();
			return false;
		}
		else if (document.getElementById('txtEmail').value == "") {
			alert(" Please Enter E-mail Id ");
			document.getElementById('txtEmail').focus();
			return false;
		}
		else if (document.getElementById('txtAddress').value == "") {
			alert(" Please Enter Address ");
			document.getElementById('txtAddress').focus();
			return false;
		}
		else if (document.getElementById('txtMobile').value == "") {
			alert(" Please Enter Mobile number ");
			document.getElementById('txtMobile').focus();
			return false;
		}
		else if (isNaN(document.getElementById('txtMobile').value)) {
			alert(" Invalid Mobile Number ");
			document.getElementById('txtMobile').focus();
			return false;
		}
		else if (document.getElementById('txtPhone').value == "") {
			alert(" Please Enter Phone number ");
			document.getElementById('txtPhone').focus();
			return false;
		}
		else if (isNaN(document.getElementById('txtPhone').value)) {
			alert(" Invalid Phone Number ");
			document.getElementById('txtPhone').focus();
			return false;
		}
		else if (document.getElementById('txtFax').value == "") {
			alert(" Please Enter Fax number ");
			document.getElementById('txtFax').focus();
			return false;
		}
		else if (isNaN(document.getElementById('txtFax').value)) {
			alert(" Invalid Fax Number ");
			document.getElementById('txtFax').focus();
			return false;
		}
		else if (document.getElementById('dtIssueDate').value == "") {
			alert(" Please Select Issue Date ");
			document.getElementById('dtIssueDate').focus();
			return false;
		}
		//        else if (document.getElementById('dtBillDate').value == "") {
		//            alert(" Please Select Bill Date ");
		//            document.getElementById('dtBillDate').focus();
		//            return false;
		//        }

		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateVoucherDetails()", e);
	}
}

function blnValidateGVDetails() {
	try {
		if (document.getElementById('txtVId').value == "") {
			alert(" Please Enter Id ");
			document.getElementById('txtVId').focus();
			return false;
		} else if (document.getElementById('dtCompDate').value == "") {
			alert(" Please Select Completion Date ");
			document.getElementById('dtCompDate').focus();
			return false;
		} else if (document.getElementById('dtFromDate').value == "") {
			alert(" Please Select From Date ");
			document.getElementById('dtFromDate').focus();
			return false;
		} else if (document.getElementById('dtTillDate').value == "") {
			alert(" Please Select Till Date ");
			document.getElementById('dtTillDate').focus();
			return false;
		}
 //   else if (document.getElementById('txtComments').value == "") {
//			alert(" Please Enter Comments ");
//			document.getElementById('txtComments').focus();
//			return false;
//		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateGVDetails()", e);
	}
}

function blnValidateWinpinDetails() {
	try {
		if (document.getElementById('txtVId').value == "") {
			alert(" Please Enter Id ");
			document.getElementById('txtVId').focus();
			return false;
		} else if (document.getElementById('dtCompDate').value == "") {
			alert(" Please Select Completion Date ");
			document.getElementById('dtCompDate').focus();
			return false;
		} else if (document.getElementById('dtFromDate').value == "") {
			alert(" Please Select From Date ");
			document.getElementById('dtFromDate').focus();
			return false;
		} else if (document.getElementById('dtTillDate').value == "") {
			alert(" Please Select Till Date ");
			document.getElementById('dtTillDate').focus();
			return false;
        } 
//        else if (document.getElementById('txtComments').value == "") {
//			alert(" Please Enter Comments ");
//			document.getElementById('txtComments').focus();
//			return false;
//        } 
        else if (isNaN(document.getElementById('txtVPrice1').value)) {
			alert(" Price 1 Should be numeric ");
			document.getElementById('txtVPrice1').focus();
			return false;
		} else if (document.getElementById('txtVPrice1').value == "") {
			alert(" Please Enter Price 1 ");
			document.getElementById('txtVPrice1').focus();
			return false;
		}
		//        }else if (isNaN(document.getElementById('txtVPrice2').value)) {
		//            alert(" Price 2 Should be numeric ");
		//            document.getElementById('txtVPrice2').focus();
		//            return false;
		//        }else if (document.getElementById('txtVPrice2').value == "") {
		//            alert(" Please Enter Price 2 ");
		//            document.getElementById('txtVPrice2').focus();
		//            return false;
		//        }else if (isNaN(document.getElementById('txtMaxValue').value)) {
		//            alert(" Max value Should be numeric");
		//            document.getElementById('txtMaxValue').focus();
		//            return false;
		//        }else if (document.getElementById('txtMaxValue').value == "") {
		//            alert(" Please Enter Max Value ");
		//            document.getElementById('txtMaxValue').focus();
		//            return false;
		//        }else if (document.getElementById('txtDisData').value == "") {
		//            alert(" Please Enter Discount Data ");
		//            document.getElementById('txtDisData').focus();
		//            return false;
		//        }
		//        else if (document.getElementById('txtSpName').value == "") {
		//            alert(" Please Enter SP Name ");
		//            document.getElementById('txtSpName').focus();
		//            return false;
		//        }
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateWinpinDetails()", e);
	}
}

function blnfrmValidateGenVoucher() {
	try {
		if (document.getElementById('txtVouQty').value == "") {
			alert(" Please Enter Voucher Qty");
			document.getElementById('txtVouQty').focus();
			return false;
		}
		else if (isNaN(document.getElementById('txtVouQty').value)) {
			alert(" Quantity Should be numeric");
			document.getElementById('txtVouQty').focus();
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnfrmValidateGenVoucher()", e);
	}
}

function blnValidateFalshDetails() {
	try {
		//ShowProgress('cmdSubmit', false);
		var objcboFtype = document.getElementById("cboFType");
		var objcboRegion = document.getElementById("cboRegion");

		if (objcboFtype.value == "") {
			alert(" Select A Flash Type!!");
			return false;
		}
		if (objcboRegion.value == "") {
			alert(" Select A Region!!");
			return false;
		}
		if (document.getElementById('txtName').value == "") {
			alert(" Please Enter Name ");
			document.getElementById('txtName').focus();
			return false;
		}
		if (document.getElementById('txtDescription').value == "") {
			alert(" Please Enter Description ");
			document.getElementById('txtDescription').focus();
			return false;
		}
		if (document.getElementById('txtTitle').value == "") {
			alert(" Please Enter Title");
			document.getElementById('txtTitle').focus();
			return false;
		}
		if (document.getElementById('txtContent').value == "") {
			alert(" Please Enter Content");
			document.getElementById('txtContent').focus();
			return false;
		}
		if (document.getElementById('txtURL').value == "") {
			alert(" Please Enter URL ");
			document.getElementById('txtURL').focus();
			return false;
		}
		if (document.getElementById('hdnImage').value == "") {
			if (document.getElementById('ObjImage').value == "") {
				alert(" Please Enter Image File ");
				document.getElementById('ObjImage').focus();
				return false;
			}
		}
		if (document.getElementById('txtBtnName').value == "") {
			alert(" Please Enter Button Name ");
			document.getElementById('txtBtnName').focus();
			return false;
		}
		if (document.getElementById('cboSequence').value.toString == "") {
			alert(" Please Enter Sequence");
			document.getElementById('txtSequence').focus();
			return false;
		}
		if (document.getElementById('cboIsActive').value == "") {
			alert(" Please Enter Is Active");
			document.getElementById('cboIsActive').focus();
			return false;
		}
		if (document.getElementById('cboTarget').value == "") {
			alert(" Please Enter Target");
			document.getElementById('cboTarget').focus();
			return false;
		}
		ShowProgress("cmdSubmit", false);
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateFalshDetails()", e);
	}
}


function blnValidateFType() {
	try {

		var objcboFtype = document.getElementById("cboFType");
		var objcboRegion = document.getElementById("cboRegion");

		if (objcboFtype.value == "") {
			alert(" Select A Flash Type!!");
			return false;
		}
		if (objcboRegion.value == "") {
			alert(" Select A Region!!");
			return false;
		}
		return true;
	}
	catch (e) {
		subDisplayError("BackOfficeModuleCode.js", "blnValidateFType()", e);
	}
}


