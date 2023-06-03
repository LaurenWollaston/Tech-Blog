const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

 
if (username && password) {
    const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log in');
        console.log(response);
    }
}

};
submitbutton = document.getElementById('submit')
submitbutton.addEventListener('submit', loginFormHandler);
