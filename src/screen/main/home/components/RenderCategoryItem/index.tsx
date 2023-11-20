import React from 'react';
import AppButton from '../../../../../component/button';

interface RenderCategoryInterface {
  name: string;
  icon: any;
  category: string;
  isActiveCategoryTab: boolean;
  onPress?: (index?: number) => void | any;
}
const RenderCategoryItem = (data: RenderCategoryInterface): JSX.Element => {
  const Icon = data.icon;
  return (
    <AppButton
      onPress={data.onPress}
      fontWeight="800"
      borderRadius={20}
      isActive={data.isActiveCategoryTab}
      title={data.name}>
      <Icon width={20} height={20} />
    </AppButton>
  );
};
export default RenderCategoryItem;
