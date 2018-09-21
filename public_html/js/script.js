/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function isNumber(valueToCheck)
{
    return !isNaN(valueToCheck);
}


window.onload = function()
{
    var poleLiczbowe = document.querySelector("#myForm").poleLiczbowe;
    var poleTekstowe = document.querySelector("#myForm").poleTekstowe;
    var submitMyForm = document.querySelector("#myForm").submitMyForm;
    
    
    var info = document.querySelector("#info");
    var i = 0;
    var isEverythingOK = true;
    
    
    poleLiczbowe.onkeyup = function(e)
    {
        
        var wpisanyZnak = e.which;
        
        if (isNumber (this.value))
        {
        this.style.backgroundColor = "green";
        info.innerHTML = "";
        isEverythingOK = true;
        
        }
        else
        {    
        e.preventDefault();
        this.style.backgroundColor = "red";
        info.innerHTML = "Niepoprawny format, pole przyjmuje tylko liczby";
        isEverythingOK = false;
        }     
     
    };
    submitMyForm.onclick = function (e)
    {
        if(isEverythingOK)
        e.preventDefault();
    }
};