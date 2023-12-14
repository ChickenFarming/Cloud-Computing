const dbPool = require("../config/database");

//READ - GET
const getAllPesanan = () => {
  const SQLQuery = "SELECT * FROM pesanann";

  return dbPool.execute(SQLQuery);
};

//CREATE - POST
const createNewPesanan = (body) => {
  const SQLQuery =
    "INSERT INTO pesanann (idUser, namaPenerima, idProduk, namaProduk, alamatPengiriman, metodePembayaran) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    body.idUser,
    body.namaPenerima,
    body.idProduk,
    body.namaProduk,
    body.alamatPengiriman,
    body.metodePembayaran,
  ];

  return dbPool.execute(SQLQuery, values);
};

//UPDATE - PATCH
const updatePesanan = (body, idPesanan) => {
  const SQLQuery =
    "UPDATE pesanann SET idUser=?, namaPenerima=?, idProduk=?, namaProduk=?, alamatPengiriman=?, metodePembayaran=? WHERE idPesanan=?";
  const values = [
    body.idUser,
    body.namaPenerima,
    body.idProduk,
    body.namaProduk,
    body.alamatPengiriman,
    body.metodePembayaran,
    idPesanan,
  ];

  return dbPool.execute(SQLQuery, values);
};

//DELETE - DELETE
const deletePesanan = (idPesanan) => {
  const SQLQuery = "DELETE FROM pesanann WHERE idPesanan=?";
  const values = [idPesanan];

  return dbPool.execute(SQLQuery, values);
};

module.exports = {
  getAllPesanan,
  createNewPesanan,
  updatePesanan,
  deletePesanan,
};
