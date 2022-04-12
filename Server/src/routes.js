const express = require('express');
const routes = express.Router()
const User = require('./controlers/UserController')
const auth = require('./middleware/auth')
const validator = require('./middleware/validator')
const {validateUser} = require('./models/User')


const error = require('./middleware/error')
require('express-async-errors')


routes.post('/user',validator(validateUser, params = 'createUser'), User.store)
routes.get('/user',auth ,User.index)
routes.put('/user/accountinfo',[auth, validator(validateUser)], User.update)


routes.use(error)

module.exports = routes;