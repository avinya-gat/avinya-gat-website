function animateElements() {
  const elements = document.querySelectorAll('.animate-fade-in');
  let delay = 0;

  elements.forEach((element, index) => {
      setTimeout(() => {
          element.classList.add('active');
      }, delay);

      delay += 300; 
  });
}

window.addEventListener('load', animateElements);


ScrollReveal().reveal('.project-container', {
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  distance: '100px',
  origin: 'bottom'
});
ScrollReveal().reveal('.roles-container', {
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  distance: '100px',
  origin: 'bottom'
});
ScrollReveal().reveal('.contact-container', {
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  distance: '100px',
  origin: 'bottom'
});
ScrollReveal().reveal('.footer-container', {
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  distance: '100px',
  origin: 'bottom'
});

const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

