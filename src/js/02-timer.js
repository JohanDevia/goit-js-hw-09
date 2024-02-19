import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let days = Math.floor(ms / day);
  let hours = Math.floor((ms % day) / hour);
  let minutes = Math.floor(((ms % day) % hour) / minute);
  let seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      alert('Please choose a date in the future', 'error');
      return;
    }
    button.classList.remove('disabled');
  },
};

const fp = flatpickr('#datetime-picker', options);
const button = document.querySelector('[data-start]');

function startCountdown() {
  button.classList.add('disabled');

  const selectedDate = fp.selectedDates[0];

  let msDiff = selectedDate - new Date();
  let intervalId = setInterval(() => {
    msDiff -= 1000;

    let { days, hours, minutes, seconds } = convertMs(msDiff);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);

    if (msDiff <= 0) {
      clearInterval(intervalId);
      alert('Countdown finished!', 'success');
    }
  }, 1000);
}

button.addEventListener('click', startCountdown);
