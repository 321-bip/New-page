let pos = 1;
 
 function precaregar()
  {
    let imagem = document.getElementById("slide")
        imagem.setAttribute("class","img" + pos)
  }
 
 function slider()
  {
    precaregar() 
    if(pos < 7)
     {
       pos++
     }
    else
     {
       pos = 1
     }
}

function man()
 {
  setInterval(slider,1300)
 }
 man()