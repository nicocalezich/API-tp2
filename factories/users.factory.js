const User = require('../models/users.model')

module.exports = 
{
    create: (user) =>{
        return new User(user.username, user.password, user.dni, user.isAdmin)
    }
}