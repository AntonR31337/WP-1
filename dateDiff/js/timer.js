const timerDisplay = document.querySelector('.timer__display');

let timerInput = document.getElementById("time");
console.dir(timerInput);

let timer = null;

export function startInterval(time) {
    time = timerInput.value;
    timer = setInterval(function() {
      time--;
      timerDisplay.textContent = time;
    }, 1000);
  }

export function stopInterval() {
    clearInterval(timer);
  }  