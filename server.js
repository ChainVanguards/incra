// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

let userData = {}; // In-memory store (replace with a database in production)

// Endpoint to save user data
app.post('/save', (req, res) => {
    const { userId, data } = req.body;
    userData[userId] = data; // Save user data
    res.sendStatus(200);
});

// Endpoint to load user data
app.get('/load/:userId', (req, res) => {
    const { userId } = req.params;
    const data = userData[userId] || {}; // Load user data
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
