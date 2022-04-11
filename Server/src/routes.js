const express = require('express');
const routes = express.Router()
const Homepage = require('./controlers/Homepage')


routes.get('/', Homepage.index)


module.exports = routes;