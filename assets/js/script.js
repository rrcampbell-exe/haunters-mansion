
var haunterData = "https://pokeapi.co/api/v2/pokemon/haunter/"
var haunterImg = document.getElementById("haunter")

fetch(haunterData)
    .then(response => response.json())
    .then(data => {
        haunterImg.setAttribute("src", data.sprites.front_default)
        console.log(data.sprites.front_default)
    })

// ANIMATIONS

function haunterHover() {
    $("#haunter").effect("shake", {times:3, direction:"up", distance:5}, 9000)
    haunterHover()
}

// RUN ON PAGE LOAD
setTimeout(haunterHover, 100)