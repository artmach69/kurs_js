/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function wykonaj(event)
{
    var tmp = document.querySelector("#tmp");
    tmp.innerHTML = event;
}

window.onload = function ()

{
var test = document.querySelector("#test");

test.onmousemove = wykonaj;
};

