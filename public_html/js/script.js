/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function()
{
   var myForm = document.getElementById("myForm");
   var submitButton = document.getElementById("myForm").submitButton;
   
   var info = document.getElementById("info");
   
   submitButton.onclick = function(e)
   {
       var tmpString = "";
       for (var i = 0; i < myForm.nazwaKursu.length; i++)
       {           
           if (myForm.nazwaKursu[i].checked)
             tmpString += myForm.nazwaKursu[i].value + " ";       
       }
       
       info.innerHTML += tmpString + "<br>";
       
       e.preventDefault();
    
   };
    
    for (var i = 0; i < myForm.akceptacjaRegulaminu.length; i++)
    {
        myForm.akceptacjaRegulaminu[i].onclick = function() 
        {
           submitButton.disabled = this.value === "true"; 
        };
    }    
  
      
   };
