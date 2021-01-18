'use strict';

// Compulsory error handling
logger.on('error', (error) => {
  console.error('Error caught', error);
});
esTransport.on('warning', (error) => {
  console.error('Error caught', error);
});

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
