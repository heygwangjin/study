'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

//* Keyboard events are so-called global events because they do not happen on one specific element.
//* There are three types of events for the keyboard. (key down, key press or the key up)
//* When an event happened, we can have access to information about that event in the event handler function.
//* Hey, JavaScript call function when a keydown event happens. And when you do so, please pass in the event obejct as an argument.
