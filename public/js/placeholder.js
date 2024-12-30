const textarea = document.getElementById('message');

const placeholders = [
    "Before I leave this world, I hope to...",
    "The greatest lesson I’ve learned so far is...",
    "One thing I’ve always wanted to do but haven’t yet is...",
    "I wish I could tell my younger self...",
    "In the next five years, I want to...",
    "The thing I am most proud of is...",
    "A place I’ve always wanted to visit is...",
    "The kind of person I want to become is...",
    "I want my legacy to be...",
    "If I had no fear, I would...",
    "The moment that changed my life forever was...",
    "One thing I want to leave behind for future generations is...",
    "What I’m most grateful for right now is...",
    "I want to make a difference by...",
    "One act of kindness I will always remember is...",
    "I will never forget the time I...",
    "If I could change one thing about the world, it would be...",
    "I’ve always dreamed of...",
    "My biggest regret in life so far is...",
    "The most important lesson I want to teach others is...",
    "Before I’m gone, I want to feel...",
    "One thing I wish I knew sooner is...",
    "Something I want to learn or master before I die is...",
    "The person who has impacted my life the most is...",
    "I want to be remembered for...",
    "If I could have dinner with anyone, dead or alive, I would choose...",
    "A fear I want to overcome is...",
    "I’ve always wanted to learn how to...",
    "The thing I want to feel most in my life is...",
    "If I could tell everyone one thing, it would be...",
    "The one thing I wish people knew about me is...",
    "The best piece of advice I’ve ever received is...",
    "If I could leave behind one message for the future, it would be...",
    "Something I would do if I knew I couldn't fail is...",
    "Before I die, I want to forgive...",
    "The thing I value most in life is...",
    "I’ve always admired people who...",
    "The biggest challenge I’ve overcome is...",
    "The way I want to spend my last days is..."
];

let currentPlaceholderIndex = 0;
let charIndex = 0;
let isTyping = true;
let typeSpeed = 50; // Typing speed in milliseconds
let backspaceSpeed = 10; // Backspacing speed in milliseconds

function typeWriter() {
  const currentPlaceholder = placeholders[currentPlaceholderIndex];

  if (isTyping) {
    textarea.setAttribute('placeholder', currentPlaceholder.substring(0, charIndex++));
    if (charIndex > currentPlaceholder.length) {
      isTyping = false;
      setTimeout(backspace, 1000); // Wait 1 second before backspacing
      return; // Exit the function to prevent further execution
    }
  } else {
    textarea.setAttribute('placeholder', currentPlaceholder.substring(0, charIndex--));
    if (charIndex < 0) {
      isTyping = true;
      currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
      charIndex = 0;
      setTimeout(typeWriter, 500); // Wait 0.5 seconds before typing the next one
      return; // Exit the function to prevent further execution
    }
  }

  setTimeout(typeWriter, typeSpeed);
}

function backspace() {
    const currentPlaceholder = placeholders[currentPlaceholderIndex];
  
    textarea.setAttribute('placeholder', currentPlaceholder.substring(0, charIndex--)); 
  
    if (charIndex >= 0) { 
      setTimeout(backspace, backspaceSpeed);
    } else {
      isTyping = true;
      currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
      charIndex = 0; // Reset charIndex for the new placeholder
      setTimeout(typeWriter, 500);
    }
  }

typeWriter(); // Start the effect