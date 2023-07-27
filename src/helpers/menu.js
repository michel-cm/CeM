import { GoHome } from 'react-icons/go';
import { GoPaste } from 'react-icons/go';
import { BsCart2 } from 'react-icons/bs';

export const menu = [
  { title: "Home", icon: GoHome, to: "/" },
  { title: "Vendas", icon: BsCart2, to: "/vendas" },
  { title: "Relatórios", icon: GoPaste, to: "/relatorios" },
];
