let timeLeft;
let timerId = null;
let currentMode = "work"; //short break, long break

const modes = {
  work: 25 * 60,
  short: 5 * 60,
  long: 15 * 60
}

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");

timeLeft = modes[currentMode];

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timerDisplay.textContent = display;
    document.title = `${display} - Focus`;
}

function toggleTimer() {
    if (timerId) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    startBtn.textContent = 'Pause';
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft === 0) {
            clearInterval(timerId);
            alert("Time's up!");
            resetTimer();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
    startBtn.textContent = 'Start';
}

function resetTimer() {
    pauseTimer();
    timeLeft = modes[currentMode];
    updateDisplay();
}

function setMode(mode) {
    currentMode = mode;
    
    // Update active button styling
    document.querySelectorAll('.mode-buttons button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase().includes(mode)) btn.classList.add('active');
    });

    // Change background color based on mode
    const colors = { work: '#f05b5bff', short: '#5cc797ff', long: '#44a9e8ff' };
    document.body.style.background = colors[mode];

    resetTimer();
}


updateDisplay();