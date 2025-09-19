import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import Header from "../../components/Header";
import { Background, ListBalance, Area, Title, List } from "./styles";

import api from "../../services/api";
import { format } from "date-fns";

import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import HistoricList from "../../components/HistoricList";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home() {
  const isFocused = useIsFocused();

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
  }, [isFocused]);

  return (
    <Background>
      <Header title="Minhas Movimentações" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <Area>
        <TouchableOpacity>
          <Icon name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>últimas Movimentações</Title>
      </Area>

      <List
        data={listBalance}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoricList />}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}
