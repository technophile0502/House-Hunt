const mongoose = require("mongoose");

module.exports = mongoose.model("Property", {
  title: String,
  location: String,
  price: String,
});
