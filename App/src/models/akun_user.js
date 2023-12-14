const dbPool = require("../config/database");

//READ - GET
const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM akunuser";

  return dbPool.execute(SQLQuery);
};

//CREATE - POST
const createNewUser = (body) => {
  const SQLQuery =
    "INSERT INTO akunuser (email, username, password) VALUES (?, ?, ?)";
  const values = [body.email, body.username, body.password];

  return dbPool.execute(SQLQuery, values);
};

//UPDATE - PATCH
const updateUser = (body, idUser) => {
  const SQLQuery =
    "UPDATE akunuser SET email=?, username=?, password=? WHERE idUser=?";
  const values = [body.email, body.username, body.password, idUser];

  return dbPool.execute(SQLQuery, values);
};

//DELETE - DELETE
const deleteUser = (idUser) => {
  const SQLQuery = "DELETE FROM akunuser WHERE idUser=?";
  const values = [idUser];

  return dbPool.execute(SQLQuery, values);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
