// Define Clear Button Component ViewModel
var ClearButton = function(params) {
    var self = this;

    self.clickHandler = params.clickHandler;
};

// Export Clear Button Component
ko.components.register('clear-button', {
    viewModel: ClearButton,
    template: '<button class="calculator-button" data-bind="click: clickHandler">C</button>'
});