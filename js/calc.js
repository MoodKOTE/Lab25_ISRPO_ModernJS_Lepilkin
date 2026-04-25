const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

const rates = {
    USD: 0.012,
    EUR: 0.011,
    CNY: 0.087
};

function convertCurrency() {
    const raw = amountInput.value.trim();
    const amount = parseFloat(raw);

    if (raw === '' || isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Ошибка: введите корректную сумму (число больше нуля)';
        resultDiv.classList.add('error');
        return;
    }

    const currency = currencySelect.value;
    const rate = rates[currency];
    const converted = amount * rate;
    const formatted = converted.toFixed(2);

    resultDiv.textContent = `${amount} RUB = ${formatted} ${currency}`;
    resultDiv.classList.remove('error');
}

convertBtn.addEventListener('click', convertCurrency);

amountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertCurrency();
});