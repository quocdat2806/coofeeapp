import outputMatcher from './utils';

function outputTransFormStyle(presetSize?: string, presetFontWeight?: string) {
  const style = outputMatcher(presetSize, presetFontWeight);
  return style;
}
export default outputTransFormStyle;
