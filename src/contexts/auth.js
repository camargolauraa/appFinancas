import React, { createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem("@App:token");
      if (token) {
        const response = await api
          .get("/me", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .catch(() => {
            setUser(null);
          });
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        setUser(response.data);
      }
    }
    loadStorageData();
  }, []);

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

  async function signIn(email, password) {
    setLoading(true);

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { id, name, token } = response.data;
      const data = { id, name, email, token };

      await AsyncStorage.setItem("@App:token", token);

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser({ id, name, email });
      setLoading(false);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#131313" />
      </View>
    );
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signIn, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
