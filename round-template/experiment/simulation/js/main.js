function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img/>')[0].src = this;
    });
}
var type = 1;
function val1(x, ele) {
    $(".line-btn button").removeClass("active");
    $(ele).addClass("active");
    console.log(ele, $(ele));

    type = x;
    if (posprev == null || posnext == null)
        return;
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (type == 1) {
        ctx.setLineDash([0, 0]);

        ctx.lineWidth = 5;
        ctx.strokeStyle = "red";
    }
    if (type == 2) {
        ctx.setLineDash([2, 2]);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "red";
    }
    if (type == 3) {
        ctx.setLineDash([10, 3]);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
    }
    ctx.moveTo(posprev.x, posprev.y);
    ctx.lineTo(posnext.x, posnext.y);
    ctx.stroke();

}
window.onresize = function () {
    canvas.width = $("#diagram2").width();
    canvas.height = $("#diagram2").height();
}
//add disabled class
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}
// addClass(document.getElementById("mag"), "out");
// addClass(document.getElementById("imgblur"), "out");
// addClass(document.getElementById("clight"), "out");
//put this outside the event loop...
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var temp = 0, flag = 0;
var posprev, posnext;
posprev = posnext = null;
var dist;
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
temp = 1;
function drawl() {
    temp = 2;
    document.getElementById("checksizeb").disabled = false;

}
function draw(evt) {
    if (temp == 1)
        return;
    else {
        flag++;
        if (flag == 1) {
            posprev = getMousePos(canvas, evt);
        }
        else {
            temp = 1;
            posnext = getMousePos(canvas, evt);
            flag = 0;
            console.log(type);
            if (type == 1) {
                ctx.lineWidth = 3;
                ctx.strokeStyle = "red";
            }
            if (type == 2) {
                ctx.setLineDash([2, 2]);
                ctx.strokeStyle = "red";

                ctx.lineWidth = 3;
            }
            if (type == 3) {

                ctx.setLineDash([10, 3]);
                ctx.lineWidth = 3;
            }
            ctx.moveTo(posprev.x, posprev.y);
            ctx.lineTo(posnext.x, posnext.y);
            ctx.stroke();
            addClass(canvas, "out1");
            dist = Math.sqrt(Math.pow((-posprev.x + posnext.x), 2) + Math.pow((posprev.y - posnext.y), 2))
        }
        console.log(flag);
        console.log("distance=" + dist);
    }
}
const typeSpeed = 30;
var timerId, typeTarget = $("#typer");
function type(txt, cur = 0) {
    if (cur == txt.length) {
        timerId = -1;
        return;
    }
    if (cur == 0) {
        typeTarget.html("");
        clearTimeout(timerId);
    }
    typeTarget.append(txt.charAt(cur));
    timerId = setTimeout(type, typeSpeed, txt, cur + 1);
}
function fon() {
    var elems = document.getElementsByClassName("loadEnable");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
    }
    document.getElementById("load").disabled = true;
    document.getElementById("diagram").src = "./images/se-gif.gif";
    document.getElementById("diagram2").onload = function () {
        canvas.width = $("#diagram2").width();
        canvas.height = $("#diagram2").height();
        console.log("setting");
    }
    setTimeout(() => {
        document.getElementById("diagram2").src = "./images/500.jpg";
    }, 12000);
    // document.getElementById("diagram2").src = "./images/500.jpg";
    // document.getElementById("mag").disabled = false;
    document.getElementById("imgblur").disabled = false;
    document.getElementById("clight").disabled = false;
}
function editImage() {
    var obj = document.getElementById("diagram2");
    obj.style["filter"] = "contrast(" + document.getElementById("clight").value + ") blur(" + document.getElementById("imgblur").value + "px)";
}
function Contrast() {
    var v = document.getElementById("diagram2");
    v.style["filter"] = "contrast(" + document.getElementById("clight").value + ") blur(" + document.getElementById("imgblur").value + "px)";
}
var val = 1;
function changeImage(value) {
    console.log(value);
    val = value;
    if (value == 1) {
        document.getElementById("diagram2").src = "./images/500.jpg";
    }
    if (value == 2) {
        document.getElementById("diagram2").src = "./images/1000.jpg";
    }
    if (value == 3) {
        document.getElementById("diagram2").src = "./images/2500.jpg";
    }
    if (value == 4) {
        document.getElementById("diagram2").src = "./images/5000.jpg";
    }
}


function calibrate() {
    var elems = document.getElementsByClassName("loadEnable");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
    }
    document.getElementById("planeb").disabled = false;
    document.getElementById("dottedb").disabled = false;
    document.getElementById("dashedb").disabled = false;
}
// function checksize() {
// }
function checksize() {
    document.getElementById("output").innerHTML = "14.2 ± 5 µm";
    console.log("typetjhis", val);
    if (val == 1) {
        var x = (20 / 15) * dist;
        x = Math.round(x, 2);
        document.getElementById("output1").innerHTML = x + "μm";
        console.log(x);
    }
    if (val == 2) {
        var x = (10 / 18) * dist;
        x = Math.round(x, 2);
        document.getElementById("output1").innerHTML = x + "μm";
        console.log(x);
    }
    if (val == 3) {
        var x = (10 / 43) * dist;
        x = Math.round(x, 2);
        document.getElementById("output1").innerHTML = x + "μm";
        console.log(x);
    }
    if (val == 4) {
        var x = (5 / 44) * dist;
        x = Math.round(x);
        document.getElementById("output1").innerHTML = x + "μm";
        console.log(x);
    }
    // if (val == 5) {
    //     var x = (5 / 74) * dist;
    //     x = Math.round(x);
    //     document.getElementById("output1").innerHTML = x+ "μm";
    //     console.log(x);
    // }
    if (val == 5) {
        var x = (2 / 43) * dist;
        x = Math.round(x);
        document.getElementById("output1").innerHTML = x + "μm";
        console.log(x);
    }
}
$(function () {
    preload(["./images/sem.gif"])
});