const mongodb = require('mongodb');
const connection = require('./dbconnection');
const bcrypt = require('bcryptjs');



async function insertProduct(product){
    const connectiondb = await connection.getConnection();    

    const result = await connectiondb.db('api-db')
                        .collection('products')
                        .insertOne(product);
    console.log("creo usuario")
    return result;
}

module.exports = {insertProduct};