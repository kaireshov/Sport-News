const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  if (body.classList.contains('day-theme')) {
    body.classList.remove('day-theme');
    body.classList.add('night-theme');
    themeToggleBtn.textContent = 'Дневная тема';
  } else {
    body.classList.remove('night-theme');
    body.classList.add('day-theme');
    themeToggleBtn.textContent = 'Ночная тема';
  }
});
