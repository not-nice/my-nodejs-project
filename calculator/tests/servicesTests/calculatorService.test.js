// Import the CalculatorService component
const CalculatorService = require('./calculatorService');

// Describe the CalculatorService component
describe('CalculatorService', () => {
    // Test case for addition
    it('should add two numbers', () => {
        // Call the add function with two numbers
        const result = CalculatorService.add(5, 3);

        // Check if the result is correct
        expect(result).toBe(8);
    });

    // Test case for subtraction
    it('should subtract two numbers', () => {
        // Call the subtract function with two numbers
        const result = CalculatorService.subtract(10, 3);

        // Check if the result is correct
        expect(result).toBe(7);
    });

    // Add more test cases as needed
});