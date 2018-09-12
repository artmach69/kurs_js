/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */






var produkty = [
    "PHP",
    "MySql",
    "JavaScript",
    "PDO",
    "SASS",
    "Grunt.js"
];

var tmp = ["mysql", "ajax"];
produkty [produkty.length] = "asasa";

produkty = produkty.concat(tmp);
document.getElementById("rezultat").innerHTML = produkty.join("<br>");
document.getElementById("rezultat").innerHTML += "<br>-------------------------------<br>";
document.getElementById("rezultat").innerHTML += produkty;
