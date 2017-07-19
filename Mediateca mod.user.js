// ==UserScript==
// @name         Mediateca mod
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://editop.prisasd.com/*
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

//fileref2.innerHTML='.page-login:before {background-image: url("http://sdes1lnx.prisacom.int:33608/psdmedia/media/top/tests/img/digital-space-twitter-background.jpg");}';


/**Definicion de estilos**/
fileref2.innerHTML=
    
    ".bg-white {color: #2781D5;background-color: #1a1a1a;}"+
    ".img-rounded{border-radius: 5px;border: 4px solid #242F35}"+
    ".site-navbar .container-fluid {background-color: #2E3539;}"+
    ".site-footer {background-color: #263238;border-top: 1px solid #242F35;}"+
    ".form-control { background-color: #242F35;}"+  
    ".bootstrap-tagsinput {background-color: #242F35;}"+
     ".site-navbar {background-image: url('http://sdes1lnx.prisacom.int:33608/psdmedia/media/top/tests/img/digital-space-twitter-background.jpg');}"+
    
      //Textos
      ".title {font-size: small;}"+
    
      //home
      ".page-login:before {background-image: url('http://sdes1lnx.prisacom.int:33608/psdmedia/media/top/tests/img/digital-space-twitter-background.jpg');}"+
      "body{background-color: #2E3539;}";



                   /*".page-content {background-color: white;}"*/

document.getElementsByTagName("head")[0].appendChild(fileref2);

