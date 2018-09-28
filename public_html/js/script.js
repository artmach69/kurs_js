/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function()
{
   var info = document.getElementById("info");
   
   var pw = "abcd4efghi";
   
   var regExpPattern = /(?=.*[0-9]).{7,}/;
   info.innerHTML = regExpPattern.test(pw);
   
};
