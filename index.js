async function buscarpersonagens(){
    
    let musica = document.getElementById("musica-dbz");
    if(musica){
        musica.play();
        musica.volume = 0.5;
    }

    let buscarpelonome = document.getElementById("name").value.toLowerCase()

    let url = "https://dragonball-api.com/api/characters?limit=200"

    let buscarapi = await fetch(url)

    let respostaapi = await buscarapi.json()

    let personagens = respostaapi.items

    let genero = document.querySelector('input[name=genero]:checked').value
    let raca = document.getElementById("race").value

    let alcountries = document.getElementById("todospersonagens")

    alcountries.innerHTML = ""

    for(let p of personagens){

        let nome = p.name.toLowerCase()

        if(buscarpelonome != "" && !nome.includes(buscarpelonome)){
            continue
        }

        if(genero != "ambos" && p.gender != genero){
            continue
        }

        if(raca != "" && p.race != raca){
            continue
        }

        alcountries.innerHTML += `
        <div class="data">
        <img src="${p.image}" width="150">
        <h3>NOME: ${p.name}</h3>
       <span class="badge">${p.race}</span>
        <p>GENERO: ${p.gender}</p>
        <p>MAXKI: ${p.maxKi}</p>
        </div>`
    }

}