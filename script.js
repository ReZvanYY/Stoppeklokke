const timerStart = document.getElementById('timerS');
const pauseTimerList = document.getElementById('pauseTimer');

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;


function Start() {
    setInterval(Countstart, 1000);
}

function Countstart(){
    if (seconds == 59) {
        seconds = 0;
        if (minutes == 59) {
            minutes = 0;
            hours++;
        }
        else {
            minutes++;
        }
    }
    else {
        seconds++;
    }
    document.getElementById('timerS').innerHTML = hours + ":" + minutes + ":" + seconds;
}


function Pause() {
    pauseTimer.innerHTML += /*HMTL*/
        `<li>${hours + ":" + minutes + ":" + seconds}  </li>`;
    clearInterval(Start);
    console.log('Pause button works?');
}

function Reset() {
    location.reload();
}



/*const Tstarter = document.getElementById('Start1');
const PTime = document.getElementById('Pause1');
let seconds = 0;
var timer;

function startTimer(){
  setInterval(countSeconds, 1000);
}

function countSeconds(){
    app.innerHTML = seconds;
    seconds++;
}

function pauseTimer(){ 
    roundTime.innerHTML += `<li>${seconds-1} sekunder</li>`;
    clearInterval(timer);
    seconds = 0;
}

function stopAll(){
    location.reload()
}*/
