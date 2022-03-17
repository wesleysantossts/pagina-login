const {Router} = require("express"), routes = new Router();

routes.get("/", (req, res)=>{
  res.json({ok: true})
})

module.exports = routes;