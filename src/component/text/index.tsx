import React from 'react';
import { Text } from 'react-native';
import { TextStyle, StyleProp } from 'react-native';
import styleConfig from './style';

type presetSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type presetFontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
interface AppTextInterface {
  title: string;
  style?: StyleProp<TextStyle>;
  presetSize?: presetSize;
  presetFontWeight?: presetFontWeight;
}

const AppText = (styleText: AppTextInterface): JSX.Element => {
  const st = styleConfig(styleText.presetSize, styleText.presetFontWeight);

  return (
    <Text style={[{ ...st.stl }, { ...st.defaultTextStyle }, styleText.style]}>
      {styleText.title}
    </Text>
  );
};

export default AppText;
