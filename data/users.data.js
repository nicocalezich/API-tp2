const mongodb = require('mongodb');
const connection = require('./dbconnection');
const bcrypt = require('bcryptjs');


async function createUser(user){
    const connectiondb = await connection.getConnection();

    user.password = await bcrypt.hash(user.password, 8);
    const result = await connectiondb.db('api-db')
                        .collection('users')
                        .insertOne(user);
    return {message: "User created", status: 201};
}

async function getUser(dni){
    const user = await findByDni(dni)

    if (!user){
        throw({message: "User does not exist", status: 404}) 
    }
    return user
}

async function findByDni(dni){
    const connectiondb = await connection.getConnection();
    const searchedUser = await connectiondb.db('api-db')
                        .collection('users')
                        .findOne({dni: dni});
    return searchedUser;
}

module.exports = {createUser, getUser};