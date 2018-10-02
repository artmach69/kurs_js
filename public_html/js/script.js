/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Date.prototype.getMonthPL = function ()
{
 var months = ["Styczeń", "Luty", "Marzec", "Kwieceiń", "Maj", "Czerwiec",
               "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", 
               "Grudzień"]; 
           
    return months[this.getMonth()];
};

function getDayFromNumber(dayNumber)
{
 var months = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota",
               "Niedziela"]; 
           
    return months[dayNumber];
}

function ileCzasuMinelo(from, to)
{
    return  "s:"+(from - to)/1000 + "min:"+(from - to)/1000/60 + "h:"+(from - to)/1000/60/60 + "days:"+(from - to)/1000/60/60/24;
}

window.onload = function()
{
   var info = document.getElementById("info");
   
   var dzis = new Date();
   
  // dzis.setDate(dzis.getDate()+1);
   
   var jutro = new Date(dzis.getTime() + 1000*60*60*24);
   //var jutro = new Date(dzis.getFullYear(), dzis.getMonth(), dzis.getDate() +1);
   //var jutro = new Date("2018-10-01");
   //var miesiacPL = getMonthFromNumber(jutro.getMonth());
   //var dzienPL = getDayFromNumber(jutro.getDay());
   
   info.innerHTML = ileCzasuMinelo(jutro, dzis);
           
            //dzis.getDate() + "/" + (dzis.getMonth()+1) + "/" + dzis.getFullYear(); 
   
   
};
