import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    nome: "Laura",
  });

  const navigation = useNavigation();

  async function signUp(email, password, nome) {
    try {
      const response = await api.post("/users", {
        name: nome,
        password: password,
        email: email,
      });
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
