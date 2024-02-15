const Calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    const calc = new Calculator();
    calc.number(null, { target: { innerText: '1' } });
    calc.operator(null, { target: { innerText: '+' } });
    calc.number(null, { target: { innerText: '2' } });
    calc.operator(null, { target: { innerText: '=' } });
    expect(calc.display()).toBe('3');
});

test('subtracts 5 - 3 to equal 2', () => {
    const calc = new Calculator();
    calc.number(null, { target: { innerText: '5' } });
    calc.operator(null, { target: { innerText: '-' } });
    calc.number(null, { target: { innerText: '3' } });
    calc.operator(null, { target: { innerText: '=' } });
    expect(calc.display()).toBe('2');
});

test('multiplies 2 * 4 to equal 8', () => {
    const calc = new Calculator();
    calc.number(null, { target: { innerText: '2' } });
    calc.operator(null, { target: { innerText: 'x' } });
    calc.number(null, { target: { innerText: '4' } });
    calc.operator(null, { target: { innerText: '=' } });
    expect(calc.display()).toBe('8');
});

test('divides 10 by 2 to equal 5', () => {
    const calc = new Calculator();
    calc.number(null, { target: { innerText: '1' } });
    calc.number(null, { target: { innerText: '0' } });
    calc.operator(null, { target: { innerText: '÷' } });
    calc.number(null, { target: { innerText: '2' } });
    calc.operator(null, { target: { innerText: '=' } });
    expect(calc.display()).toBe('5');
});

test('negates a number correctly', () => {
    const calc = new Calculator();
    calc.number(null, { target: { innerText: '5' } });
    calc.negate();
    expect(calc.display()).toBe('-5');
});

test('handles backspace correctly', () => {
    const calc = new Calculator();
    calc.number(null, { target: { innerText: '5' } });
    calc.backspace();
    expect(calc.display()).toBe('0');
});

test('clears the display correctly', () => {
    const calc = new Calculator();
    calc.number(null, { target: { innerText: '5' } });
    calc.clearDisplay();
    expect(calc.display()).toBe('0');
});

test('clears the calculator correctly', () => {
    const calc = new Calculator();
    calc.number(null, { target: { innerText: '5' } });
    calc.operator(null, { target: { innerText: '+' } });
    calc.clear();
    expect(calc.display()).toBe('0');
});

test('performs consecutive calculations correctly', () => {
    const calc = new Calculator();
    calc.number(null, { target: { innerText: '5' } });
    calc.operator(null, { target: { innerText: '+' } });
    calc.number(null, { target: { innerText: '5' } });
    calc.operator(null, { target: { innerText: '=' } });
    calc.operator(null, { target: { innerText: '+' } });
    calc.number(null, { target: { innerText: '2' } });
    calc.operator(null, { target: { innerText: '=' } });
    expect(calc.display()).toBe('12');
});

// Additional test cases can be added to cover all edge cases and scenarios.