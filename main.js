function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {

    if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		playerScore += 1
        console.log("You chose " + playerSelection + " and the computer chose " + computerSelection + ". You win this round!")
    } else if (
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
		(computerSelection === "Paper" && playerSelection === "Rock") ||
		(computerSelection === "Scissors" && playerSelection === "Paper")
    ) {
        computerScore += 1
        console.log("You chose " + playerSelection + " and the computer chose " + computerSelection + ". The computer wins this round!")
    } else if (
        (playerSelection === computerSelection)
    ) {
        console.log("Looks like it\'s a tie, as you both chose " + playerSelection + "!")
    }

};

console.log(playRound(playerSelection, computerSelection));