import { createContext, useState } from "react";

export const InventarioContext = createContext({});

import { Api } from "../services/Api";

const itensTemp = [
  {
    cod: 123,
    nome: "Regata Cavalo Forte",
    preco: 32,
    estoque: 5,
    tamanho: "M",
    categoria: "F",
    descricao: "teste descrição",
    observacao: "teste observação",
    disponivel: true,
  },
  {
    cod: 125,
    nome: "Calça Legging Voltz",
    preco: 50,
    estoque: 0,
    tamanho: "P",
    categoria: "F",
    descricao: "teste descrição",
    observacao: "teste observação",
    disponivel: false,
  },
  {
    cod: 126,
    nome: "Camisa Polo",
    preco: 80,
    estoque: 1,
    tamanho: "GG",
    categoria: "M",
    descricao: "teste descrição",
    observacao: "teste observação",
    disponivel: false,
  },
  {
    cod: 127,
    nome: "Calça Jeans Cien",
    preco: 95,
    estoque: 10,
    tamanho: "G",
    categoria: "M",
    descricao: "teste descrição",
    observacao: "teste observação",
    disponivel: false,
  },
];

export function InventarioContextProvider ({ children }) {
  return (
    <InventarioContext.Provider value={{ itensTemp }}>
      {children}
    </InventarioContext.Provider>
  );
}
