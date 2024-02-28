// Define Negate Button Component ViewModel
var NegateButton = function(params) {
    var self = this;

    self.clickHandler = params.clickHandler;
};

// Export Negate Button Component
ko.components.register('negate-button', {
    viewModel: NegateButton,
    template: '<button class="calculator-button" data-bind="click: clickHandler">+/-</button>'
});