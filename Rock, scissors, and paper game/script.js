const buttons = document.querySelectorAll('button');
const reset = document.getElementById('reset');
let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        const result = game(button.id,computerPlay());
        document.getElementById('result').textContent = result;
    });
});

reset.addEventListener('click', e => {
    location.reload();
});

function computerPlay(){
    const choices = ["rock","paper","scissors"];
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function game(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "Its a tie!";
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else{
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
};
