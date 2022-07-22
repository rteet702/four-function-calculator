let firstNum = "";
let secondNum = "";
let toggle = false;
let operand = "";

let topDisplay = document.querySelector('#display');

function press(val) {
    if (toggle == false) {
        firstNum += val;
        topDisplay.innerText = firstNum;
    }
    else {
        secondNum += val;
        topDisplay.innerText = secondNum;
    }
}

function setOP(oper) {
    toggle = true;
    operand = oper;
}

function calculate() {
    let equation = `${firstNum}${operand}${secondNum}`;
    toggle = false;

    topDisplay.innerText = eval(equation);
    firstNum = eval(equation);
    secondNum = "";
}

function clr() {
    firstNum = "";
    secondNum = "";
    operand = "";
    topDisplay.innerText = "0";
    toggle = false;
}