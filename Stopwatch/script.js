const timerEl = document.getElementById('timer');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer() {

    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);

    startBtn.disabled = true;
    stopBtn.disabled = false;

};
function formatTime(elapsedTime) {

    const milliseconds = Math.floor((elapsedTime % 1000)/10);
    const seconds = Math.floor((elapsedTime % (1000*60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000*60*60) / (1000*60)));
    const hours = Math.floor(elapsedTime / (1000*60*60));
    return(
        (hours ? (hours > 9 ? hours : '0' + hours) : '00') + 
        ':' + 
        (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + 
        ':' + 
        (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00')  +
        '.' + 
        (milliseconds > 9 ? milliseconds : '0' + milliseconds) 
        );

};
function stopTimer() {

    clearInterval(timeInterval);

    startBtn.disabled = false;
    stopBtn.disabled = true;

};
function resetTimer() {

    clearInterval(timeInterval);

    elapsedTime = 0;

    timerEl.textContent = formatTime(elapsedTime);

    startBtn.disabled = false;
    stopBtn.disabled = true;

};
    
startBtn.addEventListener('click', () =>{
    startTimer();
});
    
stopBtn.addEventListener('click', () =>{
    stopTimer();
});

resetBtn.addEventListener('click', () =>{
    resetTimer();
});
