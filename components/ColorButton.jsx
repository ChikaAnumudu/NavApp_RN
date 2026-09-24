import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ColorButton = (props) => {
    const {color, name} = props;
    const navigation = useNavigation();
  return (
    <Pressable
     onPress={() => navigation.navigate("ProductsDetails", { ...props})}
     style={({pressed}) => pressed ? styles.pressed : styles.unPressed}
    >
      <View style={styles.productContainer}>
        <Text style={styles.textStyle}>{name}</Text>
        <View style={[styles.buttonStyle, { backgroundColor: color }]}></View>
      </View>
    </Pressable>
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
        // backgroundColor : 'ligthgrey',
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
    }
})