const CalculatorService = require('./calculatorService');

describe('CalculatorService', () => {
    describe('add', () => {
        test('should add two numbers correctly', () => {
            expect(CalculatorService.add(2, 3)).toBe(5);
        });

        // Add more test cases as needed
    });

    describe('subtract', () => {
        test('should subtract two numbers correctly', () => {
            expect(CalculatorService.subtract(5, 2)).toBe(3);
        });

        // Add more test cases as needed
    });

    describe('multiply', () => {
        test('should multiply two numbers correctly', () => {
            expect(CalculatorService.multiply(2, 3)).toBe(6);
        });

        // Add more test cases as needed
    });

    describe('divide', () => {
        test('should divide two numbers correctly', () => {
            expect(CalculatorService.divide(6, 3)).toBe(2);
        });

        test('should return "Error: Division by zero!" if dividing by zero', () => {
            expect(CalculatorService.divide(6, 0)).toBe("Error: Division by zero!");
        });

        // Add more test cases as needed
    });
});