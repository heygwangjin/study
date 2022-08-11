'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelectorAll('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Starting conditions
// name0El.textContent = prompt('Please Enter a Name For Player 1');
// name1El.textContent = prompt('Please Enter a Name For Player 2');

const scores = [0, 0];
let currentScore, activePlayer, playing;

const init = function () {
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scores.fill(0);

  score0El.textContent = 0; // JavaScript automatically converts this number to string
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); // Remove, If it's present. Add, If it's not present. That is absolutely toggle.
  player1El.classList.toggle('player--active');
};

// Modal Functionality
const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openModal = function (winner) {
  modal.children[0].textContent = `${winner} is Winner! 🏆`;
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll.
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100?
    if (scores[activePlayer] >= 100) {
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      const winner = document.getElementById(
        `name--${activePlayer}`
      ).textContent;

      openModal(winner);

      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.forEach(function (e) {
  e.addEventListener('click', function () {
    init();
    closeModal();

    const isWinner = document.querySelector('.player--winner');
    if (isWinner) {
      isWinner.classList.remove('player--winner');
      player0El.classList.add('player--active');
    } else {
      player0El.classList.add('player--active');
      player1El.classList.remove('player--active');
    }
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

init();
