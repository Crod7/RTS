// app.js
const express = require('express');
const app = express();
const port = 3000; // Choose any port you like

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
