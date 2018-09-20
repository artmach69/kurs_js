/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function stopwatch(uchwytStopera, liczba)
{
    uchwytStopera.innerHTML = --liczba;
    
    setTimeout(function()
    {
      stopwatch(uchwytStopera, liczba);  
    }, 1000);
}

window.onload = function()
{
    var poczatkowaWartosc = document.querySelector("#poczatkowaWartosc").value;
    var przyciskOdpalStoper = document.querySelector("#przyciskOdpalStoper"); 
    var przyciskZatrzymajStoper = document.querySelector("#przyciskZatrzymajStoper");
    var uchwytStopera = document.querySelector("#uchwytStopera");
    
    
    przyciskOdpalStoper.onclick = function()
    {
        uchwytStopera.innerHTML = poczatkowaWartosc;
       setInterval(function()
       {
           
       stopwatch(uchwytStopera, poczatkowaWartosc);
       
       }, 1000);
    };
};
