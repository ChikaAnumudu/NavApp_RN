import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from "@expo/vector-icons";

const ColorButton = (props) => {
    const {color, name, id, deleteColoredButton} = props;
    const navigation = useNavigation();
  return (
    <View style={styles.productContainer}>
      <Pressable
        onPress={() => navigation.navigate("ProductsDetails", { ...props })}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.pressableStyle]
            : [styles.unPressed, styles.pressableStyle]
        }
      >
        <Text style={styles.textStyle}>{name}</Text>
        <View style={[styles.buttonStyle, { backgroundColor: color }]}></View>
      </Pressable>

      <Pressable 
        onPress={() => deleteColoredButton(id)}
        style={styles.deleteIconStyle}
      >
        <AntDesign name="delete" size={28} color="black" />
      </Pressable>
    </View>
  );
}

export default ColorButton

const styles = StyleSheet.create({
    productContainer : {
        flexDirection : "row",
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingHorizontal : 10,
        width : '100%',
        height : 55,
        backgroundColor : 'ligthgrey',
        borderBottomColor : 'black',
        borderBottomWidth : 2 
    },
    buttonStyle : {
        height : 50,
        width : 50,
        borderRadius : 25,
        // borderColor : 
    },
     textStyle : {
        fontSize : 14,
        fontWeight : 'bold'
    },
    pressed : {
        backgroundColor : 'black'
    },
    unPressed : {
        backgroundColor : 'lightgrey'
    },
    pressableStyle : {
        flex : 4,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    deleteIconStyle : {
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderLeftColor: "black",
        borderLeftWidth: 2,
    }
})