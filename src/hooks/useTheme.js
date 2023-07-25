/* 3 - Criação de um Hook para utilização do contexto de forma simplicada pelos componentes da aplicação */

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    if (isDarkTheme === "dark") {
      setIsDarkTheme("light");
      localStorage.setItem("theme", "light");
    }
    if (isDarkTheme === "light") {
      setIsDarkTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return {
    changeTheme,
    isDarkTheme,
  };
};
