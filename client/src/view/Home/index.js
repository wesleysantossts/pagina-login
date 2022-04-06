import React from 'react';
import headerImg from "../../assets/img/home1.jpg";
import "./home.css";

export default function Home() {
  function Sair(){
    localStorage.removeItem("token");
    window.location.replace("/");
  }

  return (
    <div className="conteudoHome">
      <img src={headerImg} alt="Imagem de celebração"/>
      <p>Usuário logado com sucesso! 🎉</p>
      <div className="sairHome">
        <button type="button" onClick={()=> Sair()}>Sair do sistema</button>
      </div>
    </div>
  );
}