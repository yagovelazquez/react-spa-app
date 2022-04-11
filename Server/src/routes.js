const express = require('express');
const routes = express.Router()
const User = require('./controlers/UserController')


routes.post('/user', User.store)
routes.get('/user', User.index)


module.exports = routes;