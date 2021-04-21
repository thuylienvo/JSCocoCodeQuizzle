//Start Game variables
//const gameStartEl = document.querySelector('gamestartBtn');
//const questionContainerEl = document.querySelector('question-container')
const questionEl = document.querySelector('question');
const choiceEL = document.querySelector('choice-btns');
let randomQuestions, currentQuesIn



//User selects Start to begin game, timer and Q/As appear on pageload
function startGame() {
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    NextQuestion()
} 
    //Timer kicks off with 60 seconds 
    scoreEl.innerHTML = `${timeSeconds}`;
    timerEl.innerHTML = `00:${timeSeconds}`;
    const countDown = setInterval (()=>{
        timeSeconds--;
        displayTime(timeSeconds);
        if(timeSeconds <= 0 || timeSeconds <1){
            clearInterval(countDown);
        }
    },1000)

    function displayTime(second){
        const min = Math.floor(second /60);
        const sec = Math.floor(second % 60);
        timerEl.innerHTML =`${min<10 ? '0': ''}${min}:${sec}`
        scoreEl.innerHTML =`${sec}`
    }

    //Display random question and answer choices 
    function nextQuestion() {
        showQuestion(randomQuestions[currentQuesIn])
    };

    //Pull in question from array
    function showQuestion(question) {
        questionEl.innerText = question.question
    }

        //When a user selects a correct answer, do nothing
    function selectAnswer() {

    }

        //If a user selects an incorrect answer, subtract 5 seconds off the clock


