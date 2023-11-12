var timeCount = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var questionsEl = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var userInitials = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");
var finalScoreEl = document.getElementById("final-score");


var timeLeft = 60;
var questionNow = 0;

function countdown() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeCount.textContent = timeLeft
      
        if(timeLeft === 0 || questionNow === questions.length) {
        // Stops execution of action at set interval
            finalScoreEl.textContent = timeLeft;
            clearInterval(timerInterval);
            
        } 
    }, 1000);
}

startButton.addEventListener("click", function() {
    // document.getElementById("guestions");
    questionsEl.style.display = "block";
    startScreen.style.display = "none";
    feedbackEl.style.display = "block";
    countdown();
    displayQuestion();
})

function displayQuestion() {
    questionTitle.textContent = questions[questionNow].question;
    choicesEl.textContent = "";

    for (var i = 0; i < questions[questionNow].answers.length; i++) {
        var buttonAnswer = document.createElement("button");
        buttonAnswer.textContent = questions[questionNow].answers[i];
        choicesEl.appendChild(buttonAnswer);
        buttonAnswer.addEventListener("click", clikedAnswer)
    };
};

var yesSound = new Audio("assets/sfx/correct.wav");
var noSound = new Audio("assets/sfx/incorrect.wav");

function clikedAnswer(event) {
    event.preventDefault;
    var userChoice = event.target.textContent;
    
    if (userChoice === questions[questionNow].correctAnswer) {
        questionNow++;
        yesSound.play();
        feedbackEl.textContent = "correct";
        if (questionNow === questions.length) {
            theEnd();
        } else {
            displayQuestion();
        }
    } else {
        questionNow++;
        timeLeft -= 10;
        noSound.play();    
        feedbackEl.textContent = "wrong";
        if (questionNow === questions.length) {
            theEnd();

        } else {
            displayQuestion();
        }
    }        
};

function theEnd() {
    questionsEl.style.display = "none";
    startScreen.style.display = "none";
    feedbackEl.style.display = "none";
    endScreen.style.display = "block";
}

function saveFinalScore() {
    var initials = userInitials.value.trim();

    if (initials !== "") {
        var savedScore = JSON.parse(localStorage.getItem("highscore")) || [];
        var nowScore = {
            score: timeLeft,
            userInitials: initials,
        }
        savedScore.push(nowScore);
        localStorage.setItem("highscore", JSON.stringify(savedScore));
        window.location.href = "highscores.html";
    }
}

submitButton.addEventListener("click", saveFinalScore); 