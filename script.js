//Arrays for calculator
calcButtons = ["7", "8", "9", "÷", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"];


//Functions to operate calculator

function operate(a,operator,b) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else {
        return a/b;
    }
};


//Calculator dom manipulation and creation

const calculator = document.querySelector("#calculator");
const screen = document.createElement("div");
const buttons = document.createElement("div");
const numberContainer = document.createElement("div");
const operatorContainer = document.createElement("div");
const tempText = document.createElement("h1");

tempText.textContent = "7 * 8";
screen.classList.add("screen");
buttons.classList.add("buttonContainer");

numberContainer.classList.add("numberContainer");
operatorContainer.classList.add("operatorContainer");

screen.appendChild(tempText);
calculator.appendChild(screen);
buttons.appendChild(numberContainer);
buttons.appendChild(operatorContainer);
calculator.appendChild(buttons);

function createCalc(arr) {
    for (i=0; i<arr.length; i++) {
        const buttonNum = document.createElement("button");
        buttonNum.textContent = arr[i];
        buttonNum.classList.add("calcButton");
        numberContainer.appendChild(buttonNum);
    }
}

createCalc(calcButtons);