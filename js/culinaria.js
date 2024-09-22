https://api.edamam.com/doc/open-api/recipe-search-v2.json

const key = "fa9d9fecb1265b2df558781cb2a77ef0"

//dados = json
function dadosTela(dados){
    const caixa_media = document.querySelector(".caixa-media");
    
    let city = document.createElement("h2");
    let temperatura = document.createElement("p");
    city.innerHTML="Tempo em "+dados.name;
    temperatura.innerHTML="Temperatura: " + Math.floor(dados.main.temp-273.15)+" ºC"
    
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
    const dados =await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&unit=metric`).then(response=>response.json())
    dadosTela(dados)
     

}


function clicknoBotao(){
    const cidade=document.querySelector(".cidade").value
    buscarCidade(cidade)
}

buscarCidade('Maceió')

