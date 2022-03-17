const {Router} = require("express"), routes = new Router();

const SessionController = require("./controller/SessionController");

routes.post("/novousuario", SessionController.CriarUsuario)

module.exports = routes;