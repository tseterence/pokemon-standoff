let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button')
let results = document.querySelector('#results')
let winner = document.querySelector('#winner')


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);

        playRound(playerSelection, computerSelection);
        console.log(playerScore);
        console.log(computerScore);

        if (playerScore === 5 || computerScore === 5) {
            nameWinner();
            newGame();// function asking for new game - clean scoreboard, as well as html elements
        }        
    })
})

// computerPlay function    
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

// playRound function
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        results.innerText = `Both selected ${playerSelection}. It's a tie!`;
    } else if (playerSelection === 'rock') {
        if (computerSelection == 'scissors') {
            results.innerText = 'Rock smashes scissors! You win!';
            playerScore++;
        }
        else {
            results.innerText = 'Paper covers rock. You lose.';
            computerScore++;
        }            
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            results.innerText = 'Paper covers rock! You win!';
            playerScore++;
        }
        else {
            results.innerText = 'Scissors cut paper. You lose.';
            computerScore++;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            results.innerText = 'Scissors cut paper! You win!';
            playerScore++;
        }
        else {
            results.innerText = 'Rock smashes scissors. You lose.';
            computerScore++;
        }
    }
}

function nameWinner() {
    if (playerScore > computerScore) {
        winner.innerText = `Congratulations, you beat the computer! The final score was Player: ${playerScore} - Computer: ${computerScore}! :)`;
    }
    else {
        winner.innerText = `Sorry, you lost to the computer. The final score was Player: ${playerScore} - Computer: ${computerScore}. :(`;
    }
}

function newGame() {
}