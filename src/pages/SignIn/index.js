import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

function SignIn() {
  const navigation = useNavigation();
  const { signIn, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    await signIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/Logo.png")} />
        <AreaInput>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </AreaInput>
        <AreaInput>
          <Input
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText onPress={handleLogin}>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

export default SignIn;
