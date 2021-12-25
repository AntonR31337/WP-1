import { printError, printResult } from './printResult.js';
import getDateDiff from './getDateDiff.js';

const form = document.getElementById('datecalc');

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const firstDate = formData.get('firstDate');
  const secondDate = formData.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Ooopps - введите дату')
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate);
    printResult(dateDiff);
  }
};

// home task 1

const datecalc = document.querySelector('#datecalc');
const timer = document.querySelector('#timer');

document.querySelector('body').addEventListener('click', event => {
  if ( (event.target.tagName == "BUTTON") && (event.target.classList == 'timer--btn' || 'calc--btn')) {
    getHidden();
  } else {
    return
  }
});

function getHidden() {
  datecalc.classList.toggle('active')
  timer.classList.toggle('active')
}