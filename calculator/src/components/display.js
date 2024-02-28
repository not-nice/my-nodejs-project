// display.js

// Define a Display ViewModel
var DisplayViewModel = function() {
    var self = this;

    // Observable for the display text
    self.displayText = ko.observable("0");
};

// Apply bindings for the DisplayViewModel
ko.applyBindings(new DisplayViewModel());