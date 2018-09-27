/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function()
{
   var info = document.getElementById("info");
   
   var indeksy = "A-56 B-12 K-51 A-53 A45 A#56 A.67";
   
   var imie = "ZZarkaa";
   
   var result = indeksy.match(/A\.?\d{1,}/g);
           //indeksy.match(/A\.?[0-9]{1,}/g);
           
           
 var d = "AlaArkadiusz";
 var e =d.replace(/(A)(l)(a)/gi, "$3$2$1");
   info.innerHTML = e;
   
};
