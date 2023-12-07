window.addEventListener('load', () => {
  // Get the form data from local storage
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  
  // Check if the form data exists
  if (email && password) {
    // Set the form data
    const $email = document.getElementById('js-email');
    const $password = document.getElementById('js-password');
    $email.value = email;
    $password.value = password;
  }
});

// Submit event listener
const $form = document.getElementById('js-form');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get the form data
  const formData = new FormData($form);
  
  // Save the form data to local storage
  localStorage.setItem('email', formData.get('email'));
  localStorage.setItem('password', formData.get('password'));
});