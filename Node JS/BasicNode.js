// Creating Web Server by using inbuilt 'http' module to handle http request (App.js)

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});



// Creating Web Server by using inbuilt 'Express' module to handle http request (App.js)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Node.js Web Server!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
