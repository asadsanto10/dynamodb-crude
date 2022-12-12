const express = require('express');
const { getCharacter } = require('../controller/curd');

const route = express.Router();
route.get('/', getCharacter);

module.exports = route;
