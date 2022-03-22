import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Routes from "./routes"; 

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
