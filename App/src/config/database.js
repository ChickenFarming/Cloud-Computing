//Source For Database Connection
const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  // password: process.env.DB_PASS,
  password: "chickfarm123",
  database: process.env.DB_NAME,
});
// console.log(dbPool);
module.exports = dbPool.promise();
