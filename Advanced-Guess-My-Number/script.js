'use strict';

let score = 20;
let highscore = 0;
let guess = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number!');
  } else if (guess == secretNumber) {
    displayMessage('Correct number!');
    if (score > highscore) {
      highscore = score;
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = guess;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess > secretNumber) {
    getScore();
  } else if (guess < secretNumber) {
    getScore();
  }
});

function getScore() {
  if (score > 1) {
    displayMessage('Too high!');
    score--;
  } else {
    displayMessage('You lost the game!');
  }
  document.querySelector('.score').textContent = score;
}

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
});
