var arrRegions = new Array();
var arrCompanies = new Array();
var arrVenues = new Array();
var arrEvents = new Array();

function subFillcboMerchant(strValue) {
    var objBank = document.getElementById('drpDebtor');
    var objMerchant = document.getElementById('drpSubDebtor');
    var strBankId = objBank.value;
    clearOptions(objMerchant, "Select");

    for (var intCtr = 0; intCtr < arrMerchant.length; intCtr++) {
        if (arrMerchant[intCtr][0] == strBankId) {
            //			alert(arrMerchant[intCtr][1]);
            objMerchant.appendChild(addOption(arrMerchant[intCtr][2], arrMerchant[intCtr][1], ""));
        }
    }
}

//subFillcboMerchant(document.getElementById('drpDebtor').value);
//if (document.getElementById('hdnAccount').value != "") {
//    document.getElementById('drpSubDebtor').value = document.getElementById('hdnAccount').value;
//}

function clearOptions(c, t) {
    for (var ic = c.childNodes.length - 1; ic >= 0; ic--) {
        ch = c.childNodes[ic];
        c.removeChild(ch);
    }
    c.appendChild(addOption(t, "0", ""));
}

function addOption(h, v, c) {
    var opt = document.createElement("option");
    opt.innerHTML = h;
    opt.className = c;
    opt.value = v;
    return opt;
}

subGetDataAndExecute("sctRegions", "../jxData.aspx?dt=GTRG", "subLoadRegions();");

function subLoadRegions() {
    if (arrRegions.length == 0) {
        subDisplayError("Franchisee.js", "Regions are NOT yet ready !!!", "");
        return;
    }
    var objCombo = document.getElementById('drpRegion');
    if (!objCombo) {
        subDisplayError("Franchisee.js", "Could not locate Region Combo !!!", "");
        return;
    }
    objCombo.length = 0;
    subAddToCombo(objCombo, "Select Region", "");
    for (var intCount = 0; intCount < arrRegions.length; intCount++) {
        subAddToCombo(objCombo, arrRegions[intCount][1], arrRegions[intCount][0]);
    }
}

function subCallLoadCompanys(strRegion) {
    var objCombo = document.getElementById('drpCompany');

    objCombo.length = 0;
    subAddToCombo(objCombo, "Loading Companies...", "");
    subGetDataAndExecute("sctCinemas", "../jxData.aspx?dt=GTCP&rid=" + strRegion, "subLoadCompanies();");
}

function subLoadCompanies() {
    if (arrCompanies.length == 0) {
        subDisplayError("Franchisee.js", "Companies are NOT yet ready !!!", "");
        return;
    }
    var objCombo = document.getElementById('drpCompany');
    if (!objCombo) {
        subDisplayError("Franchisee.js", "Could not locate Company Combo !!!", "");
        return;
    }
    objCombo.length = 0;
    subAddToCombo(objCombo, "Select Company", "");
    for (var intCount = 0; intCount < arrCompanies.length; intCount++) {
        subAddToCombo(objCombo, arrCompanies[intCount][1], arrCompanies[intCount][0]);
    }
}

function subCallLoadVenues(strCompany) {
    var objCombo = document.getElementById('drpVenue');

    objCombo.length = 0;
    subAddToCombo(objCombo, "Loading Venues...", "");
    subGetDataAndExecute("sctCinemas", "../jxData.aspx?dt=GTCN&ccd=" + strCompany, "subLoadVenues();");
}

function subLoadVenues() {
    if (arrVenues.length == 0) {
        subDisplayError("Franchisee.js", "Venues are NOT yet ready !!!", "");
        return;
    }
    var objCombo = document.getElementById('drpVenue');
    if (!objCombo) {
        subDisplayError("Franchisee.js", "Could not locate Venue Combo !!!", "");
        return;
    }
    objCombo.length = 0;
    subAddToCombo(objCombo, "Select Venue", "");
    for (var intCount = 0; intCount < arrVenues.length; intCount++) {
        subAddToCombo(objCombo, arrVenues[intCount][1], arrVenues[intCount][0]);
    }
}

function subCallLoadEvents(strVenue) {
    var objCombo = document.getElementById('drpEvent');

    objCombo.length = 0;
    subAddToCombo(objCombo, "Loading Events...", "");
    subGetDataAndExecute("sctEvents", "../jxData.aspx?dt=GTET&cid=" + strVenue, "subLoadEvents();");
}

function subLoadEvents() {
    if (arrEvents.length == 0) {
        subDisplayError("Franchisee.js", "Events are NOT yet ready !!!", "");
        return;
    }
    var objCombo = document.getElementById('drpEvent');
    if (!objCombo) {
        subDisplayError("Franchisee.js", "Could not locate Event Combo !!!", "");
        return;
    }
    objCombo.length = 0;
    subAddToCombo(objCombo, "Select Event", "");
    for (var intCount = 0; intCount < arrEvents.length; intCount++) {
        subAddToCombo(objCombo, arrEvents[intCount][1], arrEvents[intCount][0]);
    }
}