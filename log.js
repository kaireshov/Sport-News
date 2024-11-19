
function checkLoginStatus() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const loginLink = document.getElementById('loginLink');
  const logoutSection = document.getElementById('logoutSection');

  if (loggedInUser) {
      loginLink.style.display = 'none';
      logoutSection.style.display = 'block';
  } else {
      loginLink.style.display = 'block';
      logoutSection.style.display = 'none';
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  alert('Logged out successfully!');
  checkLoginStatus();
  window.location.href = 'index.html';
}


document.getElementById('signupForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!emailPattern.test(email)) {
      alert('Invalid email format.');
      return;
  }

  if (!passwordPattern.test(password)) {
      alert('Password must include uppercase, lowercase, a number, and a special character.');
      return;
  }

  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  alert('Signup successful! Please log in.');
  window.location.href = 'login.html';
});


document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      alert('Login successful!');
      usernameDisplay.textContent = `Welcome, ${storedUsername}!`;
  loginForm.style.display = 'none';
  logoutButton.style.display = 'block';
  } else {
      alert('Incorrect email or password.');
  }
});
