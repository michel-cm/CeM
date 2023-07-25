import GlobalStyle from "./styles/global";

import Header from "./components/Header";

import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <GlobalStyle />
      </ThemeContextProvider>
    </>
  );
}

export default App;
