// Import Knockout.js library
const ko = require('knockout');

// Import Calculator object from calculator.js
const Calculator = require('./calculator');

// Apply knockout bindings
ko.applyBindings(new Calculator(), document.getElementById('calculator-display'));