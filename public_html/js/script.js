/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




window.onload = function()
{
    var poleLiczbowe = document.querySelector("#myForm").poleLiczbowe;
    var poleTekstowe = document.querySelector("#myForm").poleTekstowe;
    
    
    var info = document.querySelector("#info");
    var i = 0;
    poleLiczbowe.onkeypress = function(e)
    {
        info.innerHTML = e.which;
    };
};