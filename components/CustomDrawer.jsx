import { StyleSheet, Text, View, Button } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { ButtonsContext } from "../Utils/ButtonsContext";

export default function CustomDrawer(props) {
  const { navigation } = props;

  const buttons = useContext(ButtonsContext);
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <View style={{alignItems: 'center', marginBottom: 20}}><Text style={{fontSize: 26, fontWeight: 'bold', color: 'brown', textDecorationLine: 'underline'}}>God is Good</Text></View>
      {buttons.map((button) => (
        <DrawerItem
          label={() => <Text style={{ color: "white", fontWeight: 'bold' }}>{button.name}</Text>}
          onPress={() => navigation.navigate("ProductsDetails", { ...button })}
          key={button.id}
          inactiveBackgroundColor={button.color}
          style={{ margin: 5 }}
        />
      ))}
    </DrawerContentScrollView>
  );
}
