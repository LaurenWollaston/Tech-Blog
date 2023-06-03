const submitFormHandler = async (event) => {
        // Stop the browser from submitting the form
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

const deletePost = async (event) => {
    const url = window.location.href;
    const parent_id = url.split("/post/")[1];
    
    try {
      const postResponse = await fetch(`/api/post/${parent_id}`, {
        method: 'DELETE'
      });
  
      if (!postResponse.ok) {
        throw new Error('Error deleting post');
      }
  
      document.location.replace('/');
    } catch (error) {
      alert('Error deleting post and comments');
      console.log(error);
    }
};

const editPost = async (event) => {
    const url = window.location.href;
    const parent_id = url.split("/post/")[1];
    document.location.replace(`/edit?id=${parent_id}`);
  };

  submitbutton = document.getElementById('submit')
  submitbutton.addEventListener('submit', submitFormHandler);
  deleteButton = document.getElementById('delete')
  deleteButton.addEventListener('click',deletePost);
  editButton = document.getElementById('edit')
  editButton.addEventListener('click',editPost);