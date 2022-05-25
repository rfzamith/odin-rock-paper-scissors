/*

https://tmcerlean.github.io/rock-paper-scissors/

In this game, you and your opponent will each play one of the three objects — either rock, paper or scissors. You’ll then name a winner based on which object they played.

Rock > Scissors
Paper > Rock
Scissors > Paper

At the start of the game, the player will choose one of the three objects available.

The computer will also randomly select an object, and the two hands will be compared. A winner will be announced.
*/


function computerPlay(myArray) {
  const randomIndex = Math.floor(Math.random() * myArray.length);
  const item = myArray[randomIndex];
  return item;
}

const objects = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function playGame(x,y) {
  y = computerPlay(objects);
  x = prompt('Choose your object!');
  x = x.toLowerCase();
  if(x == 'rock') { 
    if(y == 'rock') { console.log('Rock vs Rock! It\'s a tie!'); }
    if(y == 'paper') { console.log('Rock vs Paper! You lost!'); computerScore++; }
    if(y == 'scissors') { console.log('Rock vs Scissors! You won!'); playerScore++; }
  }
  else if(x == 'paper') {
    if(y == 'paper') { console.log('Paper vs Paper! It\'s a tie!'); }
    if(y == 'scissors') { console.log('Paper vs Scissors! You lost!'); computerScore++ }
    if(y == 'rock') { console.log('Paper vs Rock! You won!'); playerScore++; }
  }
  else if(x == 'scissors') {
    if(y == 'scissors') { console.log('Scissors vs Scissors! It\'s a tie!'); }
    if(y == 'rock') { console.log('Scissors vs Rock! You lost!'); computerScore++ }
    if(y == 'paper') { console.log('Scissors vs Paper! You won!'); playerScore++; }
  }
  else { console.log('Object not found!'); }
  console.log('Score: ' + playerScore + " x " + computerScore);
}

for (let i = 0; i < 5; i++) {
  playGame();
}



/*
const computer = computerPlay(array);
const player = prompt('Choose');
console.log(result);

if(num == 10) {
  console.log('x is 10.');
} else if(num > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is not 10');
}
*/