// Quiz questions and answersvarvar
var questions = [{
    question: "What is the capital of Pennsylvania?",
    choices: ["Philadelphia", "Harrisburg", "Pittsburgh", "Allentown"],
    correctAnswer: "Harrisburg"
  },
  {
    question: "What is the State dog of Pennsylvania?",
    choices: ["Dachshund", "Chihuahua", "Golden Retriever", "Great Dane"],
    correctAnswer: "Great Dane"
  },
  {
    question: "What river separates New Jersey from Philadelphia?",
    choices: ["Yellow", "Schuylkill", "Delaware", "Houston"],
    correctAnswer: "Delaware"
  }
];

// Timer
var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft = 15;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "seconds untill game over!.";

    if(secondsLeft === 0) {
  
      clearInterval(timerInterval);
     
     alert("game over :(");
    }

  }, 1000);
}
setTime();


// DOM elements
var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById("quizContainer");
var questionText = document.getElementById("questionText");
var choicesList = document.getElementById("choicesList");
var submitBtn = document.getElementById("submitBtn");
var resultContainer = document.getElementById("resultContainer");
var resultText = document.getElementById("resultText");
var initialsInput = document.getElementById("initialsInput");
var saveBtn = document.getElementById("saveBtn");

// Event listener for start button
startBtn.addEventListener("click", startQuiz);

// Event listener for submit button
submitBtn.addEventListener("click", submitAnswer);

// Event listener for save button
saveBtn.addEventListener("click", saveScore);

// Function to start quiz
function startQuiz() {
  startBtn.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
  startTimer();
}

// Function to load question
function loadQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionText.textContent
}