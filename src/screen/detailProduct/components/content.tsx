import React, {useMemo, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CategoryItem from './categoryItem';
import CoffeeSvg from '../../../assets/svg/coffeee.svg';
import ChocolateSvg from '../../../assets/svg/chocolate.svg';
import AppButton from '../../../component/button';
import AppText from '../../../component/text';
import {COLORS} from '../../../constants/color';
interface ContentProductProps {}

const ContentProduct: React.FC<ContentProductProps> = (): JSX.Element => {
  const [sizeIndex, setSizeIndex] = useState<number>(0);

  function handleChangeSize(index: number) {
    setSizeIndex(index);
  }
  const size: string[] = useMemo(() => {
    return ['Small', 'Medium', 'Large'];
  }, []);

  return (
    <View style={style.container}>
      <View style={style.categoryWrapper}>
        <CategoryItem title="Coffee" hasBorderRight={true} icon={CoffeeSvg} />
        <CategoryItem
          title="Chocolate"
          hasBorderRight={true}
          icon={ChocolateSvg}
        />
        <CategoryItem title="Medium Roasted" hasBorderRight={false} />
      </View>
      <AppText
        fontWeight="700"
        fontSize={20}
        title="Coffee Size"
        lineHeight={32}
        textAlign="left"
      />
      <View style={style.sizeWrapper}>
        {size.map((s, index) => {
          return (
            <View key={index} style={style.sizeWrapperContent}>
              <AppButton
                hasBorder={sizeIndex !== index}
                onPress={() => handleChangeSize(index)}
                isActive={sizeIndex === index}
                borderRadius={100}
                title={s}
                padding={8}
              />
            </View>
          );
        })}
      </View>
      <View style={style.textAboutWrapper}>
        <AppText
          fontSize={22}
          fontWeight="700"
          textAlign="left"
          title="About"
          lineHeight={48}
        />
        <AppText
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          architecto nisi distinctio quos deserunt velit corrupti voluptates
          expedita! Iure facilis aliquam a voluptates alias facere laborum
          recusandae velit architecto dolore."
          fontSize={14}
          fontWeight="400"
          lineHeight={16}
          textAlign="left"
        />
      </View>
      <View style={style.addButtonWrapper}>
        <AppButton
          fontSize={20}
          padding={22}
          borderRadius={40}
          marginHorizontal={16}
          title="Add To Cart"
          isActive
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 16,
  },
  categoryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 999,
    backgroundColor: COLORS.GREY_2,
  },
  sizeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  sizeWrapperContent: {
    minWidth: 100,
  },
  textAboutWrapper: {
    marginTop: 30,
  },
  addButtonWrapper: {
    marginTop: 10,
  },
});

export default ContentProduct;
