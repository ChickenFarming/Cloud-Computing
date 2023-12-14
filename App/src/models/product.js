const dbPool = require("../config/database");

//READ - GET
const getAllProduct = () => {
  const SQLQuery = "SELECT * FROM product";

  return dbPool.execute(SQLQuery);
};

//CREATE - POST
const createNewProduct = (body) => {
  const SQLQuery =
    "INSERT INTO product (namaProduk, gambarProduk, deskripsiProduk, stokProduk, hargaProduk) VALUES (?, ?, ?, ?, ?)";
  const values = [
    body.namaProduk,
    body.gambarProduk,
    body.deskripsiProduk,
    body.stokProduk,
    body.hargaProduk,
  ];

  return dbPool.execute(SQLQuery, values);
};

//UPDATE - PATCH
const updateProduct = (body, idProduk) => {
  const SQLQuery =
    "UPDATE product SET namaProduk=?, gambarProduk=?, deskripsiProduk=?, stokProduk=?, hargaProduk=? WHERE idProduk=?";
  const values = [
    body.namaProduk,
    body.gambarProduk,
    body.deskripsiProduk,
    body.stokProduk,
    body.hargaProduk,
    idProduk,
  ];

  return dbPool.execute(SQLQuery, values);
};

//DELETE - DELETE
const deleteProduct = (idProduk) => {
  const SQLQuery = "DELETE FROM product WHERE idProduk=?";
  const values = [idProduk];

  return dbPool.execute(SQLQuery, values);
};

module.exports = {
  getAllProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
