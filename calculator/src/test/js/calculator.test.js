// calculator.test.js
const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

// Test case for subtraction
test('subtracts 5 - 3 to equal 2', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

// Test case for multiplication
test('multiplies 2 * 4 to equal 8', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});

// Test case for division
test('divides 10 by 2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

// Additional test case for division by zero
test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrowError('Cannot divide by zero');
});