let playerScore = 0
let playerLevel = 0

let computerScore = 0
let computerLevel = 0

let winLose = ''


let buttons = document.querySelectorAll('.selection')
let playerHealth = document.querySelector('.playerHealth')
let playerPic = document.querySelector('#pikachuPic')
let computerPic = document.querySelector('#meowthPic')
let computerHealth = document.querySelector('.computerHealth')
let playAgainButton = document.querySelector('#playAgain')

// starts up initial game
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore === 5 || computerScore === 5) {
            return
        }
        let playerSelection = button.id
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        playerHealth.innerText = updateLives(computerScore)
        computerHealth.innerText = updateLives(playerScore)
        updateScore()
        // remove img animation classes
        playerPic.addEventListener('animationend', (e) => {
            playerPic.classList.remove('blinkImage');
            playerPic.classList.remove('shakeImage');
        });
        computerPic.addEventListener('animationend', (e) => {
            computerPic.classList.remove('blinkImage');
            computerPic.classList.remove('shakeImage');
        });
        if (playerScore === 5 || computerScore === 5) {
            nameWinner()
            playAgainButton.classList.toggle('hidden')
        }        
    })
})

// restarts a new game
playAgainButton.addEventListener('click', newGame)

// computerPlay function    
function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * 3)]
}


let reportPlayer = document.querySelector('#reportPlayer')
let reportComputer = document.querySelector('#reportComputer')
let reportRound = document.querySelector('#reportRound')

// playRound function
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winLose = 'tied'
    } else if (playerSelection === 'rock') {
        if (computerSelection == 'scissors') {
            winLose = 'won'
            playerScore++
        }
        else {
            winLose = 'lost'
            computerScore++
        }            
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            winLose = 'won'
            playerScore++
        }
        else {
            winLose = 'lost'
            computerScore++
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            winLose = 'won'
            playerScore++
        }
        else {
            winLose = 'lost'
            computerScore++
        }
    }
    reportPlayer.innerText = `Pikachu: ${playerSelection}!`
    reportComputer.innerText = `Meowth: ${computerSelection}!`
    reportRound.innerText = `Round ${winLose}!`

    if (winLose === 'won') {
        document.querySelector('#meowthPic').classList.add('blinkImage')
    } else if (winLose === 'lost') {
        document.querySelector('#pikachuPic').classList.add('blinkImage')
    } else if (winLose === 'tied') {
        document.querySelector('#pikachuPic').classList.add('shakeImage')
        document.querySelector('#meowthPic').classList.add('shakeImage')
    }
}

// show life count
function updateLives(opponentScore) {
    let heartText = ''
    for (let i = 0; i < (5 - opponentScore); i++) {
        heartText += '♥'
    }
    return heartText
}

// update score text
function updateScore() {
    document.querySelector('.playerScore').innerText = `${playerScore}`
    document.querySelector('.computerScore').innerText = `${computerScore}`
}


let gameContainer = document.querySelector('.gameContainer')
let finalResult = document.querySelector('#finalResult')

// announce winner
function nameWinner() {
    gameContainer.style.border = '5px double black'
    if (playerScore > computerScore) {
        finalResult.innerText = `Nice! Pikachu won ${playerScore} - ${computerScore}`
        finalResult.style.color = 'darkgreen'
        playerLevel++
    }
    else {
        finalResult.innerText = `Sorry, Pikachu lost ${playerScore} - ${computerScore}`
        finalResult.style.color = 'red'
        computerLevel++
    }
}


let playerLv= document.querySelector('.playerLevel')
let computerLv = document.querySelector('.computerLevel')

// reset game
function newGame() {
    playerScore = 0
    computerScore = 0
    updateScore()
    playerHealth.innerText = updateLives(computerScore)
    computerHealth.innerText = updateLives(playerScore)
    playerLv.innerText = playerLevel
    computerLv.innerText = computerLevel
    playAgainButton.classList.toggle('hidden')
    reportPlayer.innerText = ''
    reportComputer.innerText = ''
    reportRound.innerText ='Help Pikachu defeat Meowth!'
    finalResult.innerText = ''
    gameContainer.style.border = 'none'

    // remove img animation classes
    document.querySelector('#pikachuPic').classList.remove('blinkImage')
    document.querySelector('#pikachuPic').classList.remove('shakeImage')
    document.querySelector('#meowthPic').classList.remove('blinkImage')
    document.querySelector('#meowthPic').classList.remove('shakeImage')
}