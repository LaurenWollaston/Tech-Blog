const submitFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const title = document.getElementById('title').value;
    const post = document.getElementById('poster').value;
    const post_id = pid

  if (title && post) {
      const response = await fetch('/api/edit', {
          method: 'PUT',
          body: JSON.stringify({ title, post, post_id, userID}),
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert('ERROR UPDATING POST');
          console.log(response);
      }
  }
  
};
  submitbutton = document.getElementById('submit')
  submitbutton.addEventListener('submit', submitFormHandler);
  