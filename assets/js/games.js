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
function containerRemove() {
    var containerEl = document.querySelector(".container")
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
        img.addEventListener("click", () => {
            console.log("Got 'em!")
        });
        
        // set the position
        img.style.position = 'absolute';
        img.style.top = (document.body.clientHeight - 200) * Math.random() + 'px';
        img.style.left = (document.body.clientWidth - 200) * Math.random() + 'px';

        let mainContentEl = document.querySelector(".main")
        mainContentEl.append(img);
        $(".gastly")
        .effect("shake", {times: Math.ceil(Math.random() * 3), distance: (Math.ceil(Math.random) * 1000) + 5}, 1000)
    }

    setTimeout(gastlyGame, ((Math.random() * 1000) + 200));

}