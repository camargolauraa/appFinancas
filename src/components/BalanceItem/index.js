import React, { useMemo } from "react";
import { Container, Label, Balance } from "./styles";

export default function BalanceItem({ data }) {
  const labelName = useMemo(() => {
    if (data.tag === "saldo") {
      return {
        label: "Saldo",
        color: "3b3dbf",
      };
    } else if (data.tag === "receita") {
      return {
        label: "Entradas",
        color: "3dbf3e",
      };
    } else if (data.tag === "despesa") {
      return {
        label: "Saídas",
        color: "bf3e3e",
      };
    }
  }, [data]);

  return (
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance> R$ {data.saldo}</Balance>
    </Container>
  );
}
