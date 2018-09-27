/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function()
{
   var info = document.getElementById("info");
   
   var indeksy = "A-56 B-12 K-51 A-53";
   
   var result = indeksy.match(/[0-9]{1,}/g);
   info.innerHTML = result;
   
};
