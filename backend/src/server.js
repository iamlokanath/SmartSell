// src/server.js or src/app.js

const express = require('express');
const app = express();
const port = 3000;

// Example route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to Smart Sell API!');
});

// Define other routes here...

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
