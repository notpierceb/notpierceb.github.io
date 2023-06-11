
// <![CDATA[
var speed=100; // speed of flirting, lower is faster

/****************************
* Flirty Texy Effect        *
*(c)2003-6 mf2fm web-design *
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var flitxt;
var flipos=0;
var flidir=1;

window.onload=function() { if (document.getElementById) {
  var flirty=document.getElementById("flirt");
  flitxt=flirty.firstChild.nodeValue;
  flitxt=String.fromCharCode(160)+flitxt+String.fromCharCode(160);
  while (flirty.childNodes.length) flirty.removeChild(flirty.childNodes[0]);
  for (var i=0; i<flitxt.length; i++) {
    var fliri=document.createElement("span");
    fliri.setAttribute("id", "flir"+i);
    fliri.appendChild(document.createTextNode(flitxt.charAt(i)));
    flirty.appendChild(fliri);
  }
  flitim=setInterval("flaunt()", speed);
}}

function flaunt() {
  flipos+=flidir;
  if (flipos>flitxt.length || flipos<-flitxt.length) {
    flipos-=flidir;
    if (Math.random()<0.25) flidir=-flidir;
    if (Math.random()<0.25) flipos=-flipos;
  }
  else if (flipos==flidir && Math.random()<0.925) {
    flipos-=flidir;
    flidir=-flidir;
  }
  for (var i=0; i<flitxt.length; i++) {
    if (flipos+i>-1 && flipos+i<flitxt.length) {
      var flirme=document.getElementById("flir"+i);
      var flicha=flitxt.charAt(flipos+i);
      flirme.firstChild.nodeValue=flicha;
    }
  }
}
// ]]>
