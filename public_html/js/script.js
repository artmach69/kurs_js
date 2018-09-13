/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */






var kursyProgramowania = [
    "C++",
    "Java",
    "C#",
    "Pascal"
];

var rezultat = document.getElementById("rezultat");

/*
var i = 125;

while(i<kursProgramowania.length)
    
    {
        rezultat.innerHTML += kursProgramowania[i]+"<br>";
        i++;
    }
  */  
   var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");
   
   var i=0;
   while (i < kursyProgramowania.length)
   {
   if (kursyProgramowania[i].innerHTML === "C++")
       kursyProgramowania[i].innerHTML += "hit";
   else
       kursyProgramowania[i].innerHTML += "promo";
   i++;
   }
 /*  do
   {
       alert (i);
       i++;
   }while (i<5);
   */