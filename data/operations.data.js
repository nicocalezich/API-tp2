const connection = require('./dbconnection')

async function insertNewSale(sale){
    const connectiondb = await connection.getConnection()
    const addedSale = await connectiondb.db('api-db')
                        .collection('sales')
                        .insertOne(sale);
    return addedSale;
}

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

module.exports = { insertNewSale, insertCustomer, findByDni};