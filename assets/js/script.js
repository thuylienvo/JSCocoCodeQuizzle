let gameStartEl = document.querySelector('game-start-btn');
let highScoreEl = document.querySelector('highscore-btn');
let timerEl = document.querySelector('#timer0');
let scoreEl = document.querySelector('#score0')
let timeSeconds = 60;
let startScore = 60;


//User selects Start to begin game 
    //Timer will set off with score
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
    //And display question(s) and choice(s)
    window.onload = function () {
        console.log(questions[0])
        document.getElementById("question").textContent=questions[0].question;
        document.getElementById("0").textContent=questions[0].choices[0];
        document.getElementById("1").textContent=questions[0].choices[1];
        document.getElementById("2").textContent=questions[0].choices[2];
        document.getElementById("3").textContent=questions[0].choices[3];

    }

//Game questions run 



