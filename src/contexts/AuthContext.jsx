import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { Api } from "../services/Api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        if (user) {
          const { uid, email } = user;
          setUser({
            id: uid,
            email: email,
          });
        }
      },
      [user]
    );

    return () => {
      unsubscribe();
    };
  }, []);

  async function logoutAccount() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function loginWithEmail(email, senha) {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({
          id: user.uid,
          email: user.email,
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Email ou senha incorreta");
      });
  }

  async function handleUpdatePassowrd() {
    await Api.updatePassword("sprmachado@hotmail.com");
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      return;
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logoutAccount,
        loginWithEmail,

        handleUpdatePassowrd,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
