const connection = require('./dbconnection')

async function insertNewSale(sale){
    const connectiondb = await connection.getConnection()
    const addedSale = await connectiondb.db('api-db')
                        .collection('sales')
                        .insertOne(sale);
    return addedSale;
}

module.exports = { insertNewSale };