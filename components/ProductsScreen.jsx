import { StyleSheet, Button, View, Text, FlatList } from "react-native";
import React, {useState} from 'react'
import { BUTTONS } from '../models/ProductData'
import ColorButton from "./ColorButton";


const ProductsScreen = ({navigation}) => {
    const [buttons, setColoredButtons] = useState(BUTTONS);
    const handleOnPress = () => {
        navigation.navigate("Home")
    };

    const deleteColoredButton = (id) => {
      const newButtons = buttons.filter((button) => button.id !== id);
      setColoredButtons(newButtons);
      console.log('Buttons deleted !! ID is : ', id);
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
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ marginVertical : 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "red" }}>Welcome to the Product page</Text>
      </View>
      

      <View style={{ height: '80%', width: '90%'}}>
        {/* {BUTTONS.map(button => addButton({...button}))} */}

        <FlatList 
          data={buttons}
          keyExtractor={item => item.id}
          // renderItem={({item}) => addButton({...item})}
          renderItem={({item}) => 
            <ColorButton 
              {...item} 
              deleteColoredButton={deleteColoredButton} 
            /> 
          }
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