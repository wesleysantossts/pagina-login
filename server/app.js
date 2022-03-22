const express = require("express"), cors = require("cors"), routes = require("./routes"), mongoose = require("mongoose"), Middleware = require("./middlewares");
require("dotenv").config();
const MONGO = process.env.MONGO;

class App {
  constructor(){
    this.server = express();
    mongoose.connect(MONGO, ()=> console.log("BD conectado."));

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.static("public"), express.urlencoded({extended: false}), express.json(), cors());
  }

  routes(){
    this.server.use(routes);
  }
}

module.exports = new App().server;