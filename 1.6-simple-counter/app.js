const value = document.getElementById('value');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

let counter = 0;
value.textContent = counter;

decrease.addEventListener('click', () => {
  counter--;
  value.textContent = counter;
  if (counter < 0) {
    value.style.color = '#ff0000';
  }
});

reset.addEventListener('click', () => {
  counter = 0;
  value.textContent = counter;
  value.style.color = '#000000';
});

increase.addEventListener('click', () => {
  counter++;
  value.textContent = counter;
  if (counter > 0) {
    value.style.color = '#006400';
  }
});
