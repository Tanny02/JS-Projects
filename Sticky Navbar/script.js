const navbar = document.querySelector('navbar');
const bottomContainer = document.querySelector('.bottom-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > bottomContainer.offsetTop - navbar.offsetHeight) {
        navbar.classList.add('active');
    }
    else {
        navbar.classList.remove('active');
    }
});
