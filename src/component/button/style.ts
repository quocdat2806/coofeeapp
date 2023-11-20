import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
const styleButton = (props: {
  marginHorizontal: number;
  borderRadius: number;
  backgroundColor: any;
  padding: number;
  isActive: boolean;
  hasBorder: boolean;
}) => {
  const {
    marginHorizontal,
    borderRadius,
    backgroundColor,
    padding,
    isActive,
    hasBorder,
  } = props;
  return StyleSheet.create({
    buttonStyle: {
      marginHorizontal,
      borderRadius,
      backgroundColor: isActive ? COLORS.BROWN : backgroundColor,
      padding,
      borderWidth: hasBorder ? 1 : 0,
    },
  });
};
export default styleButton;
