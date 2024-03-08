import React from 'react';

function App() {
    return (
        <div>
            <h1>Welcome to my React app!</h1>
            <p>This content is rendered by React.</p>
        </div>
    );
}

export default App;

const express = require('express');
const app = express();
const port = 3000; // Port number for your server

// Serve static files from the `public` directory
app.use(express.static('public'));

// Route to handle the main HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/nba profile/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
