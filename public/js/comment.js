const submitFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const text = document.getElementById('poster').value;
    const poster_id = userID;
    const url = window.location.href;
    const parent_id = url.split("/post/")[1];

  if (text) {
      const response = await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({ text, poster_id, parent_id}),
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
          document.location.reload();
      } else {
          alert('ERROR SUBMITTING COMMENT');
          console.log(response);
      }
  }
  
  };
  submitbutton = document.getElementById('submit')
  submitbutton.addEventListener('submit', submitFormHandler);
  