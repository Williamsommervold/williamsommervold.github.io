

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = loginForm.elements['username'].value;
    const password = loginForm.elements['password'].value;
    const correctUsername = 'william';
    const correctPassword = 'William1234';

    if (username === correctUsername && password === correctPassword) {
      window.location.href = 'Ortodox.html';
    } else {
      loginError.textContent = 'Incorrect username or password. Please try again.';
      loginError.style.display = 'block'; 
    }
  });
});

document.getElementById('revealButton').onclick = function() {
  var box = document.getElementById('box');
  var hiddenContent = box.querySelector('.hiddenContent');
  if (hiddenContent.style.display === 'none') {
    hiddenContent.style.display = 'block';
    box.style.height = 'auto';
  } else {
    hiddenContent.style.display = 'none';
    box.style.height = '200px';
  }
};

