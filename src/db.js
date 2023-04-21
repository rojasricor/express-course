const mysql = require("mysql2/promise");

async function connectDB() {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "admin",
    password: "admin",
    database: "itfip",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const result = await connection.query("SELECT 'helloworld' as message");
  const { message } = result[0][0];
  console.log(message);
}

module.exports = connectDB;
