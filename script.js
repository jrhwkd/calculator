// In-browser calculator

// add function
function add(a, b) {
    let sum = a + b;
    return sum;
}

// subtract function
function subtract(a, b) {
    let difference = a - b;
    return difference;
}

// multiply function
function multiply(a, b) {
    let product = a * b;
    return product;
}

// division function
function divide(a, b) {
    let quotient;
    if (b === 0) {
        quotient = 'Don\'t / 0!';
    } else {
        quotient = a / b;
    }
    return quotient;
}

// operate function
function operate(operator, a, b) {
    switch (true) {
        case operator == '+':
            return add(a, b);
        case operator == '-':
            return subtract(a, b);
        case operator == '*':
            return multiply(a, b);
        case operator =='/':
            return divide(a, b);
        default:
            console.log('Something went wrong with the operate function.');
    }
}

// button selectors
const display = document.querySelector('.display');
const h1 = document.querySelector('h1');
const clearBtn = document.querySelector('.clearBtn');
const enterBtn = document.querySelector('.enterBtn');
const oneBtn = document.querySelector('.oneBtn');
const twoBtn = document.querySelector('.twoBtn');
const threeBtn = document.querySelector('.threeBtn');
const fourBtn = document.querySelector('.fourBtn');
const fiveBtn = document.querySelector('.fiveBtn');
const sixBtn = document.querySelector('.sixBtn');
const sevenBtn = document.querySelector('.sevenBtn');
const eightBtn = document.querySelector('.eightBtn');
const nineBtn = document.querySelector('.nineBtn');
const zeroBtn = document.querySelector('.zeroBtn');
const periodBtn = document.querySelector('.periodBtn');
const negBtn = document.querySelector('.negBtn');
const plusBtn = document.querySelector('.plusBtn');
const minusBtn = document.querySelector('.minusBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');
const divideBtn = document.querySelector('.divideBtn');
const onBtn = document.querySelector('.onBtn');
const offBtn = document.querySelector('.offBtn');
const backBtn = document.querySelector('.backBtn');

// parameters
let input = '';
let operator = '';
let result = '0';

// button click depress style
const btns = document.querySelectorAll('.btn');
btns.forEach((div) => {
    div.addEventListener('mousedown', function(e) {
        div.classList.add('btnShadow');
    });
    div.addEventListener('mouseup', function(e) {
        div.classList.remove('btnShadow');
    });
});

// number and symbol button functions
function inputOne() {
    input += '1';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputTwo() {
    input += '2';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputThree() {
    input += '3';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputFour() {
    input += '4';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputFive() {
    input += '5';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputSix() {
    input += '6';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputSeven() {
    input += '7';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputEight() {
    input += '8';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputNine() {
    input += '9';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputZero() {
    input += '0';
    input = checkMaxInput(input);
    h1.textContent = input;
}

function inputPeriod() {
    if (input.indexOf('.') === -1) {
        input += '.';
        input = checkMaxInput(input);
        h1.textContent = input;
    } else {
        console.log('Cannot add multiple decimals.')
    }
}

function inputNegative() {
    if (input[0] === '-') {
        input = input.slice(1);
    } else {
        input = '-' + input;
    }
    h1.textContent = input;
}

// number and symbol button clicks
oneBtn.addEventListener('click', function(e) {
    inputOne();
});

twoBtn.addEventListener('click', function(e) {
    inputTwo();
});

threeBtn.addEventListener('click', function(e) {
    inputThree();
});

fourBtn.addEventListener('click', function(e) {
    inputFour();
});

fiveBtn.addEventListener('click', function(e) {
    inputFive();
});

sixBtn.addEventListener('click', function(e) {
    inputSix();
});

sevenBtn.addEventListener('click', function(e) {
    inputSeven();
});

eightBtn.addEventListener('click', function(e) {
    inputEight();
});

nineBtn.addEventListener('click', function(e) {
    inputNine();
});

zeroBtn.addEventListener('click', function(e) {
    inputZero();
});

periodBtn.addEventListener('click', function(e) {
    inputPeriod();
});

negBtn.addEventListener('click', function(e) {
    inputNegative();
});

// operator functions
function solveAdd() {
    if (operator === '') {
        operator = '+';
        storeInput(input);
    } else {
        result = operate(operator, Number(result), Number(input));
        updateDisplay(result);
        operator = '+';
        input = '';
    }
}

function solveMinus() {
    if (operator === '') {
        operator = '-';
        storeInput(input);
    } else {
        result = operate(operator, Number(result), Number(input));
        updateDisplay(result);
        operator = '-';
        input = '';
    }
}

function solveMultiply() {
    if (operator === '') {
        operator = '*';
        storeInput(input);
    } else {
        result = operate(operator, Number(result), Number(input));
        updateDisplay(result);
        operator = '*';
        input = '';
    }
}

function solveDivide() {
    if (operator === '') {
        operator = '/';
        storeInput(input);
    } else {
        result = operate(operator, Number(result), Number(input));
        updateDisplay(result);
        operator = '/';
        input = '';
    }
}

function solveClear() {
    result = 0;
    updateDisplay(result);
    operator = '';
    input = '';
}

function solveEnter() {
    if (operator === '') {
        operator = '+';
        storeInput(input);
    } else {
        result = operate(operator, Number(result), Number(input));
        updateDisplay(result);
        operator = '+';
        input = '';
    }
}

function solveOn() {
    result = 0;
    updateDisplay(result);
    operator = '';
    input = '';
}

function solveOff () {
    result = 0;
    operator = '';
    input = '';
    h1.textContent = input;
}

function inputBack() {
    input = input.slice(0, input.length-1);
    h1.textContent = input;
}

// operator button clicks
plusBtn.addEventListener('click', function(e) {
    solveAdd();
});

minusBtn.addEventListener('click', function(e) {
    solveMinus();
});

multiplyBtn.addEventListener('click', function(e) {
    solveMultiply();
});

divideBtn.addEventListener('click', function(e) {
    solveDivide();
});

clearBtn.addEventListener('click', function(e) {
    solveClear();
});

enterBtn.addEventListener('click', function(e) {
    solveEnter();
});

onBtn.addEventListener('click', function(e) {
    solveOn();
});

offBtn.addEventListener('click', function(e) {
    solveOff();
});

backBtn.addEventListener('click', function(e) {
    inputBack();
});

// update display
function updateDisplay(result) {
    result = result.toString();
    result = checkMaxDisplay(result);
    h1.textContent = result;
}

// round to 10 max symbols for display
function checkMaxDisplay(result) {
    console.log(result);
    if (result.length > 10) {
        result = Number(result);
        result = result.toPrecision(8);
        if (Number(result) > 999999999) {
            result = Number(result);
            result = result.toPrecision(6);
        }
        for (let i = result.length; i > 0; i--) {
            if (result[i] === '0') {
                result = result.slice(0, (result.length -1));
            } else {
                break;
            }
        }
    }
    return result;
}

// stop at ten max symbols for input
function checkMaxInput(input) {
    if (input.length > 10) {
        input = input.slice(0, 10);
    }
    console.log(input);
    return input;
}

//function to store input if currently no operation
function storeInput(userInput) {
    result = userInput;
    console.log(result);
    input = '';
}

// keyboard input
document.addEventListener('keydown', function(e) {
    if (e.code == 'Digit1') {
        inputOne();
    } else if (e.code == 'Digit2') {
        inputTwo();
    } else if (e.code == 'Digit3') {
        inputThree();
    } else if (e.code == 'Digit4') {
        inputFour();
    } else if (e.code == 'Digit5') {
        inputFive();
    } else if (e.code == 'Digit6') {
        inputSix();
    } else if (e.code == 'Digit7') {
        inputSeven();
    } else if (e.code == 'Digit8') {
        inputEight();
    } else if (e.code == 'Digit9') {
        inputNine();
    } else if (e.code == 'Digit0') {
        inputZero();
    } else if (e.code == 'Period') {
        inputPeriod();
    } else if (e.code == 'minus') {
        inputNegative();
    } else if (e.code == ('Equal' && ('ShiftRight' || 'ShiftLeft'))) {
        solveAdd();
    } else if (e.code == ('Digit8' && ('ShiftRight' || 'ShiftLeft'))) {
        solveMultiply();
    } else if (e.code == 'Equal') {
        solveEnter();
    } else if (e.code == 'Slash') {
        solveDivide();
    } else if (e.code == 'Numpad1') {
        inputOne();
    } else if (e.code == 'Numpad2') {
        inputTwo();
    } else if (e.code == 'Numpad3') {
        inputThree();
    } else if (e.code == 'Numpad4') {
        inputFour();
    } else if (e.code == 'Numpad5') {
        inputFive();
    } else if (e.code == 'Numpad6') {
        inputSix();
    } else if (e.code == 'Numpad7') {
        inputSeven();
    } else if (e.code == 'Numpad8') {
        inputEight();
    } else if (e.code == 'Numpad9') {
        inputNine();
    } else if (e.code == 'Numpad0') {
        inputZero();
    } else if (e.code == 'NumpadDecimal') {
        inputPeriod();
    } else if (e.code == 'Enter') {
        solveEnter();
    } else if (e.code == 'NumpadEnter') {
        solveEnter();
    } else if (e.code == 'Backspace') {
        solveBack();
    } else if (e.code == 'NumpadAdd') {
        solveAdd();
    } else if (e.code == 'NumpadSubtract') {
        solveMinus();
    } else if (e.code == 'NumpadMultiply') {
        solveMultiply();
    } else if (e.code == 'NumpadDivide') {
        solveDivide();
    }
});