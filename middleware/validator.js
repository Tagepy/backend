const validator = require("email-validator");

module.exports = {
  validateRegistration: (req, res, next) => {
    const { email, pass1, pass2 } = req.body;

    const validEmail = validator.validate(email);

    if (!validEmail) {
      return res.send({ message: "email is not good" });
    }

    if (pass1 !== pass2) {
      return res.send({ message: "passwrds does not match" });
    }

    next();
  },

  validateProduct: (req, res, next) => {
    const { title, price, image } = req.body;

    if (title.length > 100)
      return res.send({ success: false, message: "Bad title" });
    if (!price) return res.send({ success: false, message: "Bad price" });
    if (!image.includes("http"))
      return res.send({ success: false, message: "Bad image" });

    next();
  },
};
