// ==UserScript==
// @name         Mediateca Editop
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://editop.prisasd.com/login/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */

 var fileref=document.createElement("link");  

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", "//fonts.googleapis.com/css?family=Noto+Sans:400,400italic,700");

document.getElementsByTagName("head")[0].appendChild(fileref);

/*
 var fileref2=document.createElement("link");  

fileref2.setAttribute("rel", "stylesheet");
fileref2.setAttribute("type", "text/css");
fileref2.setAttribute("href", "//sdes1lnx.prisacom.int:33608/psdmedia/media/top/tests/Test_mediateca/mediateca_style.css");
*/

 var fileref2=document.createElement("style");  

fileref2.innerHTML='.page-login:before {background-image: url("http://www.twitterevolutions.com/bgs/digital-space-twitter-background.jpg");}';

//fileref2.innerHTML='.page-login:before {background-image: url("//wallpaperstock.net/digital-space-wallpapers_29031_1280x800.jpg");}';





document.getElementsByTagName("head")[0].appendChild(fileref2);
