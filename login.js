// Get references to the login button and the input fields
const loginButton = document.querySelector('.sign-in-form input[type="submit"]');
const usernameInput = document.querySelector('.sign-in-form input[type="text"]');
const passwordInput = document.querySelector('.sign-in-form input[type="password"]');

// Add an event listener to the login button
loginButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the entered username and password
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check the username and password (you would typically validate with a server).
  // For simplicity, let's assume a valid username and password.
  if (username === 'user' && password === 'password') {
    window.location.href = 'index.html'; // Redirect to 'index.html' after successful login
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
