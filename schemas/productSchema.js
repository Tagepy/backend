const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("product", users);
