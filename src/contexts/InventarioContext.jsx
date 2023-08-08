import { useState, useEffect, useCallback, createContext } from "react";
import { v1 as uuidv1 } from "uuid";

export const InventarioContext = createContext({});

import { Api } from "../services/Api";

export function InventarioContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getAllProds = useCallback(async () => {
    await Api.getAllProducts().then((data) => {
      setProducts(data);
    });
  }, [setProducts]);

  const addNewProd = async (prod) => {
    const newProdForAdd = { id: uuidv1(), ...prod };
    await Api.addNewProduct(newProdForAdd).then(() => {
      setProducts((state) => [newProdForAdd, ...state]);
    });
  };

  const deleteProd = async (idProd) => {
    await Api.deleteProduct(idProd).then(() => {
      setProducts((state) =>
      state.filter((prod) => prod.id !== idProd)
      );
    });
  };

  useEffect(() => {
    if (products.length === 0) {
      getAllProds();
    }
  }, []);

  return (
    <InventarioContext.Provider value={{ products, addNewProd, deleteProd }}>
      {children}
    </InventarioContext.Provider>
  );
}
