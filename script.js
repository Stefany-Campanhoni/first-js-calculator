var currentNum = '';
var previousNum = 0;

var operation = '0';

var display = document.getElementById('display');


// add numbers in display
function addNumber(number) {
    if (currentNum.length < 16) {
        currentNum += number;
    }
    showDisplay();
}

// show numbers in display
function showDisplay() {
    display.style.color = 'black';
    display.value = currentNum;
}

// getting operations
function addOperation(banana) {
    previousNum = Number(currentNum);

    operation = banana;

    clearDisplay();
}

// del last number
function del() {
    currentNum = currentNum.replace(currentNum.charAt(currentNum.length - 1), '');
    showDisplay();
}

// clear display
function clearDisplay() {
    currentNum = '';
    display.placeholder = operation;
    showDisplay();
}

// clear all memory
function clearAll() {
    previousNum = 0;
    currentNum = '';
    operation = '0';
    display.placeholder = operation;

    showDisplay();
}


function equals() {
    let result = 0;
    switch (operation) {
        case '+':
            result = previousNum + Number(currentNum);
            break;
        case '*':
            result = previousNum * Number(currentNum);
            break;
        case '/':
            result = previousNum / Number(currentNum);
            break;
        case '-':
            result = previousNum + Number(currentNum);
            break;
        case '%':
            currentNum /= 100;
            result = previousNum * currentNum;
    }
    coisar(result);
}
function coisar(result) {
    previousNum = 0;
    currentNum = '';
    operation = '0';

    display.style.color = "violet";
    display.value = result.toFixed(2);
}