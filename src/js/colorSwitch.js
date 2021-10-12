const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector('body');
let intervalId = '';
stopBtn.disabled = true;

startBtn.addEventListener('click', startBtnClick);
stopBtn.addEventListener('click', stopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switcher = () => {
  bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

function startBtnClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(switcher, 1000);
}

function stopBtnClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalId);
}
