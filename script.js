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
    let quotient = a / b;
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

// parameters
let input = '';
let operator = '+';
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

// number and symbol button clicks
oneBtn.addEventListener('click', function(e) {
    input += '1';
    h1.textContent = input;
});

twoBtn.addEventListener('click', function(e) {
    input += '2';
    h1.textContent = input;
});

threeBtn.addEventListener('click', function(e) {
    input += '3';
    h1.textContent = input;
});

fourBtn.addEventListener('click', function(e) {
    input += '4';
    h1.textContent = input;
});

fiveBtn.addEventListener('click', function(e) {
    input += '5';
    h1.textContent = input;
});

sixBtn.addEventListener('click', function(e) {
    input += '6';
    h1.textContent = input;
});

sevenBtn.addEventListener('click', function(e) {
    input += '7';
    h1.textContent = input;
});

eightBtn.addEventListener('click', function(e) {
    input += '8';
    h1.textContent = input;
});

nineBtn.addEventListener('click', function(e) {
    input += '9';
    h1.textContent = input;
});

zeroBtn.addEventListener('click', function(e) {
    input += '0';
    h1.textContent = input;
});

periodBtn.addEventListener('click', function(e) {
    input += '.';
    h1.textContent = input;
});

negBtn.addEventListener('click', function(e) {
    if (input[0] === '-') {
        input = input.slice(1);
    } else {
        input = '-' + input;
    }
    h1.textContent = input;
});

// update display
function updateDisplay(result) {
    result = result.toString();
    h1.textContent = result;
}

// operator function button clicks
plusBtn.addEventListener('click', function(e) {
    result = operate(operator, Number(result), Number(input));
    updateDisplay(result);
    operator = '+';
    input = ''
});

minusBtn.addEventListener('click', function(e) {
    result = operate(operator, Number(result), Number(input));
    updateDisplay(result);
    operator = '-';
    input = ''
});

multiplyBtn.addEventListener('click', function(e) {
    result = operate(operator, Number(result), Number(input));
    updateDisplay(result);
    operator = '*';
    input = ''
});

divideBtn.addEventListener('click', function(e) {
    result = operate(operator, Number(result), Number(input));
    updateDisplay(result);
    operator = '/';
    input = ''
});

clearBtn.addEventListener('click', function(e) {
    result = 0;
    updateDisplay(result);
    operator = '+';
    input = ''
});

enterBtn.addEventListener('click', function(e) {
    result = operate(operator, Number(result), Number(input));
    updateDisplay(result);
    operator = '+';
    input = ''
});

onBtn.addEventListener('click', function(e) {
    result = 0;
    updateDisplay(result);
    operator = '+';
    input = ''
});

offBtn.addEventListener('click', function(e) {
    result = 0;
    operator = '+';
    input = ''
    h1.textContent = input;
});