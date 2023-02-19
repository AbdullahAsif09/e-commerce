const { verifyTokenAdmin } = require("../Middleware/verifyToken");
const ProductModel = require("../Model/ProductModel");
const cryptoJS = require("crypto-js");
const router = require("express").Router();
// create
router.post("/create", async (req, res) => {
  const newProduct = new ProductModel(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (error) { 
    res.status(500).json(error);
    console.log(error)
  } 
});
// update
router.put("/update/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const updatedProduct = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedProduct);
    console.log(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});
// delete
router.delete("/delete/:id", verifyTokenAdmin, async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted successfully");
  } catch (error) {
    res.status(401).json(error);
  }
});
// find one product
router.get("/oneProduct", async (req, res) => {
  const qProduct = req.query.product;
  try {
    const data = await ProductModel.findOne({_id:qProduct});
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json(error);
  }
});
// get user
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
        products = await ProductModel.find().sort({_id:-1}).limit(5)
    }
    else if(qCategory) {
        products = await ProductModel.find({categories:{$in:[qCategory]}})
    } else {
        products = await ProductModel.find()
    }
    res.status(200).json(products);
  } catch (error) {
    console.log(error)
    res.status(401).json(error);
  }
});
// // get user stats
// router.get("/stats", verifyTokenAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//   try {
//     const data = await UserModel.aggregate([
//       {
//         $match: { createdAt: { $gte: lastYear } },
//       },
//       {
//         $project: { month: { $month: "$createdAt" } },
//       },
//       {
//         $group: { _id: "$month", total: { $sum: 1 } },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(401).json(error);
//   }
// });

module.exports = router;
