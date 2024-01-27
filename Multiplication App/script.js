const question = document.querySelector('h3');
const answer = document.getElementById('answer');
const formEl = document.querySelector('form');
const scoreEl = document.getElementById('score');

const num1 = Math.ceil(Math.random() *10);
const num2 = Math.ceil(Math.random() *10);

question.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnswer = num1 * num2;

formEl.addEventListener('submit', checkAnswer);

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

function checkAnswer() {
    const userAnswer = parseInt(answer.value);
    if (userAnswer === correctAnswer) {
        alert('Correct!');
        score++;
        updateScore();
    } else {
        alert('Wrong!');
        score--;
        updateScore();
    }
}

function updateScore() {
    localStorage.setItem("score", JSON.stringify(score));
}
