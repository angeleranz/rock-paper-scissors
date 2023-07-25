const option = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const randomOption = Math.floor(Math.random() * option.length);
    return (option[randomOption])
}

const tie = "it's a tie!"
const playerLose = "You lost! Better luck next time."
const playerWon = "Congrats, you won!"


function playRound(playerSelection, computerSelection){


    if (playerSelection === computerSelection){
        return tie;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return playerWon;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return playerLose;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return playerLose;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return playerWon;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return playerWon;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return playerLose;
    }
}

function game(){
    var playerSelection = prompt("Choose your weapon (rock, paper or scissors)", "").toLowerCase();

    var computerSelection = getComputerChoice();
    
    console.log(playRound(playerSelection, computerSelection));

    var playerSelection = prompt("Choose your weapon (rock, paper or scissors)", "").toLowerCase();

    var computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    var playerSelection = prompt("Choose your weapon (rock, paper or scissors)", "").toLowerCase();

    var computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    var playerSelection = prompt("Choose your weapon (rock, paper or scissors)", "").toLowerCase();

    var computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    var playerSelection = prompt("Choose your weapon (rock, paper or scissors)", "").toLowerCase();

    var computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
}




