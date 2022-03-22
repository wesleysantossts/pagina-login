const {Router} = require("express"), routes = new Router();

const SessionController = require("./controller/SessionController");
// const Middleware = require("./middlewares");

routes.post("/novousuario", SessionController.CriarUsuario)

module.exports = routes;