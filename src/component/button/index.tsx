import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
const AppButton = ({
  onPress,
  title,
  borderRadius,
  marginHorizontal,
  backgroundColor,
  padding = 10,
  textStyle,
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginHorizontal: marginHorizontal,
        padding: padding,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
      }}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
