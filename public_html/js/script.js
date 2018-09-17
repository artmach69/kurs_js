/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var tabliczkaMnozenia = "<table>";

for (var i=1; i <= 15; i++)
{
    tabliczkaMnozenia += "<tr>";
    
    for (var j = 1; j<=10; j++)
    
    tabliczkaMnozenia += "<td>" + i * j + "</td>";
    
    tabliczkaMnozenia += "</tr>";
    
    
}
tabliczkaMnozenia += "</table>";

var rezultat = document.getElementById("rezultat");

rezultat.innerHTML = tabliczkaMnozenia;