// Import the HistoryService component
const HistoryService = require('./historyService');

// Describe the HistoryService component
describe('HistoryService', () => {
    // Test case for adding history
    it('should add history to the list', () => {
        // Initialize HistoryService component
        const historyService = new HistoryService();

        // Add history
        historyService.addHistory('Calculation 1');

        // Check if history is added
        expect(historyService.historyList.length).toBe(1);
    });

    // Test case for clearing history
    it('should clear all history', () => {
        // Initialize HistoryService component
        const historyService = new HistoryService();

        // Add history
        historyService.addHistory('Calculation 1');
        historyService.addHistory('Calculation 2');

        // Clear history
        historyService.clearHistory();

        // Check if history is cleared
        expect(historyService.historyList.length).toBe(0);
    });

    // Add more test cases as needed
});