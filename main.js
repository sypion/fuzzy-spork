// Let the computer choose first
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

// Prompt the player for their choice
function getPlayerChoice() {
    let playerSelection;
    playerSelection = prompt("What's your move: rock, paper or scissors?")
    playerSelection = playerSelection.toLowerCase(); // always output the user's answer lowercase
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

    if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore += 1
        console.log("You chose " + playerSelection + " and the computer chose " + computerSelection + ". You win this round!")
        console.log("The score is now " + playerScore +"! Onwards and upwards.")
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
		(computerSelection === "paper" && playerSelection === "rock") ||
		(computerSelection === "scissors" && playerSelection === "paper")
    ) {
        computerScore += 1
        console.log("You chose " + playerSelection + " and the computer chose " + computerSelection + ". The computer wins this round!")
        console.log("The score is now " + playerScore +"! Keep going.")
    } else if (
        (playerSelection === computerSelection)
    ) {
        console.log("Looks like it\'s a tie, as you both chose " + playerSelection + "!")
        console.log("The score is now " + playerScore +"!")
    }

};

// Output result in console

console.log(playRound(playerSelection, computerSelection));