/*

https://tmcerlean.github.io/rock-paper-scissors/

In this game, you and your opponent will each play one of the three objects — either rock, paper or scissors. You’ll then name a winner based on which object they played.

Rock > Scissors
Paper > Rock
Scissors > Paper

At the start of the game, the player will choose one of the three objects available.

The computer will also randomly select an object, and the two hands will be compared. A winner will be announced.
*/

// Function to write text before game starts
let i = 0;
let txt = 'Rock, Paper, Scissors';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("newGame").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

function computerPlay(myArray) {
  const randomIndex = Math.floor(Math.random() * myArray.length);
  const item = myArray[randomIndex];
  return item;
}

const objects = ['rock', 'paper', 'scissors'];
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const playerRock = document.querySelector('.rock');
const playerPaper = document.querySelector('.paper');
const playerScissors = document.querySelector('.scissors');
const computerRock = document.querySelector('.rock2');
const computerPaper = document.querySelector('.paper2');
const computerScissors = document.querySelector('.scissors2');
const playerSco = document.querySelector('.playerScore');
const computerSco = document.querySelector('.computerScore');
const msg = document.querySelector('.message');
const startButton = document.querySelector('.button');


// playRound();

// function playRound() {
//   for (let i = 0; i < 5; i++) {
//     playerRock.addEventListener('click', pickObject);
//   }
// }

startButton.addEventListener('click', startMessage);

function pickRock() {
  playGame('rock',computerPlay(objects));
}
function pickPaper() {
  playGame('paper',computerPlay(objects));
}
function pickScissors() {
  playGame('scissors',computerPlay(objects));
}
function startMessage() {
  playerScore = 0;
  computerScore = 0;
  playerSco.innerHTML = 'Score: ' + playerScore;
  computerSco.innerHTML = 'Score: ' + computerScore;
  msg.innerHTML = 'Pick an object and start playing!';
  startButton.innerHTML = '<a href="javascript:void(0)">Restart game</a>';
  playerRock.addEventListener('click', pickRock);
  playerPaper.addEventListener('click', pickPaper);
  playerScissors.addEventListener('click', pickScissors);
}

function clearAllObjects() {
  playerRock.classList.value = 'rock';
  playerPaper.classList.value = 'paper';
  playerScissors.classList.value = 'scissors';
  computerRock.classList.value = 'rock2';
  computerPaper.classList.value = 'paper2';
  computerScissors.classList.value = 'scissors2';
}

function myTimeout() {
  t = setTimeout(clearAllObjects, 700);
}
function stopTimeout() {
  clearTimeout(t);
}

function playGame(x,y) {
  clearAllObjects();
  if(x == 'rock') {
    playerRock.classList.value = 'rock-selected';
    myTimeout();
    if(y == 'rock') {
      msg.innerHTML = 'Rock vs Rock. It\'s a tie!';
      computerRock.classList.value = 'rock-selected2';
    }
    if(y == 'paper') {
      msg.innerHTML = 'Rock vs Paper. You lost!';
      computerPaper.classList.value = 'paper-selected2';
      computerScore++;
      computerSco.innerHTML = 'Score: ' + computerScore;
    }
    if(y == 'scissors') { 
      msg.innerHTML = 'Rock vs Scissors. You won!';
      computerScissors.classList.value = 'scissors-selected2';
      playerScore++; 
      playerSco.innerHTML = 'Score: ' + playerScore;
    }
  }
  else if(x == 'paper') {
    playerPaper.classList.replace('paper','paper-selected');
    myTimeout();
    if(y == 'paper') { 
      msg.innerHTML = 'Paper vs Paper. It\'s a tie!';
      computerPaper.classList.value = 'paper-selected2';
    }
    if(y == 'scissors') { 
      msg.innerHTML = 'Paper vs Scissors. You lost!';
      computerScissors.classList.value = 'scissors-selected2';
      computerScore++;
      computerSco.innerHTML = 'Score: ' + computerScore;
     }
    if(y == 'rock') { 
      msg.innerHTML = 'Paper vs Rock. You won!';
      computerRock.classList.value = 'rock-selected2';
      playerScore++;
      playerSco.innerHTML = 'Score: ' + playerScore;
     }
  }
  else if(x == 'scissors') {
    playerScissors.classList.replace('scissors','scissors-selected');
    myTimeout();
    if(y == 'scissors') { 
      msg.innerHTML = 'Scissors vs Scissors. It\'s a tie!'; 
      computerScissors.classList.value = 'scissors-selected2';
    }
    if(y == 'rock') { 
      msg.innerHTML = 'Scissors vs Rock. You lost!'; 
      computerRock.classList.value = 'rock-selected';
      computerScore++;
      computerSco.innerHTML = 'Score: ' + computerScore;
    }
    if(y == 'paper') { 
      msg.innerHTML = 'Scissors vs Paper. You won!'; 
      computerPaper.classList.value = 'paper-selected2';
      playerScore++; 
      playerSco.innerHTML = 'Score: ' + playerScore;
    }
  }
  console.log('Score: ' + playerScore + " x " + computerScore);
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