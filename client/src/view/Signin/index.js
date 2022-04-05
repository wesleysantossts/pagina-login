import { useState } from "react";
import api from "../../service/api";
import "./signin.css"

export default function Signin(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  };
  
  function login(){
    api.post("/auth", {
      email,
      senha
    }, config)
    .then(res => {
      let token = res.data.token;
      localStorage.setItem("token", token);

      api.defaults.headers.post['Authorization'] = "Bearer " + localStorage.getItem("token");
      window.location.reload();
    })
    .catch(error => console.log("Erro ao logar o usuario. Tente novamente", error))
  }


  return(
    <div className="conteudoSignin">
      <div className="formSignin">
        <h1>Entrar</h1>
        <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <input type="password" name="senha" placeholder="****" value={senha} onChange={e => setSenha(e.target.value)} /><br/>
        <button type="button" onClick={login}>Entrar</button><br/>
        <p>Não tem uma conta? <a href="/signup">Clique aqui</a></p>
      </div>
    </div>
  )
}