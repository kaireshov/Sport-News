const loginForm = document.querySelector('#login-form');
const logoutButton = document.querySelector('#logout-button');
const usernameDisplay = document.querySelector('#username-display');

const storedUsername = localStorage.getItem('username');
if (storedUsername) {
usernameDisplay.textContent = `Welcome, ${storedUsername}!`;
loginForm.style.display = 'none';
logoutButton.style.display = 'block';
} else {
loginForm.style.display = 'block';
logoutButton.style.display = 'none';
}

loginForm.addEventListener('submit', (e) => {
e.preventDefault();
const username = document.querySelector('#username').value;
localStorage.setItem('username', username);
usernameDisplay.textContent = `Welcome, ${username}!`;
loginForm.style.display = 'none';
logoutButton.style.display = 'block';
});

logoutButton.addEventListener('click', () => {
localStorage.removeItem('username');
usernameDisplay.textContent = '';
loginForm.style.display = 'block';
logoutButton.style.display = 'none';
});
