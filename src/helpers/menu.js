import { GoHome } from 'react-icons/go';
import { GoPaste } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { GoTools } from 'react-icons/go';
import { BsCart2 } from 'react-icons/bs';

export const menu = [
  { title: "Home", icon: GoHome, to: "/" },
  { title: "Vendas", icon: BsCart2, to: "/vendas" },
  { title: "Clientes", icon: GoPerson, to: "/clientes" },
  { title: "Relatórios", icon: GoPaste, to: "/relatorios" },
  { title: "Configurações", icon: GoTools, to: "/configuracoes" },
];
