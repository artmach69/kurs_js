/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


person = {
    imie: "Arek",
    nazwosko: "Włodarczyk",
    age: "26"
};

var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");
  
kursy = [
    "Java",
    "C++",
    "PHP"
];

//alert (person.imie + " " + person.nazwosko);
var wszystkieKursyWStringu = "";
for (var property in kursy)
{
    wszystkieKursyWStringu += kursy[property];
}
alert (wszystkieKursyWStringu);