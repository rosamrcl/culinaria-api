const key "b9d21be9b3msh5e7a0a5f0a4728dp1c8e44jsn2ef1347de548"

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
    
    const dados = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://api-receitas-pi.vercel.app/receitas/todas`)}`)
                        .then((response) => response.json())

    return dados.contents;
    
}


function clicknoBotao(){
    const receita=document.querySelector(".receita").value
    buscarReceita(receita)
}

buscarReceita()

// https://tasty.p.rapidapi.com/tips/list?from=0&size=30&id=3562
// https://rapidapi.com/apidojo/api/tasty

// 3131a2abd01245f6bc50804ec5638097
// https://apileague.com/apis/search-recipes-api/