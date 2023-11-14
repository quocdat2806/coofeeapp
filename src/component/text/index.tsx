import React from 'react';
import {Text} from 'react-native';
const AppText = ({style = {}, title}): JSX.Element => {
  return <Text style={style}>{title}</Text>;
};
export default AppText;
