import React from 'react';
import {View, Text} from 'react-native';
const TextSplash = ({title = '', textStyle = {}}) => {
  return (
    <View>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

export default TextSplash;
