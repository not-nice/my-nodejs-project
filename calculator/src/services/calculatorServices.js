// This service handles the core calculator functionality

var CalculatorService = {
    // Function to perform addition
    add: function(a, b) {
        return a + b;
    },
    // Function to perform subtraction
    subtract: function(a, b) {
        return a - b;
    },
    // Function to perform multiplication
    multiply: function(a, b) {
        return a * b;
    },
    // Function to perform division
    divide: function(a, b) {
        if (b === 0) {
            return "Error: Division by zero!";
        }
        return a / b;
    }
};

// Export the calculator service
module.exports = CalculatorService;