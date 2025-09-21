import React from "react";
import { Container, TypeText, Type, IconView, ValueText } from "./styles";

import Icon from "react-native-vector-icons/Feather";

import { TouchableWithoutFeedback, Alert } from "react-native";

export default function HistoricList({ data, deleteItem }) {
  function handleDelete() {
    Alert.alert("Atenção", "Você tem certeza que deseja excluir este item?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () => deleteItem(data.id),
      },
    ]);
  }

  return (
    <TouchableWithoutFeedback onPress={handleDelete}>
      <Container>
        <Type>
          <IconView tipo={data.type}>
            <Icon
              name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
              color="#fff"
              size={20}
            />
            <TypeText>
              {data.type === "despesa" ? "Despesa" : "Receita"}
            </TypeText>
          </IconView>
        </Type>
        <ValueText>R${data.value}</ValueText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
