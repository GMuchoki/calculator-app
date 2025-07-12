const btn = document.getElementById('btn1');

btn.addEventListener('click', 
    function displayNum () {
    const inputDisplay = document.getElementById('display');
    inputDisplay.value += "1";
});

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', 
    function displayNum () {
    const inputDisplay = document.getElementById('display');
    inputDisplay.value += "2";
});

const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', 
    function displayNum () {
    const inputDisplay = document.getElementById('display');
    inputDisplay.value += "3";
});


const btnClearDisplay = document.getElementById('btn-clear-display');

btnClearDisplay.addEventListener('click', 
    function clearDisplay() {
    document.getElementById('display').value = '';
});
