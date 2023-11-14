import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
const DotIndicator = ({isActive = false}): JSX.Element => {
  return (
    <View
      style={{
        width: isActive ? 20 : 6,
        height: 6,

        borderRadius: 6,
        backgroundColor: isActive ? 'red' : 'white',
      }}
    />
  );
};
export default DotIndicator;
