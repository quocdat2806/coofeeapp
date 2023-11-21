import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../../../component/text';
import {COLORS} from '../../../constants/color';

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
    <View style={styleCategory.categoryStyle}>
      {Icon && <Icon />}
      <AppText fontSize={15} title={title} />
    </View>
  );
};
const style = (isBorderRight: boolean) => {
  return StyleSheet.create({
    categoryStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderLeftColor: 'transparent',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      marginVertical: 6,
      padding: 8,
      borderRightColor: isBorderRight ? COLORS.BLACK : COLORS.TRANSPARENT,
    },
  });
};

export default CategoryItem;
