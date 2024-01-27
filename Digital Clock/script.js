const hourEl = document.getElementById('hours');

const minuteEl = document.getElementById('minutes');

const secondEl = document.getElementById('seconds');

const ampmEl = document.getElementById('ampm');


function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12? 'PM' : 'AM';

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10? '0' + minutes : minutes;
    seconds = seconds < 10? '0' + seconds : seconds;

    hourEl.innerText = hours;
    minuteEl.innerText = minutes;
    secondEl.innerText = seconds;
    ampmEl.innerText = ampm;

    setTimeout(updateClock, 1000);
}

updateClock();
