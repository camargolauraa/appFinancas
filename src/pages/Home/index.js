import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/header";
import { Background } from "./styles";

export default function Home() {
  return (
    <Background>
      <Header title="Minhas Movimentações" />
    </Background>
  );
}
