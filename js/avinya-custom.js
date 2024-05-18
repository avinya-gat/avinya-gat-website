document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

        toggleButton.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

});
