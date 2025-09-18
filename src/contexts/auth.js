import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function signUp(email, password, nome) {
    setLoading(true);

    try {
      const response = await api.post("/users", {
        name: nome,
        password: password,
        email: email,
      });
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signUp, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
