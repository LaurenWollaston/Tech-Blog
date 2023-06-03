const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
  
   
  if (username && password && email) {
      const response = await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
          document.location.replace('/');
      } else {
        const data = await response.json();
        errorText.textContent = data.message;
      }
  }
  
  };
  submitbutton = document.getElementById('submit')
  submitbutton.addEventListener('submit', loginFormHandler);
  