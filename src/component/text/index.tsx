import React from 'react';
import {Text} from 'react-native';
import {TextStyle} from 'react-native';
import {COLORS} from '../../constants/color';
interface AppTextProps {
  title: string;
  fontStyle?: TextStyle['fontStyle'];
  fontSize?: TextStyle['fontSize'];
  color?: string;
  textAlign?: TextStyle['textAlign'];
  fontWeight?: TextStyle['fontWeight'];
  lineHeight?: TextStyle['lineHeight'];
}

const AppText: React.FC<AppTextProps> = ({
  fontStyle = 'normal',
  title,
  fontSize = 16,
  color = COLORS.BLACK,
  textAlign = 'center',
  fontWeight = 'normal',
  lineHeight,
}) => {
  return (
    <Text
      style={{
        fontStyle,
        textAlign,
        fontSize,
        color,
        fontWeight,
        lineHeight,
      }}>
      {title}
    </Text>
  );
};

export default AppText;
