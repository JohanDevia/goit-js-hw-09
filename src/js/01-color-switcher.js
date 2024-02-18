const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let interval;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
startButton.addEventListener('click', () => {
  interval = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
});
stopButton.addEventListener('click', () => {
  clearInterval(interval);
});
