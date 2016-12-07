// JScript File

//Code For fill company, cinema, Event and Session drop down

//parameters    : strComp = compdropdownId, strCinema = cinemadropdownId, strEvent = eventdropdownId, strSession =sessiondropdownId , hdnCompID = hiidenfield id
function subFillCompanyData(cboCompID, cboCinemaID, cboEventID, cboSessionID, hdnCompID) {
    try {
        var objComp = document.getElementById(cboCompID);

        clearOption(objComp, '');
        
        for (intctr = 0; intctr < arrcompanies.length; intctr++) {
            objComp.appendChild(addOptions(arrcompanies[intctr][1], arrcompanies[intctr][0], ''));
        }
        if (arrcompanies.length == 0) {

            objComp.appendChild(addOptions('NA', '', ''));
        }

        if (cboCinemaID.length > 0) {
            subFillCinemaData(cboCompID, cboCinemaID, cboEventID, cboSessionID, hdnCompID);
        }
    }
    catch (e) {
        subDisplayError("Filldropdown.js", "subFillCompany()", e);
    }
}

function subFillCinemaData(cboCompID, cboCinemaID, cboEventID, cboSessionID, hdnCompID) {
    try {
        var objComp = document.getElementById(cboCompID);
        var objCinema = document.getElementById(cboCinemaID);
        var strComp = objComp.value;

        if (document.getElementById(hdnCompID).value != "") {
            strComp = document.getElementById(hdnCompID).value;
        }
        
        clearOption(objCinema, '---Select---');
        
        for (var intCtr = 0; intCtr < arrCinemas.length; intCtr++) {
            if (strComp == arrCinemas[intCtr][0] || strComp == "") {
                objCinema.appendChild(addOptions(arrCinemas[intCtr][2], arrCinemas[intCtr][1], ''));
               //cincount++;
            }
        }
        if (objCinema.length == 1 ) {
            clearOption(objCinema, '');
            objCinema.appendChild(addOptions('NA', '', ''));
        }

        if (cboEventID.length > 0) {
            subFillEventData(cboCompID, cboCinemaID, cboEventID, cboSessionID, hdnCompID);
        }
    }
    catch (e) {
        subDisplayError("Filldropdown.js", "subFillCinemaData()", e);
    }
}

function subFillEventData(cboCompID, cboCinemaID, cboEventID, cboSessionID, hdnCompID) {
    try 
    {
        var objComp = document.getElementById(cboCompID);
        var objCinema = document.getElementById(cboCinemaID);
        var objEvent = document.getElementById(cboEventID);
        var strComp = objComp.value;
        var strCinema = objCinema.value;

        if (document.getElementById(hdnCompID).value != "") {
            strComp = document.getElementById(hdnCompID).value;
        }

        var evtCount;
        clearOption(objEvent, '---Select---');
        
        for (var intctr = 0; intctr < arrEvents.length; intctr++) { 
            if((strComp == arrEvents[intctr][0] || strComp == "") && (strCinema== arrEvents[intctr][1] || strCinema == "")){
                objEvent.appendChild(addOptions(arrEvents[intctr][3], arrEvents[intctr][2], ''));
                //evtCount++;
            }
        }
    
        if (objEvent.length == 1 ) {
            clearOption(objEvent, '');
            objEvent.appendChild(addOptions('NA', '', ''));
        }
        if (cboSessionID.length > 0) 
        {
            subFillSessionData(cboCompID, cboCinemaID, cboEventID, cboSessionID, hdnCompID);
        }
    }
    catch (e) {
        subDisplayError("Filldropdown.js", "subFillEventData()", e);
    }
}

function subFillSessionData(cboCompID, cboCinemaID, cboEventID, cboSessionID, hdnCompID) {
    try {
        var objComp = document.getElementById(cboCompID);
        var objCinema = document.getElementById(cboCinemaID);
        var objEvent = document.getElementById(cboEventID);
        var objSession = document.getElementById(cboSessionID);
        var strComp = objComp.value;
        var strCinema = objCinema.value;
        var strEvent = objEvent.value;

        if (document.getElementById(hdnCompID).value != "") {
            strComp = document.getElementById(hdnCompID).value;
        }

        clearOption(objSession, '---Select---');

        for (var intctr = 0; intctr < arrSessions.length; intctr++) {
            if ((strComp == arrSessions[intctr][0] || strComp == "") && (strCinema == arrSessions[intctr][1] || strCinema == "") && (strEvent == arrSessions[intctr][2] || strEvent == "")) {
                objSession.appendChild(addOptions(arrSessions[intctr][3], arrSessions[intctr][3], ''));
                //sessCount++;
            }
        }
        if (objSession.length == 1 ) {
            clearOption(objSession, '');
            objSession.appendChild(addOptions('NA', '', ''));
        }
    }
    catch (e) {
        subDisplayError("Filldropdown.js", "subFillSessionData()", e);
}
}

///c - combo box; t - default value
function clearOption(c, t) {
    for (var ic = c.childNodes.length - 1; ic >= 0; ic--) {
        ch = c.childNodes[ic];
        c.removeChild(ch);
    }

    if (t.length > 0)
        c.appendChild(addOption(t, "", ""));
}

///h - text; v - value, c - class name
function addOptions(h, v, c) {
    var opt = document.createElement("option");
    opt.innerHTML = h;
    opt.className = c;
    opt.value = v;
    return opt;
}