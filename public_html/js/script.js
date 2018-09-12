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

var liczby = [
    2,3,56,89,11
    ];


//produkty = produkty.concat(tmp);
document.getElementById("rezultat").innerHTML = produkty.sort();
document.getElementById("rezultat").innerHTML = liczby.sort(function (a,b) {return a-b});
document.getElementById("rezultat").innerHTML += "<br>-------------------------------<br>";
document.getElementById("rezultat").innerHTML += produkty;
