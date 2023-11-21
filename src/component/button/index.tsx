/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import styleButton from './style';
import {TextStyle} from 'react-native';
import AppText from '../text';
import {COLORS} from '../../constants/color';

interface AppButtonProps {
  onPress?: () => void | any;
  title?: string;
  borderRadius?: number;
  marginHorizontal?: number;
  backgroundColor?: string;
  padding?: number;
  hasBorder?: boolean;
  isActive?: boolean;
  children?: any;
  textColor?: string;
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
}
const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title = '',
  borderRadius = 0,
  marginHorizontal = 0,
  backgroundColor = 'transparent',
  padding = 10,
  isActive = false,
  children,
  hasBorder = false,
  textColor,
  fontSize,
  fontWeight,
}) => {
  const buttonStyle = styleButton({
    marginHorizontal,
    borderRadius,
    backgroundColor,
    padding,
    isActive,
    hasBorder,
  });
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle.buttonStyle}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: 4,
        }}>
        {children}
        <AppText
          title={title}
          fontWeight={fontWeight}
          color={isActive ? COLORS.WHITE : textColor}
          fontSize={fontSize}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
