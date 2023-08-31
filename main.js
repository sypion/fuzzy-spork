// Understand that these are the only options possible

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


// Let the computer choose first
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Prompt the player for their choice
function getPlayerChoice() {
    let playerSelection;
    let validInput = false;
    while (!validInput) {
        playerSelection = prompt("What's your move: rock, paper or scissors?")
        playerSelection = playerSelection.toLowerCase(); // always output the user's answer lowercase

        // Ensure that what was entered is 
        if (playerSelection === ROCK || playerSelection === PAPER || playerSelection === SCISSORS) {
            validInput = true;
        }
    }
    return playerSelection;
}

// On your marks!

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

// Get set...

let playerScore = 0
let computerScore = 0

// Go!

function playRound(playerSelection, computerSelection) {

    // Player wins

    if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore += 1;
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection} You win this round!`);
        console.log("The score is now " + playerScore +"! Onwards and upwards.");

    // Computer wins

    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
		(computerSelection === "paper" && playerSelection === "rock") ||
		(computerSelection === "scissors" && playerSelection === "paper")
    ) {
        computerScore += 1
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. The computer wins this round!`)
        console.log(`Your score is ${playerScore}! Keep going.`)

    // Tie

    } else if (
        (playerSelection === computerSelection)
    ) {
        console.log(`Looks like it\'s a tie, as you both chose ${playerSelection}!`)
        console.log(`The score is ${playerScore}!`)
    }

};


// Output result in console

console.log(playRound(playerSelection, computerSelection));