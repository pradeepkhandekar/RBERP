function $(b) {
    try {
        return doc.getElementById(b);
    } catch (a) {
        showErr("getById('" + b + "')", a);
    }
}

function flObj(name, id) {
    this.name = name;
    this.id = id;
    this.hasElement = typeof (document.documentElement) == 'object' && typeof (document.documentElement.clientWidth) == 'number';
    this.hasInner = typeof (window.innerWidth) == 'number';
    this.menu = document.getElementById ? document.getElementById(id) : document.all ? document.all[id] : document.layers[id];
    //this.menu.style.display = '';
    //this.doFloat();
    this.move();

}
flObj.prototype.calculateCornerX = function() {
    var width = parseInt(this.menu.offsetWidth);
    var cornerX = this.hasElement ? (this.hasInner ? pageXOffset : document.documentElement.scrollLeft) + (document.documentElement.clientWidth - width) / 2 : document.body.scrollLeft + (document.body.clientWidth - width) / 2;
    return cornerX;
};

flObj.prototype.calculateCornerY = function() {
    var height = parseInt(this.menu.offsetHeight);
    var clientHeight = this.hasElement && this.hasInner && document.documentElement.clientHeight > window.innerHeight ? window.innerHeight : document.documentElement.clientHeight
    var cornerY = this.hasElement ? (this.hasInner ? pageYOffset : document.documentElement.scrollTop) + (clientHeight - height) / 2 : document.body.scrollTop + (document.body.clientHeight - height) / 2;
    return cornerY;
};

flObj.prototype.doFloat = function() {
    var cornerX = this.calculateCornerX();
    var cornerY = this.calculateCornerY();

    var stepX = (cornerX - this.nextX) * .07;
    var stepY = (cornerY - this.nextY) * .07;

    if (Math.abs(stepX) < .5) stepX = cornerX - this.nextX;
    if (Math.abs(stepY) < .5) stepY = cornerY - this.nextY;
    if (Math.abs(stepX) > 0 || Math.abs(stepY) > 0) {
        this.nextX += stepX;
        this.nextY += stepY;
    } else {
        this.nextX = cornerX;
        this.nextY = cornerY;
    }
    this.move();
    setTimeout(this.name + '.doFloat()', 100);
};

flObj.prototype.move = function() {
    this.nextX = this.calculateCornerX();
    this.nextY = this.calculateCornerY();
    if (this.menu.style.display != 'none') {
        this.menu.style.left = this.nextX + 'px';
        this.menu.style.top = this.nextY + 'px';
    }
    setTimeout(this.name + '.move()', 100);
};

function busy(c) {
    try {
        var a = $("dStatus");
        a.style.position = "absolute";
        pCover(c);
        setDisp(a, c);
        flStatus = new flObj("flStatus", "dStatus");
    } catch (b) {
        showErr("busy('" + c + "')", b);
    }
}
function pCover(i) {
    try {
        var b;
        if ($("dCover") == undefined) {
            b = cElem("div");
            b.setAttribute("id", "dCover");
            b.style.zIndex = 995;
            doc.body.appendChild(b);
        } else {
            b = $("dCover");
        }
        var d = Math.max(Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight), Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight), Math.max(doc.body.clientHeight, doc.documentElement.clientHeight));
        var a = Math.max(Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth), Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth), Math.max(doc.body.clientWidth, doc.documentElement.clientWidth));
        var g = doc.all &&
            win.external &&
            typeof doc.documentElement.style.maxHeight === "undefined" ? true : false;
        b.className = "dpup";
        b.style.height = d + "px";
        b.style.width = a + "px";
        setDisp(b, i);
        if (g) {
            var c;
            if ($("ifrmCover") == undefined) {
                c = cElem("iframe");
                c.setAttribute("id", "ifrmCover");
                c.style.zIndex = 994;
            } else {
                c = $("ifrmCover");
            }
            c.className = "Tfrm";
            c.frameBorder = 0;
            c.style.position = "absolute";
            c.style.height = b.offsetHeight;
            c.style.width = b.offsetWidth;
            c.style.top = 0;
            c.style.left = 0;
            c.style.visibility = i ? "visible" : "hidden";
            doc.body.appendChild(c);
        }
    } catch (f) {
        showErr("pCover('" + i + "')", f);
    }
}
	function setDisp(a, b) {
    try {
        (typeof a == "string" ? $(a) : a).style.display = b ? "" : "none";
    } catch (c) {
        showErr("setDisp(" + a + ", " + b + ")", c);
    }
}
function showErr(a, b) {
    try {
        alert("Something's not right here! Please try again after a while. Your patience is appreciated");
    } catch (b) {
        alert("Something's not right here! Please try again after a while. Your patience is appreciated");
    }
}