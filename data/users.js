const mongodb = require('mongodb');
const connection = require('./dbconnection');
const bcrypt = require('bcryptjs');


async function createUser(user){
    const connectiondb = await connection.getConnection();

    // los nombres de base de datos pueden cambiar   
    user.password = await bcrypt.hash(user.password, 8);

    const result = await connectiondb.db('api-db')
                        .collection('users')
                        .insertOne(user);
    return result;
}

module.exports = {createUser};