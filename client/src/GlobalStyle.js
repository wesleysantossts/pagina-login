import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
  
* {
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif !important;
}

html, body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
}

button, a {
  cursor: pointer;
  text-decoration: none;
}
`;

export default GlobalStyle;