import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import Header from "../../components/Header";
import RegisterTypes from "../../components/RegistretTypes";

import api from "../../services/api";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

export default function New() {
  const navigation = useNavigation();

  const [labelInput, setLabelInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [type, setType] = useState("receita");

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(valueInput)) || type === null) {
      alert("Preencha todos os campos!");
      return;
    }
    Alert.alert(
      "Confirmando dados",
      `Tipo: ${type} - Valor: ${parseFloat(valueInput).toFixed(2)}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            handleAdd();
          },
        },
      ]
    );
  }

  async function handleAdd() {
    Keyboard.dismiss();
    await api.post("/receive", {
      description: labelInput,
      value: Number(valueInput),
      type: type,
      date: format(new Date(), "dd/MM/yyyy"),
    });

    setLabelInput("");
    setValueInput("");
    navigation.navigate("Home"); // Não faz sentido voltar para a home. Se houver mais de um registro, o usuário terá que clicar em "Novo" novamente.
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Background>
        <Header title="Registrar" />
        <View style={{ marginTop: 14, alignItems: "center" }}>
          <Input
            placeholder="Descrição do registro"
            value={labelInput}
            onChangeText={(text) => setLabelInput(text)}
          />
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={(text) => setValueInput(text)}
          />

          <RegisterTypes
            type={type}
            sendTypeChanged={(item) => setType(item)}
          />

          <SubmitButton
            onPress={() => {
              handleSubmit();
            }}
          >
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  );
}
