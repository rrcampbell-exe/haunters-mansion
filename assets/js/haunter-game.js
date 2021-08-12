// DISPLAY FUNCTIONS
// remove instructions container
function haunterInstructionsRemove() {
    $(".gastly-score-report").fadeOut(1500);
}

// display haunter game container
function haunterGameDisplay() {
    $(".haunter-grid-container").fadeIn(1500);
    $(".haunter-grid-container").css("display", "flex");
}

var gameImgArray = []
var reorderImgArray = []

$(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();

    // for saving the sorted images after click and drag: https://stackoverflow.com/questions/5320194/get-order-of-list-items-in-a-jquery-sortable-list-after-resort

  } );

function assignPokeImages() {
    for (let i = 0; i < 9; i++) {
        let randomPoke = Math.ceil(Math.random() * 151)
        let pokeApi = `https://pokeapi.co/api/v2/pokemon/${randomPoke}/`
        fetch(pokeApi)
            .then(res => res.json())
            .then(data => {
                let pokeImgChoice = data.sprites.front_default
                gameImgArray.push(pokeImgChoice)
                reorderImgArray.push(pokeImgChoice)
                function assignImg() {
                    document.getElementById(parseInt(i)).src = gameImgArray[i]
                }
                
                shufflePokeImages(reorderImgArray)
            })
        }  
        console.log(gameImgArray);
}

function shufflePokeImages(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining image
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current image
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }

    displayShuffleImg(array); // change this so displayShuffleImg runs not immediately, but on an eventListener (a click of some kind). This will help you test the actual shuffling function.
    return array
}

function displayShuffleImg() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(parseInt(i)).src = reorderImgArray[i]
    }
}

console.log(gameImgArray);
console.log(reorderImgArray);

function compareImgArrays () {
    if (gameImgArray == reorderImgArray) {
        console.log("User wins!")
    } else {
        console.log("User fails!")
    }
}


function haunterGame() {
    haunterInstructionsRemove();
    setTimeout(haunterGameDisplay, 1500);
    
// get 9 randomly selected pokemon images, arrange them in order
    setTimeout(assignPokeImages, 1500)
}  

let haunterBtnEl = document.querySelector(".haunter-start-btn")
haunterBtnEl.addEventListener("click", () => {
    haunterGame();
    // gastlyInstructionsRemove();
    // setTimeout(gastlyGame, 3000);
    // setTimeout(displayGastlyScoreboard, 1600);
    // setTimeout(gastlyTimer, 3000);
})