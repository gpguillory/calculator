const display = document.getElementById('display');
let x = 0;
let y = 0;
let operator = '';

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

function buttonPress(val) {
    display.value += val;
}

function clear() {
    display.value = '';
    x = 0;
    y = 0;
    console.log("clear function invoked");
}

function clearButtonListener() {
    let clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', (e) => {
        clear();
    })
}

function operatorListener() {
    let operatorClicked = document.querySelector('.operators');
    operatorClicked.addEventListener('click', (e) => {
        x = display.value;
        operator = operatorClicked.value;
        display.value= '';
        console.log(x);
        console.log(operatorClicked.value);
    })
}

clearButtonListener();
operatorListener();