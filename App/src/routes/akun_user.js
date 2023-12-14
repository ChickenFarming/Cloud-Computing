const express = require("express");
const router = express.Router();

//requere Controller
const UserController = require("../controller/akun_user");

//READ - GET
router.get("/", UserController.getAllUsers);

//CREATE - POST
router.post("/", UserController.createNewUser);

//UPDATE - PATCH
router.patch("/:idUser", UserController.updateUser);

//DELETE - DELETE
router.delete("/:idUser", UserController.deleteUser);

module.exports = router;
