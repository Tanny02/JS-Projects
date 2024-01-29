const txt = document.getElementById('textarea');

const totalCounter = document.getElementById('total-counter');
const remainingCounter = document.getElementById('remaining-counter');


txt.addEventListener('keyup', () => {
    updateCounter();
});

updateCounter();

function updateCounter() {
    totalCounter.innerHTML = txt.value.length;
    remainingCounter.innerHTML = txt.getAttribute("maxLength") - txt.value.length;

    if (txt.value.length >= txt.getAttribute("maxLength")) {
        alert("You have reached the max length")
    }
    
}
