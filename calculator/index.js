// Define a Calculator ViewModel
var CalculatorViewModel = function() {
    var self = this;
    var decimalMark = ".";
    var sum = 0;
    var prevOperator;

    self.display = ko.observable("0");
    self.isShowingResult = ko.observable(false);

    self.number = function(item, event) {
        var button = event.target.innerText || event.target.textContent;

        if (self.isShowingResult()) {
            self.clearDisplay();
            self.isShowingResult(false);
        }

        if (button == decimalMark && self.display().indexOf(decimalMark) > -1)
            return;

        var newValue = (self.display() === "0" && button != decimalMark) ? button : self.display() + button;
        self.display(newValue);
    };

    self.operator = function(item, event) {
        var button = event.target.innerText || event.target.textContent;
        if (!self.isShowingResult()) {
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

        if (prevOperator)
            self.display(sum);

        prevOperator = (button === "=") ? null : button;
        self.isShowingResult(true);
    };

    self.negate = function() {
        if (self.isShowingResult() || self.display() === "0")
            return;

        var newValue = (self.display().substr(0, 1) === "-") ? self.display().substr(1) : "-" + self.display();
        self.display(newValue);
    };

    self.backspace = function(item, event) {
        if (self.isShowingResult())
            return;

        if (self.display().length > 1) {
            self.display(self.display().substr(0, self.display().length - 1));
        } else {
            self.clearDisplay();
        }
    };

    self.clear = function() {
        prevOperator = null;
        self.clearDisplay();
        sum = 0;
    };

    self.clearDisplay = function() {
        self.display("0");
    };
};

ko.applyBindings(new CalculatorViewModel());