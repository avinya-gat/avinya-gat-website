// Function to animate elements into view one by one
function animateElements() {
  const elements = document.querySelectorAll('.home h1');
  let delay = 0;

  elements.forEach((element, index) => {
    setTimeout(() => {
      element.style.transition = 'opacity 2s ease, transform 2s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);

    delay += 300; // Adjust the delay between each element appearing
  });
}

// Call the animateElements function when the window loads
window.addEventListener('load', animateElements);


// Function to animate elements into view one by one
function animateElements() {
  const elements = document.querySelectorAll('.nav a, .nav logo, .options');
  let delay = 0;

  elements.forEach((element, index) => {
    setTimeout(() => {
      element.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    }, delay);

    delay += 300; // Adjust the delay between each element appearing
  });
}

// Call the animateElements function when the window loads
window.addEventListener('load', animateElements);
