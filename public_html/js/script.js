/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var x = document.createElement("p");

x.style.color = "red";
x.className = "test";
x.innerHTML = "<p id='testowy2'>nowy test<p>";

var body = document.querySelector("body");

var newChildNode = body.appendChild(x);

var testowy2 = document.getElementById("testowy2");
testowy2.style.color = "green";


var kursyProgramowania = document.getElementById("kursyProgramowania");
kursyProgramowania.parentNode.removeChild(kursyProgramowania);
