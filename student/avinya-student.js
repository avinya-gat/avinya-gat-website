ScrollReveal().reveal('.student-info', {
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  distance: '100px',
  origin: 'top'
});

ScrollReveal().reveal('.graph-section', {
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  distance: '100px',
  origin: 'bottom'
});

document.getElementById('logout-btn').addEventListener('click', function() {
  window.location.href = '../loginup.html'; 
});
