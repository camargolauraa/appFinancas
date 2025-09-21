import React, { useContext } from "react";
import { View, Text, Image } from "react-native";

import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import { AuthContext } from "../../contexts/auth";

export default function CustomDrawer(props) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 75,
        }}
      >
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 90, height: 90 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 14 }}>
          Bem-vindo(a)!
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            marginBottom: 14,
            paddingHorizontal: 20,
          }}
          numberOfLines={1}
        >
          {user && user.name}
        </Text>
      </View>

      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  );
}
