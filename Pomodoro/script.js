const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const timer = document.getElementById('timer');

startBtn.addEventListener('click', startTimer);

pauseBtn.addEventListener('click', stopTimer);

resetBtn.addEventListener('click', resetTimer);

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft /60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    timer.textContent = formattedTime;
}
function startTimer() {

    interval = setInterval(() => {
        timeLeft--;
        updateTimer(timeLeft);
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up");
            timeLeft = 1500;
        }
    }, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;

}
function stopTimer() {
    clearInterval(interval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
}
function resetTimer() {
    timeLeft = 1500;
    updateTimer(timeLeft);
    clearInterval(interval);
    startBtn.disabled = false;
    pauseBtn.disabled = false;
    resetBtn.disabled = true;
}
