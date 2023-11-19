import React from 'react';
import {View, StyleSheet} from 'react-native';
const DotIndicator = ({isActive = false}): JSX.Element => {
  return (
    <View
      // eslint-disable-next-line no-sparse-arrays
      style={[
        style.dotStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          width: isActive ? 32 : 6,
          backgroundColor: isActive ? '#846046' : 'white',
        },
        ,
      ]}
    />
  );
};

const style = StyleSheet.create({
  dotStyle: {
    height: 6,
    borderRadius: 6,
    marginHorizontal: 3,
  },
});
export default DotIndicator;
