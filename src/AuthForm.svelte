<script>
  let username = '';
  let email = '';
  let password = '';
  let authMessage = '';
  const users = JSON.parse(localStorage.getItem('users')) || [];

  function register() {
      // Check if the username or email already exists
      const existingUser = users.find(user => user.username === username || user.email === email);
      if (existingUser) {
          authMessage = 'Username or email already exists.';
          return;
      }

      // Create a new user
      const newUser = { username, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      authMessage = 'Account created successfully!';
      username = '';
      email = '';
      password = '';
  }

  function login() {
      // Check if the user exists
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
          authMessage = 'Login successful!';
          // You can redirect to another page or perform other actions here
      } else {
          authMessage = 'Invalid username or password.';
      }
  }
</script>

<h2>Create Account / Login</h2>
<form on:submit|preventDefault={register}>
  <input type="text" bind:value={username} placeholder="Username" required />
  <input type="email" bind:value={email} placeholder="Email" required />
  <input type="password" bind:value={password} placeholder="Password" required />
  <button type="submit">Create Account</button>
</form>
<form on:submit|preventDefault={login}>
  <h3>Or Login</h3>
  <input type="text" bind:value={username} placeholder="Username" required />
  <input type="password" bind:value={password} placeholder="Password" required />
  <button type="submit">Login</button>
</form>
<p>{authMessage}</p>

<style>
  form {
      margin-bottom: 20px;
  }
  input {
      display: block;
      margin-bottom: 10px;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
  }
  button {
      padding: 10px;
      background: #333;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
  }
  button:hover {
      background: #555;
  }
</style>
