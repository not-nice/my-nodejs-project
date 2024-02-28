// This service handles the history of calculations performed

var HistoryService = {
    // Array to store calculation history
    history: [],
    // Function to add an entry to the history
    addToHistory: function(calculation) {
        this.history.push(calculation);
    },
    // Function to clear the history
    clearHistory: function() {
        this.history = [];
    },
    // Function to get the entire history
    getHistory: function() {
        return this.history;
    }
};

// Export the history service
module.exports = HistoryService;