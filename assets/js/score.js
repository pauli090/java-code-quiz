var highscoreEl = document.getElementById("highscores");
var clearBtn = document.getElementById("clear");

var highscoreSaved = JSON.parse(localStorage.getItem("highscore")) || [];

function highscoreList() {
    highscoreSaved.forEach(element => {
        var scoreList = document.createElement("li");
        scoreList.textContent = element.userInitials + " : " + element.score;
        highscoreEl.appendChild(scoreList);
    });
}

function clearScore() {
    window.localStorage.removeItem("highscore");
    window.location.reload();
}

clearBtn.addEventListener("click", clearScore);

highscoreList();