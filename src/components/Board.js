import { View, Text, StyleSheet} from "react-native";
import { Chess } from "./Chess";

export const Board = ({steps}) => {
    return (
        <View style = {styles.board}>
            {steps.map((s, i)=>(
                <Chess val = {s} key={i}/>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    board:{
        width: 300,
        height: 300,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'darkorange',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'center',
        flexWrap: 'wrap',
        alignContent: 'center'
      },     
})