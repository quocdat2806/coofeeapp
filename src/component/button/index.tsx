import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { COLORS } from '../../constants/color';
import AppText from '../text';
interface AppButtonProps {
  onPress?: () => void | any;
  title?: string;
  hasShadow?: boolean;
  isActive?: boolean;
  styleButton?: any;
  styleTextButton?: any;
  children?: any;
}
function CustomButton({ hasShadow = false, children }) {
  if (hasShadow) {
    return <Shadow>{children}</Shadow>;
  }
  return children;
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title = '',
  styleButton,
  styleTextButton,
  isActive = false,
  hasShadow = false,
  children,
}) => {
  return (
    <CustomButton hasShadow={hasShadow}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...styleButton,
          backgroundColor: isActive
            ? COLORS.BROWN
            : styleButton.backgroundColor,
        }}>
        {children || <AppText title={title} style={styleTextButton} />}
      </TouchableOpacity>
    </CustomButton>
  );
};

export default AppButton;
