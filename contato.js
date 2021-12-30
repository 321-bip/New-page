function mensagemUsuario(){

    let nomeContato = document.getElementById("capitura").elements[1].value
    alert(`${nomeContato} Email Enviado com susesso!!!!`);
}
   document.getElementById("area-enviar").addEventListener("click",redireciona)
              
function redireciona(){

    let link = "https://321-bip.github.io/New-page/"
    let input4 = document.getElementById("capitura").elements[4]
        input4.setAttribute("value",link)
        mensagemUsuario() 
}   
    