let prevNumber = "";
let calcOperator = "";
let currentNumber = "0";
let calcPercent = "";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const calcDisplay = document.querySelector(".calc-display");

const updateDisplay = (number) => {
  calcDisplay.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    // console.log("number is pressed");
    // console.log(event.target.value);
    // updateDisplay(event.target.value);
    inputNumber(event.target.value);
    updateDisplay(currentNumber);
  });
});

// Operator
const inputOperator = (operator) => {
  if (calcOperator === "") {
    prevNumber = currentNumber;
  }
  calcOperator = operator;
  currentNumber = "0";
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    // console.log(event.target.value);
    inputOperator(event.target.value);
  });
});

const calculate = () => {
  let result = "";

  switch (calcOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;

    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;

    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;

    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;

    case "%":
      result = (parseFloat(prevNumber) * parseFloat(currentNumber)) / 100;

    default:
      return;
  }
  currentNumber = result;
  calcOperator = "";
};
// ===========================

// Equal
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  //   console.log("equal button is pressed");
  calculate();
  updateDisplay(currentNumber);
});

// Button AC
const clearAll = () => {
  prevNumber = "";
  // calcOperator = "";
  currentNumber = "0";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  //   console.log("AC button is pressed");
  clearAll();
  updateDisplay(currentNumber);
});
// ===========================

// Decimal
const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
  //   console.log(event.target.value);
  inputDecimal(event.target.value);
  updateDisplay(currentNumber);
});

// Percentage
const percent = document.querySelector(".percent");

percent.addEventListener("click", (event) => {
  // console.log("percent button is pressed");
  inputPercent(event.target.value);
  updateDisplay(currentNumber);
});

inputPercent = (percent) => {
  if (currentNumber.includes("%")) {
    return;
  }
  currentNumber = currentNumber / 100;
};
