game();

// create function computerPlay that randomly selects R, P, or S
    // randomly select number 0-2 inclusive, which corresponds to R, P, or S
    // return output to computerSelection
    
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}


// create function takes 2 parameters (playerplayerSelection & computerSelection)
    // logic to compare 2 parameters and determine result for all 3 cases
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


// create function that iterates X number of times
// while counter < X
    // perform playRound
        // win OR lose, counter++, adjust individual score
// report final score to console

function game() {
    let counter = 1;
    let playerScore = 0;
    let computerScore = 0;
    while (counter <= 5) {
        // collect user input in playerSelection NOTE: case-insensitive aka use toLowerCase
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