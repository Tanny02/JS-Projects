const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const images = document.querySelectorAll("img");
const imageContainer = document.querySelector(".image-container");

let currentImage = 1;
let interval;

prev.addEventListener('click', () => {

    currentImage--;
    clearTimeout(interval);
    updateImage();

});

next.addEventListener("click", () => {

    currentImage++;
    clearTimeout(interval);
    updateImage();
    
});

updateImage();

function updateImage () {
    if (currentImage < 1) {
        currentImage = images.length;
    }
    else if (currentImage > images.length) {
        currentImage = 1;
    }
    imageContainer.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;
    interval = setTimeout(() => {
        currentImage++;
        updateImage();
    }, 3000);
}
