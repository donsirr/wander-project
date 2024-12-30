const messageContainer = document.getElementById('container');

function createStickyNote(message, index) {
  const note = document.createElement('div');
  note.classList.add('mix', 'box');

  // Create the inner elements
  const boxLink = document.createElement('div');
  boxLink.classList.add('box-link');

  const boxText = document.createElement('div');
  boxText.classList.add('box-text', 'top-left');

  const heading = document.createElement('h2');
  const today = new Date();
  const dateString = today.toLocaleDateString();
  const timeString = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  heading.textContent = `Post ${index + 1} - ${dateString} ${timeString}`;


  const paragraph = document.createElement('p');
  paragraph.textContent = message;

  const gradientBox = document.createElement('div');
  gradientBox.classList.add('gradient-box');

  // Append the elements in the correct structure
  boxText.appendChild(heading);
  boxText.appendChild(paragraph);
  boxLink.appendChild(boxText);
  boxLink.appendChild(gradientBox);
  note.appendChild(boxLink);

  return note;
}

let messages = JSON.parse(localStorage.getItem('messages')) || []; // Changed to let

// Add the messages to the container
messages.forEach((message, index) => {
  const note = createStickyNote(message, index); // Make sure you're passing the index here
  messageContainer.appendChild(note);
});