
var haunterData = "https://pokeapi.co/api/v2/pokemon/haunter/"
var haunterImg = document.getElementById("haunter")

fetch(haunterData)
    .then(response => response.json())
    .then(data => {
        haunterImg.setAttribute("src", data.sprites.front_default)
        console.log(data.sprites.front_default)
    })