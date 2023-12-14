require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const userRoutes = require("./routes/akun_user");
const productRoutes = require("./routes/product");
const pesananRoutes = require("./routes/pesanann");

const middlewareLogRequest = require("./middleware/logs");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/akunUser", userRoutes);
app.use("/product", productRoutes);
app.use("/pesanan", pesananRoutes);

//Source for Server
app.listen(PORT, () => {
  console.log(`Server Berhasil dirunning port ${PORT}`);
});
