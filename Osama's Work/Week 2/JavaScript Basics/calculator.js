//Calculator


console.log("\nCalculator: ")

function calculator() {
    var numbers = [];
    var operator;
  
    // Read user input for numbers and operator
    while (true) {
      var input = prompt("Enter a number (or 'done' to perform the calculation):");
      if (input.toLowerCase() === "done") {
        break;
      }
      var number = parseFloat(input);
      if (!isNaN(number)) {
        numbers.push(number);
      } else {
        alert("Invalid input. Please enter a valid number.");
      }
    }
  
    operator = prompt("Enter the operator (+, -, *, /):");
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
      alert("Invalid operator. Please enter a valid operator.");
      return;
    }
  
    // Perform the calculation
    var result;
    if (operator === "+") {
      result = add(numbers);
    } else if (operator === "-") {
      result = subtract(numbers);
    } else if (operator === "*") {
      result = multiply(numbers);
    } else if (operator === "/") {
      result = divide(numbers);
    }
  
    // Display the result
    alert("Result: " + result);
  }
  
  // Helper functions for arithmetic operations
  function add(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  function subtract(numbers) {
    var difference = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
      difference -= numbers[i];
    }
    return difference;
  }
  
  function multiply(numbers) {
    var product = 1;
    for (var i = 0; i < numbers.length; i++) {
      product *= numbers[i];
    }
    return product;
  }
  
  function divide(numbers) {
    var quotient = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
      quotient /= numbers[i];
    }
    return quotient;
  }
  
  // Run the calculator function
  calculator();
  