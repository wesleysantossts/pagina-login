require("dotenv").config();
const JWTSecret = process.env.JWT_SECRET, jwt = require("jsonwebtoken");

class Middlewares {
  auth(req, res, next){
    const authToken = req.headers.authorization;

    if(!authToken){
      console.log("Insira um token válido.");
      next();
    }

    const [,token] = authToken.split(" ");
    try {
      jwt.verify(token, JWTSecret, (err, data)=>{
        if(err){
          res.status(401);
          res.json({err: "Token inválido."})
        }

        req.token = token;
        req.loggedUser = {
          id: data._id,
          email: data.email
        };

      })
    } catch (error) {
      res.status(400);
      next();
    }
  }
}

module.exports = new Middlewares();