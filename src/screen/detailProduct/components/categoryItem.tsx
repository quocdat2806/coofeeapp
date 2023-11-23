import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../../constants/color';
import globalStyle from '../../../globalStyle';
import AppText from '../../../component/text';

interface CategoryItemProps {
  title: string;
  hasBorderRight: boolean;
  icon?: React.ElementType; // Assuming icon is a React component
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  hasBorderRight,
  icon: Icon,
}: CategoryItemProps): JSX.Element => {
  const styleCategory = style(hasBorderRight);
  return (
    <View style={[globalStyle['d-flex'], styleCategory.categoryStyle]}>
      {Icon && <Icon />}
      <AppText
        title={title}
        style={styleCategory.textCategory}
        presetSize="h5"
        presetFontWeight="700"
      />
    </View>
  );
};
const style = (isBorderRight: boolean) => {
  return StyleSheet.create({
    categoryStyle: {
      borderWidth: 1,
      borderLeftColor: 'transparent',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      marginVertical: 6,
      paddingHorizontal: 14,
      borderRightColor: isBorderRight ? COLORS.BLACK : COLORS.TRANSPARENT,
    },
    textCategory: {
      lineHeight: 16,
    },
  });
};

export default CategoryItem;
