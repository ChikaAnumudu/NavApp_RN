import { useRef, useState } from "react";
import { StyleSheet, Button, View, Text, Modal, TextInput } from "react-native";

export default function AddColorModal({ closeModal, addColorButton, editMode }) {
  const [colorName, setColorName] = useState("");
  const [newColor, setNewColor] = useState("");
  const [description, setDescription] = useState("");
  const [ error, setError] = useState();

  const colorRef = useRef();
  const descRef = useRef();

  const isValidInput = () => {
    // simply check that there is an input
    if (colorName.length > 0 && newColor.length > 0 && description.length > 0)
      return true;
    // set Error message
    setError(true);
    console.log("An error has occurred");
    return false;
  };

  const addNewColorModal = () => {
    if (isValidInput()) {
      // submit New Color
      addColorButton({name: colorName, color: newColor, description: description})
    //   console.log("Valid Input, ready to add new color");
    }
    // else error message and return
    console.log("New Color Added");
  };
  return (
    <Modal
      //   visible={isModalVisible}
      onRequestClose={() => closeModal()}
      transparent={true}
    >
      <View style={styles.rootStyle}>
        <Text style={{ fontSize: 15, color: "blue", fontWeight: "bold" }}>
          {`${editMode ? "Add" : "Edit"} New Color`}
        </Text>
        <TextInput
          onChangeText={setColorName}
          value={colorName}
          placeholder="Name : "
          style={styles.inputStyle}
          returnKeyType="next"
          onSubmitEditing={() => colorRef.current.focus()}
        />
        <TextInput
          ref={colorRef}
          onChangeText={setNewColor}
          value={newColor}
          placeholder="Name : "
          autoCapitalize="none"
          style={styles.inputStyle}
          returnKeyType="next"
          onSubmitEditing={() => descRef.current.focus()}
        />
        <TextInput
          ref={descRef}
          onChangeText={setDescription}
          value={description}
          placeholder="Description : "
          style={styles.inputStyle}
          onSubmitEditing={addNewColorModal}
          keyboardType="default"
          returnKeyType="done"
        />
        <View style={{ height: 40 }}>
          {error ? (
            <Text style={{ color: "red", fontSize: 12, fontWeight: "bold" }}>
              *** All Field Must Be Set ***
            </Text>
          ) : null}
        </View>
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
    marginTop: 20,
  },
});
   


