const mongodb = require('mongodb');
const connection = require('./dbconnection');
const bcrypt = require('bcryptjs');


async function createUser(user){
    const connectiondb = await connection.getConnection();
    if (!user.username ||
        !user.password ||
        !user.dni
        ){
            throw({message: "Username, Password and Dni are required", status: 400});
        }
        user.password = await bcrypt.hash(user.password, 8);
        const result = await connectiondb.db('api-db')
                            .collection('users')
                            .insertOne(user);
        return result;
}

async function findByDni(user){
    const connectiondb = await connection.getConnection();
    const searchedUser = await connectiondb.db('api-db')
                        .collection('usuarios')
                        .findOne({dni: user.dni});
    if(!searchedUser){
        throw new Error('Credenciales no validas');
    }

    return searchedUser;
}

module.exports = {createUser, findByDni};