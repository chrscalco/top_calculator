//Arrays and variables for calculator
const calcButtons = ["7", "8", "9", "÷", "4", "5", "6", "X", "1", "2", "3", "-", "0", ".", "=", "+"];
let firstOperand = null;
let operator = null;
let nextOperato = null;
let secondOperand = null;
let lastOperation = null;
let currentOperation = null;

//Functions to operate and create calculator 

function operate(a,operator,b) {
    a = parseInt(a);
    b = parseInt(b);

    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "X") {
        return a * b;
    } else {
        return a/b;
    }
};

function checkOperator(a, operator , b) {
    if((a !== null) && (operator !== null) && (b !== null)) {
        a = operate(a, operator, b);
        operator = null;
        b = null;
    }
};
// On press of number adds it to the screen along with last inputs

function updateBotScreen(input, text) {

    if(text.length >= 9) {
        return text;
    } else {
        text = text + input;
        return text;
    }
}

function updateTopScreen(input, text) {

    if(text.length >= 9) {
        return text;
    } else {
        text = text + input;
        return text;
    }
}


function createCalc(arr) {
    for (i=0; i<arr.length; i++) {
        const button = document.createElement("button");
        button.textContent = arr[i];
        button.classList.add("calcButton");

        if (arr[i] === "=") { // Operate creation
            button.setAttribute("style", "background-color: #ED6E3E");
            button.addEventListener("mousedown", () => {
                button.setAttribute("style", "background-color: rgba(237, 109, 62, 0.51)")
            })
            button.addEventListener("mouseup", () => {
                button.setAttribute("style", "background-color: #ED6E3E")
                lastOperation = firstOperand + operator + secondOperand;
                firstOperand = operate(firstOperand, operator, secondOperand);
                textBot.textContent = firstOperand;
                textTop.textContent = lastOperation;
                operator = null;
                secondOperand = null;
            })
        } else if ((arr[i] === ".")) { //Float number creation
            button.setAttribute("style", "background-color: #7895A8");
            button.addEventListener("mousedown", () => {
                button.setAttribute("style", "background-color: rgba(120, 149, 168, 0.53)")
            })
            button.addEventListener("mouseup", () => {
                button.setAttribute("style", "background-color: #7895A8");
            })

        } else if (isNaN(arr[i])) { // Operator creation
            button.setAttribute("style", "background-color: #F8C743");
            button.addEventListener("mousedown", () => {
                button.setAttribute("style", "background-color: rgba(248, 200, 67, 0.53)")
            })
            button.addEventListener("mouseup", () => {
                button.setAttribute("style", "background-color: #F8C743");
                checkOperator(firstOperand, operator, secondOperand);
                operator = button.innerHTML;
                textBot.textContent = null;
            })
        } else { //Numbers creation
            button.setAttribute("style", "background-color: #7895A8");
            button.addEventListener("mousedown", () => {
                button.setAttribute("style", "background-color: rgba(120, 149, 168, 0.53)")
            })
            button.addEventListener("mouseup", () => {
                button.setAttribute("style", "background-color: #7895A8");
                if (operator !== null) {
                    secondOperand = updateBotScreen(button.innerHTML, textBot.textContent);
                    textBot.textContent = secondOperand;
                } else {
                    firstOperand = updateBotScreen(button.innerHTML, textBot.textContent);
                    textBot.textContent = firstOperand;
                }

            })
        }
        buttonContainer.appendChild(button);
    }
}


//Calculator dom manipulation and creation

const calculator = document.querySelector("#calculator");
const screen = document.createElement("div");
const topScreen = document.createElement("div");
const botScreen = document.createElement("div");
const buttonContainer = document.createElement("div");
const textTop = document.createElement("h1");
const textBot = document.createElement("h1");

screen.classList.add("screen");
topScreen.classList.add("topScreen");
botScreen.classList.add("botScreen");
buttonContainer.classList.add("buttonContainer");

topScreen.appendChild(textTop)
botScreen.appendChild(textBot);
screen.appendChild(topScreen);
screen.appendChild(botScreen);
calculator.appendChild(screen);
calculator.appendChild(buttonContainer);


createCalc(calcButtons);