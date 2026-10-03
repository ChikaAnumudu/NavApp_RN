import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ButtonsReducer(buttons, action) {

  const storeButtons = async(newButtons) => {
    try {
        const jsonButtons = JSON.stringify(newButtons);
        await AsyncStorage.setItem('storedButtons', jsonButtons);
    } catch (error) {
        console.log(error)
    }
  }
  switch (action.type) {
    case "delete": {
      const newButtons = buttons.filter((button) => button.id !== action.id);
      console.log("delete in reducer action");
      storeButtons(newButtons);
      return newButtons;
    }
    case "add": {
      const newColoredButton = [
        { id: action.id, ...action.button },
        ...buttons,
      ];
      console.log("add in reducer action");
      storeButtons(newColoredButton);
      return newColoredButton;
    }
    case "update": {
      const newButtons = buttons.map((button) => {
        if (button.id === action.button.id) {
          return action.button;
        } else {
          return button;
        }
      });
      console.log("update in reducer action");
        storeButtons(newButtons);
        return newButtons;
    }

    case "initalize": {
      const newState = action.buttons;
      return newState;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

// const styles = StyleSheet.create({})
