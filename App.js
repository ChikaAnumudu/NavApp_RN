import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from './components/ProductsScreen';
import ProductsDetails from './components/ProductsDetails';
import HomeScreen from './components/HomeScreen';



const NativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen name="Home" component={HomeScreen} />
        <NativeStack.Screen name="Product" component={ProductsScreen} />
        <NativeStack.Screen
          name="ProductsDetails"
          component={ProductsDetails}
          options={{ title: 'Store' }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
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
