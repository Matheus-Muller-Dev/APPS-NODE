let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const cronometro = document.getElementById('cronometro');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimer() {
    const now = Date.now();
    const difference = now - startTime + elapsedTime;
    cronometro.textContent = formatTime(difference);
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        startTime = Date.now();
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
    }
});

stopButton.addEventListener('click', () => {
    if (isRunning) {
        elapsedTime += Date.now() - startTime;
        clearInterval(timer);
        isRunning = false;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    cronometro.textContent = "00:00:00";
});

