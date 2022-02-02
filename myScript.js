// create function computerPlay that randomly selects R, P, or S
    // randomly select number 0-2 inclusive, corresponds to R, P, S
    // return output to computerSelection
    
function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3);
    return options[rand];
}

// collect user input in playerSelection NOTE: case-insensitive aka use toLowerCase

// create function takes 2 parameters (playerplayerSelection & computerSelection)
    // logic to determine result for all 3 cases
        // tie - replay round
        // win
        // loss

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie Game!");
        return "Tie Game!";
    } else if (playerSelection === "rock") {
        if (computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors");
            return "You Win!";
        }
        else if (computerSelection == "paper") {
            console.log("You Lose! Paper beats Rock");
            return "You Lose!";
        }            
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You Win! Paper beats Rock");
            return "You Win!";
        }
        else if (computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            return "You Lose!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("You Win! Scissors beats paper");
            return "You Win!";
        }
        else if (computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors");
            return "You Lose!";
        }
    }
}

// const playerSelection = (prompt("Please enter rock, paper, or scissors: ").toLowerCase());
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// create counter, if counter <=5 proceed
// while tie == true
    // perform playRound
    // if decisive round, tie = false, counter++
    // if tie, tie remains true


function game(rounds) {
    let counter = 1;
    let playerScore = 0;
    let computerScore = 0;
    while (counter <= (Math.floor(rounds/2) + 1)) {
        let playerSelection = (prompt("Please enter rock, paper, or scissors: ").toLowerCase());
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == "You Win!"  || result == "You Lose!") {
            if (result === "You Win!") {
                playerScore++;
            } else {
                computerScore++;
            }
            counter++;
        }    
    }
    if (playerScore > computerScore) {
        console.log(`Congratulations, you beat the computer! The final score was Player: ${playerScore} - Computer: ${computerScore}! :)`);
    }
    else {
        console.log(`Sorry, you lost to the computer. The final score was Player: ${playerScore} - Computer: ${computerScore}. :(`);
    }
}

let rounds = parseInt(prompt("Please enter how many (odd) rounds would you like to play best out of: "));
game(rounds);