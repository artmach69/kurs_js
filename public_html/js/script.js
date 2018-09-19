/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function ()

{
 var toTopButton = document.querySelector("#toTopButton");
 
 
    window.onscroll = function()
    {
       var test = document.querySelector("#test");
       var toTopButton = document.querySelector("#toTopButton");
       
       var yScrollAxis = window.pageYOffset;
       
        if (yScrollAxis > 300)
            toTopButton.style.display = "block";
        else
            toTopButton.style.display = "none";
       
       test.innerHTML = yScrollAxis;
    };
 
 toTopButton.onclick = function()
 {
    window.scrollBy(0, -1 * window.pageYOffset); 
 };
};

