/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var hi = function (type)
{
    if (type === "szef")
    return function (name)
    {
        alert ("Cześć szefie " + name + "!");
    };
    else
        return function (name)
    {
        alert ("Cześć" + name + "!");
    };
    
};

var zwroconafunkcja = hi ("szef"); 
zwroconafunkcja("Arek");
