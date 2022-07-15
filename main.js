/* 1. Make the scissors/rock/paper into an array
2. make the function randomize */

function computerPlay () {
    const range = ["rock","paper","scissors"];
    const randomselect = range[Math.floor(Math.random() * range.length)];
    return randomselect; 
}
function gameround (playerSelection, ComputerSelection) {
    if (playerSelection === ComputerSelection) {
        return 'It\'s a draw !';
      } else if (playerSelection === 'rock') {
            return (ComputerSelection === 'paper') ? 'Computer wins' : 'You win !';
      } else if (playerSelection === 'paper') {
            return (ComputerSelection === 'scissors') ? 'Computer wins' : 'You win !';
      } else if (playerSelection === 'scissors') {
            return (ComputerSelection === 'rock') ? 'Computer wins' : 'You win !';
      }
}
/* ^ Function wont work with computerplay or playerselection?*/
const ComputerSelection = computerPlay();
const playerSelection = "rock";
console.log(ComputerSelection);
console.log(gameround(playerSelection, ComputerSelection));

function game () {
    for (let i = 0; i < 5; i++) {
        
    }

    
}