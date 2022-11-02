const options = ["rock", "paper", "scissors"]; // only options possible in that game

// randomly return a computer choice
const getComputerChoice = () => {
    return options[Math.floor(Math.random() * options.length)]
}

// Ask player for a choice included in const options
const getPlayerChoice = () => {
    let userInput = false;
    while (userInput == false) {
        const choice = prompt("Rock, paper or scissors?");
        const choiceToLower = choice.toLowerCase();
        if (options.includes(choiceToLower)) {
            userInput = true;
            return choiceToLower;
        }
    }
}


// const checkWinner = (playerSelection, cpuSelection) => {
//     if (playerSelection == cpuSelection)
//         return "Tie"
//     else if (
//         (playerSelection == "rock" && cpuSelection == "scissors") ||
//         (playerSelection == "paper" && cpuSelection == "rock") ||
//         (playerSelection == "scissors" && cpuSelection == "paper")
        
//     ){
//         return `Player won`
//     } else {
//         return `Computer won`
//     }  
// }

// simulate a single round
const playRound = (playerSelection, cpuSelection) => {
    if (playerSelection == cpuSelection)
        return "it's a tie!"
    else if (
        (playerSelection == "rock" && cpuSelection == "scissors") ||
        (playerSelection == "paper" && cpuSelection == "rock") ||
        (playerSelection == "scissors" && cpuSelection == "paper")
        
    ){
        return `Player wins this round! ${playerSelection} beats ${cpuSelection}`
    } else {
        return `Computer wins this round! ${cpuSelection} beats ${playerSelection}`
    }  
}


// plays 5 round, keep track of points from players
const game = () => {
    let playerScore = 0;
    let CpuScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let cpuSelection = getComputerChoice();
        playRound(playerSelection, cpuSelection)
        if (playRound(playerSelection, cpuSelection) == `Player wins this round! ${playerSelection} beats ${cpuSelection}`) {
            playerScore++
            console.log(`Player wins this round! ${playerSelection} beats ${cpuSelection}`)
            console.log('--------------------------')
        }
        else if (playRound(playerSelection, cpuSelection) == `Computer wins this round! ${cpuSelection} beats ${playerSelection}`) {
            CpuScore++ 
            console.log(`Computer wins this round! ${cpuSelection} beats ${playerSelection}`)
            console.log('--------------------------')
        }   
    }
    
    console.log(`Final score is Player ${playerScore} - ${CpuScore} Computer`)
    console.log('==========================')
    if (playerScore > CpuScore)
        return "Congratulations, you won the match!"
    else if (playerScore < CpuScore)
        return "Ewwww, it seems that the CPU won the match. Better luck next time!"
    return "The match ends up on a tie!"
}

console.log(game())