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