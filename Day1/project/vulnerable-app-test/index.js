const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // A simple example using lodash
  const merged = _.merge({}, { message: 'Hello World' });
  res.send(merged);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
