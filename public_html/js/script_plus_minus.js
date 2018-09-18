/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function powiekszFont()
{
    test.className = "powiekszFont";
}

function pomniejszFont()
{
    test.className = "pomniejszFont";
}


var test = document.getElementById("test");
var powieksz = document.getElementById("przycisk+");
var pomniejsz = document.getElementById("przycisk-");


powieksz.onclick = powiekszFont;


pomniejsz.onclick = pomniejszFont;

