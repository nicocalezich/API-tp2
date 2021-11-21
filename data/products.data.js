const mongodb = require('mongodb');
const connection = require('./dbconnection');
const bcrypt = require('bcryptjs');

async function insertProduct(product){
    const connectiondb = await connection.getConnection();    

    const result = await connectiondb.db('api-db')
                        .collection('products')
                        .insertOne(product);
    return result;
}

async function findByID(ID){
    const connectiondb = await connection.getConnection();
    const searchedProduct = await connectiondb.db('api-db')
                        .collection('products')
                        .findOne({id: parseInt(ID)});
    return searchedProduct;
}

async function addStock(id,newStock){ //mirar esto porque no anda ya que Js es el lenguaje para gente con deficiencia mental
    const stockAdded = await findByID(id)
    console.log("NUEVO STOCK " + stockAdded)
    const connectiondb = await connection.getConnection();
    const searchedProduct = await connectiondb.db('api-db')
                        .collection('products')
                        .updateOne({id: parseInt(id)},{ $set: { "stock" : stockAdded }})
    return searchedProduct;
}


module.exports = {insertProduct, findByID,addStock};