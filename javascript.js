const option = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    if(gameInProgress){
    const randomOption = Math.floor(Math.random() * option.length);
    return (option[randomOption]);
    }
}

let playerWins = 0;
let computerWins = 0;
let gameInProgress = false;


const tie = "It's a tie!"

const playerLose = "You lost! Better luck next time." // } defining possible outcomes from the game;

const playerWon = "Congrats, you won!"

const results = document.querySelector('.result');

const score = document.querySelector('.score');

const scoreboard = document.querySelector('.scoreboard')

const playerScore = document.querySelector('.playerScore');

const computerScore = document.querySelector('.computerScore');

const compSelection = document.querySelector('.compSelection');

const game = document.querySelector('.game'); // div that encapsules the game itself

const startButton = document.querySelector('.startButton'); // Button to start the game, making the 'game' div appear

const preGame = document.querySelector('.preGame'); // div that only shows the start button

const playAgainButton = document.querySelector('.playAgain'); // button to restart the game, resetting the page to the beginning

const btn = document.querySelectorAll('button'); //getting the buttons from HTML file to the DOM;


startButton.addEventListener('click', () => {
    startGame();
});

playAgainButton.addEventListener('click', () => {
    resetGame();
    startGame();
});

game.style.display = 'none';
playAgainButton.style.display = 'none';
scoreboard.style.display = 'none';

function startGame(){
    preGame.style.display = 'none';
    scoreboard.style.display = 'block';
    game.style.display = 'block';
    gameInProgress = true;
}
    if (gameInProgress){
        for (let i = 0; i < 6; i++){
            playRound(playerSelection, computerChoice);
        }        
}



btn.forEach(button => {
        button.addEventListener('click', () => {
                const playerSelection = button.innerText;
                const computerChoice = getComputerChoice() 
                return playRound(playerSelection, computerChoice);                
    });
});


function playRound(playerSelection, computerChoice){


    if (playerSelection === computerChoice){
        results.textContent = "Results: " + tie;
        compSelection.textContent = "Computer chooses: " + computerChoice;
        playerScore.textContent = "Human: " + playerWins;
        computerScore.textContent = "Machine: " + computerWins;
    }
    else if (playerSelection === "Paper" && computerChoice === "Rock"){
        results.textContent = "Results: " + playerWon;
        compSelection.textContent = "Computer chooses: " + computerChoice;
        playerWins++;
        playerScore.textContent = "Human: " + playerWins;
        computerScore.textContent = "Machine: " + computerWins;
    }
    else if (playerSelection === "Scissors" && computerChoice === "Rock"){
        results.textContent = "Results: " + playerLose;
        compSelection.textContent = "Computer chooses: " + computerChoice;
        computerWins++;
        computerScore.textContent = "Machine: " + computerWins;
        playerScore.textContent = "Human: " + playerWins;
    }
    else if (playerSelection === "Rock" && computerChoice === "Paper"){
        results.textContent = "Results: "+ playerLose;
        compSelection.textContent = "Computer chooses: " + computerChoice;
        computerWins++
        computerScore.textContent = "Machine: " + computerWins;
        playerScore.textContent = "Human: " + playerWins;
    }
    else if (playerSelection === "Scissors" && computerChoice === "Paper"){
        results.textContent = "Results: " + playerWon;
        compSelection.textContent = "Computer chooses: " + computerChoice;
        playerWins++
        playerScore.textContent = "Human: " + playerWins;
        computerScore.textContent = "Machine: " + computerWins;
    }
    else if (playerSelection === "Rock" && computerChoice === "Scissors"){
        results.textContent = "Results: " + playerWon;        
        compSelection.textContent = "Computer chooses: " + computerChoice;
        playerWins++
        playerScore.textContent = "Human: " + playerWins;
        computerScore.textContent = "Machine: " + computerWins;
    }
    else if (playerSelection === "Paper" && computerChoice === "Scissors"){
        results.textContent = "Results: " + playerLose;
        compSelection.textContent = "Computer chooses: " + computerChoice;
        computerWins++
        computerScore.textContent = "Machine: " + computerWins;
        playerScore.textContent = "Human: " + playerWins;
    }

    checkBestOf5Winner();
}

function checkBestOf5Winner(){
    if (playerWins === 3 || computerWins === 3){
        gameInProgress = false;
        

    if (playerWins === 3) {
        results.textContent = "Congratulations, you have beaten the machine. Our jobs are safe. For now."
    }   else if (computerWins === 3){
        results.textContent = "Too bad you couldn't beat the machine. I hope they have mercy on you in the near future."
    }
    

    playAgainButton.style.display = 'block'
    game.style.display = 'none';
    scoreboard.style.display = 'none';
    playerScore.style.display = 'none';
    computerScore.style.display = 'none';
    }
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    gameInProgress = false;
    compSelection.textContent = '';
    results.textContent = '';
    playAgainButton.style.display = 'none';
    playerScore.textContent = '';
    computerScore.textContent = '';
    playerScore.style.display = 'block';
    computerScore.style.display = 'block';
    scoreboard.style.display = 'block';
    
}
