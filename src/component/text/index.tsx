import React from 'react';
import {Text} from 'react-native';

interface AppTextProps {
  style?: {};
  title: string;
}

const AppText: React.FC<AppTextProps> = ({style = {}, title}) => {
  return <Text style={style}>{title}</Text>;
};

export default AppText;
