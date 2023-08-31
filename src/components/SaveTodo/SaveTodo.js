import React from "react";
import { Text, View,TextInput, TouchableOpacity} from "react-native";
import styles from "./Savetodo.styles"

const SaveTodo = (props) => {4
  return(
    <View style ={styles.container}>
        <TextInput onChangeText={props.setSaveText} value ={props.saveText} ></TextInput>   
        <TouchableOpacity onPress={props.updateCounter}>
            <Text>KAYDET</Text>
        </TouchableOpacity>
    </View>
  )
}





export default SaveTodo;