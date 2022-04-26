const express = require('express');
const routes = express.Router()
const User = require('./controlers/UserController')
const auth = require('./middleware/auth')
const validator = require('./middleware/validator')
const {validateUser} = require('./models/User')
const Address = require('./controlers/AddressController')
const Auth = require('./controlers/AuthController')
const Preferences = require('./controlers/PreferencesController')
const Interests = require('./controlers/InterestsController')
const Email = require('./controlers/EmailController')
const Phone = require('./controlers/PhoneController')
const Language = require('./controlers/LanguageController')
const {validateSleepPref, validateRoomPref} = require('./models/Preference')
const {validateUserInterest} = require('./models/Interest')
const {validateEmail} = require('./models/Email')
const {validatePhone} = require('./models/Phone')
const {validateLanguage} = require('./models/Language')
const {validateAddress} = require('./models/Address')




let cors = require('cors')


const corsOptions = {
    origin: 'http://localhost:3000',
    exposedHeaders: 'token',

  }

routes.use(cors(corsOptions))


const error = require('./middleware/error');

require('express-async-errors')


routes.post('/user',validator(validateUser, params = 'createUser'), User.store)
routes.get('/user',auth ,User.index)
routes.put('/user',[auth, validator(validateUser)], User.update)
routes.post('/user/recover',User.recoverPass)

routes.put('/user/preferences/sleep',[auth, validator(validateSleepPref)], Preferences.updateSleepPref)
routes.put('/user/preferences/room',[auth, validator(validateRoomPref)], Preferences.updateRoomPref)
routes.get('/user/preferences/',[auth], Preferences.getUserPreferences)

routes.get('/user/edit/email', [auth], Email.getEmails)
routes.post('/user/edit/email', [auth, validator(validateEmail)], Email.storeEmail)
routes.put('/user/edit/email', [auth, validator(validateEmail, "UPDATE"), Email.updateEmail])
routes.delete('/user/edit/email', [auth, validator(validateEmail, "DELETE"), Email.deleteEmail])

routes.get('/user/edit/address', [auth], Address.getAddress)
routes.post('/user/edit/address', [auth, validator(validateAddress)], Address.storeAddress)
routes.put('/user/edit/address', [auth, validator(validateAddress, "UPDATE"), Address.updateAddress])
routes.delete('/user/edit/address', [auth, validator(validateAddress, "DELETE"), Address.deleteAddress])

routes.get('/user/edit/language', [auth], Language.getLanguage)
routes.post('/user/edit/language', [auth, validator(validateLanguage)], Language.storeLanguage)
routes.put('/user/edit/language', [auth, validator(validateLanguage), Language.updateLanguage])




routes.get('/user/edit/phone', [auth], Phone.getPhone)
routes.post('/user/edit/phone', [auth, validator(validatePhone)], Phone.storePhone)
routes.put('/user/edit/phone', [auth, validator(validatePhone, "UPDATE"), Phone.updatePhone])
routes.delete('/user/edit/phone', [auth, validator(validatePhone, "DELETE"), Phone.deletePhone])





routes.post('/auth', validator(Auth.validateCredentials), Auth.login)
routes.get('/auth', auth, Auth.getAuth)

routes.post('/user/interests', [auth, validator(validateUserInterest)], Interests.storeUserInterests)
routes.get('/user/interests', auth, Interests.getUserInterests)


routes.use(error)

module.exports = routes;