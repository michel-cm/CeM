import GlobalStyle from "./styles/global";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AuthContextProvider } from "./contexts/AuthContext";
import { InventarioContextProvider } from "./contexts/InventarioContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <AuthContextProvider>
            <InventarioContextProvider>
              <Router />
              <GlobalStyle />
            </InventarioContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;
