import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsScreen from './components/ProductsScreen';
import ProductsDetails from './components/ProductsDetails';
import HomeScreen from './components/HomeScreen';
import CustomDrawer from './components/CustomDrawer';
import { ButtonDispatchContext, ButtonsContext } from "./Utils/ButtonsContext";
import { useReducer } from 'react';
import ButtonsReducer from './Utils/ButtonsReducer';
import { BUTTONS } from './models/ProductData';
import { useEffect } from 'react';


const NativeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// function HomeDrawer() {
//   return (
//     <Drawer.Navigator>

//     </Drawer.Navigator>
//   )
// }
function ProductDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Store"
        component={ProductsScreen}
        options={{ title: "Store" }}
      />
      <Drawer.Screen
        name="ProductsDetails"
        component={ProductsDetails}
        options={{ title: "" }}
      />
    </Drawer.Navigator>
  );
}

function StackScreens() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Home" component={HomeScreen} />
      <NativeStack.Screen
        name="Product"
        component={ProductDrawer}
        options={{ headerShown: false }}
      />
    </NativeStack.Navigator>
  );
}

export default function App() {
  const [ buttons, dispatch ] = useReducer(ButtonsReducer, BUTTONS)

  useEffect(() => {

    async function loadButtons() {
      try{
        const savedButtonsJSON = await AsyncStorage.getItem('storedButtons');
        if (savedButtonsJSON !== null) {
          // action
          dispatch({ type: 'initalize', buttons: JSON.parse(savedButtonsJSON) });
        }
      }catch (error) { console.log(error)}
    }
    loadButtons();
  }, [])


  return (
    <ButtonsContext.Provider value={buttons}>
      <ButtonDispatchContext.Provider value={dispatch} >
        <NavigationContainer>{StackScreens()}</NavigationContainer>
      </ButtonDispatchContext.Provider>
      
    </ButtonsContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
