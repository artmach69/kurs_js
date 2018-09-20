/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function movingImage(e, objToMove)
{
     objToMove.style.left = e.clientX - objToMove.width/2 + "px"; 
     objToMove.style.top = e.clientY - objToMove.height/2 + "px"; 
}

window.onload = function()

{
var wykrzyknik = document.querySelector("#wykrzyknik");

wykrzyknik.onmousedown = function()
{
    var self = this;
    document.onmousemove = function(e)
    {
     movingImage(e, self);
    }
};

wykrzyknik.onmouseup = function()
{
   document.onmousemove = null;
};

wykrzyknik.ondragstart = function(e)
{
    e.preventDefault();
};

};