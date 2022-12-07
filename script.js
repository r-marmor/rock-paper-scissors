const options = ["rock", "paper", "scissors"]; // only options possible in that game

// randomly return a computer choice
const getComputerChoice = () => {
    return options[Math.floor(Math.random() * options.length)]
}

// Creating an UI
let playerScore = 0;
let cpuScore = 0;

const btn = document.querySelectorAll('.btn button');
const msg = document.querySelector('.msg');
const score = document.querySelector('.score');
const finalmsg = document.getElementById('finalmsg');
const resetBtn = document.querySelector('#reset');

// Reloading page for new game
resetBtn.addEventListener('click', () => location.reload());

function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true;
    })
}

const playRound = (playerSelection, cpuSelection) => {
    let result = "";

    if (playerSelection == cpuSelection)
        result = `You both choose ${playerSelection}, it's a tie!`
    else if (
        (playerSelection == "rock" && cpuSelection == "scissors") ||
        (playerSelection == "paper" && cpuSelection == "rock") ||
        (playerSelection == "scissors" && cpuSelection == "paper")   
    ){
        playerScore++
        result = `Player wins this round! ${playerSelection} beats ${cpuSelection}`
        score.innerText = `Player ${playerScore} - ${cpuScore} Computer`;

        if (playerScore == 4) {
            msg.innerText = "One more win to win the match !!"
        }
        else if (playerScore == 5) {
                result = "You won the game ! Click 'Play again' for a rematch'"
                disableButtons();
        }

    } else {
        cpuScore++
        result = `Computer wins this round! ${cpuSelection} beats ${playerSelection}`
        score.innerText = `Player ${playerScore} - ${cpuScore} Computer`;
        
        if (CpuScore == 4) {
            msg.innerText = "One more win to win the match !!"
        }
        else if (cpuScore == 5) {
                result = "Computer won the game ! Click 'Play again' for a rematch'"
                disableButtons();
    }  
}

finalmsg.innerText = result;

}

btn.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.innerText.toLowerCase(), getComputerChoice())
    })
})