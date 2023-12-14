const UserModel = require("../models/akun_user");

//READ - GET
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers();

    res.json({
      message: "GET getAllUsers success",
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
const createNewUser = async (req, res) => {
  const { body } = req;
  // console.log(req.body);
  if (!body.email || !body.username || !body.password) {
    return res.status(400).json({
      message: "Invalid Create New Data",
      data: null,
    });
  }

  try {
    await UserModel.createNewUser(body);
    res.status(201).json({
      message: "CREATE new user Success",
      data: body,
    });
  } catch (error) {
    console.error("Error creating new user:", error);
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
const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;

  try {
    await UserModel.updateUser(body, idUser);
    res.json({
      message: "UPDATE user Success",
      data: {
        idUser: idUser,
        ...body,
      },
    });
  } catch (error) {
    console.error("Error UPDATE user:", error);

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
const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await UserModel.deleteUser(idUser);
    res.json({
      message: "DELETE user Success",
      data: null,
    });
  } catch (error) {
    console.error("Error DELETE user:", error);

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
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
