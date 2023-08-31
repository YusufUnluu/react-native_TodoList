import React from "react";
import { Text,StyleSheet, View } from "react-native";


function App () {
  
    return(
        <View style ={style.container}>
            <Text style={style.text}>Hello World</Text>
        </View>
    )
}

const style =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"wheat"
    },
    text:{
        backgroundColor:"wheat"
    }
}

);


export default App;