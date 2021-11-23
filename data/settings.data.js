const connection = require('./dbconnection');

async function setDiscount(id, discount){
    const connectiondb = await connection.getConnection();
    const result = await connectiondb.db('api-db')
                        .collection('settings')
                        .updateOne({_id: id}, {$set: {discount: discount.discount}})
   return result
} 

async function createDiscount(discount){
    const connectiondb = await connection.getConnection();
    const result = await connectiondb.db('api-db')
                        .collection('settings')
                        .insertOne(discount)
   return result
} 

async function getDiscount(){
    const connectiondb = await connection.getConnection()
    const result = await connectiondb.db('api-db')
                        .collection('settings')
                        .find({})      
                        .toArray()                  
    return result;
}

module.exports = { setDiscount, getDiscount, createDiscount };