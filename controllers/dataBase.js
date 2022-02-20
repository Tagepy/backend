const productDb = require("../schemas/productSchema");
const userDb = require("../schemas/userSchema");
const { nanoid } = require("nanoid");
const { post } = require("../routes/mainRouter");

module.exports = {
  registerUser: async (req, res) => {
    const { email, pass1 } = req.body;
    const userExists = await userDb.findOne({ email });
    if (!!userExists) {
      return res.send({ message: "email already registered" });
    }
    const user = new userDb();
    user.email = email;
    user.password = pass1;
    user.secret = nanoid();
    await user.save();
    res.send({ message: "User created, all good" });
  },
  login: async (req, res) => {
    const { email, pass1 } = req.body;
    const user = await userDb.findOne({ email, pass1 });
    if (!!user) {
      res.send({ loggedIn: true, user });
    } else {
      res.send({ loggedIn: false });
    }
  },

  createProduct: async (req, res) => {
    const { title, image, price, secret } = req.body;

    // const user = await userDb.findOne({ secret });

    // if (!user) {
    //   return res.send({ error: true, message: "wrong credentials" });
    // }

    const product = new productDb();
    product.title = title;
    product.image = image;
    product.price = price;
    product.quantity = 1;
    // product.email = user.email;
    await product.save();

    res.send({ success: true });
  },
  getAll: async (req, res) => {
    const products = await productDb.find();
    res.send({ products });
  },
  getSingle: async (req, res) => {
    const { id } = req.params;
    const product = await productDb.findOne({ _id: id });
    res.send({ product });
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    await productDb.findOneAndDelete({ _id: id });

    res.send({ success: true });
  },
};
