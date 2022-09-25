console.log(`menggunakan JS pada kalkulator`)

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForNextNumber: false,
  };

  function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
  }

  function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForNextNumber = false;
  }

  function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
      calculator.displayNumber = digit;
    } else {
      calculator.displayNumber += digit;
    }
  }

  function inversNumber() {
    if(calculator.displayNumber !== '0') {
      calculator.displayNumber = calculator.displayNumber * -1
    }
  }

  function handleOperator(operator) {
    if (!calculator.isWaitForNextNumber) {
      calculator.operator = operator;
      calculator.isWaitForNextNumber = true;
      calculator.firstNumber = calculator.displayNumber;
      calculator.displayNumber ='0'
      let i= calculator.displayNumber
      if (i === '0') {return i++}
    } else {
      alert ('Operator sudah ditetapkan');
    }

    let result = '';
    if (calculator.operator ==='+') {
      result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
      result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result
  }

  function performCalculation () {
    if (calculator.firstNumber == null || calculator.operator == null) {
      alert('Anda belum menetapkan operator');
      return;
    }
   
    let result = 0;
    if (calculator.operator === '+') {
      result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
      result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
   
    calculator.displayNumber = result;
  }
  
    
  const buttons = document.querySelectorAll('.button');

  for(const button of buttons) {
    button.addEventListener('click',function (event){
      const target = event.target;
      // console.log(event.target.classList)

      if (target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
      }
      
      if (target.classList.contains('negative')) {
        inversNumber();
        updateDisplay();
        return;
      }

      if(target.classList.contains('equal')) {
        performCalculation();
        updateDisplay();
        return;
      }

      if (target.classList.contains('operator')) {
        handleOperator(target.innerText);
        return;
      }

      inputDigit(target.innerText);
      updateDisplay();
      
    });
  }
