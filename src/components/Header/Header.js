import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>YAPILACAKLAR</Text>
      <Text style={styles.counter}>{props.counter}</Text>
    </View>
  );
};

export default Header;
