/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function()
{
   var myForm = document.getElementById("myForm");
   var info = document.getElementById("info");
  
myForm.videoKursy.selectedIndex = 3;
myForm.videoKursy.onchange = function()
{
  info.innerHTML = this.value;  
}

};
