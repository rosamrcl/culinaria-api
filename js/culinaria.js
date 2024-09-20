

//dados = json
function dadosTela(dados){
    const caixa_media = document.querySelector(".caixa-media");
    
    let receita = document.createElement("h2");
    let tipo = document.createElement("p");
    let ingredientes = document.createElement("p");
    let preparo = document.createElement("p");
    receita.innerHTML=dados.receita;
    tipo.innerHTML=dados.tipo;
    ingredientes.innerHTML=dados.ingradientes;
    preparo.innerHTML=dados.modo_preparo;
    
    let caixa_menor = document.createElement("div");
    let icone = document.createElement("img")
    caixa_menor.setAttribute("class","caixa-menor");
    icone.setAttribute("class","icone");
    icone.setAttribute("src", `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`);

    let previsao=document.createElement("p")
    let umidade=document.createElement("p")
    previsao.innerHTML=dados.weather[0].description
    umidade.innerHTML="Umidade: " + dados.main.humidity +"%"
    
    
    
    
    
    caixa_menor.appendChild(icone);
    caixa_menor.appendChild(previsao)
    caixa_menor.appendChild(umidade)
    caixa_media.appendChild(city)
    caixa_media.appendChild(temperatura)
    caixa_media.appendChild(caixa_menor)

    // document.querySelector(".city").innerHTML="Tempo em "+dados.name
    // document.querySelector(".temperatura").innerHTML= "Temperatura: " + Math.floor(dados.main.temp-273.15)+" ºC"
    // document.querySelector(".previsao").innerHTML=dados.weather[0].description
    // document.querySelector(".umid").innerHTML="Umidade: " + dados.main.humidity +"%"
    // document.querySelector(".icone").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}


async function buscarCidade(cidade){
    const dados =await fetch (`https://api-receitas-pi.vercel.app/receitas/todas`).then(response=>response.json())
    dadosTela(dados)
     

}


function clicknoBotao(){
    const cidade=document.querySelector(".cidade").value
    buscarCidade(cidade)
}

buscarCidade('Maceió')
// https://openweathermap.org/current#name