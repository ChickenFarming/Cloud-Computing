const express = require("express");
const router = express.Router();

//requere Controller
const PesananController = require("../controller/pesanann");

//READ - GET
router.get("/", PesananController.getAllPesanan);

//CREATE - POST
router.post("/", PesananController.createNewPesanan);

//UPDATE - PATCH
router.patch("/:idPesanan", PesananController.updatePesanan);

//DELETE - DELETE
router.delete("/:idPesanan", PesananController.deletePesanan);

module.exports = router;
