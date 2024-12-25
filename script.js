//Arrays for calculator
calcButtons = ["7", "8", "9", "÷", "4", "5", "6", "X", "1", "2", "3", "-", "0", ".", "=", "+"];


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
const topScreen = document.createElement("div");
const botScreen = document.createElement("div");
const buttonContainer = document.createElement("div");
const tempTextTop = document.createElement("h1");
const tempTextBot = document.createElement("h1");


tempTextTop.textContent = "7 * 8";
tempTextBot.textContent = "5 + 10";
screen.classList.add("screen");
topScreen.classList.add("topScreen");
botScreen.classList.add("botScreen");
buttonContainer.classList.add("buttonContainer");

topScreen.appendChild(tempTextTop)
botScreen.appendChild(tempTextBot);
screen.appendChild(topScreen);
screen.appendChild(botScreen);
calculator.appendChild(screen);
calculator.appendChild(buttonContainer);

function createCalc(arr) {
    for (i=0; i<arr.length; i++) {
        const button = document.createElement("button");
        button.textContent = arr[i];
        button.classList.add("calcButton");
        buttonContainer.appendChild(button);
    }
}

createCalc(calcButtons);