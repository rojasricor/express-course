const mysql = require("mysql2/promise");

async function connectDB() {
  const connection = await mysql.createConnection({
    host: "aws.connect.psdb.cloud",
    user: "1nukcn2396n00k3g7caa",
    password: "pscale_pw_Tq5CU1XGqLuu3ZkzaTiA2t8LCyvHlunCkmrjAn209bh",
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
