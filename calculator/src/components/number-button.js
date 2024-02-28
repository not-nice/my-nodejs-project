// Define Number Button Component ViewModel
var NumberButton = function(params) {
    var self = this;

    self.number = params.number;
    self.clickHandler = params.clickHandler;
};

// Export Number Button Component
ko.components.register('number-button', {
    viewModel: NumberButton,
    template: '<button class="calculator-button" data-bind="text: number, click: clickHandler"></button>'
});