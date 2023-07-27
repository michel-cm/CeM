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
};
