const UserModel = require("../models/product");

//READ - GET
const getAllProduct = async (req, res) => {
  try {
    const [data] = await UserModel.getAllProduct();

    res.json({
      message: "GET getAllProduk success",
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
const createNewProduct = async (req, res) => {
  const { body } = req;
  // console.log(req.body);

  if (
    !body.namaProduk ||
    !body.gambarProduk ||
    !body.deskripsiProduk ||
    !body.stokProduk ||
    !body.hargaProduk
  ) {
    return res.status(400).json({
      message: "Invalid Create New Data",
      data: null,
    });
  }

  try {
    await UserModel.createNewProduct(body);
    res.status(201).json({
      message: "CREATE new Product Success",
      data: body,
    });
  } catch (error) {
    console.error("Error creating new Product:", error);
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
const updateProduct = async (req, res) => {
  const { idProduk } = req.params;
  const { body } = req;

  try {
    await UserModel.updateProduct(body, idProduk);
    res.json({
      message: "UPDATE Produk Success",
      data: {
        idProduk: idProduk,
        ...body,
      },
    });
  } catch (error) {
    console.error("Error UPDATE Product:", error);

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
const deleteProduct = async (req, res) => {
  const { idProduk } = req.params;

  try {
    await UserModel.deleteProduct(idProduk);
    res.json({
      message: "DELETE Product Success",
      data: null,
    });
  } catch (error) {
    console.error("Error DELETE Product:", error);

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
  getAllProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
