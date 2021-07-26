// DISPLAY FUNCTIONS

var animateObj = {
    shake: "shake",
    bounce: "bounce",
    drop: "drop",
    explode: "explode",
    puff: "puff",
    slide: "slide"
}

// remove title container
function titleContainerRemove() {
    $(".title-container").fadeOut(1500)
}

// display gastly instructions container
function gastlyInstructionsDisplay() {
    $(".gastly-instructions, .gastly-instructions-container").fadeIn(1500)
    $(".gastly-instructions, .gastly-instructions-container").css("display", "flex")
}

// remove gastly instructions
function gastlyInstructionsRemove() {
    $(".gastly-instructions, .gastly-instructions.container").fadeOut(1500)
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

const catchSpaceEl = document.querySelector(".gastly-catch-space")
const mainPageEl = document.querySelector(".main")
const gastlyScore = document.querySelector("#gastly-score")

// display header
function displayGastlyScoreboard () {
    $("#gastly-scoreboard").fadeIn(1500)
    $("#gastly-scoreboard").css("display", "flex")
}

// gastly timer
timer = 5;
function gastlyTimer() {
    console.log('timer', )//timestamp)
    document.getElementById("timer").innerHTML = "Timer: " + timer;
    timer--;
    if (timer <= -1) {
        catchSpaceEl.remove(); 
        timer = 5;
        gastlyScoreFinal();
        return;
    }
    else {
        const id = setTimeout(gastlyTimer, 1000);
        //timesArr.push(id)
    }
}

// gastly scorekeeping
var gastlyObj = {
    score: 0
}

// gastly game function
function gastlyGame() {

    if (timer > 0) {
        $(".gastly-catch-space").css("display", "flex");
    
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
    
            catchSpaceEl.append(img);
            $(".gastly")
            .effect("shake", {times: Math.ceil(Math.random() * 3), distance: (Math.ceil(Math.random) * 1000) + 5}, 1000)
        }
    
        setTimeout(gastlyGame, ((Math.random() * 1000) + 200));
    } else {
        return;
    }
}

function gastlyScoreFinal() {
    $("#gastly-scoreboard").fadeOut(1500)
    $(".gastly-score-report, .gastly-score-container").fadeIn(1500);
    $(".gastly-score-report, .gastly-score-container").css("display", "flex");
    $(".gastly-score-final").text(gastlyObj.score);

    if (gastlyObj.score >= 1) {
        $(".gastly-score-report-text-fail, .gastly-restart-btn").css("display", "none");
    } else {
        $(".gastly-score-report-text-success").css("display", "none")
        $(".text-entry-container").css("display", "none")
        let gastlyBtnEl = document.querySelector(".gastly-restart-btn")
        gastlyBtnEl.addEventListener("click", () => {
            mainPageEl.append(catchSpaceEl)
            $(".gastly").remove();
            $(".gastly-score-report").fadeOut(1500);
            // $(".gastly-catch-space").css("display", "flex");
            setTimeout(gastlyGame, 3000);
            setTimeout(displayGastlyScoreboard, 1600);
            setTimeout(gastlyTimer, 3000);
            let timerContentEl = document.querySelector("#timer")
            timer = 5
            timerContentEl.innerHTML = "Timer: " + timer;
        })
    }

}