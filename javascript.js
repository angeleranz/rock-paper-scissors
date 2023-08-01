const option = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    const randomOption = Math.floor(Math.random() * option.length);
    return (option[randomOption]);

}



const tie = "It's a tie!"

const playerLose = "You lost! Better luck next time." // } defining possible outcomes from the game;

const playerWon = "Congrats, you won!"

const results = document.querySelector('.result');

const compSelection = document.querySelector('.compSelection');



const btn = document.querySelectorAll('button'); //getting the buttons from HTML file to the DOM;
console.log(btn)

btn.forEach(button => {
        button.addEventListener('click', () => { 
            const playerSelection = button.innerText;
            const computerChoice = getComputerChoice()

            compSelection.textContent = computerChoice;
            return playRound(playerSelection, computerChoice);
    });
});


function playRound(playerSelection, computerChoice){


    if (playerSelection === computerChoice){
        results.textContent = tie;
        console.log(tie);
    }
    else if (playerSelection === "Paper" && computerChoice === "Rock"){
        results.textContent = playerWon;
        console.log(playerWon);
    }
    else if (playerSelection === "Scissors" && computerChoice === "Rock"){
        results.textContent = playerLose;
        console.log(playerLose);
    }
    else if (playerSelection === "Rock" && computerChoice === "Paper"){
        results.textContent = playerLose;
        console.log(playerLose);
    }
    else if (playerSelection === "Scissors" && computerChoice === "Paper"){
        results.textContent = playerWon;
        console.log(playerWon);
    }
    else if (playerSelection === "Rock" && computerChoice === "Scissors"){
        results.textContent = playerWon;
        console.log(playerWon);
    }
    else if (playerSelection === "Paper" && computerChoice === "Scissors"){
        results.textContent = playerLose;
        console.log(playerLose);
    }
}



