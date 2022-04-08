# Sistema de Login

Sistema de login criada utilizando React, NodeJS, Express com banco de dados MongoDB e autenticação em JWT.

https://sistema-de-login.netlify.app/

## Como iniciar o projeto

<details>
  <summary>Iniciando o projeto</summary>
  <ul>
    <li>Clone o repositório na sua máquina.</li>
    <li>No terminal integrado digite o comando <code>npm install</code> para instalar os pacotes e dependências.</li>
    <li>Crie um arquivo com o nome <code>.env</code> na pasta <code>server</code> e insira os seguintes campos: </li>
    <pre>    
      PORT = 8080
      MONGO = [observação: crie um banco gratuito no MongoDB e insira o link do banco aqui]
      JWTSecret = [coloque uma senha aleatória aqui (apenas para teste)]
    </pre>
    <li>No terminal integrado do VSCode, na pasta <code>server</code> inicie o servidor com o comando <code>node server</code> (ele será iniciado na porta 8080).</li>
    <li>Após isso, entre no site e teste a aplicação através <a href="https://sistema-de-login.netlify.app/" target="_blank"> deste link</a> ou, pelo terminal integrado, entre na pasta <code>client</code> e rode o comando <code>npm start</code>, que abrirá a aplicação pelo localhost no seu navegador padrão.</li> 
  </ul>
</details>

## Páginas

### Login

A página contém os campos de e-mail, senha e de redirecionamento para a página de cadastro caso seja um novo usuário.

<div align="center" margin="10px 0px">
  <img src="./client/src/assets/img/pgLogin.jpg" alt="Página de login do Sistema de Login." width="400px"><br/>
  <sub>Imagem 01: Página de login do sistema.</sub>
</div>

Toda autenticação da página é feita em JWT e para integração com o banco de dados foi utilizado o banco NoSQL MongoDB.

### Cadastro

A página foi destinada a novos usuário e contém os seguintes campos:

- Nome;
- Email;
- Senha.

Assim que o usuário concluir o cadastro, ele será redirecionado para a Homepage do sistema. 

<div align="center" margin="10px 0px">
  <img src="./client/src/assets/img/pgCadastro.jpg" alt="Página de cadastro do Sistema de Login." width="400px"><br/>
  <sub>Imagem 02: Página de cadastro do sistema.</sub>
</div>

### Homepage

Como conferência da efetividade do sistema de login, assim que o usuário for autenticado, ele será redirecionado automaticamente para essa página cujo o intuito é informar que a ação de login foi concluída com sucesso.

<div align="center" margin="10px 0px">
  <img src="./client/src/assets/img/pgHome.jpg" alt="Página inicial do Sistema de Login." width="400px"><br/>
  <sub>Imagem 03: Página inicial do sistema.</sub>
</div>

## Bibliotecas, Frameworks e Banco de Dados

- [x] React;
- [x] NodeJS;
- [x] Express;
- [x] MongoDB;
- [x] JWTWebToken;
- [x] React Router Dom;
- [x] Mongoose;
- [x] BCrypt;
- [x] Axios;
- [x] Dotenv.

## Desenvolvimento

<table>
  <tr>
    <td border="1px solid #ddd" align="center">
      <a href="https://github.com/wesleysantossts">
        <img src="https://avatars.githubusercontent.com/u/56703526?v=4" width="100px" alt="Wesley Santos"/>
        <br/>
        <sub>Wesley Santos</sub>
      </a>
    </td>
  </tr>
</table>
