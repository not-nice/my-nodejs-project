const HistoryService = require('./historyService');

describe('HistoryService', () => {
    beforeEach(() => {
        // Clear history before each test
        HistoryService.clearHistory();
    });

    describe('addToHistory', () => {
        test('should add a calculation to history', () => {
            HistoryService.addToHistory("2 + 3 = 5");
            expect(HistoryService.history).toEqual(["2 + 3 = 5"]);
        });

        // Add more test cases as needed
    });

    describe('clearHistory', () => {
        test('should clear the history', () => {
            HistoryService.addToHistory("2 + 3 = 5");
            HistoryService.addToHistory("4 - 2 = 2");
            HistoryService.clearHistory();
            expect(HistoryService.history).toEqual([]);
        });
    });

    describe('getHistory', () => {
        test('should return the entire history', () => {
            HistoryService.addToHistory("2 + 3 = 5");
            HistoryService.addToHistory("4 - 2 = 2");
            expect(HistoryService.getHistory()).toEqual(["2 + 3 = 5", "4 - 2 = 2"]);
        });
    });
});