const submitFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const title = document.getElementById('title').value;
    const post = document.getElementById('poster').value;

  if (title && post) {
      const response = await fetch('/api/post', {
          method: 'POST',
          body: JSON.stringify({ title, post, userID}),
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert('ERROR SUBMITTING POST');
          console.log(response);
      }
  }
  
  };
  submitbutton = document.getElementById('submit')
  submitbutton.addEventListener('submit', submitFormHandler);
  