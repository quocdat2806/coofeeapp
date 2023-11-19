/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {View} from 'react-native';

interface AppButtonProps {
  onPress: () => {};
  index?: number;
  title: string;
  borderRadius?: number;
  marginHorizontal?: number;
  backgroundColor?: string;
  padding?: number;
  style?: {};
  hasBorder?: boolean;
  isActive: boolean;
  children: {};
}
const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  borderRadius = 0,
  marginHorizontal = 0,
  backgroundColor = 'transparent',
  padding = 10,
  style = {},
  isActive = false,
  children,
  index,
  hasBorder,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(index)}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderWidth: hasBorder ? 1 : 0,
        marginHorizontal: marginHorizontal,
        padding: padding,
        backgroundColor: isActive ? '#846046' : backgroundColor,
        borderRadius: borderRadius,
      }}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: 10,
        }}>
        {children}
        <Text
          style={[
            style,
            {
              color: isActive ? '#fff' : 'black',
            },
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
