var modeVar;
function modeSel(mode, ele) {
    modeVar = mode;
    $(".mod").removeClass("active");
    $(ele).addClass("active");
    console.log(mode);
    document.getElementById("load1").disabled = false;



}
function editImage1() {
    var obj = document.getElementById("diagram2");
    obj.style["filter"] = "contrast(" + document.getElementById("clight1").value + ") blur(" + document.getElementById("imgblur1").value + "px)";
}
function Contrast1() {
    var v = document.getElementById("diagram2");
    v.style["filter"] = "contrast(" + document.getElementById("clight1").value + ") blur(" + document.getElementById("imgblur1").value + "px)";
}

function load1() {
    document.getElementById("se").disabled = true;
    document.getElementById("bse").disabled = true;
    document.getElementById("load1").disabled = true;
    if (modeVar === 1)
        document.getElementById("diagram").src = "./images/se-gif.gif";
    else
        document.getElementById("diagram").src = "./images/bse-gif.gif";
    document.getElementById("diagram2").onload = function () {
        canvas.width = $("#diagram2").width();
        canvas.height = $("#diagram2").height();
        console.log(modeVar);
    }
    var time;
    if (modeVar === 1) {
        time = 12000;
    }
    else {
        time = 12930;
    }
    setTimeout(() => {
        if (modeVar === 1)
            document.getElementById("diagram2").src = "./images/se.jpg";
        else
            document.getElementById("diagram2").src = "./images/bse.jpg";

    }, time);
    document.getElementById("imgblur1").disabled = false;
    document.getElementById("clight1").disabled = false;
    document.getElementById("calBut").disabled = false;
}

function calibrate1() {
    if (modeVar === 1) {
        document.getElementById("modeImage").src = "./images/se-layout.png";
        document.getElementById("modeImage").style.display = "block";
        document.getElementById("ModeLine").innerHTML = "Click on the buttons below corresponding to the points where you identify porosity on image.";

    }
    else {
        document.getElementById("modeImage").src = "./images/bse-layout.png";
        document.getElementById("modeImage").style.display = "block";
        document.getElementById("ModeLine").innerHTML = "Click on the buttons below corresponding to the points where you identify reinforcement on image.";

    }
    document.getElementById("imgblur1").disabled = true;
    document.getElementById("clight1").disabled = true;
    document.getElementById("calBut").disabled = true;
    var elems = document.getElementsByClassName("point");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
    }
    document.getElementById("butVerify").disabled = false;
    document.getElementById("butCheck").disabled = false;


}
var arrpoint1 = [0, 0, 0, 0, 0, 0, 0, 0];

function butClick(butVal, ele) {
    $(ele).addClass("active1");
    arrpoint1[butVal] = 1;
    console.log(arrpoint1);
}

function verify() {
    var count = 0;
    if (modeVar === 1) {
        var arrpoint = [0, 0, 1, 1, 0, 1, 0, 0];
    }
    else {
        var arrpoint = [1, 1, 0, 0, 1, 0, 0, 0];
    }
    for (var i = 0; i < 8; ++i) {
        if (arrpoint1[i] === arrpoint[i]) {
            count++;
        }
    }
    if (count === 8) {
        alert("Correct Answer");
    }
    else {
        $(".point").removeClass("active1");
        arrpoint1 = [0, 0, 0, 0, 0, 0, 0, 0];
        alert("Wrong Answer. Try Again!!")
    }
}
function checkAns() {
    if (modeVar === 1) {
        document.getElementById("Answer").innerHTML = "Porosity is present at the points C , D and F ";

    }
    else {
        document.getElementById("Answer").innerHTML = "Reinforcement is present at the points A , B and E. ";

    }

}