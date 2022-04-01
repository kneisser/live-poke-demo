window.onload = () => {
    document.querySelector("#submit").addEventListener("click", getNewPokemon);

}

function getNewPokemon() {
    
    let pokemonName = document.querySelector("#pokemon-input").value;
    getPokemon(pokemonName).then(resultJson => {
        populateHTML(resultJson);
       

    });
}

async function getPokemon(pokemonName) {
    let endpoint = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    let req = new Request(endpoint);
    let response = await fetch(req);
    return response.json();
}

function populateHTML(pkmJson){
    let header = document.querySelector("#pokemon-name");
    let img = document.querySelector("#pokemon-sprite");

    header.innerHTML = getPokemonName(pkmJson);
    img.setAttribute("src", getPokemonSprite(pkmJson));
}

function getPokemonName(pkmJson) {
return capitalize (pkmJson.name);
}

function getPokemonSprite(pkmJson) {
return pkmJson.sprites.front_shiny;
}

function capitalize(string) {
    let strat = string.substring(0,1).toUpperCase();
    let body = string.substring(1).toLowerCase();
    return strat + body
}