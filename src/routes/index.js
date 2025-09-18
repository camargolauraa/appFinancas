// Controlar a navegação da aplicação, mostrando diferentes conjuntos de rotas dependendo se o usuário está autenticado ou não.
// Renderiza routes

import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import { AuthContext } from "../contexts/auth";

export default function Routes() {
  const loading = false;
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
