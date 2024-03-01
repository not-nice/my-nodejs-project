// Custom knockout components
ko.components.register('calculator-display', {
    viewModel: { require: 'display' },
    template: { require: 'text!../components/display.html' }
});

ko.components.register('number-button', {
    viewModel: { require: 'number-button' },
    template: { require: 'text!../components/number-button.html' }
});

ko.components.register('operator-button', {
    viewModel: { require: 'operator-button' },
    template: { require: 'text!../components/operator-button.html' }
});

ko.components.register('negate-button', {
    viewModel: { require: 'negate-button' },
    template: { require: 'text!../components/negate-button.html' }
});

ko.components.register('backspace-button', {
    viewModel: { require: 'backspace-button' },
    template: { require: 'text!../components/backspace-button.html' }
});

ko.components.register('clear-button', {
    viewModel: { require: 'clear-button' },
    template: { require: 'text!../components/clear-button.html' }
});

ko.components.register('equals-button', {
    viewModel: { require: 'equals-button' },
    template: { require: 'text!../components/equals-button.html' }
});

// Services
var CalculatorService = function() {
    var self = this,
        decimalMark = ".",
        sum = 0,
        prevOperator;

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
ko.applyBindings(new CalculatorService());

// Utilities
(function() {
    var calculatorKeys = {
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
        106: "x",
        107: "+",
        109: "-",
        110: ".",
        111: "÷",
        8: "backspace",
        13: "=",
        46: "c",
        67: "c"
    };

    function fireEvent(element, event) {
        if (document.createEvent) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent(event, true, true);
            return !element.dispatchEvent(evt);
        } else {
            var evt = document.createEventObject();
            return element.fireEvent('on' + event, evt)
        }
    }

    function hasClass(ele, cls) {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    function addClass(ele, cls) {
        if (!hasClass(ele, cls)) ele.className += " " + cls;
    }

    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }

    var keycallback = function(e) {
        if (e.keyCode in calculatorKeys) {
            var element = document.getElementById("calculator-button-" + calculatorKeys[e.keyCode]);
            addClass(element, "active");
            setTimeout(function() { removeClass(element, "active"); }, 100);
            fireEvent(element, "click");
        }
    }

    if (document.addEventListener) {
        document.addEventListener('keyup', keycallback, false);
    } else if (document.attachEvent) {
        document.attachEvent('keyup', keycallback);
    }
})();