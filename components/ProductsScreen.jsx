import { StyleSheet, Button, View, Text, FlatList,Modal } from "react-native";
import React, {useState} from 'react'
import { BUTTONS } from '../models/ProductData'
import ColorButton from "./ColorButton";
import AddColorModal from "./AddColorModal";


const ProductsScreen = ({navigation}) => {
    const [buttons, setColoredButtons] = useState(BUTTONS);
    const [isModalVisible, setModalVisible] = useState(false);
    const [nextId, setNextId] = useState(BUTTONS.length + 1);
    const [editMode, setEditMode] = useState(false);
    const [ currId, setCurrId ] = useState(null);


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
    const addNewColor = (newDetails) => {
      const newColoredButton = [ {id:nextId, ...newDetails}, ...buttons];
      setColoredButtons(newColoredButton)
      setNextId(nextId + 1);
      setModalVisible(false);
      // console.log('Add new color button pressed !!');
      // setModalVisible(true);
    };
    // modal
    const editColorButtonModal = (id) => {
      // store id in state
      setCurrId(id)
      // set edit modal true
      setEditMode(true)
      setModalVisible(true)
    }

    const updateButton = (details) => {
      console.log(details);
      const newButtons = buttons.map((button)=>{
        if (button.id === details.id) {
          return details;
        }else{
          return button;
        }
      });
      setColoredButtons(newButtons)
      closeModal()
    }
    const getButtonDetails = () => {
      const itemDetails = buttons.find((button) => button.id === currId)
      return itemDetails || { name: '', color: '', description: ''};
      // console.log(itemDetails);
    }

    const closeModal = () => {
      setModalVisible(false);
      setCurrId(null)
      setEditMode(false)
    }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "red" }}>
          Welcome to the Product page
        </Text>
      </View>

      <View style={{ height: "80%", width: "90%" }}>
        {/* {BUTTONS.map(button => addButton({...button}))} */}

        <FlatList
          data={buttons}
          keyExtractor={(item) => item.id}
          // renderItem={({item}) => addButton({...item})}
          renderItem={({ item }) => (
            <ColorButton
              item={item}
              deleteColoredButton={deleteColoredButton}
              editColorButtonModal={editColorButtonModal}
            />
          )}
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

      {/* <Modal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(!isModalVisible)}
        transparent={true}
      >
        <View style={{ height:'50%', width:'70%', justifyContent:'center', marginTop:'50%', alignSelf: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 10, paddingHorizontal: 10, backgroundColor: '#f1e5d1'}}>
          <Text style={{fontSize: 15, color: 'red', fontWeight: 'bold', }}>This is our modal window</Text>
          <Button title="close" onPress={() => setModalVisible(!setModalVisible)}/>        
        </View>

      </Modal> */}
      {isModalVisible ? (
        <AddColorModal
          closeModal={closeModal}
          editMode={editMode}
          addColorButton={addNewColor}
          buttonDetails={getButtonDetails()}
          updateButton={updateButton}
        />
      ) : null}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "50%",
        }}
      >
        <Button title="Go to Home page" onPress={handleOnPress} />
        <Button title="Add" onPress={() => setModalVisible(true)} />
      </View>
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