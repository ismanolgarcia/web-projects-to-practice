const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const pError = document.querySelector('.hiddened');

btn.addEventListener('click', () => {
  if (input.value == '') {
    pError.className = 'p-error';
    input.className = 'error input';
  } else {
    input.className = 'input';
    pError.className = 'hiddened';
  }
});
