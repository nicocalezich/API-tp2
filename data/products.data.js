const connection = require('./dbconnection')

async function findByID(id){
    const connectiondb = await connection.getConnection()
    const searchedProduct = await connectiondb.db('api-db')
                        .collection('products')
                        .findOne({_id: id})
    return searchedProduct;
}

async function getAllProducts(){
    const connectiondb = await connection.getConnection()
    const searchedProduct = await connectiondb.db('api-db')
                        .collection('products')
                        .find({})      
                        .toArray()                  
    return searchedProduct;
}

async function insertProduct(product){
    const connectiondb = await connection.getConnection() 

    const result = await connectiondb.db('api-db')
                        .collection('products')
                        .insertOne(product);
    return result;
}

async function updateProduct(id, product){ 
    const connectiondb = await connection.getConnection();
    const result = await connectiondb.db('api-db')
                            .collection('products')
                            .updateOne({_id: id}, {$set: {name: product.name, stock: product.stock, type: product.type, price: product.price}})
    return result;
}

async function deleteProduct(id){ 
    const connectiondb = await connection.getConnection();
    const result = await connectiondb.db('api-db')
                            .collection('products')
                            .deleteOne({_id: id})
    return result;
}


module.exports = {insertProduct, findByID, updateProduct, deleteProduct, getAllProducts};