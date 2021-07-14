/// DISPLAY FUNCTIONS

function containerRemove() {
    var containerEl = document.querySelector(".container")
    containerEl.remove();
}

// INDIVIDUAL GAMES

// gastly mini-game
function gastlyGame() {

    // source code: https://stackoverflow.com/questions/55668801/how-to-make-an-image-appear-on-a-random-position-onclick

    var gastlyImg = document.querySelector(".gastly")

    if (gastlyImg) {
        gastlyImg.remove();
    } else {
        var img = document.createElement("img");
        img.className = "gastly"
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png";
        img.width = 200;
        img.height = 200;
        
        // set the position
        img.style.position = 'absolute';
        img.style.top = (document.body.clientHeight - 200) * Math.random() + 'px';
        img.style.left = (document.body.clientWidth - 200) * Math.random() + 'px';
    
        let mainContentEl = document.querySelector(".main")
        mainContentEl.append(img);
    }

    setTimeout(gastlyGame, 1000);

}