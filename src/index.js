import './style.css';
import display from './modules/store.js';
import { clearCompleted } from './modules/creet.js';

const enterBtn = document.querySelector('.enter-btn');
const clearCheck = document.querySelector('.clear');

clearCheck.addEventListener('click', () => {
  const task = display.getTodo();
  const todo = clearCompleted(task);
  localStorage.setItem('todo', JSON.stringify(todo));
  display.loadTodo(todo);
});

window.addEventListener('DOMContentLoaded', () => {
  const task = display.getTodo();
  display.loadTodo(task);
});

enterBtn.addEventListener('click', () => {
  display.addTodo();
});
