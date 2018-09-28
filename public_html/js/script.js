/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function()
{
   var info = document.getElementById("info");
   
   var indeksy = "A-56 B-12 K-51 A-53 A45 A#56 A.67";
   
   var regExp = /A\.?\d{1,}/g;
   var row = "";
    var result = ""; 
           
    while (row = regExp.exec(indeksy))
    {
        result += row + " ";
    }
   
   var kodPocztowy = "32-700";
   
   var czyKodPocztowy = /[0-9]{2}-{0,1}[0-9]{3}/.test(kodPocztowy);
   
   info.innerHTML = czyKodPocztowy;
   
};
