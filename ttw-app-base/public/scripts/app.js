import moment from 'moment';
import logger from './logger.js';

const todayMoment = moment();

const emotions = [
  '😪', // sunday or default
  '💀', // monday
  '🤯', // tuesday
  '😫', // wednesday
  '😓', // thursday
  '🤩', // friday
  '🤤' // saturday
];

const config = {
  resetTimer: 5000
};

/**
 * set the emoji based on the current day
 */
function updateEmotion(dayOfWeek = Math.floor(Math.random() * 6)) {
  const face = document.querySelector('.large-emoji-icon');

  logger.logFormatted('Updating emotion to day:', +dayOfWeek + 1);

  face.innerHTML = emotions[dayOfWeek];
}

const button = document.querySelector('.btn-primary');

button.addEventListener('click', () => {
  logger.logFormatted('Checking for weekend');

  let weekendMoment = todayMoment.day(6);

  let daysUntil = weekendMoment.format('DD-MMM-YYYY');
  let timeUntil = weekendMoment.fromNow();
  let inSeconds = weekendMoment.diff(moment(), 'seconds');

  logger.logGrouped(weekendMoment, timeUntil, inSeconds);

  button.innerHTML = timeUntil;
  button.classList.remove('btn-primary');
  button.classList.add('btn-secondary');

  updateEmotion(todayMoment.format('e'));

  setTimeout(resetButton, config.resetTimer);
});

/**
 * reset button back to default
 */
function resetButton() {
  button.innerHTML = 'Back to work';
  button.classList.remove('btn-secondary');
  button.classList.add('btn-primary');
}

updateEmotion();
