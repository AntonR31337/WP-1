
const timerDisplay = document.querySelector('.timer__display');

let timerInput = document.getElementById("time");
console.dir(timerInput);

let timer = null;

export function startInterval(time) {
    time = timerInput.value;
    timer = setInterval(function() {
        if (time <= 1) {
            stopInterval();
        } else if (time < 4) {
            console.log(`Осталось ${time}`);
        }
      time--;
      timerDisplay.textContent = time;
    }, 1000);
  }

export function stopInterval() {
    clearInterval(timer);
  }  
