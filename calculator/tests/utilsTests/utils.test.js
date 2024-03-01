const Utils = require('./utils');

describe('Utils', () => {
    describe('formatNumber', () => {
        test('should format number to fixed decimal places', () => {
            expect(Utils.formatNumber(5.6789, 2)).toBe('5.68');
        });

        test('should return string representation of zero if number is zero', () => {
            expect(Utils.formatNumber(0, 2)).toBe('0.00');
        });

        // Add more test cases as needed
    });

    describe('isNumeric', () => {
        test('should return true for numeric values', () => {
            expect(Utils.isNumeric(123)).toBe(true);
            expect(Utils.isNumeric('123')).toBe(true);
            expect(Utils.isNumeric(0)).toBe(true);
            expect(Utils.isNumeric('0')).toBe(true);
            expect(Utils.isNumeric(1.23)).toBe(true);
            expect(Utils.isNumeric('1.23')).toBe(true);
        });

        test('should return false for non-numeric values', () => {
            expect(Utils.isNumeric('abc')).toBe(false);
            expect(Utils.isNumeric('')).toBe(false);
            expect(Utils.isNumeric(null)).toBe(false);
            expect(Utils.isNumeric(undefined)).toBe(false);
            expect(Utils.isNumeric({})).toBe(false);
            expect(Utils.isNumeric([])).toBe(false);
            expect(Utils.isNumeric(NaN)).toBe(false);
        });
    });
});