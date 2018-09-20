/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var timeOutStoper;


function stopwatch(uchwytStopera, liczba)
{
    uchwytStopera.innerHTML = liczba--;
    
    if (liczba < 0 )
        return;
    
    timeOutStoper = setTimeout(function()
    {
      stopwatch(uchwytStopera, liczba);  
    }, 1000);
    return timeOutStoper;
}

window.onload = function()
{
    
    var przyciskOdpalStoper = document.querySelector("#przyciskOdpalStoper"); 
    var przyciskZatrzymajStoper = document.querySelector("#przyciskZatrzymajStoper");
    var uchwytStopera = document.querySelector("#uchwytStopera");
    
    
    przyciskOdpalStoper.onclick = function()
    {
        var poczatkowaWartosc = document.querySelector("#poczatkowaWartosc").value;
        uchwytStopera.innerHTML = poczatkowaWartosc;
       
        if (timeOutStoper)
            clearTimeout(timeOutStoper);
        
        timeOutStoper = stopwatch(uchwytStopera, poczatkowaWartosc);

    };
};
