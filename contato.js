function mensagemUsuario(){

    const nomeContato = document.getElementById("capitura").elements[1].value
        alert(`${nomeContato} Email Enviado com susesso!!!!`);
}
  
              
function redireciona(){

    const link = "https://321-bip.github.io/New-page/"
    const input4 = document.getElementById("capitura").elements[4]
        input4.setAttribute("value",link)
        mensagemUsuario() 
}

function eventos()
 {
    document.getElementById("area-enviar").addEventListener("click", redireciona)
 }

 

function man()
 {
    eventos()
 } 

 man()
    