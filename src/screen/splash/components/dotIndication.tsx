import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/color';
const DotIndicator = ({isActive = false}): JSX.Element => {
  const dotStyle = style(isActive);

  return <View style={dotStyle.dotStyle} />;
};

const style = (isActive: boolean) => {
  return StyleSheet.create({
    dotStyle: {
      height: 6,
      borderRadius: 6,
      marginHorizontal: 3,
      width: isActive ? 32 : 6,
      backgroundColor: isActive ? COLORS.BROWN : COLORS.WHITE,
    },
  });
};

export default DotIndicator;
