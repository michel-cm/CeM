import GlobalStyle from "./styles/global";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <AuthContextProvider>
            <Router />
            <GlobalStyle />
          </AuthContextProvider>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;
