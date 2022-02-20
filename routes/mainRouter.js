const express = require("express");
const router = express.Router();
const middle = require("../middleware/validator");
const {
  registerUser,
  login,
  createProduct,
  getAll,
  getSingle,
  deleteProduct,
} = require("../controllers/dataBase");

router.post("/register", middle.validateRegistration, registerUser);
router.post("/login", login);
router.post("/create", middle.validateProduct, createProduct);
router.get("/all", getAll);
router.get("/single/:id", getSingle);
router.get("/delete/:id", deleteProduct);

module.exports = router;
