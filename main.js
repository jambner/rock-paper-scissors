/* 1. Make the scissors/rock/paper into an array
2. make the function randomize */

function computerPlay () {
    const range = ["rock","paper","scissors"];
    const randomselect = range[Math.floor(Math.random() * range.length)];
    return randomselect; 
}

function playerPlay() {
       let playerbutton1 = document.getElementById("Rock");
       let playerbutton2 = document.getElementById("Paper");
       let playerbutton3 = document.getElementById("Scissors");

           if (playerbutton1) {
                  playerbutton1.addEventListener("click", function(){
                        playerSelection==="Rock";
                  }, false);
            } else if (playerbutton2) {
                  playerbutton2.addEventListener("click", function(){
                        playerSelection==="Paper";
                  });
            } else if (playerbutton3) {
                  playerbutton3.addEventListener("click", function(){
                        playerSelection==="Scissors";
                  });
            }
}


function gameround (playerSelection, ComputerSelection) {
    if (playerSelection === ComputerSelection) {
        return 'It\'s a draw !';
      } else if (playerSelection === 'Rock') {
            return (ComputerSelection === 'Paper') ? 'Computer wins' : 'You win !';
      } else if (playerSelection === 'Paper') {
            return (ComputerSelection === 'Scissors') ? 'Computer wins' : 'You win !';
      } else if (playerSelection === 'Scissors') {
            return (ComputerSelection === 'Rock') ? 'Computer wins' : 'You win !';
      }
}
/* ^ Function wont work with computerplay or playerselection?*/
const playerSelection = playerPlay();
const ComputerSelection = computerPlay();
console.log(ComputerSelection);
console.log(gameround(playerSelection, ComputerSelection));

function game () {
    for (let i = 0; i < 5; i++) {
      gameround();
    }
}