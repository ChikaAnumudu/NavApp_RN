import { useState } from "react";
import { StyleSheet, Button, View, Text, Modal, TextInput } from "react-native";

export default function AddColorModal({closeModal}) {

    const [ colorName, setColorName ] = useState();

    const addNewColorModal = () => {
        console.log('New Color Added');
    }
  return (
    <Modal
      //   visible={isModalVisible}
      onRequestClose={() => closeModal()}
      transparent={true}
    >
      <View
        style={styles.rootStyle}
      >
        <Text style={{ fontSize: 15, color: "blue", fontWeight: "bold" }}>
          Add New Color
        </Text>
        <TextInput 
            onChangeText={setColorName}
            value={colorName}
            placeholder="Name : "
            style={styles.inputStyle}
        />
        <View style={styles.buttonStyle}>
            <Button title="Cancle" onPress={() => closeModal()} />
            <Button title="Add" onPress={() => addNewColorModal()} />            
        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  rootStyle: {
    height: "50%",
    width: "70%",
    //   justifyContent: "center",
    paddingTop: 15,
    marginTop: "25%",
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f1e5d1",
  },
  inputStyle: {
    borderColor: "grey",
    width: 150,
    height: 40,
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  buttonStyle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
   


