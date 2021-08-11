// DISPLAY FUNCTIONS
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

// remove gastly scoreboard
function gastlyScoreboardRemove() {
    $(".gastly-score-report").fadeOut(1500);
}

// display high scores
function scoreboardDisplay() {
    $(".high-scores-container").fadeIn(1500)
    $(".high-scores-container").css("display", "flex");
}

function displayPlayAgainBtn() {
    $(".game-restart-button").fadeIn(1500)
    $(".game-restart-button").css("display", "flex");
}

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
timer = 30;
function gastlyTimer() {
    document.getElementById("timer").innerHTML = "Timer: " + timer;
    timer--;
    console.log(timer)
    if (timer <= -1) {
        catchSpaceEl.remove(); 
        timer = 30;
        gastlyScoreFinal();
        return;
    }
    else {
        setTimeout(gastlyTimer, 1000);
        return;
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
                gastlyObj.score++
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
    finalGastlyScore = gastlyObj.score

    if (gastlyObj.score >= 12) {
        $(".gastly-score-report-text-fail, .gastly-restart-btn").css("display", "none");
        let submitBtnEl = document.querySelector("#submit-btn");
        submitBtnEl.addEventListener("click", function(event) {
            event.preventDefault();

            let playerInitials = document.querySelector("#player-initials").value

            let playerScore = finalGastlyScore
            let scoreObj = {
                player: playerInitials,
                score: playerScore
            }

            let scoresArr = []
            if (localStorage.getItem("scoreTable")) {
                scoresArr = JSON.parse(localStorage.getItem("scoreTable"))
            }
            scoresArr.push(scoreObj)
        
            localStorage.setItem("scoreTable", JSON.stringify(scoresArr));
            localStorage.setItem("playerInitials", playerInitials);
            localStorage.setItem("score", playerScore);
                
            gastlyScoreboardRemove() 
            
            setTimeout(displayScores, 1600)
            setTimeout(displayPlayAgainBtn, 1600)

        })
        return finalGastlyScore;
    } else {
        $(".gastly-score-report-text-success").css("display", "none")
        $(".text-entry-container").css("display", "none")
        let gastlyBtnEl = document.querySelector(".gastly-restart-btn")
        gastlyBtnEl.addEventListener("click", () => {
            window.location.reload();
        })
    }

}

function displayScores() {

    let scoresList = document.querySelector("#scores-list")
    let scoreScrnObj = JSON.parse(localStorage.getItem("scoreTable"))
    scoreScrnObj.sort((a, b) => b.score - a.score);

    for (i = 0; i < 3; i++) {
        let scoreItem = document.createElement("li");
        if (scoreScrnObj[i]){
            scoreItem.textContent = (scoreScrnObj[i].player + " " + scoreScrnObj[i].score);
        } else {
            scoreItem.textContent = ""
        }
        scoresList.append(scoreItem);
    }

    scoreboardDisplay();

    let gameBtnEl = document.querySelector(".game-restart-btn")
    gameBtnEl.addEventListener("click", () => {
        window.location.reload();
    })
}