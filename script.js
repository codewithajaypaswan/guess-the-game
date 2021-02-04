'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = 0;
function loose() {
  document.querySelector('.message').textContent =
    '😢 You lost  the Game Try again';
  document.querySelector('body').style.backgroundColor = '#C70039';
  document.querySelector('.score').textContent = 0;
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = '🎊 You won';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 1) {
    guess > number
      ? (document.querySelector('.message').textContent = '☝To highsa')
      : '👇To low';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    loose();
  }
});
