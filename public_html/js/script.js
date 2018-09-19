/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function wykonaj(event)
{
    var e = event || window.event;
     
    var tmp = document.querySelector("#tmp");
    
    tmp.innerHTML = e.clientX;
    
    
    var tooltip = document.querySelector("#tooltip");
     tooltip.style.display = "block";
     tooltip.style.left = e.clientX + 10 + "px";
     tooltip.style.top= e.clientY + +10 + "px";
    
    
}

window.onload = function ()

{
var test = document.querySelector("#test");

test.onmousemove = wykonaj;
};

