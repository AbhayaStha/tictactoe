import { Text, View, StyleSheet } from "react-native";

export const Detail = () =>{
    return(
        <View style = {styles.container}> 
            <Text>The detail page</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
    }
)