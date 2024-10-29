const form = document.getElementById('greeting-form');
const nameInput = document.getElementById('name');
const greeting = document.getElementById('greeting');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  greeting.textContent = `Спасибо за ваше сообщение, ${name}!`;
});