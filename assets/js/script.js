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
    question.answers.forEach(answer => {
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
}
//When a user selects a correct answer, do nothing
    function selectAnswer() {}

//If a user selects an incorrect answer, subtract 5 seconds off the clock

//On Start Button click, Game begins
startGame();

