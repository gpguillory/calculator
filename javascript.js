let firstnum = 0;
let secondnum = 0;
let values = 0;
const display = document.querySelector('#display');

function addFunc(a, b) {
    return a + b;
}

function subtractFunc(a, b) {
    return a - b;
}

function multiplyFunc (a, b) {
    return a * b;
}

function divideFunc (a, b) {
    return a / b;
}

function operate (a, b, operator) {
    if (operator = '+') {
        return addFunc(a, b);
    }
    else if (operator = '-') {
        return subtractFunc(a, b);
    }
    else if (operator = '*') {
        return multiplyFunc(a, b);
    }
    else if (operator = '/') {
        return divideFunc(a, b);
    }
}

