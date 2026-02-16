let timeLeft;
let timerId = null;
let currentMode = "work"; //short break, long break

const modes = {
  work: 25 * 60,
  short: 5 * 60,
  long: 15 * 60
}
