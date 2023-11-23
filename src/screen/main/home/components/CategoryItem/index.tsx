import React from 'react';
import AppButton from '../../../../../component/button';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../../constants/color';
import globalStyle from '../../../../../globalStyle';
import AppText from '../../../../../component/text';
interface CategoryInterface {
  name: string;
  icon: any;
  category: string;
  isActiveCategoryTab: boolean;
  onPress?: (index?: number) => void | any;
}
const CategoryItem = (data: CategoryInterface): JSX.Element => {
  const Icon = data.icon;
  const style = StyleSheet.create({
    categoryWrapper: {
      gap: 4,
    },
    btnCategoryStyle: {
      borderRadius: 20,
      padding: 10,
    },
    textCategoryStyle: {
      lineHeight: 16,
    },
  });

  return (
    <AppButton
      styleTextButton={style.textCategoryStyle}
      styleButton={style.btnCategoryStyle}
      onPress={data.onPress}
      isActive={data.isActiveCategoryTab}
      title={data.name}>
      <View style={[globalStyle['d-flex'], style.categoryWrapper]}>
        <Icon width={30} height={20} />
        <AppText
          presetSize="h5"
          presetFontWeight="800"
          title={data.name}
          style={{
            ...style.textCategoryStyle,
            color: data.isActiveCategoryTab ? COLORS.WHITE : COLORS.BLACK,
          }}
        />
      </View>
    </AppButton>
  );
};
export default CategoryItem;
