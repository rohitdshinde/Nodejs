const { MongoClient } = require('mongodb');
const URI = "mongodb://127.0.0.1:27017";
const client = new MongoClient(URI);

client.connect()
    .then(() => console.log("Database Connected !"))
    .catch(() => { console.log("Some Error Occured !") })

const database = client.db('User');
const collection = database.collection('Data');

module.exports = { collection };

