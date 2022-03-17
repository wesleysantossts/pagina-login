const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  nome: String, email: String
});

module.exports = mongoose.model("users", UserModel);