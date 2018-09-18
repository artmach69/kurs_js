/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*function powiekszFont()
{
    test.className = "powiekszFont";
}

function pomniejszFont()
{
    test.className = "pomniejszFont";
}
*/

function powieksz2() {
    test.classList.append("")
    test.classList.remove("")
}

var size = 16;

function powiekszFont() {

 test.style.fontSize = ++size + 'px';

}

function pomniejszFont() {

 test.style.fontSize = --size + 'px';

}


var test = document.querySelector("#test");
var powieksz = document.querySelector("#enlarge");
var pomniejsz = document.querySelector("#decrease");


powieksz.onclick = powiekszFont;


pomniejsz.onclick = pomniejszFont;

