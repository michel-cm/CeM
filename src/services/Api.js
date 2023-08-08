import "firebase/compat/firestore";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { database, firebase } from "./firebase";

export const Api = {
  updatePassword: async (email) => {
    //redefinir Senha
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Verifique sua caixa de e-mail.");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Email Inválido");
      });
  },
  getAllProducts: async () => {
    const list = [];

    let results = await getDocs(collection(database, "produtos"));
    results.forEach((result) => {
      let data = result.data();

      list.push({
        id: result.id,
        cod: data.cod,
        nome: data.nome,
        preco: data.preco,
        quantidade: data.quantidade,
        tamanho: data.tamanho,
        categoria: data.categoria,
        descricao: data.descricao,
        observacao: data.observacao,
      });
    });
    return list;
  },

  addNewProduct: async (prod) => {
    await database.collection("produtos").doc().set({
      cod: prod.cod,
      nome: prod.nome,
      preco: prod.preco,
      quantidade: prod.quantidade,
      tamanho: prod.tamanho,
      categoria: prod.categoria,
      descricao: prod.descricao,
      observacao: prod.observacao,
    });
  },

  deleteProduct: async (idProduct) => {
    await deleteDoc(doc(database, "produtos", idProduct));
  },
};
