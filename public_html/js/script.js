/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*var div = document.getElementById("test");
        
div.innerHTML = "To jest test";


var osoba = {
             imie: "Arek", 
             nazwisko: "Włodarczyk"
            };
            
alert (osoba.imie);  
div.innerHTML = osoba.nazwisko;
*/

function osoba(imie, nazwisko, wiek)
{
    this.name = imie;
    this.surname = nazwisko;
    this.age = wiek;
    this.toString = function ()
    {
        return this.name + " " + this.surname + " " + this.age;
    };
}
var x = new osoba("Arek", "Wlodarczyk", 25);
var y = new osoba("Artur", "Machowski", 49);

var div = document.getElementById("test");
div.innerHTML = x + "<br>" + y;

//osoba.imie = "Wiola";