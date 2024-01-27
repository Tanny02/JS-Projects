const calBtn = document.getElementById('calculate-tip');
const billInput = document.getElementById('bill-amount');
const tipInput = document.getElementById('tip-percentage');
const totalSpan = document.getElementById('total-amount');

calBtn.addEventListener('click', calculateTotal);

function calculateTotal() {
    billValue = billInput.value;
    tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}
