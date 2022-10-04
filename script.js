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
            if (Number(currentNum) == 0) {
                result = "Seriously?";
            } else {
                result = previousNum / Number(currentNum);
            }
            
            break;
        case '-':
            result = previousNum - Number(currentNum);
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
    if (result === "Seriously?") {
        display.value = result;
    } else if (!result == 0) {
        display.value = result.toFixed(2);
    } else {
        display.value = result;
    }
}


// Key listeners
document.addEventListener('keydown', (keyPressed) => {
    let isCtrlPressed = keyPressed.ctrlKey ? true : false;
    let key = keyPressed.key;

    switch (key) {
        // Numbers
        case '1':
            addNumber('1');
            break;
        case '2':
            addNumber('2');
            break;
        case '3':
            addNumber('3');
            break;
        case '4':
            addNumber('4');
            break;
        case '5':
            addNumber('5');
            break;
        case '6':
            addNumber('6');
            break;
        case '7':
            addNumber('7');
            break;
        case '8':
            addNumber('8');
            break;
        case '9':
            addNumber('9');
            break;
        case '0':
            addNumber('0');
            break;
        case '.':
            addNumber('.');
            break;


        // Operations
        case '-':
            addOperation('-');
            break;
        case '+':
            addOperation('+');
            break;
        case '/':
            addOperation('/');
            break;
        case '*':
            addOperation('*');
            break;


        // Special keys
        case 'Enter':
            return equals();
            
        case 'Escape':
            clearAll();
            break;

        case 'Backspace':
            del();
            break;
    }
    // Clearing  display if ctrl and backspace is pressed
    if (isCtrlPressed && key=='Backspace') {
        clearDisplay();
    }

    showDisplay();
});