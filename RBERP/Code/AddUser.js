// JScript File

//Code For frmAddUser.aspx
//--------------------------

var strLoadCompanyCode = arrUser[0][2];
var strLoadCinemaCode = arrUser[0][3];

function subLoadData() {
    subFillCompany();
    subFillCinema(strLoadCompanyCode);  
    var objType = document.getElementById("cboUserGroupId");
    if(arrUser.length > 1)
        subSelectComboByValue(objType, "", false);
    else
        subSelectComboByValue(objType, arrUser[0][1], false);
      
}

function subFillCompany()
{
    try
    {
        var objCompanyCbo = document.getElementById("cboCompany");
        var objOpt = document.createElement("Option");
        objOpt.setAttribute("value", "");
        objOpt.setAttribute("selected", "selected");
        objOpt.innerHTML = "Default";
        objCompanyCbo.appendChild(objOpt);
        for(var intCount=0; intCount < arrCompanyCode.length; intCount++)
        {
            var objOpt = document.createElement("Option");
            objOpt.setAttribute("value", arrCompanyCode[intCount][0]);
            objOpt.innerHTML = arrCompanyCode[intCount][1];
            objCompanyCbo.appendChild(objOpt);
        }
        subSelectComboByValue(objCompanyCbo, strLoadCompanyCode, false);
        var objCinemaCbo = document.getElementById("cboCinema");
        var objCinemaOpt = document.createElement("Option");
        objCinemaOpt.setAttribute("value", "");
        objCinemaOpt.innerHTML = "Default";
        objCinemaCbo.appendChild(objCinemaOpt);
        if (document.getElementById("hdnCompany").value != "") {
            document.getElementById("cboCompany").value = document.getElementById("hdnCompany").value;
        }
     }
    catch(e)
    {
        subDisplayError("BackOfficeModuleCode.js", "subFillCompanyCombo()", e); 
    }
}

function subFillCinema(strCompanyCode)
{
    var objCinemaCbo = document.getElementById("cboCinema");
    var objcboCompany = document.getElementById("cboCompany");
    var strCompanyCode = objcboCompany.value;
        for(var intChildCount = 0; intChildCount < objCinemaCbo.childNodes.length; intChildCount++)
		{
			var a = objCinemaCbo.childNodes[(intChildCount--)];
			objCinemaCbo.removeChild(a);
        }
        var objCinemaOpt = document.createElement("Option");
        objCinemaOpt.setAttribute("value", "");
        objCinemaOpt.innerHTML = "-- Select --";
        objCinemaCbo.appendChild(objCinemaOpt);
        for(var intCount=0; intCount < arrVenueCode.length; intCount++)
        {
            if(arrVenueCode[intCount][0] == strCompanyCode)
            {
                var objCinemaOpt = document.createElement("Option");
                objCinemaOpt.setAttribute("value",arrVenueCode[intCount][1]);
                objCinemaOpt.innerHTML = arrVenueCode[intCount][2];
                objCinemaCbo.appendChild(objCinemaOpt);
            }
        }
        subSelectComboByValue(objCinemaCbo, strLoadCinemaCode, false);       
        subFillEvent();
 }


 

function CancelUserModification()
{
    try
    {
        window.location.href = "UserManagement.aspx";
    } catch(e) {
        subDisplayError("BackOfficeModuleCode.js", "CancelUserModification()", e);
    }
}
//----------------------------
//End Of  Code For frmAddUser.aspx
