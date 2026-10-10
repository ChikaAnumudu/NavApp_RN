import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useEffect } from 'react'
import { loadImage } from "../Utils/ImageHelper";

const ProductsDetails = ({navigation, route}) => {
    const { color, name, description } = route.params;

    useEffect(() => {
      navigation.setOptions({ 
        title: name, 
        headerStyle: {backgroundColor : color}
      })
    }, [navigation, route])
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 20, color: color }}>
            ProductsDetails {color}
          </Text>
        </View>

        <Image
          style={{ width: 300, height: 300, alignSelf: "center" }}
          source={loadImage(color)}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {description}
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button title="Back To Products" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

export default ProductsDetails

const styles = StyleSheet.create({})