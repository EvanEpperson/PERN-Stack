const Client = require('pg').Client

// const client = new Client({
//     connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/contacts',
// })

const client = new Client({
  user: "evanepperson",
  host: "localhost",
  database: process.env.DATABASE_URL || "contacts",
  password: "password",
  port: 5432,
  ssl: true,
});

module.exports = client;
