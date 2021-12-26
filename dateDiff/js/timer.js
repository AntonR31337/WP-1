

const timerDisplay = document.querySelector('.timer__display');

let timerInput = document.getElementById("time");
console.dir(timerInput);

let timer = null;

export function startInterval(time) {
    time = timerInput.value;
    timer = setInterval(function() {
        if (time < 1) {
          clearInterval(timer);
          console.log(`Время вышло`);
        } else if (time <= 5) {
          console.log(`Осталось ${time}`);
        }
        timerDisplay.textContent = time;
      --time;
    }, 1000);
  }

export function stopInterval() {
    clearInterval(timer);
  }  
