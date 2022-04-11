const {Model, Datatypes} = require('sequelize');

class User extends Model {
    static init(sequelize){
       super.init({
           name: Datatypes.STRING,
           lastName: Datatypes.STRING,
           email: Datatypes.STRING,
           password: DataTypes.STRING,
    }, {
        sequelize
    }
)

}}

module.exports = User;