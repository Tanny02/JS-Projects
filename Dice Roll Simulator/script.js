const dice = document.getElementById('dice');
const btn = document.getElementById('roll-btn');
const rollHistory = document.getElementById('roll-history');

let diceHistory = [];

btn.addEventListener('click', () => {
    dice.classList.add('roll-animation');
    setTimeout(() => {
        dice.classList.remove('roll-animation');
        rollDice();
    }, 1000);
});

function rollDice() {
    const result = Math.floor(Math.random() *6) + 1;
    const diceFace = getDiceFace(result);
    dice.innerHTML = diceFace;
    diceHistory.push(result);
    updateHistory();
}

function getDiceFace(result) {
    switch (result) {
        case 1:
            return '&#9856;';
        case 2:
            return '&#9857;';
        case 3:
            return '&#9858;';
        case 4:
            return '&#9859;';
        case 5:
            return '&#9860;';
        case 6:
            return '&#9861;';
        default:
            return '';
    }
}

function updateHistory() {
    rollHistory.innerHTML = '';
    for (let i = 0; i < diceHistory.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `Roll ${i+1}: <span>${getDiceFace(diceHistory[i])}</span>`;
        rollHistory.appendChild(li);
    }
}
