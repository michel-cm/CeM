import homeLight from "../assets/menu/home.png";
import candidatosLight from "../assets/menu/people.png";
import favoritosLight from "../assets/menu/star.png";
import questionarioLight from "../assets/menu/book.png";
import configuracaoLight from "../assets/menu/configuracao.png";

export const menu = [
  { title: "Home", icon: homeLight, to: "/" },
  { title: "Candidatos", icon: candidatosLight, to: "/candidatos" },
  { title: "Favoritos", icon: favoritosLight, to: "/favoritos" },
  { title: "Questionário", icon: questionarioLight, to: "/questionario" },
  { title: "Configurações", icon: configuracaoLight, to: "/configuracoes" },
];
