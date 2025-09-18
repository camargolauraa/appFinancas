import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/header";
import { Background } from "./styles";

import api from "../../services/api";
import { format } from "date-fns";

export default function Home() {
  const [listBalance, setListBalance] = useState([]);
  const [dateMovement, setDateMovement] = useState(new Date());

  useEffect(() => {
    let isActive = true;
    async function getMovements() {
      let dateFormated = format(dateMovement, "dd/MM/yyyy");

      const balance = await api.get("/balance", {
        params: {
          date: dateFormated,
        },
      });

      if (isActive) {
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <Background>
      <Header title="Minhas Movimentações" />
    </Background>
  );
}
