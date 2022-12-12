const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./routes/api');

const app = express();

// env file
require('dotenv').config({ path: './.env' });
// port
const port = process.env.PORT || 5000;

// parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(route);

// 404 no page found
app.use((req, res, next) => {
  res.status(404).json('error');
});

// app listen
app.listen(port, () => {
  console.log('listing on port 5000');
});
