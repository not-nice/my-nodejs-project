// Define Backspace Button Component ViewModel
var BackspaceButton = function(params) {
    var self = this;

    self.clickHandler = params.clickHandler;
};

// Export Backspace Button Component
ko.components.register('backspace-button', {
    viewModel: BackspaceButton,
    template: '<button class="calculator-button" data-bind="click: clickHandler">←</button>'
});