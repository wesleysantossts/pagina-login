import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box
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