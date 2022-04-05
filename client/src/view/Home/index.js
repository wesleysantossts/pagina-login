import React from 'react';
import headerImg from "../../assets/img/home1.jpg";
import "./home.css";

export default function Home() {

  return (
    <div className="conteudoHome">
      <img src={headerImg} alt="Imagem de celebração"/>
      <p>Usuário logado com sucesso! 🎉</p>
    </div>
  );
}