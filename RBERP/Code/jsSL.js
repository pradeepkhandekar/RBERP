
var selectedSeats = new Array();
var i = 0;
var SelectedQty = 0;

function Clear(strID, strQty) {
    debugger;
    var CheckPrevious = document.getElementById('hdnfieldSeatId').value.split('|');
    var length = CheckPrevious.length;
    if (length == strQty || length > strQty) {
        document.getElementById('hdnfieldSeatId').value = null;
    }

    if ((SelectedQty - strQty) === 0) {
        for (var i = 0; i < strQty; i++) {

            document.getElementById(selectedSeats[i]).src = 'Seats/W_chair.gif';
        }
        SelectedQty = 0;
        document.getElementById('hdnfieldSeatId').value = null;
    }
}

function chan(strID, strQty) {
    try {
        Clear(strID, strQty);
        debugger;
        while (i >= 0) {
            if ((/W_chair.gif/g).test(document.getElementById(strID.split('_')[0] + '_' + strID.split('_')[1] + '_' + (parseInt(strID.split('_')[2], 10) + parseInt(i, 10))).src) === true) {
                document.getElementById(strID.split('_')[0] + '_' + strID.split('_')[1] + '_' + (parseInt(strID.split('_')[2], 10) + parseInt(i, 10))).src = 'Seats/G_chair.gif';
                selectedSeats[SelectedQty] = strID.split('_')[0] + '_' + strID.split('_')[1] + '_' + (parseInt(strID.split('_')[2], 10) + parseInt(i, 10));
                SelectedQty = SelectedQty + 1;
            }
            else if ((/R_chair.gif/g).test(document.getElementById(strID.split('_')[0] + '_' + strID.split('_')[1] + '_' + (parseInt(strID.split('_')[2], 10) + parseInt(i, 10))).src) === true) {
                i = 0;
                break;
            }
            i = i + 1;
            if (strQty == SelectedQty) {
                i = 0;
                break;
            }
        }
        return false;
    }
    catch (e) {
        i = 0;
        return false;
    }

}

function getSeatId() {
    if (document.getElementById('hdnfieldQty').value != selectedSeats.length) {
        alert('Select Seats Correctly');
        return false;
    }
    document.getElementById('hdnfieldSeatId').value = "";
    for (var i = 0; i < selectedSeats.length; i++) {
        document.getElementById('hdnfieldSeatId').value += selectedSeats[i].toString() + '|';
    }
}

