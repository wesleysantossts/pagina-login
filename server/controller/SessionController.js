const mongoose = require("mongoose"), User = require("../model/User"), bcrypt = require("bcrypt");

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
        res.json({error: "Usuário já cadastrado."})
      }

      let salt = await bcrypt.genSalt(10), hash = await bcrypt.hash(senha, salt);
  
      const user = await User.create({nome, email, senha: hash})

      res.status(200);
      res.json({message: "Usuário cadastrado com sucesso."});
    } catch(error){
      res.status(500);
      // res.json({error: error})
    }

  }
}

module.exports = new SessionController();