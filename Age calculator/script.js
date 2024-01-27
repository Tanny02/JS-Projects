const para = document.getElementById('label-result');

const formEl = document.querySelector('form');

const inputDate = document.getElementById('dob');

const btn = document.getElementById('calculate-age');

btn.addEventListener('click', calculateAge);

function calculateAge() {
    const inputValue = inputDate.value;
    if (inputValue === '') {
        alert('Please enter your birth date');
    } else {
        const age = getAge(inputValue);
        formEl.innerHTML = '';
        para.innerText = `You are ${age} ${age > 1 ? 'years' : 'year'} old`;
    }
}

function getAge(inputValue) {
    const today = new Date();
    const birthDate = new Date(inputValue);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
