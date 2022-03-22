const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  nome: String, email: String, senha: String
});

module.exports = mongoose.model("usersLogin", UserModel);