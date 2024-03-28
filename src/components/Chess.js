import { View, Text, StyleSheet } from "react-native";

export const Chess = ({val}) => {
    return(
    <View style = {styles.box}>
        <Text style = {styles.chess}>{val}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    box:{
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent:'center'
      },
      chess:{
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold'
      }
})