const mongodb = require('mongodb');
const connection = require('./dbconnection');
const bcrypt = require('bcryptjs');


async function insertCustomer(customer){
    const connectiondb = await connection.getConnection();

    const result = await connectiondb.db('api-db')
                        .collection('customers')
                        .insertOne(customer);
   return result
}


async function findByDni(dni){
    const connectiondb = await connection.getConnection();
    const searchedCustomer = await connectiondb.db('api-db')
                        .collection('customers')
                        .findOne({dni: parseInt(dni)});
    return searchedCustomer;
}

module.exports = {insertCustomer, findByDni};