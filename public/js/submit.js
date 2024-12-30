const charCount = document.getElementById('char-count');
const submitButton = document.querySelector('input[value="submit post"]');


// Character count and submission handling
textarea.addEventListener('input', () => {
  const remainingChars = textarea.maxLength - textarea.value.length;
  charCount.textContent = remainingChars;
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const message = textarea.value.trim();

  if (message === '') {
    alert('Please enter a message before submitting.');
    return;
  }

  let messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));

  alert('Message sent to the wall!');
});