import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/confetti.css');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const startBtn = document.querySelector('button[data-start]');
const TimerDaysEl = document.querySelector('span[data-days]');
const TimerHoursEl = document.querySelector('span[data-hours]');
const TimerMinutesEl = document.querySelector('span[data-minutes]');
const TimerSecondsEl = document.querySelector('span[data-seconds]');
const inputEl = document.querySelector('input');

startBtn.disabled = true;
let selectedData = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedData = selectedDates[0];
    if (selectedData < new Date()) {
      {
        Notify.warning(`Please choose a date in the future `);
        startBtn.disabled = true;
      }
    } else {
      Notify.success(`Let's go, press start button 😊`);
      startBtn.disabled = false;
    }
  },
};

flatpickr('input[type="text"]', options);

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function writeInMarking({ days, hours, minutes, seconds }) {
  TimerDaysEl.textContent = `${days}`;
  TimerHoursEl.textContent = `${hours}`;
  TimerMinutesEl.textContent = `${minutes}`;
  TimerSecondsEl.textContent = `${seconds}`;
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  let intervalId = null;
  intervalId = setInterval(() => {
    let currentDate = new Date();
    let deltaTime = selectedData - currentDate;
    inputEl.disabled = true;
    if (deltaTime < 1000) {
      clearInterval(intervalId);
      Report.success('congratulations, time is up!');
      inputEl.disabled = false;
    }
    let time = convertMs(deltaTime);
    writeInMarking(time);
  }, 1000);
});
