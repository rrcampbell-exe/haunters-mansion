
var haunterData = "https://pokeapi.co/api/v2/pokemon/haunter/"
var haunterImg = document.getElementById("haunter")

fetch(haunterData)
    .then(response => response.json())
    .then(data => {
        haunterImg.setAttribute("src", data.sprites.front_default)
    })

// ANIMATIONS

function haunterHover() {
    $("#haunter").effect("shake", {times:3, direction:"up", distance:5}, 9000)
    haunterHover()
}

function titleFade() {
    $(document).ready(function() {
        $(".title-display").fadeIn(3000)
        .css("display", "flex")
        $("#haunter").fadeIn(1500)
        .css("display")
    })
}

function startButtonShake() {
    $("#start-btn").effect("shake", {times: 1, distance:3}, 1000)
    setTimeout(startButtonShake, 3000)
}

// EVENT LISTENERS
let startBtnEl = document.querySelector("#start-btn")
startBtnEl.addEventListener("click", () => {
    gastlyGame();
    containerRemove();
    displayGastlyScoreboard();
    gastlyTimer();
});

// RUN ON PAGE LOAD
setTimeout(haunterHover, 100)
setTimeout(startButtonShake, 3000)
titleFade();