/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function Clock(elementHandler)
{
   this.elementHandler = elementHandler; 
   this.actualDate = new Date();
   this.start = function()
   {
      this.updateElementHandlerContent();
       var self = this;
       setInterval(function(){ self.addSecond();self.updateElementHandlerContent();}, 1000);
      // this.elementHandler.innerHTML = "a";
   };
   this.addSecond = function()
   {
       this.actualDate = new Date();
   };
   this.updateElementHandlerContent = function()
   {
      this.elementHandler.innerHTML = this.getFormattedDate(); 
   };
   this.getFormattedDate = function()
   {
      var hours = this.actualDate.getHours(); 
      var minutes = this.actualDate.getMinutes(); 
      var seconds = this.actualDate.getSeconds();
      
      var suffix = "";
      if(hours < 12)
          suffix = "AM";
      else
          suffix = "PM";

      return hours + ":" + minutes + ":" + seconds + " " + suffix;
   };
}

window.onload = function()
{
   var info = document.getElementById("info");
   var clock = new Clock(info);
   clock.start();
  
   
};
