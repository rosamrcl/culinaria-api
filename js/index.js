const apiKey = "eea36371"
const frmPesquisa = document.querySelector("form");
frmPesquisa.onsubmit= (ev) => {
    ev.preventDefault();
    const pesquisa = document.querySelector(".pesquisa").value;
    if (pesquisa==""){
        alert ('Preencha o campo!');
        return
    }
    fetch (`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
        .then(result => result.json() )
        .then(json => carregaLista(json));

}
    const carregaLista = (json) =>{
        const lista = document.querySelector(".lista");
                
        if (json.Response=='False'){
            alert('Nenhum filme encontrado');
            return
        }
        
        lista.innerHTML ="";
        json.Search.forEach(element => {
            

           let item = document.createElement("div");
            item.classList.add("item");

            item.innerHTML =`<img src="${element.Poster}"/> <h2>${element.Title}</>`
            lista.appendChild(item);
            

            
        });

    }

    // https://www.omdbapi.com/