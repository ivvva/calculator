const MAX_INPUT_LENGTH = 9;

let display = document.getElementById("current-operand");
let operator = document.getElementsByClassName("operator");
let isLastInputOperator = false;
let currentOperator;
let operatorPresent = false;

let buttons = document.getElementsByClassName("number");
let equalBtn = document.getElementById("equal");
let addBtn = document.getElementById("plus");
let substractBtn = document.getElementById("minus");
let multiplyBtn = document.getElementById("multiply");
let divideBtn = document.getElementById("divide");
let remainderBtn = document.getElementById("remainder");
let clearBtn = document.getElementById("clearBtn");
let backBtn = document.getElementById("back");

function btnConditions() {
  if (display.innerHTML.length == MAX_INPUT_LENGTH) {
    return;
  } else if (display.innerHTML == "0") {
    let newDisplay = display.innerHTML.slice(0, -1);
    display.innerHTML = newDisplay;
  }
}

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function () {
    btnConditions();
    display.innerHTML += this.value;
    isLastInputOperator = false;
  });
}

backBtn.addEventListener("click", function () {
  let newDisplay = display.innerHTML.slice(0, -1);
  display.innerHTML = newDisplay;
});

clearBtn.addEventListener("click", function () {
  display.innerHTML = "";
  isLastInputOperator = false;
  operatorPresent = false;
  currentOperator = "";
});

addBtn.addEventListener("click", function () {
  if (display.innerHTML == "" || isLastInputOperator) {
    return;
  } else if (operatorPresent) {
    evaluate("+");
  }
  display.innerHTML = display.innerHTML + "+";
  isLastInputOperator = true;
  operatorPresent = true;
  currentOperator = "+";
});

substractBtn.addEventListener("click", function () {
  if (isLastInputOperator) {
    return;
  } else if (operatorPresent) {
    evaluate("-");
  }
  display.innerHTML = display.innerHTML + "-";
  isLastInputOperator = true;
  operatorPresent = true;
  currentOperator = "-";
});

multiplyBtn.addEventListener("click", function () {
  if (display.innerHTML == "" || isLastInputOperator) {
    return;
  } else if (operatorPresent) {
    evaluate("x");
  }
  display.innerHTML = display.innerHTML + "x";
  isLastInputOperator = true;
  operatorPresent = true;
  currentOperator = "x";
});

divideBtn.addEventListener("click", function () {
  if (display.innerHTML == "" || isLastInputOperator) {
    return;
  } else if (operatorPresent) {
    evaluate("÷");
  }
  display.innerHTML = display.innerHTML + "÷";
  isLastInputOperator = true;
  operatorPresent = true;
  currentOperator = "÷";
});

remainderBtn.addEventListener("click", function () {
  if (display.innerHTML == "" || isLastInputOperator) {
    return;
  } else if (operatorPresent) {
    evaluate("%");
  }
  display.innerHTML = display.innerHTML + "%";
  isLastInputOperator = true;
  operatorPresent = true;
  currentOperator = "%";
});

equalBtn.addEventListener("click", function () {
  evaluate(currentOperator);
  isLastInputOperator = false;
  operatorPresent = false;
  currentOperator = "";
});

function evaluate(operand) {
  let array = display.innerHTML.split(currentOperator);
  let leftNum = Number(array[0]);
  let rightNum = Number(array[1]);
  console.log({ array, leftNum, rightNum });

  let result = "";
  switch (operand) {
    case "+":
      result = leftNum + rightNum;
      break;
    case "-":
      result = leftNum - rightNum;
      break;
    case "x":
      result = leftNum * rightNum;
      break;
    case "÷":
      result = leftNum / rightNum;
      break;
    case "%":
      result = leftNum % rightNum;
      break;
  }
  display.innerHTML = result;
  currentOperator = null;
}

window.addEventListener("keydown", checkKeyPress);

function checkKeyPress(key) {
  if (display.innerHTML.length == MAX_INPUT_LENGTH) {
    return;
  }
  if (key.key == "1") {
    btnConditions();
    display.innerHTML += "1";
    isLastInputOperator = false;
  }
  if (key.key == "2") {
    btnConditions();
    display.innerHTML += "2";
    isLastInputOperator = false;
  }
  if (key.key == "3") {
    btnConditions();
    display.innerHTML += "3";
    isLastInputOperator = false;
  }
  if (key.key == "4") {
    btnConditions();
    display.innerHTML += "4";
    isLastInputOperator = false;
  }
  if (key.key == "5") {
    btnConditions();
    display.innerHTML += "5";
    isLastInputOperator = false;
  }
  if (key.key == "6") {
    btnConditions();
    display.innerHTML += "6";
    isLastInputOperator = false;
  }
  if (key.key == "7") {
    btnConditions();
    display.innerHTML += "7";
    isLastInputOperator = false;
  }
  if (key.key == "8") {
    btnConditions();
    display.innerHTML += "8";
    isLastInputOperator = false;
  }
  if (key.key == "9") {
    btnConditions();
    display.innerHTML += "9";
    isLastInputOperator = false;
  }
  if (key.key == "0") {
    btnConditions();
    display.innerHTML += "0";
    isLastInputOperator = false;
  }
  if (key.key == "." || key.key == ",") {
    btnConditions();
    display.innerHTML += ".";
    isLastInputOperator = false;
  }
  if (key.key == "=" || key.key == "Enter") {
    evaluate(currentOperator);
    isLastInputOperator = false;
    operatorPresent = false;
    currentOperator = "";
  }
  if (key.code == "Backspace") {
    let newDisplay = display.innerHTML.slice(0, -1);
    display.innerHTML = newDisplay;
  }
  if (key.code == "Escape") {
    display.innerHTML = "";
    isLastInputOperator = false;
    operatorPresent = false;
    currentOperator = "";
  }
  if (key.key == "+") {
    if (isLastInputOperator) {
      return;
    } else if (operatorPresent) {
      evaluate("+");
    }
    display.innerHTML = display.innerHTML + "+";
    isLastInputOperator = true;
    operatorPresent = true;
    currentOperator = "+";
  }
  if (key.key == "-") {
    if (isLastInputOperator) {
      return;
    } else if (operatorPresent) {
      evaluate("-");
    }
    display.innerHTML = display.innerHTML + "-";
    isLastInputOperator = true;
    operatorPresent = true;
    currentOperator = "-";
  }
  if (key.key == "*") {
    if (isLastInputOperator) {
      return;
    } else if (operatorPresent) {
      evaluate("x");
    }
    display.innerHTML = display.innerHTML + "x";
    isLastInputOperator = true;
    operatorPresent = true;
    currentOperator = "x";
  }
  if (key.key == "-") {
    if (isLastInputOperator) {
      return;
    } else if (operatorPresent) {
      evaluate("-");
    }
    display.innerHTML = display.innerHTML + "-";
    isLastInputOperator = true;
    operatorPresent = true;
    currentOperator = "-";
  }
  if (key.key == "/") {
    if (isLastInputOperator) {
      return;
    } else if (operatorPresent) {
      evaluate("÷");
    }
    display.innerHTML = display.innerHTML + "÷";
    isLastInputOperator = true;
    operatorPresent = true;
    currentOperator = "÷";
  }
  if (key.key == "%") {
    if (isLastInputOperator) {
      return;
    } else if (operatorPresent) {
      evaluate("%");
    }
    display.innerHTML = display.innerHTML + "%";
    isLastInputOperator = true;
    operatorPresent = true;
    currentOperator = "%";
  }
}

let gato = document.getElementById("gato");
//let audio = document.getElementById("media/meow.wav")
let meowAudio = new Audio("media/meow.wav");
let purrAudio = new Audio("media/purr.mp3");

gato.addEventListener("mouseenter", function () {
  meowAudio.play();
});

gato.addEventListener("mousedown", function(){
  purrAudio.play();
});
gato.addEventListener("mouseup", function(){
  purrAudio.pause();
});
