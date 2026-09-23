import { StyleSheet, Button, View, Text, FlatList } from "react-native";
import React from 'react'
import { BUTTONS } from '../models/ProductData'
import ColorButton from "./ColorButton";
// import { FlatList } from 'react-native/types_generated/index'

const ProductsScreen = ({navigation}) => {
    const handleOnPress = () => {
        navigation.navigate("Home")
    }

    const addButton = (props) => {
        return (
            <Button
              title={props.name}
              onPress={() =>
                navigation.navigate("ProductsDetails", { ...props })
              }
            />
        );
    }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to the Product page</Text>

      <View style={{ height: '50%'}}>
        {/* {BUTTONS.map(button => addButton({...button}))} */}

        <FlatList 
          data={BUTTONS}
          keyExtractor={item => item.id}
          // renderItem={({item}) => addButton({...item})}
          renderItem={({item}) => <ColorButton {...item} /> }
          // numColumns={2}
          // columnWrapperStyle={{ justifyContent: 'space-between', width: "80%"}}
        />
        {/* <View style={styles.buttonView}>
          {addButton("red")}
          {addButton("orange")}
        </View>
        <View style={styles.buttonView}>
          {addButton("green")}
          {addButton("blue")}
        </View>
        <View style={styles.buttonView}>
          {addButton("indigo")}
          {addButton("violet")}

          <Button
            title="violet"
            onPress={() =>
              navigation.navigate("ProductsDetails", { color: "violet" })
            }
          />
        </View> */}
      </View>

      <Button title="Go to Home page" onPress={handleOnPress} />
    </View>
  );
}

export default ProductsScreen

const styles = StyleSheet.create({
    buttonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
    },
})