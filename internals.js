// 1. Show / hide password when the eye icon is clicked
const password = document.getElementById('password');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  const hidden = password.type === 'password';
  password.type = hidden ? 'text' : 'password';
  toggle.setAttribute('aria-label', hidden ? 'Hide password' : 'Show password');
});

// 2. Simple form check when "Sign in" is clicked
const form = document.getElementById('loginForm');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop the page from reloading
  const email = document.getElementById('email').value.trim();

  if (!email.includes('@')) {
    error.textContent = 'Enter a valid email address.';
  } else if (password.value.length < 6) {
    error.textContent = 'Password must be at least 6 characters.';
  } else {
    error.textContent = '';
    alert('Signed in successfully (demo)');
  }
});