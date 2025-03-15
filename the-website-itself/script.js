// Existing art submission code
document.getElementById('art-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('art-title').value;
  const artist = document.getElementById('art-artist').value;
  const imageUrl = document.getElementById('art-image').value;
  const description = document.getElementById('art-description').value;

  const artContainer = document.getElementById('art-container');
  const artPiece = document.createElement('div');
  artPiece.classList.add('art-piece');

  artPiece.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>by ${artist}</p>
      <p>${description}</p>
  `;

  artContainer.appendChild(artPiece);

  // Clear the form
  document.getElementById('art-form').reset();
});

// User registration and login code
const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('auth-form').addEventListener('submit', function(event) {
  event.preventDefault();
});

document.getElementById('register-btn').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the username or email already exists
  const existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) {
      document.getElementById('auth-message').textContent = 'Username or email already exists.';
      return;
  }

  // Create a new user
  const newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  document.getElementById('auth-message').textContent = 'Account created successfully!';
  document.getElementById('auth-form').reset();
});

document.getElementById('login-btn').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the user exists
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
      document.getElementById('auth-message').textContent = 'Login successful!';
      // You can redirect to another page or perform other actions here
  } else {
      document.getElementById('auth-message').textContent = 'Invalid username or password.';
  }
});
