/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createEvent (obj, eventName, functionToInvoke)
{
    if (document.addEventListener)
        obj.addEventListener(eventName, functionToInvoke);
    else
        obj.attachEvent("on", eventName, functionToInvoke);
}

function zmienKolor()
{
    this.className = "zmienKolor";
}

function zmienKolor2()
{
    this.className = "zmienKolor2";
}

function powiekszCzcionke ()
{
 
    var fontSize = parseInt(window.getComputedStyle(this).fontSize);
    this.style.fontSize = (++fontSize) + "px";
}

window.onload = function ()

{
var test = document.querySelector("#test");
var stop = document.querySelector("#stop");
  
    createEvent(test, "mouseover", zmienKolor);
    createEvent(test, "mouseover", powiekszCzcionke);
    
    
    //test.addEventListener("mouseover", zmienKolor);
    //test.addEventListener("mouseover", powiekszCzcionke);
    
    
    stop.addEventListener("click", function ()
    {
    test.removeEventListener("mouseover", powiekszCzcionke);    
    });
   
};

