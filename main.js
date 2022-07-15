/* 1. Make the scissors/rock/paper into an array
2. make the function randomize */


function computerPlay (numoftries) {
    const range = ["rock","paper","scissors"];
    const randomselect = range[Math.floor(Math.random() * range.length)];
    return randomselect;
}

console.log(computerPlay());

function gameround (playerSelection, ComputerSelection) {
    if (playerSelection === ComputerSelection) {
        return 'It\'s a draw !';
      } else if (playerSelection === 'rock') {
            return ComputerSelection === 'paper' ? 'Computer wins' : 'You win !';
      } else if (playerSelection === 'paper') {
            return ComputerSelection === 'scissors' ? 'Computer wins' : 'You win !';
      } else if (playerSelection === 'scissors') {
            return ComputerSelection === 'rock' ? 'Computer wins' : 'You win !';
      }
}
/* ^ Find a way to make the string have value?? ^ */
const playerSelection = "rock";
console.log(playerSelection);
const ComputerSelection = computerPlay();
console.log(gameround(playerSelection, ComputerSelection));

function game () {
    
}