const mongodb = require('mongodb');
const connection = require('./dbconnection');
const bcrypt = require('bcryptjs');


async function createUser(user){
    const connectiondb = await connection.getConnection();
    console.log(findByDni(user.dni),findByDni(user.dni) == null)
    if (!user.username || !user.password || !user.dni) throw({message: "Username, Password and Dni are required", status: 400})
    if (findByDni(user.dni) != null) throw({message: "User already exists", status: 400})
    if (user.username.length < 5 || user.username.length > 15) throw({message: "Invalid username, min 5 characters and max 15 characters", status: 400})
    if (user.password.length < 6) throw({message: "Invalid password, must have at least 6 characters", status: 400})
    if (user.dni.length < 7) throw({message: "Invalid dni, must have at least 7 characters", status: 400})

    user.password = await bcrypt.hash(user.password, 8);
    const result = await connectiondb.db('api-db')
                        .collection('users')
                        .insertOne(user);
    return result;
}

async function findByDni(dni){
    const connectiondb = await connection.getConnection();
    const searchedUser = await connectiondb.db('api-db')
                        .collection('users')
                        .findOne({dni: dni});
    // console.log("Usuario encontrado ->", searchedUser)
    return searchedUser;
}

module.exports = {createUser, findByDni};