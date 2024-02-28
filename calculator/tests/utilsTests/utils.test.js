// Import the Utils component
const Utils = require('../utils/utils');

// Describe the Utils component
describe('Utils', () => {
    // Test case for formatNumber function
    it('should format number to fixed decimal places', () => {
        // Call the formatNumber function
        const result = Utils.formatNumber(3.14159, 2);

        // Check if the result is correct
        expect(result).toBe('3.14');
    });

    // Test case for isNumeric function
    it('should return true for numeric value', () => {
        // Call the isNumeric function with a numeric value
        const result = Utils.isNumeric(10);

        // Check if the result is correct
        expect(result).toBe(true);
    });

    // Add more test cases as needed
});