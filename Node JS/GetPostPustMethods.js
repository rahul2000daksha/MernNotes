const express = require('express');
const app = express();
const port = 3000; // Port number where the server will run

app.use(express.json()); // Enable JSON request body parsing

// GET Request
app.get('/get-route', (req, res) => {
  res.send('This is a GET request.');
});

// POST Request
app.post('/post-route', (req, res) => {
  const data = req.body; // Access data from the request body
  res.json({ message: 'This is a POST request', data });
});

// PUT Request
app.put('/put-route', (req, res) => {
  res.send('This is a PUT request.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
