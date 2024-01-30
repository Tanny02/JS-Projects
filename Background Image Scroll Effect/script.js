const image = document.getElementById('bg-image');

window.addEventListener('scroll', () => {
    updateImage();
});

function updateImage() {
    image.style.opacity = 1 - window.pageYOffset / 900;
    image.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}
