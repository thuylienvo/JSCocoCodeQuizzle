//Start Game variables
const gameStartEl = document.querySelector('.gamestartBtn');
//const questionContainerEl = document.querySelector('question-container')
const questionEl = document.querySelector('#gameQuestions');
const choiceEL = document.querySelector('choice-btns');
let randomQuestions, currentQuesIn;

let timeSeconds = 60;
let startScore = 60;
let timerEl = document.querySelector('#timer0');
let scoreEl = document.querySelector('#score0');


// Quiz questions, choices and answer key

const questions = [
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: [
            {text: " You should not use any of the JavaScript reserved keyword as variable name.", answer: false},
            {text: " JavaScript variable names should not start with a numeral (0-9).", answer: false},
            {text: " Both of the above", answer: true},
            {text: " None of the above", answer: false},
        ],
    },
    {
        question: "How many times did Mimi want to cry during this build?",
        choices: [
            {text: " Never", answer: false},
            {text: " Every single night over the past week",answer: true},
            {text: " 1-2 times tops", answer: false},
            {text: " None of the above...", answer: false}, 
        ],
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        choices: [
            {text: " Storing numbers, dates, or other values", answer: true}, 
            {text: " Varying randomly", answer: false}, 
            {text: " Causing high-school algebra flashbacks", answer: false}, 
            {text: " None of the above", answer: false}, 
        ],
    },
    {
        question: "Which built-in method returns the string representation of the number's value?",
        choices: [
            {text: " toValue()", answer: false}, 
            {text: " toNumber()", answer: false}, 
            {text: " toString()", answer: true}, 
            {text: " None of the above", answer: false}, 
        ],
    },
    {
        question: "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
        choices: [
            {text:  " unshift()", answer: true},
            {text:  " sort()", answer: false},
            {text:  " splice()", answer: false},
            {text:  " toString()", answer: false},
        ],
    },
]

//User selects Start to begin game, timer and Q/As appear on pageload
function startGame() {
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuesIn = 0;
  nextQuestion();
}
//Timer kicks off with 60 seconds
    scoreEl.innerHTML = `${timeSeconds}`;
    timerEl.innerHTML = `00:${timeSeconds}`;
    const countDown = setInterval(() => {
    timeSeconds--;
        displayTime(timeSeconds);
    if (timeSeconds <= 0 || timeSeconds < 1) {
        clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timerEl.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec}`;
    scoreEl.innerHTML = `${sec}`;
}

//Display random question and answer choices
function nextQuestion() {
  showQuestion(randomQuestions[currentQuesIn]);
}

//Pull in question from array
function showQuestion(question) {
    console.log(question);
    questionEl.innerText = question.question;
    question.choice.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click')
        answerEl.appendChild(button)
      })
  }

//Confirm Answer
    function confirmAnswer() {

    selectAnswer();
}
//When a user selects a correct answer, do nothing
    function selectAnswer() {
        
        nextQuestion();
    }

//If a user selects an incorrect answer, subtract 5 seconds off the clock

//On Start Button click, Game begins
startGame();

