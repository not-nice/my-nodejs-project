// Import the Calculator component
const Calculator = require('./calculator');

// Describe the Calculator component
describe('Calculator', () => {
    // Test case for number button click
    it('should add number to display when number button is clicked', () => {
        // Initialize Calculator component
        const calculator = new Calculator();

        // Mock event object
        const event = {
            target: {
                innerText: '1'
            }
        };

        // Trigger number button click
        calculator.number(null, event);

        // Check if display is updated with the correct number
        expect(calculator.display()).toBe('1');
    });

    // Test case for operator button click
    it('should perform calculation when operator button is clicked', () => {
        // Initialize Calculator component
        const calculator = new Calculator();

        // Mock event object
        const event = {
            target: {
                innerText: '+'
            }
        };

        // Trigger operator button click
        calculator.operator(null, event);

        // Check if operator is correctly set
        expect(calculator.prevOperator).toBe('+');
    });

    // Add more test cases as needed
});