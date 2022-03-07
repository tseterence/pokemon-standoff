let playerScore = 0
let playerLevel = 0

let computerScore = 0
let computerLevel = 0

let winLose = ''

// computerPlay function    
function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * 3)]
}

// playRound function
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winLose = 'tie'
    } else if (playerSelection === 'rock') {
        if (computerSelection == 'scissors') {
            winLose = 'win'
            playerScore++
        }
        else {
            winLose = 'lose'
            computerScore++
        }            
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            winLose = 'win'
            playerScore++
        }
        else {
            winLose = 'lose'
            computerScore++
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            winLose = 'win'
            playerScore++
        }
        else {
            winLose = 'lose'
            computerScore++
        }
    }
}

let buttons = document.querySelectorAll('.selection')
let roundResult = document.querySelector('#roundResult')
let finalResult = document.querySelector('#finalResult')
let resultContainer = document.querySelector('.resultContainer')

let playAgainButton = document.querySelector('#playAgain')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore === 5 || computerScore === 5) {
            return
        }
        let playerSelection = button.id
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        roundResult.innerText = `You threw ${playerSelection}!\n Computer threw ${computerSelection}!\n\n You ${winLose} this round!`
        playerHealth.innerText = updateLives(computerScore)
        computerHealth.innerText = updateLives(playerScore)
        updateScore() 
        if (playerScore === 5 || computerScore === 5) {
            nameWinner()
            playAgainButton.classList.toggle('hidden')
        }        
    })
})

playAgainButton.addEventListener('click', newGame)

let playerHealth = document.querySelector('.playerHealth')
let computerHealth = document.querySelector('.computerHealth')
// show life count
function updateLives(opponentScore) {
    let heartText = ''
    for (let i = 0; i < (5 - opponentScore); i++) {
        heartText += '♥'
    }
    return heartText
}
// level up for each won game
let playerLv= document.querySelector('.playerLevel')
let computerLv = document.querySelector('.computerLevel')

// update score text
function updateScore() {
    document.querySelector('.playerScore').innerText = `${playerScore}`
    document.querySelector('.computerScore').innerText = `${computerScore}`
}

// announce winner
function nameWinner() {
    resultContainer.style.border = '5px double black'
    if (playerScore > computerScore) {
        finalResult.innerText = ` Nice! You won ${playerScore} - ${computerScore}`
        finalResult.style.color = 'darkgreen'
        playerLevel++
    }
    else {
        finalResult.innerText = ` Sorry, you lost ${playerScore} - ${computerScore}`
        finalResult.style.color = 'red'
        computerLevel++
    }
}

// reset game
function newGame() {
    playerScore = 0
    computerScore = 0
    playerHealth.innerText = updateLives(computerScore)
    computerHealth.innerText = updateLives(playerScore)
    playerLv.innerText = playerLevel
    computerLv.innerText = computerLevel
    updateScore()
    playAgainButton.classList.toggle('hidden')
    roundResult.innerText ='Which will you play?'
    finalResult.innerText = ''
    resultContainer.style.border = 'none'
}