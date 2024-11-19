const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggleBtn.textContent = savedTheme === 'day-theme' ? 'Ночная тема' : 'Дневная тема';
} else {
  body.classList.add('day-theme');
}

themeToggleBtn.addEventListener('click', () => {
  if (body.classList.contains('day-theme')) {
    body.classList.replace('day-theme', 'night-theme');
    themeToggleBtn.textContent = 'Дневная тема';
    localStorage.setItem('theme', 'night-theme');
  } else {
    body.classList.replace('night-theme', 'day-theme');
    themeToggleBtn.textContent = 'Ночная тема';
    localStorage.setItem('theme', 'day-theme');
  }
});

