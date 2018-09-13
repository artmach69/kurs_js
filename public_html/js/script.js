/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




  var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");
  
  for (var i=0; i < kursyProgramowania.length; i++)
  {
    if (i % 2 !==0)
    kursyProgramowania[i].innerHTML = "parzysty: " + kursyProgramowania[i].innerHTML;
else
    continue;
  }

for (var i = 0; i < 6; i++)
{
    if (i===4)
        break;
    alert(i);
}