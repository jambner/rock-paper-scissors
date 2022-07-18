//function playerPlay grabs the ID of the div of which the user clicks. User Input
function playerPlay(id) { 
      const playerSelection = id;
      console.log(playerSelection);
      gameround(playerSelection);
} 


function gameround (playerSelection) {
      const ComputerSelection = computerPlay(); //get computer's selection
      const yourWinner = isWinner(playerSelection, ComputerSelection) //declare 
      const computerWinner = isWinner(ComputerSelection, playerSelection)

      addSelectionResult(ComputerSelection, computerWinner)
      addSelectionResult(playerSelection, yourWinner)

    /*if (playerSelection === ComputerSelection) {
        return 'It\'s a draw !';
      } else if (playerSelection === 'Rock') {
            return (ComputerSelection === 'Paper') ? 'Computer wins' : 'You win !';
      } else if (playerSelection === 'Paper') {
            return (ComputerSelection === 'Scissors') ? 'Computer wins' : 'You win !';
      } else if (playerSelection === 'Scissors') {
            return (ComputerSelection === 'Rock') ? 'Computer wins' : 'You win !';
      }
      console.log()*/
}

function addSelectionResult(playerSelection, winner) {
      //write something to make the text increase by 1
}

function isWinner(){
      //function of being winner chicken dinner
}

/* 1. Make the scissors/rock/paper into an array
2. make the function randomize */
function computerPlay () {
      const range = ["Rock","Paper","Scissors"];
      const randomselect = range[Math.floor(Math.random() * range.length)];
      return randomselect; 
  }
  const ComputerSelection = computerPlay();
  console.log(ComputerSelection);

function game () {
    for (let i = 0; i < 5; i++) {
      gameround();
    }
}

