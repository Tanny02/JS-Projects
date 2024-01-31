const input = document.querySelector('.input');
const body = document.querySelector('body');

input.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();
input.addEventListener('input', () => {
    updateBody();
    updateLocalStorage();
});

function updateBody() {

    if (input.checked) {
        body.style.backgroundColor = 'black'
    }
    else {
        body.style.backgroundColor = 'white'
    }
    
}

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(input.checked));
}
