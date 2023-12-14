const UserModel = require("../models/pesanann");

//READ - GET
const getAllPesanan = async (req, res) => {
  try {
    const [data] = await UserModel.getAllPesanan();

    res.json({
      message: "GET getAllPesanan success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

//CREATE - POST
const createNewPesanan = async (req, res) => {
  const { body } = req;
  // console.log(req.body);
  if (
    !body.idUser ||
    !body.namaPenerima ||
    !body.idProduk ||
    !body.namaProduk ||
    !body.alamatPengiriman ||
    !body.metodePembayaran
  ) {
    return res.status(400).json({
      message: "Invalid Create New Data",
      data: null,
    });
  }

  try {
    await UserModel.createNewPesanan(body);
    res.status(201).json({
      message: "CREATE new Pesanan Success",
      data: body,
    });
  } catch (error) {
    console.error("Error creating new Pesanan:", error);
    let errorMessage = "Server error";
    if (error.message.includes("validation")) {
      errorMessage = "Validation error. Please check your input.";
    }
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

//UPDATE - PATCH
const updatePesanan = async (req, res) => {
  const { idPesanan } = req.params;
  const { body } = req;

  try {
    await UserModel.updatePesanan(body, idPesanan);
    res.json({
      message: "UPDATE Pesanan Success",
      data: {
        idPesanan: idPesanan,
        ...body,
      },
    });
  } catch (error) {
    console.error("Error UPDATE Pesanan:", error);

    let errorMessage = "Server error";
    if (error.message.includes("validation")) {
      errorMessage = "Validation error. Please check your input.";
    }
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

//DELETE - DELETE
const deletePesanan = async (req, res) => {
  const { idPesanan } = req.params;

  try {
    await UserModel.deletePesanan(idPesanan);
    res.json({
      message: "DELETE Pesanan Success",
      data: null,
    });
  } catch (error) {
    console.error("Error DELETE Pesanan:", error);

    let errorMessage = "Server error";
    if (error.message.includes("validation")) {
      errorMessage = "Validation error. Please check your input.";
    }
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};
module.exports = {
  getAllPesanan,
  createNewPesanan,
  updatePesanan,
  deletePesanan,
};
