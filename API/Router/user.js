const {
  verifyPasswordToken, 
  verifyTokenAdmin,
} = require("../Middleware/verifyToken");
const UserModel = require("../Model/UserModel");
const cryptoJS = require("crypto-js");
const router = require("express").Router();
// update
router.put("/:id", verifyPasswordToken, async (req, res) => {
  if (req.body.password) {
    password = cryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
    req.body,password = password;
  } else {
    // res.send("password in incorrect");
    console.log("password in incorrect");
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedUser);
    console.log(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
// delete
router.delete("/delete/:id", verifyTokenAdmin, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted successfully");
  } catch (error) {
    res.status(401).json(error);
  }
});
// get user
router.get("/find", verifyTokenAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await UserModel.find().sort({ _id: -1 }).limit(5)
      : await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json(error);
  }
});
// get user stats
router.get("/stats", verifyTokenAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await UserModel.aggregate([
      {
        $match: { createdAt: { $gte: lastYear } },
      },
      {
        $project: { month: { $month: "$createdAt" } },
      },
      {
        $group: { _id: "$month", total: { $sum: 1 } },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json(error);
  }
});

module.exports = router;
