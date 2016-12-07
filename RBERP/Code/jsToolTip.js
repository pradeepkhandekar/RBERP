function tooltip(data, color, c) {

    try {
        var f = document.getElementById("dAvai");
        var k = document.getElementById("dAvaiCont");
        var h = "", g = "";
        f.style.display = k.style.display = "";
        f.style.width = "";
        var Data =
                h += "<ul id = \"ulData\" style=\"list-style:none;\" >" +
                     "<li class=\"ulData\" style = \"color:Black; width:auto;height:auto;\"> <br \> " + data + " <br \> </li>" +
                     "</ul>";

        k.innerHTML = h;
        k.style.width = "auto";

        var lstWdt = document.getElementById("ulData").offsetWidth;
        var lstHt = document.getElementById("ulData").offsetHeight;
        var b = getXY(c);
        var a = k.clientWidth;
        f.style.left = b[0] - (parseInt(a) / 2 - (parseInt(lstWdt) / 4)) + "px";
        f.style.top = b[1] - (parseInt(lstHt) + 29) + "px";
        f.style.width = "auto";

    } catch (l) {
        alert("sAvail", l.message);
    }
}
function setDisp(cont, flag) {
    try {
        (typeof cont == "string" ? document.getElementById(cont) : cont).style.display = flag ? "" : "none";
    } catch (e) {
        showErr("setDisp(" + cont + ", " + flag + ")", e);
    }
}

function getXY(a) {
    var c, b;
    if (window.event) {
        c = window.event.clientX - 21;
        if (document.body.scrollTop > 0) {
            b = window.event.clientY + document.body.scrollTop;
        } else {
            b = window.event.clientY + document.documentElement.scrollTop + 2;
        }
    } else {
        c = a.clientX - 21;
        if (document.body.scrollTop > 0) {
            b = a.clientY + document.body.scrollTop;
        } else {
            b = a.clientY + document.documentElement.scrollTop + 2;
        }
    }
    c = c - 0;
    b = b + 4;
    return [c, b];
}