import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from 'react'

const ProductsDetails = ({navigation, route}) => {
    const { color, name, description } = route.params;

    useEffect(() => {
        navigation.setOptions({ 
            title: name, 
            headerStyle: {backgroundColor : color}
        })
    }, [navigation, route])
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, color: color }}>
        ProductsDetails {color}
      </Text>
      <Text style={{fontSize: 18, fontWeight: "bold"}}>{description}</Text>
      <Button title="Back To Products" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ProductsDetails

const styles = StyleSheet.create({})