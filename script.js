const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    let rdmIndex = Math.floor(Math.random() * options.length);
    return options[rdmIndex];
}

const checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection)
        return "Tie";
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) { 
        return "Player won";
    } else {
        return "Computer won";
     }
};

const playRound = (playerSelection, computerSelection) => {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie")
        return "It's a tie!";
    else if (result == "Player won")
        return `Player 1 won! ${playerSelection} beats ${computerSelection}`;
    return `Computer won! ${computerSelection} beats ${playerSelection}`;
}

const getPlayerChoice = () => {
    let validateInput = false;
    while (validateInput == false) {
        const choice = prompt("Rock, paper or scissors ?");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validateInput = true;
            return choiceInLower
        }
    }
}

const game = () => {
    let scorePlayer = 0;
    let scoreCpu = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------------------------------------------");
        if (checkWinner(playerSelection, computerSelection) == "Player won") {
            scorePlayer++
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer won") {
            scoreCpu++
        }    
    }
    if (scorePlayer == scoreCpu)
        console.log("LMAO, it's a tie!")
    else if (scorePlayer > scoreCpu)
        console.log("Congratulations, you won!")
    else
        console.log("Eww, it seems that the cpu won...");

    console.log("Game over, thanks for playing");
}

game()