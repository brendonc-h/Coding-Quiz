//variables
var score = 75;
var startBtn = document.getElementById("start-button");
var welcome = document.getElementById(".quiz");
var countDown = document.getElementById("#timer-display");
var timer = document.getElementById("p");
var at = document.getElementById("at");
var td = documnet.getElementById("td");
var question = document.getElementById("p");
var highscores = document.getElementById(".highscores");
var answers = document.getElementById("li");
var chce = document.getElementById("buttons");


//questions and answers

var questionSet = 0;
const questions = [
    {
        question: "What is the language that is the structure of a website?",
        choices: ["HTML", "JavaScript", "CSS", "C#"],
        answer: "HTML",
    },

    {
        question: "Which of the following is used to access an HTML element? ",
        choices: ["getElementById()", "background-color:", "<button>", "None of the above"],
        answer: "getElementById()",
    },

    {
        question: "Which is a commonly used data type",
        choices: ["Booleans", "scripts", ""],
        answer: "Booleans",

    },
    {
        question: "",
        choices: [],
        answer: "",

    },
]

//need if statements to make questions determine true or false

function startGame(); {
    timerCount = 75;
    startBtn.enabled = true;
}

// hiding first page and displaying first question 


function displayQuestion() {
    td.innerHTML = "";
    at.innerHTML = "";
    currentQuestion = questions[questionSet];
    quiz.setAttribute("style", "display: flex");
    for (var index = 0; index < questions.length; index++) {
        question.textContent = currentQuestion.question;
        var choice = currentQuestion.choices[index];
        var buttons = document.createElement("buttons");
        buttons.setAttribute("value", choice);
        buttons.setAttribute("class", "answer-buttons");
        buttons.textContent = index + 1 + ", " + choice;
        td.appendChild(buttons);
        at.appendChild(question);
    }
    firstQuestion++;
}
// displaying the next question
firstQuestion.addEventListener("click", next);

// display last page with pass or fail

// display highscores if pressing on highscore button
let highscores = document.querySelector(".highscores")
function endGame() {
    td.setAttribute("style", "display: none;");
    at.setAttrubute("styyle", "display: none;");
    highscores.setAttribute("style", "display: flex;");
}


// startBtn.addEventListener("click", function () {
//     welcome.setAttribute("style", "display: none;");

//     startTimer();
//     displayQuestion();
// });
startBtn.addEventListener("click", index);
// have reset button to be able to display the first page again

