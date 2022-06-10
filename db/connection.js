require('dotenv').config();

// const {MongoClient} = require('mongodb');

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.e3h7u.mongodb.net/?retryWrites=true&w=majority`;
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.e3h7u.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async() =>{
    await mongoose.connect(URI);
    console.log('db connected..!!!');
}

module.exports = connectDB;