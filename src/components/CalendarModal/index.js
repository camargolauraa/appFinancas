import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import {
  Container,
  ButtonFilter,
  ButtonFilterText,
  ModalContent,
} from "./styles";
import { View } from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";

import ptBR from "./localeCalendar";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export default function CalendarModal({ setVisible, handleFilter }) {
  const [date, setDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});
  function handleOnDayPress(date) {
    setDate(date.dateString);

    const newMarkedDates = {
      [date.dateString]: {
        selected: true,
        selectedColor: "#3b3dbf",
        selectedTextColor: "#fff",
      },
    };

    setMarkedDates(newMarkedDates);
  }

  function handleFilterDate() {
    handleFilter(date);
    setVisible();
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: "#ff0000",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#fff",
          }}
        />
        <ButtonFilter onPress={handleFilterDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  );
}
