import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsScreen from './components/ProductsScreen';
import ProductsDetails from './components/ProductsDetails';
import HomeScreen from './components/HomeScreen';


const NativeStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();

function HomeDrawer() {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name='Home' component={HomeScreen} />
      <DrawerStack.Screen name='Products' component={StackScreens} options={ {headerShown : false}}/>
    </DrawerStack.Navigator>
  )
}

function StackScreens() {
  return (
    <NativeStack.Navigator>
      {/* <NativeStack.Screen name="Home" component={HomeScreen} /> */}
      <NativeStack.Screen name="Store" component={ProductsScreen} />
      <NativeStack.Screen
        name="ProductsDetails"
        component={ProductsDetails}
        options={{ title: "Details" }}
      />
    </NativeStack.Navigator>
  );
}

export default function App() {
  return <NavigationContainer>{HomeDrawer()}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
