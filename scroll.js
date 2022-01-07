
function percorerElemento()
 {
       const listaElementos = document.querySelectorAll('.link-sessao');
       listaElementos.forEach((elemento)=>{
       elemento.addEventListener('click', rolagemDaPagina)
     })
 }
  

function distaciaTop(elemento)
 {
   const id = elemento.getAttribute("href");
       return document.querySelector(id).offsetTop;
 }

function rolagemDaPagina(event){
          event.preventDefault();
    let topoDoElemento = distaciaTop(event.target) - 80;
        window.scroll(0,topoDoElemento)
         
} 
 percorerElemento()