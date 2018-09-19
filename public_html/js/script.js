/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function ()

{
var email = document.querySelector("#email");

var submitFormButton = document.querySelector("#newsletter input [type = 'submit']");

submitFormButton.onclick = function(e)
{
  var tmp = document.querySelector("#tmp");
  e.preventDefault();
    tmp.innerHTML = email.value;  
    
    if (email.value === 'artmach@wp.pl')
    this.parentNode.submit();
};

};

