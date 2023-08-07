import { useState, useEffect, useCallback, createContext } from "react";

export const InventarioContext = createContext({});

import { Api } from "../services/Api";

export function InventarioContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getAllProds = useCallback(async () => {
    await Api.getAllProducts().then((data) => {
      setProducts(data);
    });
  }, [setProducts]);

  useEffect(() => {
    if (products.length === 0) {
      getAllProds();
    }
  });

  return (
    <InventarioContext.Provider value={{ products }}>
      {children}
    </InventarioContext.Provider>
  );
}
