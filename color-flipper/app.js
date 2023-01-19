const hex = [1, 2, 3, 4, 5, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const color = document.getElementById('color');
const btn = document.getElementById('btn');

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

const getColor = () => {
  let hexColor = '#';
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};

btn.addEventListener('click', getColor);
