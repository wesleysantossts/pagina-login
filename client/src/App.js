import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Routes from "./routes"; 
import AuthProvider from "./contexts/auth";

function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
