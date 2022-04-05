import { useState } from "react";
import api from "../../service/api";
import "./signup.css"

export default function Signup(){
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  async function CadastrarUsuario(){

    if(!nome && !email && !senha){
      console.log({nome, email})
      alert("Falta algum dado. Insira os dados novamente.")
    }

    api.post("/novousuario", {
      nome,
      email,
      senha
    })
    .then((res)=>{
      let token = res.data.token;
      console.log(res.data)
      localStorage.setItem("token", token)

      api.defaults.headers.post['Authorization'] = "Bearer " + localStorage.getItem("token");
    })
    .catch(error => console.error("Erro ao criar um usuário.", error))
  }
  

  return(
    <div className="conteudoSignup">
      <div className="formSignup">
        <h1>Cadastre-se</h1>
        
        <input type="text" name="nome" className="nome" placeholder="Insira seu nome" value={nome} onChange={(e)=> setNome(e.target.value)} /><br/>
        <input type="email" name="email" className="email" placeholder="email@email.com" value={email} onChange={(e)=> setEmail(e.target.value)} /><br/>
        <input type="password" name="senha" className="senha" placeholder="Digite uma senha" value={senha} onChange={(e)=> setSenha(e.target.value)} /><br/>
        <button type="button" onClick={CadastrarUsuario}>Cadastrar</button><br/>
        <p>Já tem uma conta? <a href="/signin">Clique aqui</a></p>

      </div>
      
    </div>
  )
}