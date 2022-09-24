console.log(`menggunakan JS pada kalkulator`)

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForNextNumber: false,
  };

  function updateDisplay() {
    document.querySelector('displayNumber').innerText = calculator.displayNumber;
  }

  function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
  }

  function inputDigit(digit) {
    calculator.displayNumber += digit;
  }