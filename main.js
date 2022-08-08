const computerScoreSpan = document.querySelector('[data-computer-score]');
const playerScoreSpan = document.querySelector('[data-player-score]');
const range = ["Rock","Paper","Scissors"];

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

      if (yourWinner) incrementsScore(playerScoreSpan) //if player wins increase score by 1
      if (computerWinner) incrementsScore(computerScoreSpan) //if computer wins increase score by 1
}

function incrementsScore(scoreSpan) {
      scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1 //makes the text as an integer and go by 1
}


function addSelectionResult(playerSelection, winner) {

}

function isWinner(){
      //function of being winner chicken dinner
}

/* 1. Make the scissors/rock/paper into an array
2. make the function randomize */
function computerPlay () {
      const randomselect = range[Math.floor(Math.random() * range.length)];
      return randomselect; 
  }

