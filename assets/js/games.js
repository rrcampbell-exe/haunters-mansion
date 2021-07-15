// DISPLAY FUNCTIONS

var animateObj = {
    shake: "shake",
    bounce: "bounce",
    drop: "drop",
    explode: "explode",
    puff: "puff",
    slide: "slide"
}

// remove container
function titleContainerRemove() {
    var containerEl = document.querySelector(".title-container")
    containerEl.remove();
}

// select random animation

// let animation = function (animateObj) {
//     var keys = Object.keys(obj);
//     return obj[keys[ keys.length * Math.random() << 0]];
// };

// function animateRandom() {
//     let animation = Math.floor(Math.random * animateObj.length)
//     console.log(animation)
// }

// animateRandom()

// INDIVIDUAL GAMES

// GASTLY MINI-GAME

let mainContentEl = document.querySelector(".main")
let gastlyScore = document.querySelector("#gastly-score")

// display header
function displayGastlyScoreboard () {
    $("#gastly-scoreboard").css("display", "flex")
}

// gastly timer
timer = 30;
function gastlyTimer() {
    document.getElementById("timer").innerHTML = "Timer: " + timer;
    timer--;
    if (timer < 0) {
        mainContentEl.remove();
        gastlyScoreFinal();
    }
    else {
        setTimeout(gastlyTimer, 1000);
    }
}

// gastly scorekeeping
var gastlyObj = {
    score: 0
}

// gastly game function
function gastlyGame() {

    // source code: https://stackoverflow.com/questions/55668801/how-to-make-an-image-appear-on-a-random-position-onclick

    var gastlyImg = document.querySelector(".gastly")

    if (gastlyImg) {
        gastlyImg.remove();
    } else {
        var img = document.createElement("img");
        img.className = "gastly"
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png";
        img.style.height = "22vh";
        img.style.width = img.style.height;
        img.addEventListener("click", () => {
            gastlyObj.score = gastlyObj.score + 1
            gastlyScore.textContent = gastlyObj.score
            img.remove();
        });
        
        // set the position
        img.style.position = 'absolute';
        img.style.top = (document.body.clientHeight - 200) * Math.random() + 'px';
        img.style.left = (document.body.clientWidth - 200) * Math.random() + 'px';

        mainContentEl.append(img);
        $(".gastly")
        .effect("shake", {times: Math.ceil(Math.random() * 3), distance: (Math.ceil(Math.random) * 1000) + 5}, 1000)
    }

    setTimeout(gastlyGame, ((Math.random() * 1000) + 200));

}

function gastlyScoreFinal() {
    $("#gastly-scoreboard").css("display", "none")
    alert("Your score was " + gastlyObj.score + "!")
}

// HAUNTER MINI-GAME ONE
$(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
  } );

function assignPokeImages() {
    for (let i = 0; i < 12; i++) {
        let randomPoke = Math.floor(Math.random() * 152)
        let pokeApi = `https://pokeapi.co/api/v2/pokemon/${randomPoke}/`
        fetch(pokeApi)
            .then(res => res.json())
            .then(data => {
                let pokeImgChoice = data.sprites.front_default
                let imgLocation = document.querySelectorAll(".poke-grid-image")
                imgLocation.forEach(node => node.src = pokeImgChoice)
            })
    }  
}


function haunterGame() {
    $(".haunter-grid-container").css("display", "flex")
    
// get 12 randomly selected pokemon images, arrange them in order
    assignPokeImages();

}  
