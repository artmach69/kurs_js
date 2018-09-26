/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function()
{
   var info = document.getElementById("info");
   
   info.innerHTML = "To jest tekst, taki sobie tekst, być może tekst, a może \
już nie...";
    var tmp = "arkAdiUsz";
  tmp = tmp.charAt(0).toUpperCase() + tmp.slice(1).toLowerCase();
  
  var link = "http://www.videokurs.pl/video-kurs-php.html";
  
  var tmpString = "XHTML PHP MYSQL Javascript";
  
  var tmpArray = tmpString.split(' ');
  
    tmpArray[1] = "PDO";
    
    var resultString = tmpArray.join(',');
  
   info.innerHTML = resultString;
};
