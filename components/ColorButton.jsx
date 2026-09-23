import { StyleSheet, Text, View } from 'react-native'

const ColorButton = ({color}) => {
  return (
    <View>
      <Text style={[styles.buttonStyle, {backgroundColor : color}]}></Text>
    </View>
  )
}

export default ColorButton

const styles = StyleSheet.create({
    buttonStyle : {
        height : 50,
        width : 50,
        borderRadius : 25,
        // borderColor : 
    }
})