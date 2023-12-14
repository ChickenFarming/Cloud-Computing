const express = require("express");
const router = express.Router();

//requere Controller
const ProductController = require("../controller/product");

//READ - GET
router.get("/", ProductController.getAllProduct);

//CREATE - POST
router.post("/", ProductController.createNewProduct);

//UPDATE - PATCH
router.patch("/:idProduk", ProductController.updateProduct);

//DELETE - DELETE
router.delete("/:idProduk", ProductController.deleteProduct);

module.exports = router;
