// Define Operator Button Component ViewModel
var OperatorButton = function(params) {
    var self = this;

    self.operator = params.operator;
    self.clickHandler = params.clickHandler;
};

// Export Operator Button Component
ko.components.register('operator-button', {
    viewModel: OperatorButton,
    template: '<button class="calculator-button" data-bind="text: operator, click: clickHandler"></button>'
});