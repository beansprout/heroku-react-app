// create express server on port 8080

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});