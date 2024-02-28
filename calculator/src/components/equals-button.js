// Define Equals Button Component ViewModel
var EqualsButton = function(params) {
    var self = this;

    self.clickHandler = params.clickHandler;
};

// Export Equals Button Component
ko.components.register('equals-button', {
    viewModel: EqualsButton,
    template: '<button class="calculator-button" data-bind="click: clickHandler">=</button>'
});