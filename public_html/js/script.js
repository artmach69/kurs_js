/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function zmienKolor()
{
    this.className = "zmienKolor";
}

function zmienKolor1()
{
   this.className = "";
}
var test = document.getElementById("test");

test.onmouseover = zmienKolor;
test.onmouseout = zmienKolor1;
