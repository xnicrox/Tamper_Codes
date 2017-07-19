// ==UserScript==
// @name         PLaySer replazar iframe
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.es/?gfe_rd=cr&ei=30xhVpDgF8Wp8wfl25SoBQ&gws_rd=ssl
// @grant        none
// @include      http://play.cadenaser.com/*
// ==/UserScript==
/* jshint -W097 */

//culo=true;
//alert (">>>>",culo);

/*

var time = setInterval(function(){
    
  console.log("length>>>",document.getElementsByTagName('script').length);
    
  var code = document.getElementsByTagName('script').length;

    for (i = 0; i < code; i++) {
        
    console.log(i,"-->",document.getElementsByTagName('script')[i].src);
        
        var scriptSRC=document.getElementsByTagName('script')[i].src;
        
        if(scriptSRC.indexOf("SimpleMediaPlayer.min.js")>0){
           
            
            var list=document.getElementsByTagName('script')[i];
            
            var head=document.getElementsByTagName('head')[0];
            
            console.log(">ok=",i," list>",list);
            
            head.removeChild(list);
            
            clearInterval(time);
            
            break;
            
        }
}
    
},10);

*/

   var tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.async = false;
            tag.src = "http://10.90.1.61:33608/psdmedia/media/simple/js/SimpleMediaPlayer.min.js";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 
            


// Your code here...