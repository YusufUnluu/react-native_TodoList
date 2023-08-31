import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = (props) => {
  const [CheckTodo, setCheckTodo] = useState(true);

  function updateTodo() {
    setCheckTodo(!CheckTodo);
    if (CheckTodo ===true){
      props.setCounter (props.counter -1)
    }
    else{
      props.setCounter (props.counter +1)
    }
  }

  return (
    <View style={CheckTodo ? styles.container : styles.checked_container}>
      <TouchableOpacity onPress={updateTodo}>
        <Text style={CheckTodo ? styles.text : styles.checked_text}>
          {props.todo.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoCard;
