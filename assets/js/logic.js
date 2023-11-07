var timeCount = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var questionsEl = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var userInitials = document.getElementById("initials");
var submitButton = document.getElementById("submit");

var questions = [
    {
        question: "Which one is not an addEventListener event?",
        answers: {
            answerA: "click",
            answerB: "go",
            answerC: "submit",
            answerD: "keyup"
        },
        correctAnswer: "answerB"
    },
    {
        question: "Which method does stop default form behaviour?",
        answers: {
            answerA: "addEventListener",
            answerB: "setInterval",
            answerC: "getElementByID",
            answerD: "preventDefault"
        },
        correctAnswer: "answerD"
    },
    {
        question: "What eventPropagations is used for?",
        answers: {
            answerA: "Stops event from bubbling up and new window opening",
            answerB: "Calls a function to be executed every 1000 milliseconds",
            answerC: "Gets the current value of the element data-state attribute",
            answerD: "Clears interval and stops timer"
        },
        correctAnswer: "answerA"
    },
    {
        question: "Which method is used to set the value of the specified Storage Object item.?",
        answers: {
            answerA: "localStorage.getItem",
            answerB: "parseInt.setItem",
            answerC: "localStorage.setItem",
            answerD: "split.setItem"
        },
        correctAnswer: "answerC"
    },
    {
        question: "What method should you use if you want to change colour of the elemnt using JavaScript?",
        answers: {
            answerA: "displayDate",
            answerB: "querySelector",
            answerC: "this.innerHTML",
            answerD: "setAttribiute"
        },
        correctAnswer: "answerD"
    },
    {
        question: "Which is the best method to access element using id?",
        answers: {
            answerA: "getElementById",
            answerB: "querySelectorAll",
            answerC: "getElementsByTagName",
            answerD: "querySelector"
        },
        correctAnswer: "answerA"
    },
    {
        question: "How to dynamically add element to its parent using JavaScript?",
        answers: {
            answerA: "createElement",
            answerB: "textContent",
            answerC: "clearInterval",
            answerD: "appendChild"
        },
        correctAnswer: "answerD"
    }    
];


function countdown() {
    var timeLeft = 60;
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeCount.textContent = timeLeft
      
        if(timeLeft === 0) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
            
       
        } 
      
        }, 1000);
      }

startButton.addEventListener("click", function() {
    // document.getElementById("guestions");
    questionsEl.style.display = "block";
    startScreen.style.display = "none";
    countdown();
    displayQuestion();
})
var yes = "yes";
var elem = 0;
function displayQuestion() {
    questionTitle.textContent = questions[elem].question;
    choicesEl.innerHTML = "";

    for (var i = 0; i < questions[elem].answers.length; i++) {

        var buttonAnswer = document.createElement("button");
        buttonAnswer.textContent = questions[elem].answers[i];
        buttonAnswer.addEventListener("click", function() {
            console.log(yes);
        });
        choicesEl.appendChild(buttonAnswer);
    };

}
  

    