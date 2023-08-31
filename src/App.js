import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ToDoCard from './components/ToDoCard';
import Header from './components/Header';
import SaveTodo from './components/SaveTodo/SaveTodo';
function App() {

  const renderItem = ({item}) => <ToDoCard todo={item} setCounter={setCounter} counter = {counter} />;
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  const [saveText, setSaveText] = useState('');

  function UpdateCounter() {
    setCounter(counter + 1);
    const Data = {
      id: counter,
      title: saveText,
    };
    setList([...list, Data]); 
    setSaveText("")
    console.log(Data);
  }
  return (
    <View style={styles.container}>
      <Header counter={counter}  />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={renderItem}
      />
      <SaveTodo setSaveText={setSaveText} saveText={saveText} updateCounter={UpdateCounter}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});

export default App;
