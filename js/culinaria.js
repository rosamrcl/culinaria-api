

//dados = json
function dadosTela(dados){
    console.log(dados)
    const caixa_media = document.querySelector(".caixa-media");
    
    let receita = document.createElement("h2");
    receita.innerHTML=dados.receita;
    let imagem=dados.link_imagem;
    imagem.innerHTML=dados.link_imagem;
    
    let caixa_menor = document.createElement("div");
    let tipo = document.createElement("p");
    let ingredientes = document.createElement("p");
    let preparo = document.createElement("p");
    
    caixa_menor.setAttribute("class","caixa-menor");
    tipo.innerHTML=dados.tipo;
    ingredientes.innerHTML=dados.ingradientes;
    preparo.innerHTML=dados.modo_preparo;
    
    
    
    
    
    
    caixa_menor.appendChild(receita);
    caixa_menor.appendChild(tipo)
    caixa_menor.appendChild(ingredientes)
    caixa_media.appendChild(preparo)
   

   
    
}

    
async function buscarReceita(){
    
    const dados = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api-receitas-pi.vercel.app/receitas/todas')}`)
                        .then((response) => response.json())
                        .then((data) => console.log(data.contents))
    console.log(dados)
    
}


function clicknoBotao(){
    const receita=document.querySelector(".receita").value
    buscarReceita(receita)
}

buscarReceita()
