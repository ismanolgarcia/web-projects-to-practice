import checkComplete from './components/checkComplete.js';
import trashIcon from './components/deleteTask.js';

const inputForm = document.querySelector('.form__input');
const btnCreate = document.querySelector('.form__btn');
const cardsList = document.querySelector('.cards__list');

const createTask = (event) => {
  event.preventDefault();
  const value = inputForm.value;

  if (inputForm.value === '') {
    alert('Add task');
  } else {
    const task = document.createElement('li');

    task.classList.add('card');

    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');

    titleTask.classList.add('task');
    titleTask.innerText = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(trashIcon());

    cardsList.appendChild(task);
    inputForm.value = '';
  }
};

btnCreate.addEventListener('click', createTask);
