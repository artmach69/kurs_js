/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getMonthFromNumber(monthNumber)
{
 var months = ["Styczeń", "Luty", "Marzec", "Kwieceiń", "Maj", "Czerwiec",
               "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", 
               "Grudzień"]; 
           
    return months[monthNumber];
}

function getDayFromNumber(dayNumber)
{
 var months = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota",
               "Niedziela"]; 
           
    return months[dayNumber];
}

window.onload = function()
{
   var info = document.getElementById("info");
   
   var dzis = new Date(); 
   
   //var jutro = new Date(dzis.getTime() + 1000*60*60*24);
   //var jutro = new Date(dzis.getFullYear(), dzis.getMonth(), dzis.getDate() +1);
   var jutro = new Date("2018-10-01");
   var miesiacPL = getMonthFromNumber(jutro.getMonth());
   var dzienPL = getDayFromNumber(jutro.getDay());
   
   info.innerHTML = dzienPL + " " + miesiacPL;
           
            //dzis.getDate() + "/" + (dzis.getMonth()+1) + "/" + dzis.getFullYear(); 
   
   
};
