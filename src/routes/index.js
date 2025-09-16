import React from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./AuthRoutes";

export default function Routes() {
  const loading = false;
  const signed = false;

  return signed ? <View></View> : <AuthRoutes />;
}
