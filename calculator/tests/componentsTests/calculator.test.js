const Calculator = require('./calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('number method', () => {
        test('should update display with single digit', () => {
            calculator.number(null, { target: { innerText: '1' } });
            expect(calculator.display()).toBe('1');
        });

        test('should append digit to existing number', () => {
            calculator.display('12');
            calculator.number(null, { target: { innerText: '3' } });
            expect(calculator.display()).toBe('123');
        });

        test('should handle decimal mark correctly', () => {
            calculator.number(null, { target: { innerText: '.' } });
            expect(calculator.display()).toBe('0.');
            calculator.number(null, { target: { innerText: '5' } });
            expect(calculator.display()).toBe('0.5');
            calculator.number(null, { target: { innerText: '.' } });
            expect(calculator.display()).toBe('0.5'); // Should not add another decimal mark
        });
    });

    describe('operator method', () => {
        test('should perform addition correctly', () => {
            calculator.display('10');
            calculator.operator(null, { target: { innerText: '+' } });
            calculator.display('5');
            calculator.operator(null, { target: { innerText: '=' } });
            expect(calculator.display()).toBe('15');
        });

        // Add more test cases for other operator methods as needed
    });

    describe('negate method', () => {
        test('should negate a positive number', () => {
            calculator.display('5');
            calculator.negate();
            expect(calculator.display()).toBe('-5');
        });

        test('should negate a negative number', () => {
            calculator.display('-5');
            calculator.negate();
            expect(calculator.display()).toBe('5');
        });

        test('should not negate zero', () => {
            calculator.display('0');
            calculator.negate();
            expect(calculator.display()).toBe('0');
        });

        test('should not negate when showing result', () => {
            calculator.display('10');
            calculator.operator(null, { target: { innerText: '+' } });
            calculator.display('5');
            calculator.operator(null, { target: { innerText: '=' } });
            calculator.negate();
            expect(calculator.display()).toBe('15');
        });
    });

    // Add more test cases for other methods as needed
});