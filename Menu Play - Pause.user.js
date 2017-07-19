// ==UserScript==
// @name         Menu Play / Pause
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://elpais.com/pruebas/pablo/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */


window.tplib=true;

var cabecera=document.getElementById("cabecera");
var t = document.createTextNode("Play Video"); 
var r = document.createTextNode("Pause Video"); 

var BtPlay=document.createElement("BUTTON");
    BtPlay.id="playVideo";
    BtPlay.createTextNode="Play Video";

var BtPause=document.createElement("BUTTON");
    BtPause.id="playPause";
    BtPause.createTextNode="Pause Video";

    BtPlay.appendChild(t);
    BtPause.appendChild(r);

    cabecera.insertBefore(BtPlay, cabecera.firstChild);
    cabecera.insertBefore(BtPause, cabecera.firstChild);



     var fileref2=document.createElement("style");  


     fileref2.innerHTML="#playVideo  {font-family: Arial;color: #ffffff;font-size: 20px;background: #3498db;padding: 10px 20px 10px 20px;text-decoration: none; margin-right:10px}"+
                        "#playPause  {font-family: Arial;color: #ffffff;font-size: 20px;background: #3498db;padding: 10px 20px 10px 20px;text-decoration: none; margin-right: 10px;}";

     document.getElementsByTagName("head")[0].appendChild(fileref2);




    function accion(e) {

        console.log("accion:", e.target.id);

        switch(e.target.id){

            case 'playVideo':


                window.mediateca.play();


                break;

            case 'playPause':


                window.mediateca.pause();

                break;

        }
    }


    
    console.log(">>listener");
    playVideo.addEventListener('click',accion);
    playPause.addEventListener('click',accion); 





//window.mm_base="int"; //-- Integracion

//window.mm_base = 1; //-- Integracion

//window.mm_base = "pro"; //-- produccion


//window.mm_base="loc"; //--local


//window.mm_base="//127.127.0.0"; //--ip