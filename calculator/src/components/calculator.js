// Calculator component
class Calculator {
    constructor() {
        // Helper variable declarations
        this.decimalMark = ".";
        this.sum = 0;
        this.prevOperator = null;

        // Define default values
        this.display = ko.observable("0");
        this.isShowingResult = ko.observable(false);
    }

    // Callback for each number button
    number(item, event) {
        var button = event.target.innerText || event.target.textContent;

        // If a result has been shown, make sure we
        // clear the display before displaying any new numbers
        if (this.isShowingResult()) {
            this.clearDisplay();
            this.isShowingResult(false);
        }

        // Make sure we only add one decimal mark
        if (button == this.decimalMark && this.display().indexOf(this.decimalMark) > -1)
            return;

        // Make sure that we remove the default 0 shown on the display
        // when the user press the first number button
        var newValue = (this.display() === "0" && button != this.decimalMark) ? button : this.display() + button;
        // Update the display
        this.display(newValue);
    }

    // Callback for each operator button
    operator(item, event) {
        var button = event.target.innerText || event.target.textContent;
        // Only perform calculation if numbers
        // has been entered since last operator button was pressed
        if (!this.isShowingResult()) {
            // Perform calculation
            switch (this.prevOperator) {
                case "+":
                    this.sum = this.sum + parseFloat(this.display(), 10);
                    break;
                case "-":
                    this.sum = this.sum - parseFloat(this.display(), 10);
                    break;
                case "x":
                    this.sum = this.sum * parseFloat(this.display(), 10);
                    break;
                case "÷":
                    this.sum = this.sum / parseFloat(this.display(), 10);
                    break;
                default:
                    this.sum = parseFloat(this.display(), 10);
            };
        }

        // Avoid showing a result until you have at least
        // two terms to perform calculation on
        if (this.prevOperator)
            this.display(this.sum);

        // Make sure we don't try to calculate with the equal sign
        this.prevOperator = (button === "=") ? null : button;
        // Always set the calculator into showing result state 
        // after an operator button has been pressed
        this.isShowingResult(true);
    }

    // Callback for negating a number
    negate() {
        // Disable the negate button when showing a result
        if (this.isShowingResult() || this.display() === "0")
            return;

        var newValue = (this.display().substr(0, 1) === "-") ? this.display().substr(1) : "-" + this.display();
        this.display(newValue);
    }

    // Callback for each backspace button
    backspace(item, event) {
        // Disable backspace if the calculator is shown a result
        if (this.isShowingResult())
            return;

        // Remove the last character, and make the display zero when
        // last character is removed
        if (this.display().length > 1) {
            this.display(this.display().substr(0, this.display().length - 1));
        } else {
            this.clearDisplay();
        }
    }

    // Clear the entire calculator
    clear() {
        this.prevOperator = null;
        this.clearDisplay();
        this.sum = 0;
    }

    // Clear just the display
    clearDisplay() {
        this.display("0");
    }
}

// Export the Calculator class
module.exports = Calculator;