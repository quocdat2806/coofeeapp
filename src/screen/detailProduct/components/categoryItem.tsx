import React from 'react';
import {View, Text} from 'react-native';

interface CategoryItemProps {
  title: string;
  hasBorderRight: boolean;
  icon: React.ElementType; // Assuming icon is a React component
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  hasBorderRight,
  icon: Icon,
}: CategoryItemProps): JSX.Element => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        marginVertical: 6,
        padding: 8,
        borderRightColor: hasBorderRight ? '#000' : 'transparent',
      }}>
      {Icon && <Icon />}
      <Text>{title}</Text>
    </View>
  );
};

export default CategoryItem;
