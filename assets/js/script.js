

//Start Game variables
const gameStartEl = document.querySelector('.gamestartBtn');

//const questionContainerEl = document.querySelector('question-container')
const questionEl = document.querySelector('#gameQuestions');
const choiceEL = document.querySelector('choice-btns');
let randomQuestions, currentQuesIn;

// time related variables 
let timeSeconds = 60;
let startScore = 60;
let timerEl = document.querySelector('#timer0');
let scoreEl = document.querySelector('#score0');
var countDown;
var sec;

// local storage
let myStorage = window.localStorage;


// Quiz questions, choices and answer key

const questions = [
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: [
            {choice: " You should not use any of the JavaScript reserved keyword as variable name.", answer: false},
            {choice: " JavaScript variable names should not start with a numeral (0-9).", answer: false},
            {choice: " Both of the above", answer: true},
            {choice: " None of the above", answer: false},
        ],
    },
    {
        question: "How many times did Mimi want to cry during this build?",
        choices: [
            {choice: " Never", answer: false},
            {choice: " Every single night over the past week",answer: true},
            {choice: " 1-2 times tops", answer: false},
            {choice: " None of the above...", answer: false}, 
        ],
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        choices: [
            {choice: " Storing numbers, dates, or other values", answer: true}, 
            {choice: " Varying randomly", answer: false}, 
            {choice: " Causing high-school algebra flashbacks", answer: false}, 
            {choice: " None of the above", answer: false}, 
        ],
    },
    {
        question: "Which built-in method returns the string representation of the number's value?",
        choices: [
            {choice: " toValue()", answer: false}, 
            {choice: " toNumber()", answer: false}, 
            {choice: " toString()", answer: true}, 
            {choice: " None of the above", answer: false}, 
        ],
    },
    {
        question: "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
        choices: [
            {choice:  " unshift()", answer: true},
            {choice:  " sort()", answer: false},
            {choice:  " splice()", answer: false},
            {choice:  " toString()", answer: false},
        ],
    },
]

//User selects Start to begin game, timer and Q/As appear on pageload
function startGame() {

    //Timer kicks off with 60 seconds
    scoreEl.innerHTML = `${timeSeconds}`;
    timerEl.innerHTML = `00:${timeSeconds}`;
    countDown = setInterval(() => {
       timeSeconds--;
           displayTime(timeSeconds);
       if (timeSeconds <= 0 || timeSeconds < 1) {
           clearInterval(countDown);
     }
    }, 1000);

    // get questions
    randomQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuesIn = 0;
        showQuestion(randomQuestions[currentQuesIn]);
    
    }

function displayTime(second) {
    const min = Math.floor(second / 60);
    sec = Math.floor(second % 60);
    timerEl.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec}`;
    scoreEl.innerHTML = `${sec}`;
    }

//Pull in question from array and show on screen
function showQuestion(randomQuestion) {
    let val = 1
    
    questionEl.innerText = randomQuestion.question;

    randomQuestion.choices.forEach(optionSelect => {
        // const button = document.createElement('button')
        let choiceHtml = "#choice_" + String(val)
        let button = document.querySelector(choiceHtml);
        button.innerText = optionSelect.choice
        val++
      })
    }

// On selection of an answer, confirm if right and move on to the next question
function selectAnswer(chosen) {
        if(currentQuesIn < randomQuestions.length-1){
            let chosenAnswer_id = Number(chosen.split("_")[1]) - 1
            let chosenAnswer_TF = randomQuestions[currentQuesIn].choices[chosenAnswer_id].answer
            if (chosenAnswer_TF != true){
                // subtract time
                timeSeconds -= 5
            }
            
            currentQuesIn++
            showQuestion(randomQuestions[currentQuesIn]);
        } else{
            // end game
            
            clearInterval(countDown) // stops your time
            let initials = window.prompt("Please input your initials to save your high score!");
            let time = sec
            let highScores = [initials, time]

            localStorage.setItem('intial', initials)
            localStorage.setItem('score', time.toString())
            console.log(localStorage.getItem('intial'))
            console.log(localStorage.getItem('score'))

            
            window.alert("Hello! "+ highScores[0] + ", your score is " + highScores[1])

        }
        
    }





try {
    // high score elements
    const scoreNameEl = document.querySelector('#scoreName');
    const finalscoreEl = document.querySelector('#scoreNumber');
    scoreNameEl.innerText = localStorage.getItem('intial')
    finalscoreEl.innerText = localStorage.getItem('score')
  } catch (error) {
    console.error(error);
    startGame()
  }


