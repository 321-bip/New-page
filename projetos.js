
function eventos()
 {
    document.querySelectorAll(".link-projeto").forEach(function(elementoProjeto){
    elementoProjeto.addEventListener('click', removeFundoFrame);
    });
    
    document.querySelectorAll(".link-sessao").forEach(function(elementosessao){
    elementosessao.addEventListener('click', adicionaFundoFrame);
    })
 };
 
function removeFundoFrame()
  {
     let fundoIframe = document.getElementById("conteiner-iframe");
     let elementoIframe = document.getElementById("iframe-projetos")
         fundoIframe.removeAttribute("class")
         elementoIframe.style.display = "inline-block"
         
         return {fundoIframe, elementoIframe};
  }

function adicionaFundoFrame()
   {
     let {fundoIframe, elementoIframe} = removeFundoFrame();
          fundoIframe.setAttribute("class", "gif");
          elementoIframe.style.display = "none";
   }

function man()
   {
     eventos();
   }
   man();