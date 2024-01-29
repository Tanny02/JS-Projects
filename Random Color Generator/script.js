const container = document.querySelector('.container');

for (let i = 0; i < 30; i++) {
    const color = document.createElement('div');
    color.classList.add('color');
    container.appendChild(color);
}

const colorEls = document.querySelectorAll('.color');

generateColor();

function generateColor() {
    colorEls.forEach(colorEl => {
        colorEl.style.backgroundColor = randomValue();
        colorEl.innerText = randomValue();
    })
}

function randomValue() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "#";

    for (let i = 0; i < colorCodeLength; i++) {
        color += chars[Math.floor(Math.random() * chars.length)];
    }

    return color;
    
}
