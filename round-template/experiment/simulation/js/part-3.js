function load3() {

    document.getElementById("load3").disabled = true;
    document.getElementById("diagram").src = "./images/se-gif.gif";
    document.getElementById("diagram2").onload = function () {
        canvas.width = $("#diagram2").width();
        canvas.height = $("#diagram2").height();
        // console.log(modeVar);
    }
    setTimeout(() => {
        document.getElementById("diagram2").src = "./images/bse.jpg";
        document.getElementById("calBut3").disabled = false;
        document.getElementById("imgblur3").disabled = false;
        document.getElementById("clight3").disabled = false;
    }, 12000);

}

function editImage3() {
    var obj = document.getElementById("diagram2");
    obj.style["filter"] = "contrast(" + document.getElementById("clight3").value + ") blur(" + document.getElementById("imgblur3").value + "px)";
}
function Contrast3() {
    var v = document.getElementById("diagram2");
    v.style["filter"] = "contrast(" + document.getElementById("clight3").value + ") blur(" + document.getElementById("imgblur3").value + "px)";
}

var imgArray = new Array();
var valueArr = new Array();
var pointsArr = new Array();
// var idArr = new Array();
var idArr = ["n0", "n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "n10", "n11", "n12", "n13", "n14", "n15", "n16", "n17", "n18",
    "n19", "n20", "n21", "n22", "n23", "n24", "n25", "n26", "n27", "n28", "n29", "n30"];

imgArray[0] = new Image();
imgArray[0].src = 'images/g1.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/g2.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/g3.png';

imgArray[3] = new Image();
imgArray[3].src = 'images/g4.png';

imgArray[4] = new Image();
imgArray[4].src = 'images/g5.png';

imgArray[5] = new Image();
imgArray[5].src = 'images/g6.png';

imgArray[6] = new Image();
imgArray[6].src = 'images/g7.png';

imgArray[7] = new Image();
imgArray[7].src = 'images/g8.png';

var imgVar;


function calibrate3() {

    imgVar = Math.floor(Math.random() * 9);

    document.getElementById("modeImage").src = imgArray[imgVar].src;
    document.getElementById("modeImage").style.display = "block";
    document.getElementById("imgblur3").disabled = true;
    document.getElementById("clight3").disabled = true;
}
var k = new Array();
var j = 25;
function NextRead() {

    imgVar = Math.floor(Math.random() * 9);
    document.getElementById("modeImage").src = imgArray[imgVar].src;
    document.getElementById("reading").value = 0;
    document.getElementById("s-read").disabled = false;
    document.getElementById("n-read").disabled = true;

}

function Submit3() {

    var x = document.getElementById("reading").value;
    var l = parseInt(x);
    if (l === 0) {
        alert("The value can't be zero.");
        return;
    }
    k.push(l);
    console.log(k);
    document.getElementById("n-read").disabled = false;
    document.getElementById("s-read").disabled = true;
    document.getElementById("reading").value = 0;

}

function CheckAns3() {
    var len = 25 * (k.length);
    var sum = k.reduce((a, b) => a + b, 0)
    console.log(sum);
    console.log(len);
    var Answer = (sum / len) * 100;
    console.log(Answer);
    Math.round(Answer);
    document.getElementById("answer3").innerHTML = Answer + "%";
}








// function createNewElement() {
//     imgVar = Math.floor(Math.random() * 9);
//     document.getElementById("modeImage").src = imgArray[imgVar].src;
//     document.getElementById("butCheck3").disabled = false;
//     document.getElementById("p3-name").value = '';
//     document.getElementById("p3-name").style.display = "block";
//     document.getElementById("ans-3").style.display = "block";

//     var x = 6;

//     x = document.getElementById("n" + k).value;

//     valueArr[k] = parseInt(x);

//     pointsArr[k] = j;

//     console.log(valueArr, pointsArr, idArr);

//     k++;

//     var txtNewInputBox = document.createElement('div');

//     j += 25;

//     // Then add the content (a new input box) of the element.

//     txtNewInputBox.innerHTML = "<input type='number' style='width: 3rem;' value='0' id='" + idArr[k] + "'> Total Points = " + j;

//     // Finally put it where it is supposed to appear.

//     document.getElementById("newElementId").appendChild(txtNewInputBox);
// }
// function checkAns3() {

//     document.getElementById("cor-ans-3").style.display = "block";

//     var last_element = pointsArr[pointsArr.length - 1];

//     console.log(last_element);

//     // Getting sum of numbers


//     var sumvalueArr = valueArr.reduce(function (a, b) {
//         return a + b;
//     }, 0);

//     console.log(sumvalueArr);

//     var ans = (sumvalueArr / last_element) * 100;

//     Math.round(ans);

//     console.log(ans);

//     document.getElementById("cor-ans-3").innerHTML = "<strong>Expected Answer : " + ans + "% (approx)";

// }