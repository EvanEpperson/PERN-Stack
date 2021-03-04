// const Client = require('pg').Client

// // const client = new Client({
// //     connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/contacts',
// // })


// linux code not needed for people on mac 
// const client = new Client({
//   user: "evanepperson",
//   host: "localhost",
//   database: process.env.DATABASE_URL || "contacts",
//   password: "password",
//   port: 5432,
// //   ssl: true,
// });

// module.exports = client;


const Client = require('pg').Client

const dbConfig = {
    connectionString: 'postgresql://localhost:5432/contacts' 
}

if(process.env.DATABASE_URL){
    dbConfig.ssl ={rejectUnauthorized: false}
    dbConfig.connectionString = process.env.DATABASE_URL
}

const client = new Client(dbConfig)

module.exports = client;