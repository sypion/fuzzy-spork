// Let the computer choose first
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

// Prompt the player for their choice
function getPlayerChoice() {
    let playerSelection;
    playerSelection = prompt("What's your move: rock, paper or scissors?")
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

// On your marks!

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {

    if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore += 1
        console.log("You chose " + playerSelection + " and the computer chose " + computerSelection + ". You win this round!")
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
		(computerSelection === "paper" && playerSelection === "rock") ||
		(computerSelection === "scissors" && playerSelection === "paper")
    ) {
        computerScore += 1
        console.log("You chose " + playerSelection + " and the computer chose " + computerSelection + ". The computer wins this round!")
    } else if (
        (playerSelection === computerSelection)
    ) {
        console.log("Looks like it\'s a tie, as you both chose " + playerSelection + "!")
    }

};

// Output result in console

console.log(playRound(playerSelection, computerSelection));