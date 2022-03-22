const mongoose = require("mongoose"), User = require("../model/User"), bcrypt = require("bcrypt"), jwt = require("jsonwebtoken"), axios = require("axios");
require("dotenv").config();
const JWTSecret = process.env.JWT_SECRET;
const MONGO = process.env.MONGO;

axios.defaults.baseURL = MONGO;

class SessionController {
  async CriarUsuario(req, res){
    const {nome, email, senha} = req.body;

    if(!nome && !email && !senha){
      res.json({error: "Falta algum dado. Preencha os dados novamente."})
      res.sendStatus(400);
    }

    try {
      const userEmail = await User.findOne({"email": email});

      if(userEmail != undefined){
        res.status(400);
        res.json({error: "Usuário já cadastrado."});
        return
      }

      let salt = await bcrypt.genSalt(10), hash = await bcrypt.hash(senha, salt);
  
      const user = await User.create({nome, email, senha: hash})

      // Se tudo deu certo, vou gerar um token
      jwt.sign({nome: user.nome, email: user.email}, JWTSecret, {expiresIn: "48h"}, (err, token)=>{
        if(err){
          res.status(500);
          res.json({error: "Não foi possível gerar o token"})
        }

        res.status(200);
        res.json({message: "Usuário cadastrado com sucesso.", token: token});
      })

    } catch(error){
      res.status(500);
    }

  }
}

module.exports = new SessionController();