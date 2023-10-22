// Function to generate a random strong password
function generateStrongPassword() {
  const length = 12; // Set the length of the strong password
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  displayPassword(password);
}

// Function to generate an easy password
function generateEasyPassword() {
  const length = 8; // Set the length of the easy password
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  displayPassword(password);
}

// Function to display the generated password
function displayPassword(password) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'Generated Password: ' + password;
}
