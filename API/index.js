const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./Router/user");
const createuserRouter = require("./Router/auth");
const productRouter = require("./Router/product");
const cartRouter = require("./Router/cart");
const cors = require("cors");
app.use(express.json());
dotenv.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use(cors());
app.use("/Register", createuserRouter);
mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true })
  .then(() => console.log("dB connected"))
  .catch((e) => console.log(e));
app.listen(process.env.PORT || 8000, () => {
  console.log("backend is working");
});
