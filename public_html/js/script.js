/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nazwaZmiennej = 2;
var vat = 20;
var obliczonyVat = (1 + vat * 1/100);
var cenaNettoJava = 39;
var cenaNettoAjax = 34;
var cenaBruttoJava = cenaNettoJava * obliczonyVat;

alert (cenaBruttoJava + " zł");

