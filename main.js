window.addEventListener("DOMContentLoaded", main);

let timeoutRef;
let breakInterval;  // lagt i ett global scope för att kuna ändra värdet i det och hämtas in i andra funktioner.

function main() {
  // Start på programmet
  // main är en callback funktion

  timeoutRef = setTimeout(changeBackgroundColor, 4000);
  addEventListeners(changeBackgroundColor);
}

function changeBackgroundColor() {
  document.body.style.background = getRandomColor();
}

function addEventListeners() {
  const cancelTimeoutBtn = document.getElementById("cancel");
  cancelTimeoutBtn.addEventListener("click", cancelBackgroundChange);

  const cancelIntervalBtn = document.getElementById("stop-interval");  // Hämtar id från knapp och knapp tilldelas click och kör cancelBackgroundColor
  cancelIntervalBtn.addEventListener("click", cancelBackgroundInterval);

  const startIntervalButton = document.getElementById("start-interval");
  startIntervalButton.addEventListener("click", startBackgroundChangeInterval);
}

function cancelBackgroundChange() {
  clearTimeout(timeoutRef);
}
// Ny function som stänger av intervallen
// ---------------------------------------------------------------
function cancelBackgroundInterval() {    // Functionen som kör och hämtar värdet i den globala var breakInterval så ATT det kan avbyta funktionen. 
  clearInterval(breakInterval);
}



function startBackgroundChangeInterval() {
  breakInterval = setInterval(changeBackgroundColor, 500);  // breakInterval får värdet av setInterval som sätts in i globala var breakInterval
}
// ------------------------------------------------------------
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
