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
   
   testButton.onclick = function (e)
   {
   e.preventDefault ();
   var pw = document.getElementById("myForm").pw.value;
   var regExpPattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,}/;
   
   if (regExpPattern.test(pw))  
        document.getElementById("myForm").submit();
   else
       
       info.innerHTML = "Hasło jest za słabe"; 
   };
   
};
