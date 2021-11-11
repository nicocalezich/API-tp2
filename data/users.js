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
    else{
        user.password = await bcrypt.hash(user.password, 8);
        const result = await connectiondb.db('api-db')
                            .collection('users')
                            .insertOne(user);
        return result;
    }
}

async function findByDni(dni){
    const connectiondb = await connection.getConnection();
    const user = await connectiondb.db('sample_betp2')
                        .collection('usuarios')
                        .findOne({dni: dni});
    if(!user){
        throw new Error('Credenciales no validas');
    }

    return user;
}

module.exports = {createUser};