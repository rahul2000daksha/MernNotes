// creating Express app & creating RESTful API (GET, POST, PUT) Methods

const express = require('express');
const app = express();
const port = 5000; // You can change this to any available port

app.use(express.json());

// Dummy data as a substitute for a database
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json(newItem);
});

app.put('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;
  items = items.map((item) => (item.id === itemId ? updatedItem : item));
  res.json(updatedItem);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// To start our Node.js Express API by running "node index.js".