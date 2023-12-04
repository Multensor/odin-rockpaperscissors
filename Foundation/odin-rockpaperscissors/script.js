// Declare variables
const choices = Array("rock", "paper", "scissors");
let playerWins = 0;
let computerWins = 0;

// Ask for player input
let playerChoice = window.prompt("Rock, Paper or Scissors please:")

// Start the actual game
game();

function getComputerChoice() {
  // Get a random entry from the choices array
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  console.log("### Start round ###");
  console.log("PlayerChoice: " + playerSelection);
  console.log("ComputerChoice: " + computerSelection);
  let playerRoundWin = null;
  if (playerSelection !== computerSelection) {
    // Play actual round
    switch (playerSelection) {
      case "rock":
        // Shorthand for if (computerSelection !== paper) {isWin = true}
        playerRoundWin = computerSelection !== "paper";
        break;
      case "paper":
        playerRoundWin = computerSelection !== "scissors";
        break;
      case "scissors":
        playerRoundWin = computerSelection !== "rock";
        break;
    }
  } else {
    // In case of a tie, replay the round to get a different result
    console.log("### TIE, replay round ###");
    playRound(playerChoice, getComputerChoice())
  }
  return playerRoundWin;
}

function game() {
  // Play until either player or computer has 5 wins
  while (playerWins < 5 && computerWins < 5) {
    // If playRound returns true add 1 to playerWins, else add 1 to computerWins
    if (playRound(playerChoice, getComputerChoice())) {
      playerWins = playerWins + 1;
      console.log("PlayerWins: " + playerWins)
      console.log("ComputerWins: " + computerWins)
    } else {
      computerWins = computerWins + 1;
      console.log("PlayerWins: " + playerWins)
      console.log("ComputerWins: " + computerWins)
    }
  }

  if (playerWins === 5) {
    console.log("You win the overall game! :)");
  } else {
    console.log("You lose the overall game :(");
  }
}