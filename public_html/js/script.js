/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function()
{
   var info = document.getElementById("info");
   
   var testButton = document.getElementById("myForm").testButton;
   
   //var pw = "aBc4fgaą";
   
   testButton.onclick = function ()
   {
   var pw = document.getElementById("myForm").pw.value;
   var regExpPattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,}/;
   info.innerHTML = regExpPattern.test(pw); 
   };
   
};
