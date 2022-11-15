window.addEventListener("DOMContentLoaded", main);

let timeoutRef;
// let breakInterval;

function main() {
  // Start på programmet
  // main är en callback funktion

  timeoutRef = setTimeout(changeBackgroundColor, 4000);
  addEventListeners();

  intervalRef = setInterval(startBackgroundChangeInterval);
}

function changeBackgroundColor() {
  document.body.style.background = getRandomColor();
}

function addEventListeners() {
  const cancelTimeoutBtn = document.getElementById("cancel");
  cancelTimeoutBtn.addEventListener("click", cancelBackgroundChange);

  const startIntervalButton = document.getElementById("start-interval");
  startIntervalButton.addEventListener("click", startBackgroundChangeInterval);
}

function cancelBackgroundChange() {
  clearTimeout(timeoutRef);
}
// Ny function som stänger av intervallen
// ---------------------------------------------------------------
function cancelBackgroundInterval() {
  clearInterval(intervalRef);
}

function clickToStopInterval() {
  const cancelIntervall = document.getElementById("stop-interval");
  cancelIntervall.addEventListener("click", cancelBackgroundInterval);
}

// ------------------------------------------------------------

function startBackgroundChangeInterval() {
  setInterval(changeBackgroundColor, 500);
}

function getRandomColor() {
  const value = Math.random();

  if (value < 0.2) {
    return "blue";
  } else if (value < 0.4) {
    return "red";
  } else if (value < 0.6) {
    return "green";
  } else if (value < 0.8) {
    return "yellow";
  } else {
    return "pink";
  }
}
