const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const popup = document.querySelector('.popup-container');
const closeIcon = document.querySelector('.close-icon');

btn.addEventListener('click', () => {
    container.classList.add('active');
    popup.classList.remove('active');
});

closeIcon.addEventListener('click', () => {
    container.classList.remove('active');
    popup.classList.add('active');
});
