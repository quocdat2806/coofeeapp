import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/color';
import outputTransFormStyle from './transformer';
import { useMemo } from 'react';

const style = (presetSize?: string, presetFontWeight?: string) => {
  const output = useMemo(() => {
    return outputTransFormStyle(presetSize, presetFontWeight);
  }, [presetSize, presetFontWeight]);

  return useMemo(() => {
    return StyleSheet.create({
      stl: { ...output },
      defaultTextStyle: {
        color: COLORS.BLACK,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
      },
    });
  }, [output]);
};

export default style;
