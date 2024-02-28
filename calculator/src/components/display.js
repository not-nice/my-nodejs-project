// Define Display Component ViewModel
var Display = function() {
    var self = this;

    self.value = ko.observable("0");

    self.updateValue = function(newValue) {
        self.value(newValue);
    };
};

// Export Display Component
ko.components.register('calculator-display', {
    viewModel: Display,
    template: '<input type="text" data-bind="value: value" disabled aria-label="Calculator Display">'
});