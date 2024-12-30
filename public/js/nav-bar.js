const navbar = document.querySelector('.navigation'); 

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // Adjust the scroll threshold as needed
    navbar.style.opacity = 0; // Fade out the navbar
  } else {
    navbar.style.opacity = 1; // Fade in the navbar
  }
});