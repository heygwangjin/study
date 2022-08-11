'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBackGroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const changeTextContent = function (className, value) {
  document.querySelector(className).textContent = value;
};

const createRandomNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const playSound = function (file) {
  const sound = new Audio(file);
  sound.play();
};

const LIFE = 10;
changeTextContent('.score', LIFE);

let secretNumber = createRandomNum();
let score = LIFE; //* score variable can also be called a state variable.
let highScore = 0;

//* 1st argument : event type, 2nd argument : function values (We can pass it into another function)
document.querySelector('.check').addEventListener('click', function () {
  // We do not call this function anywhere.
  // Specify what should happen in Event Handler
  const guess = Number(document.querySelector('.guess').value);
  playSound('./sound/click.wav');

  if (document.querySelector('.message').textContent === '🎉 Congratulations!')
    return;

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number!');

    // When players wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Congratulations!');
    changeTextContent('.number', secretNumber);
    changeWidth('30rem');
    changeBackGroundColor('#60b347');
    playSound('./sound/win.wav');
    document.querySelector('.again').classList.add('blinking');

    if (score > highScore) {
      highScore = score;
      changeTextContent('.highscore', highScore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      changeTextContent('.score', --score);
      playSound('./sound/wrong.wav');
    } else {
      displayMessage('💥 You Lost The Game!');
      changeTextContent('.score', 0);
      changeWidth('30rem');
      playSound('./sound/lose.wav');
      document.querySelector('.again').classList.add('blinking');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  playSound('./sound/again.wav');

  // TODO : Restore initial values of the score and secretNumber
  secretNumber = createRandomNum();
  score = LIFE;

  // TODO : Restore the initial conditions of the message, secretNumber, score and guess input field
  displayMessage('Start Guessing...');
  changeTextContent('.number', '?');
  changeTextContent('.score', score);
  changeTextContent('.guess', '');

  // TODO : Restore the original background color (#222), number width (15rem) and remove blink effect
  changeWidth('15rem');
  changeBackGroundColor('#222');
  document.querySelector('.again').classList.remove('blinking');
});
