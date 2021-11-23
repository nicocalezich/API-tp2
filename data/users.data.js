const mongodb = require('mongodb');
const connection = require('./dbconnection');
const bcrypt = require('bcryptjs');


async function insertUser(user){
    const connectiondb = await connection.getConnection();

    user.password = await bcrypt.hash(user.password, 8);
    const result = await connectiondb.db('api-db')
                        .collection('users')
                        .insertOne(user);
   return result
}


async function findByUsername(username){
    const connectiondb = await connection.getConnection();
    const searchedUser = await connectiondb.db('api-db')
                        .collection('users')
                        .findOne({username: username});
    return searchedUser;
}

module.exports = {insertUser, findByUsername};