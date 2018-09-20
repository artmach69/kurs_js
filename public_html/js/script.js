/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Stopwatch(uchwytStopera)
{
  this.uchwytStopera = uchwytStopera;
  this.poczatkowaWartosc;
  this.timeOutRef = undefined;
  this.odpal = function (poczatkowaWartosc)
  {
     this.poczatkowaWartosc = poczatkowaWartosc;
     if (this.timeOutRef)
         this.zatrzymaj();
  
     this.startStoper();
  };
  
  this.startStoper = function()
  {
      if (this.poczatkowaWartosc < 0)
          return;
      
      this.uchwytStopera.innerHTML = this.poczatkowaWartosc--;
      
      var self = this;
      
      this.timeOutRef = setTimeout(function()
      {
          self.startStoper();
      }, 1000);
  };
  
  this.zatrzymaj = function ()
  {
      clearTimeOut(this.TimeOutRef);
  };
  this.kontynuuj = function ()
  {
      this.startStoper();
  };
}

window.onload = function()
{    
    var przyciskOdpalStoper = document.querySelector("#przyciskOdpalStoper"); 
    var przyciskZatrzymajStoper = document.querySelector("#przyciskZatrzymajStoper");
    var przyciskKontynuujStoper = document.querySelector("#przyciskKontynuujStoper");
    var uchwytStopera = document.querySelector("#uchwytStopera");
    
    var stoper = new Stopwatch(uchwytStopera);
    
 przyciskOdpalStoper.onclick = function ()
 {
     var poczatkowaWartosc = document.querySelector("#poczatkowaWartosc").value;
     stoper.odpal(poczatkowaWartosc);
 };
 
 przyciskZatrzymajStoper.onclick = function ()
 {
     stoper.zatrzymaj();
 };
 
  przyciskKontynuujStoper.onclick = function ()
 {
     stoper.kontynuuj();
 };

};