const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mainrouter = require("./routes/mainRouter");

app.use(cors());
app.use(express.json());
app.listen(4000);
app.use("/", mainrouter);

mongoose
  .connect(
    "mongodb+srv://admin1:admin1@cluster0.z46bp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("connection good");
  })
  .catch((e) => {
    console.log(e);
  });
