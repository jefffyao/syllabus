console.log(hello);
var a = document.getElementById('projects1');
var b = document.getElementById('schedule1');
var c = document.getElementById('projects1');
var d = document.getElementById('resources1');
var e = document.getElementById('img1');
var f = document.getElementById('img2');
var g = document.getElementById('img3');
var h = document.getElementById('img4');
var i = document.getElementById('img5');


function linkText(a) {
  document.getElementById('projects1').style.color = "transparent";
  document.getElementById('resources1').style.color = "transparent";
  document.getElementById('schedule1').style.color = "transparent";
  document.getElementById('coursedes1').style.color = "black";
  document.getElementById('a').style.color = "rgb(237,103,219)";
  document.getElementById('b').style = "pink";
  document.getElementById('c').style = "pink";
  document.getElementById('d').style = "pink";
  document.body.scrollTop = document.documentElement.scrollTop = 0;

}

function linkText1(b) {
  document.getElementById('projects1').style.color = "transparent";
  document.getElementById('resources1').style.color = "transparent";
  document.getElementById('schedule1').style.color = "black";
  document.getElementById('coursedes1').style.color = "transparent";
  document.getElementById('a').style = "pink";
  document.getElementById('b').style.color = "rgb(237,103,219)";
  document.getElementById('c').style = "pink";
  document.getElementById('d').style = "pink";
  document.body.scrollTop = document.documentElement.scrollTop = 0;

}
function linkText2(c) {
  document.getElementById('projects1').style.color = "black";
  document.getElementById('resources1').style.color = "transparent";
  document.getElementById('schedule1').style.color = "transparent";
  document.getElementById('coursedes1').style.color = "transparent";
  document.getElementById('a').style = "pink";
  document.getElementById('b').style = "pink";
  document.getElementById('c').style.color = "rgb(237,103,219)";
  document.getElementById('d').style = "pink";
  document.getElementById('box1').style.display = "block";
  document.getElementById('box2').style.display = "block";
  document.getElementById('box3').style.display = "block";
  document.getElementById('box4').style.display = "block";
  document.getElementById('box5').style.display = "block";
  document.body.scrollTop = document.documentElement.scrollTop = 0;

}
function linkText3(d) {
  document.getElementById('projects1').style.color = "transparent";
  document.getElementById('resources1').style.color = "black";
  document.getElementById('schedule1').style.color = "transparent";
  document.getElementById('coursedes1').style.color = "transparent";
  document.getElementById('a').style = "pink";
  document.getElementById('b').style = "pink";
  document.getElementById('c').style = "pink";
  document.getElementById('d').style.color = "rgb(237,103,219)";
  document.body.scrollTop = document.documentElement.scrollTop = 0;

}
function showimg1(e)
 {document.getElementById('img1').style.display = "block";
 document.getElementById('caption1').style.color = "black";
}


function hideimg1(e){
    document.getElementById('img1').style.display = "none";
    document.getElementById('caption1').style.color = "transparent";

}


function showimg2(f)
 {document.getElementById('img2').style.display = "block";
 document.getElementById('caption2').style.color = "black";
}

function hideimg2(f){
    document.getElementById('img2').style.display = "none";
    document.getElementById('caption2').style.color = "transparent";


}

function showimg3(g)
 {document.getElementById('img3').style.display = "block";
 document.getElementById('caption3').style.color = "black";

}

function hideimg3(g){
    document.getElementById('img1').style.display = "none";
    document.getElementById('img2').style.display = "none";
    document.getElementById('img3').style.display = "none";
    document.getElementById('img4').style.display = "none";
    document.getElementById('img5').style.display = "none";
    document.getElementById('caption3').style.color = "transparent";

}

function showimg4(h)
 {document.getElementById('img4').style.display = "block";
 document.getElementById('caption4').style.color = "black";

}

function hideimg4(h){
  document.getElementById('img1').style.display = "none";
    document.getElementById('img2').style.display = "none";
    document.getElementById('img3').style.display = "none";
    document.getElementById('img4').style.display = "none";
    document.getElementById('img5').style.display = "none";
    document.getElementById('caption4').style.color = "transparent";

}

function showimg5(i)
 {document.getElementById('img5').style.display = "block";
 document.getElementById('caption5').style.color = "black";

}


function hideimg5(i){
  document.getElementById('img1').style.display = "none";
    document.getElementById('img2').style.display = "none";
    document.getElementById('img3').style.display = "none";
    document.getElementById('img4').style.display = "none";
    document.getElementById('img5').style.display = "none";
    document.getElementById('caption5').style.color = "transparent";

}
