import React, { useContext, useState } from "react";
import { Platform } from "react-native";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "../SignIn/styles";

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <AreaInput>
          <Input value={nome} onChangeText={setNome} placeholder="Nome" />
        </AreaInput>
        <AreaInput>
          <Input value={email} onChangeText={setEmail} placeholder="Email" />
        </AreaInput>
        <AreaInput>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            secureTextEntry={true}
          />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
