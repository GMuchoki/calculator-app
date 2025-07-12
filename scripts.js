const display = document.getElementById('display');

function appendToDisplay (input) {
    display.value += input;
};


function clearDisplay () {
    display.value = '';
};


function delLastDisplay () {
    display.value = display.value.slice(0, -1);
};


function displayCalculations () {
    try{
        display.value = eval(display.value)
    } catch (error){
        display.value = 'ERROR';
    };
    
};