const express = require('express');
const routes = express.Router()
const User = require('./controlers/UserController')
const auth = require('./middleware/auth')
const validator = require('./middleware/validator')
const {validateUser} = require('./models/User')
const Auth = require('./controlers/AuthController')


const error = require('./middleware/error')
require('express-async-errors')


routes.post('/user',validator(validateUser, params = 'createUser'), User.store)
routes.get('/user',auth ,User.index)
routes.put('/user',[auth, validator(validateUser)], User.update)
routes.post('/user/recover',User.recoverPass)


routes.post('/auth', validator(Auth.validateCredentials), Auth.login)
routes.get('/auth', auth, Auth.getAuth)


routes.use(error)

module.exports = routes;