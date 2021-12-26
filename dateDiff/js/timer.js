import {Howl} from 'howler';

const soundEnd = new Howl({
  src: ['../../mp3/gong.mp3']
});
const soundEnding = new Howl({
  src: ['../../mp3/beep.mp3']
});

const timerDisplay = document.querySelector('.timer__display');

let timerInput = document.getElementById("time");

let timer = null;

export function startInterval(time) {
    time = timerInput.value;
    timer = setInterval(function() {
        if (time < 1) {
          clearInterval(timer);
          soundEnd.play();
          console.log(`Время вышло`);
        } else if (time <= 5) {
          soundEnding.play();
          console.log(`Осталось ${time}`);
        }
        timerDisplay.textContent = time;
      --time;
    }, 1000);
  }

export function stopInterval() {
    
    clearInterval(timer);
  }  


  //




