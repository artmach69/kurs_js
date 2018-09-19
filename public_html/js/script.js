/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function ()

{
 var toTopButton = document.querySelector("#toTopButton");
 
 toTopButton.onclick = function()
 {
    window.scrollBy(0, 100); 
 };
};

