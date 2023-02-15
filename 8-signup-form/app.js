const input = document.querySelectorAll('.input');
const wrap = document.querySelectorAll('.wrap__input');
const alert = document.querySelectorAll('.alert');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i].value == '') {
      alert[i].className = 'alert';
      input[i].placeholder = '';
      input[i].classList = 'icon-alert input';
      input[2].className = 'icon-alert input input--email';
      input[2].placeholder = 'email@example/com';
    } else {
      input[i].classList = 'input';
      alert[i].className = 'hiddened';
    }
  }
});
