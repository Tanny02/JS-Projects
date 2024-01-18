const btns = document.querySelectorAll('button');

const inputField = document.getElementById('result');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        const btnValue = btns[i].textContent;
        if (btnValue === 'C') {
            clearResult();
        } 
        else if(btnValue === '=') {
            calculateResult();
        }
        else if(btnValue === 'x'){
            removeValue(btnValue);
        }
        else{
            appendValue(btnValue);
        }

    });
}

function clearResult(){
    inputField.value = '';
};
function calculateResult(){
    inputField.value = eval(inputField.value);
};

function removeValue(btnValue){
    inputField.value = inputField.value.slice(0, -1);
};
function appendValue(btnValue){
    inputField.value += btnValue;
};

