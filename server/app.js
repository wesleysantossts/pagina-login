const express = require("express"), cors = require("cors"), routes = require("./routes");

class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.urlencoded({extended: false}), express.json(), cors());
  }

  routes(){
    this.server.use(routes);
  }
}

module.exports = new App().server;