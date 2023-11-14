import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
const Button = ({isActive = false, onPress = {}, index}): JSX.Element => {
  const activeTabStyle = isActive ? styles.buttonActive : {};

  return (
    <TouchableOpacity style={activeTabStyle} onPress={() => onPress(index)}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: 'red',
  },
  defaultButton: {
    //style
  },
});

export default Button;
