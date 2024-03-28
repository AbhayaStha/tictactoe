import { StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Board } from "../components/Board";

const arr = ['O', '', 'O', 'X', 'X', 'O', 'X', '', 'O']
export const Home = () => {
    const navigation = useNavigation();
    const gotoDetailHandler = () => {
    console.log("I am clicked....");
    navigation.navigate("Detail");
  };
  
  return (
    <View style = {styles.container}> 
      <Board steps={arr} />
      <Button title="Goto Detail" onPress={gotoDetailHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 20,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});