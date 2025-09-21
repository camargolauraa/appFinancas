import React from "react";
import { Container, TypeText, Type, IconView, ValueText } from "./styles";

import Icon from "react-native-vector-icons/Feather";

export default function HistoricList({ data }) {
  return (
    <Container>
      <Type>
        <IconView tipo={data.type}>
          <Icon
            name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
            color="#fff"
            size={20}
          />
          <TypeText>{data.type === "despesa" ? "Despesa" : "Receita"}</TypeText>
        </IconView>
      </Type>

      <ValueText>R${data.value}</ValueText>
    </Container>
  );
}
