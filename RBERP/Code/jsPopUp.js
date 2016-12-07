var _identifierS;

function OpenModelPopup(strName, intHeightDiff) {
    debugger;
    ///if _identifierS gets data oly when this method is called on that hyperlink and is valid till the window is closed or till the page is getting refreshed
    ///on body resize when pop window is alive this will have the value which is sent already from the hyperlink onclick
    if (strName != 'resize') {
        _identifierS = strName;
    }

    ///to check whether pop window is available; if yes then on body resize to adjust the height of mask div this is used
    if (_identifierS != '' || _identifierS != null) {

        document.getElementById('divPopup_Content').style.visibility = 'visible';

        document.getElementById('divPopup_Content').style.top = Math.round((document.documentElement.clientHeight / 2) + document.documentElement.scrollTop) - intHeightDiff + 'px';
        document.getElementById('divPopup_Content').style.left = Math.round((window.innerWidth - 940) / 2) + 'px';

        document.getElementById('divPopup').style.visibility = 'visible';
        document.getElementById('divPopup').style.opacity = '.4';

        ///to fix the mask div height
        if (document.getElementById('divContainer').clientHeight > parent.resizer()) {
            document.getElementById('divPopup').style.height = document.getElementById('divContainer').clientHeight + 20 + 'px';
        }
        else {
            document.getElementById('divPopup').style.height = parent.resizer() + 'px';
        }
    }
}

function CloseModelPopup() {
    debugger;
    document.getElementById('divPopup').style.visibility = 'hidden';
    document.getElementById('divPopup_Content').style.visibility = 'hidden';
    _identifierS = '';
}


function showBusy(intHeightDiff) {
    CloseModelPopup();   

   // document.getElementById('loader').style.visibility = 'visible';
    $("#loader").show();
    
    document.getElementById('loader').style.top = Math.round((document.documentElement.clientHeight / 2) + document.documentElement.scrollTop) - intHeightDiff + 'px';
    document.getElementById('loader').style.left = Math.round((window.innerWidth - 400) / 2) + 'px';

    document.getElementById('divPopup').style.visibility = 'visible';
    document.getElementById('divPopup').style.opacity = '.4';

    ///to fix the mask div height
    if (document.getElementById('divContainer').clientHeight > parent.resizer()) {
        document.getElementById('divPopup').style.height = document.getElementById('divContainer').clientHeight + 'px';
    }
    else {
        document.getElementById('divPopup').style.height = parent.resizer() + 'px';
    }
}