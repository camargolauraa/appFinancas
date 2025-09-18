import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";
import { Container, SubmitButton, SubmitText } from "../SignIn/styles";

export default function Home() {
  const { signOut, user } = useContext(AuthContext);
  return (
    <Container>
      <Text>Home Page</Text>
      <Text>Olá, {user.name}!</Text>
      <SubmitButton title="Logout" onPress={signOut}>
        <SubmitText>Logout</SubmitText>
      </SubmitButton>
    </Container>
  );
}
