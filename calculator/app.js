// Define a ViewModel for the Calculator app
function CalculatorViewModel() {
    var self = this;

    // Observable to track the current number displayed on the calculator
    self.display = ko.observable('0');

    // Function to handle when a number button is clicked
    self.number = function(data, event) {
        var numberClicked = event.target.innerText;
        if (self.display() === '0' || self.display() === 'Error') {
            // If the current display is 0 or Error, replace it with the clicked number
            self.display(numberClicked);
        } else {
            // Otherwise, append the clicked number to the current display
            self.display(self.display() + numberClicked);
        }
    };

    // Function to handle when the clear button is clicked
    self.clear = function() {
        // Clear the display
        self.display('0');
    };

    // Function to handle when the equals button is clicked
    self.calculate = function() {
        try {
            // Evaluate the expression in the display and set the result as the new display
            self.display(eval(self.display()));
        } catch (error) {
            // If there's an error during evaluation, display "Error"
            self.display('Error');
        }
    };
}

// Activate Knockout.js
ko.applyBindings(new CalculatorViewModel());