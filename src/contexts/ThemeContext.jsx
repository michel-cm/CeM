import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      return "dark";
    } else {
      return "light";
    }
  });

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={isDarkTheme === "dark" ? dark : light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
