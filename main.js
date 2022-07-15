/* 1. Make the scissors/rock/paper into an array
2. make the function randomize */


function computerPlay (numoftries) {
    const range = ["Rock","Paper","Scissors"];
    const randomselect = range[Math.floor(Math.random() * range.length)];
    return randomselect;
}

console.log(computerPlay());

