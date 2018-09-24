/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



window.onload = function()
{
    var myForm = document.querySelector("#myForm");
    var submitButton = document.querySelector("#myForm").submitButton;
    
    
    var info = document.querySelector("#info");

    submitButton.onclick = function (e)
    {
        var tmpString = "";
        for(var i=1; i < myForm.nazwaKursu.length; i++)
        {
        if (myForm.nazwaKursu[i].checked)
        tmpString += myForm.nazwaKursu[i].value;
        };
        info.innerHTML += tmpString + "<br>";
        
        e.preventDefault();
    };
    
};