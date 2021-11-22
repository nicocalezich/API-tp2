require('dotenv').config();
const mongoclient = require('mongodb').MongoClient;

const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false" 

const client = new mongoclient(uri);

let instance = null;

async function getConnection(){
    if(instance == null){
        try {
            instance = await client.connect();
        } catch (err) {
            console.log(err.message);
            throw new Error("Couldn't connect to data base");
        }
    }
    return instance;
}

module.exports = { getConnection };