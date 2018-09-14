/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addNumbers()
{
  var suma=0;
   /* for (i=0; i < arguments.length; i++)
    {
        suma += arguments[i];
    }
    return suma;
*/
    for (var property in arguments)
    {
        suma += arguments[property];
    }
return suma
}

var suma = addNumbers(4, 8, 12, 0);
alert(suma);
