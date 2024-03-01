define(['knockout'], function(ko) {
    var Calculator = function() {
        // Helper variable declarations
        var self = this,
            decimalMark = ".",
            sum = 0,
            prevOperator;

        // Define default values
        self.display = ko.observable("0");
        self.isShowingResult = ko.observable(false);

        // Callback for each number button
        self.number = function(item, event) {
            var button = event.target.innerText || event.target.textContent;

            // If a result has been shown, make sure we
            // clear the display before displaying any new numbers
            if (self.isShowingResult()) {
                self.clearDisplay();
                self.isShowingResult(false);
            }

            // Make sure we only add one decimal mark
            if (button == decimalMark && self.display().indexOf(decimalMark) > -1)
                return;

            // Make sure that we remove the default 0 shown on the display
            // when the user press the first number button
            var newValue = (self.display() === "0" && button != decimalMark) ? button : self.display() + button;
            // Update the display
            self.display(newValue);
        };

        // Callback for each operator button
        self.operator = function(item, event) {
            var button = event.target.innerText || event.target.textContent;
            // Only perform calculation if numbers
            // has been entered since last operator button was pressed
            if (!self.isShowingResult()) {
                // Perform calculation
                switch (prevOperator) {
                    case "+":
                        sum = sum + parseFloat(self.display(), 10);
                        break;
                    case "-":
                        sum = sum - parseFloat(self.display(), 10);
                        break;
                    case "x":
                        sum = sum * parseFloat(self.display(), 10);
                        break;
                    case "÷":
                        sum = sum / parseFloat(self.display(), 10);
                        break;
                    default:
                        sum = parseFloat(self.display(), 10);
                };
            }

            // Avoid showing a result until you have at least
            // two terms to perform calculation on
            if (prevOperator)
                self.display(sum);

            // Make sure we don't try to calculate with the equal sign
            prevOperator = (button === "=") ? null : button;
            // Always set the calculator into showing result state 
            // after an operator button has been pressed
            self.isShowingResult(true);
        };

        // Callback for negating a number
        self.negate = function() {
            // Disable the negate button when showing a result
            if (self.isShowingResult() || self.display() === "0")
                return;

            var newValue = (self.display().substr(0, 1) === "-") ? self.display().substr(1) : "-" + self.display();
            self.display(newValue);
        };

        // Callback for each backspace button
        self.backspace = function(item, event) {
            // Disable backspace if the calculator is shown a result
            if (self.isShowingResult())
                return;

            // Remove the last character, and make the display zero when
            // last character is removed
            if (self.display().length > 1) {
                self.display(self.display().substr(0, self.display().length - 1));
            } else {
                self.clearDisplay();
            }
        };

        // Clear the entire calculator
        self.clear = function() {
            prevOperator = null;
            self.clearDisplay();
            sum = 0;
        };

        // Clear just the display
        self.clearDisplay = function() {
            self.display("0");
        };

        // Scientific notation
        self.scientificNotation = function() {
            var number = parseFloat(self.display(), 10);
            self.display(number.toExponential());
            self.isShowingResult(true);
        };

        // Floating-point decimal arithmetic (already implemented)

        // Logarithmic functions
        self.logBase10 = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.log10(number));
            self.isShowingResult(true);
        };

        self.logBaseE = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.log(number));
            self.isShowingResult(true);
        };

        // Trigonometric functions
        self.sin = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.sin(number));
            self.isShowingResult(true);
        };

        self.cos = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.cos(number));
            self.isShowingResult(true);
        };

        self.tan = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.tan(number));
            self.isShowingResult(true);
        };

        // Hyperbolic trigonometric functions
        self.sinh = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.sinh(number));
            self.isShowingResult(true);
        };

        self.cosh = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.cosh(number));
            self.isShowingResult(true);
        };

        self.tanh = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.tanh(number));
            self.isShowingResult(true);
        };

        // Exponential functions
        self.exp = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.exp(number));
            self.isShowingResult(true);
        };

        // Roots beyond the square root
        self.cbrt = function() {
            var number = parseFloat(self.display(), 10);
            self.display(Math.cbrt(number));
            self.isShowingResult(true);
        };

        // Quick access to constants
        self.pi = function() {
            self.display(Math.PI);
            self.isShowingResult(true);
        };

        self.e = function() {
            self.display(Math.E);
            self.isShowingResult(true);
        };
    };

    // Apply knockout bindings
    ko.applyBindings(new Calculator(), document.getElementById('calculator-display'));

    // Enable keyboard control (unchanged)

});