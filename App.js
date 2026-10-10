import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductsScreen from './components/ProductsScreen';
import ProductsDetails from './components/ProductsDetails';
import HomeScreen from './components/HomeScreen';
import CustomDrawer from './components/CustomDrawer';
import { ButtonDispatchContext, ButtonsContext } from "./Utils/ButtonsContext";
import { useReducer } from 'react';
import ButtonsReducer from './Utils/ButtonsReducer';
import { BUTTONS } from './models/ProductData';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign} from '@expo/vector-icons';
import Help from './components/Help';
import Ionicons from "@expo/vector-icons/Ionicons";
// import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';


const NativeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



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

function MyTabs(numProducts) {
  return (
    <Tab.Navigator ScreenOptions={{ tabBarActiveBackgroundColor: "yellow" }}>
      <Tab.Screen
        name="MyTabs"
        component={StackScreens}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "red" : "grey" }}>Home</Text>
          ),
          tabBarIcon: (focused) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabelStyle: { Color: "black" },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="help"
        component={Help}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "red" : "grey" }}>Help</Text>
          ),
          tabBarIcon: (focused) => (
            <Ionicons name="help" size={24} color={focused ? "black" : "grey"} />
            // <Feather name="help" size={24}  />
          ),
          tabBarLabelStyle: { Color: "black" },
          tabBarBadge: numProducts,
        }}
      />
    </Tab.Navigator>
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
      <ButtonDispatchContext.Provider value={dispatch}>
        <NavigationContainer>{MyTabs(buttons ? buttons.length : 0 )}</NavigationContainer>
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
