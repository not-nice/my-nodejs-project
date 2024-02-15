// server.js
const express = require('express');
const calculator = require('./calculator');

const app = express();

// Route for addition
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = calculator.add(parseInt(a), parseInt(b));
    res.send(result.toString());
});

// Route for subtraction
app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = calculator.subtract(parseInt(a), parseInt(b));
    res.send(result.toString());
});

// Route for multiplication
app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = calculator.multiply(parseInt(a), parseInt(b));
    res.send(result.toString());
});

// Route for division
app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    try {
        const result = calculator.divide(parseInt(a), parseInt(b));
        res.send(result.toString());
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Calculator API');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});