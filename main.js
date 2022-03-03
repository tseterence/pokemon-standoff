let playerScore = 0
let computerScore = 0

// computerPlay function    
function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * 3)]
}

// playRound function
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult.innerText = `Both selected ${playerSelection}. It's a tie!`
    } else if (playerSelection === 'rock') {
        if (computerSelection == 'scissors') {
            roundResult.innerText = 'Rock smashes scissors! You win!'
            playerScore++
        }
        else {
            roundResult.innerText = 'Rock is covered by paper. You lose.'
            computerScore++
        }            
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            roundResult.innerText = 'Paper covers rock! You win!'
            playerScore++
        }
        else {
            roundResult.innerText = 'Paper is cut by scissors. You lose.'
            computerScore++
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            roundResult.innerText = 'Scissors cut paper! You win!'
            playerScore++
        }
        else {
            roundResult.innerText = 'Scissors is smashed rock. You lose.'
            computerScore++
        }
    }
}

let buttons = document.querySelectorAll('.selection')
let roundResult = document.querySelector('#roundResult')
let finalResult = document.querySelector('#finalResult')
let playAgainButton = document.querySelector('#playAgain')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore === 5 || computerScore === 5) {
            return;
        }
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        updateScore() 
        if (playerScore === 5 || computerScore === 5) {
            nameWinner();
            playAgainButton.classList.toggle('hidden')
        }        
    })
})

playAgainButton.addEventListener('click', newGame)

// update score text
function updateScore() {
    document.querySelector('.playerScore').innerText = `${playerScore}`
    document.querySelector('.computerScore').innerText = `${computerScore}`
}

// announce winner
function nameWinner() {
    if (playerScore > computerScore) {
        finalResult.innerText = `Congratulations, you won ${playerScore} - ${computerScore}! :)`;
    }
    else {
        finalResult.innerText = `Sorry, you lost ${playerScore} - ${computerScore} :(`;
    }
}

// reset game
function newGame() {
    playerScore = 0
    computerScore = 0
    updateScore()
    playAgainButton.classList.toggle('hidden')
    roundResult.innerText =''
    finalResult.innerText = ''
}