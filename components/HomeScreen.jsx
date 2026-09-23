import { StyleSheet, Text, View, Button } from "react-native";
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <Text>Welcome to the Nav App Home Page</Text>
      <Button
        title="Go to Product"
        onPress={() => navigation.navigate("Product")}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  homeContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
});