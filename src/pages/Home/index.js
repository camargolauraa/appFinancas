import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Modal } from "react-native";

import Header from "../../components/Header";
import { Background, ListBalance, Area, Title, List } from "./styles";

import api from "../../services/api";
import { format, set, setDate } from "date-fns";

import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import HistoricList from "../../components/HistoricList";
import CalendarModal from "../../components/CalendarModal";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home() {
  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);

  const [dateMovement, setDateMovement] = useState(new Date());

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let isActive = true;
    async function getMovements() {
      let date = new Date(dateMovement);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60000;
      let dateFormated = format(onlyDate, "dd/MM/yyyy");

      const receives = await api.get("/receives", {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get("/balance", {
        params: {
          date: dateFormated,
        },
      });

      if (isActive) {
        setMovements(receives.data);
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    };
  }, [isFocused, dateMovement]);

  async function handleDeleteItem(id) {
    try {
      await api.delete("/receives/delete", {
        params: { item_id: id },
      });
      setDateMovement(new Date());
    } catch (error) {
      console.log("Erro ao deletar item");
    }
  }

  function filterDateMovements(date) {
    setDateMovement(date);
  }

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Últimas Movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistoricList data={item} deleteItem={handleDeleteItem} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </Background>
  );
}
