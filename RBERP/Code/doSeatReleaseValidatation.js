function blnValidateTransDetails() {
    try {
        if (document.getElementById("txtTransId").value.length == 0) {
            alert("Transaction Id should not be left blank");
            document.getElementById("txtTransId").focus();
            return false;
        }
        if (document.getElementById("txtBookingId").value.length == 0) {
            alert("Booking Id should not be left blank");
            document.getElementById("txtBookingId").focus();
            return false
        }
        if (isNaN(document.getElementById('txtTransId').value)) {
            alert("Transaction Id should be numeric");
            document.getElementById('txtTransId').value = '';
            document.getElementById('txtTransId').focus();
            return false;
        }
        return true;
    }
    catch (e) {
        subDisplayError("", "blnValidateTransDetails()", e);
    }
}

function blnValidateQuantity() {
    try {

        var objVal = document.getElementById("txtTicketsQty").value;

        if (objVal.length == 0) {
            alert("Quantity should not be left blank");
            document.getElementById("txtTicketsQty").focus();
            return false;
        }
        if (isNaN(objVal)) {
            alert("Quantity should be numeric");
            document.getElementById('txtTicketsQty').value = '';
            document.getElementById('txtTicketsQty').focus();
            return false;
        }

        var objMaxQty = document.getElementById('txtMaxQuantity').value;

        if (parseInt(objVal) >= parseInt(objMaxQty)) {
            alert("Quantity to Split should be less than the Tickets Quantity");
            document.getElementById('txtTicketsQty').value = '';
            document.getElementById('txtTicketsQty').focus();
            return false;
        }

        if (parseInt(objVal) == 0) {
            alert("Quantity to Split should be more than zero");
            document.getElementById('txtTicketsQty').value = '';
            document.getElementById('txtTicketsQty').focus();
            return false;
        }
        return true;
    }
    catch (e) {
        subDisplayError("", "blnValidateQuantity()", e);
    }
}

function blnValidateSeatSelection() {
    try {

        count = 0;

        objChkBoxes = document.getElementById('pnlSeatLayout').getElementsByTagName('input');

        for (x = 0; x < objChkBoxes.length; x++) {
            if (objChkBoxes[x].type == 'checkbox') {
                if (objChkBoxes[x].checked == true) {
                    count++;
                }
            }
        }

        if (count == 0) {
            alert("Please select the Seats to Split");
            return false;
        }

        if (count >= parseInt(document.getElementById('hdnMaxTickets').value)) {
            alert("You cannot select all the Seats for Splitting");
            return false;
        }

        if (count != parseInt(document.getElementById('hdnQuantity').value)) {
            alert("Please select " + document.getElementById('hdnQuantity').value + " Seats for spliting.");
            return false;
        }

        var objForm = document.getElementById('frmSeatRelease');
        objForm.action = "SeatReleaseEx.aspx";
        objForm.submit();

        return true;
    }
    catch (e) {
        subDisplayError("", "blnValidateSeatSelection()", e);
    }
}