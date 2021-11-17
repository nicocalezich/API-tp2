const mongodb = require('mongodb');
const connection = require('./dbconnection');
const bcrypt = require('bcryptjs');
const ProductFactory = require('../factories/product.factory')


async function insertProduct(product){
    const connectiondb = await connection.getConnection();    

    const result = await connectiondb.db('api-db')
                        .collection('products')
                        .insertOne(product);
    return result;
}

module.exports = {insertProduct};