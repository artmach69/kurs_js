/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var kursyProgramowania = document.getElementById("kursyProgramowania");

kursyProgramowania.childNodes[1].nextSibling.nodeValue = "coś nowego";
alert (kursyProgramowania.childNodes[1].textContent);