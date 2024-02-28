// This file contains utility functions used across the application

var Utils = {
    // Function to format a number to fixed decimal places
    formatNumber: function(number, decimalPlaces) {
        return number.toFixed(decimalPlaces);
    },
    // Function to check if a number is numeric
    isNumeric: function(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
};

// Export the utils object
module.exports = Utils;