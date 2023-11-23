import React, { useMemo, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CategoryItem from './categoryItem';
import CoffeeSvg from '../../../assets/svg/coffeee.svg';
import ChocolateSvg from '../../../assets/svg/chocolate.svg';
import AppButton from '../../../component/button';
import { COLORS } from '../../../constants/color';
import AppText from '../../../component/text';
import globalStyle from '../../../globalStyle';
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <View style={[globalStyle['d-flex'], style.categoryWrapper]}>
          <CategoryItem title="Coffee" hasBorderRight={true} icon={CoffeeSvg} />
          <CategoryItem
            title="Chocolate"
            hasBorderRight={true}
            icon={ChocolateSvg}
          />
          <CategoryItem title="Medium Roasted" hasBorderRight={false} />
        </View>
        <View style={style.coffeeSizeWrapper}>
          <AppText
            presetSize="h2"
            presetFontWeight="700"
            title=" Coffee Size"
            style={style.textCoffeeSize}
          />
        </View>
        <View style={[globalStyle['d-flex'], style.sizeWrapper]}>
          {size.map((s, index) => {
            return (
              <AppButton
                styleTextButton={{
                  ...style.textSize,
                  color: sizeIndex === index ? COLORS.WHITE : COLORS.BLACK,
                }}
                styleButton={style.btnSize}
                hasShadow={sizeIndex !== index}
                onPress={() => handleChangeSize(index)}
                isActive={sizeIndex === index}
                title={s}
              />
            );
          })}
        </View>
        <View style={style.textAboutWrapper}>
          <AppText
            presetSize="h2"
            presetFontWeight="700"
            title="About"
            style={style.textAbout}
          />
          <View style={style.descWrapper}>
            <AppText
              presetSize="h5"
              presetFontWeight="400"
              style={style.textDesc}
              title=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur architecto nisi distinctio quos deserunt velit corrupti
            voluptates expedita! Iure facilis aliquam a voluptates alias facere
            laborum recusandae velit architecto dolore."
            />
          </View>
        </View>
        <View style={style.addButtonWrapper}>
          <AppButton styleButton={style.btnAddToCart} isActive>
            <View style={style.addToCartWrapper}>
              <View style={style.addToCartWrapperContent}>
                <AppText
                  title="Add to Cart"
                  presetSize="h2"
                  presetFontWeight="400"
                  style={style.textAddToCart}
                />
              </View>
              <AppText
                title="50k"
                presetSize="h2"
                presetFontWeight="700"
                style={style.textPrice}
              />
            </View>
          </AppButton>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 16,
  },
  categoryWrapper: {
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 100,
    backgroundColor: COLORS.GREY_2,
  },
  sizeWrapper: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  coffeeSizeWrapper: {
    marginTop: 20,
  },
  textAboutWrapper: {
    marginTop: 20,
  },
  addButtonWrapper: {
    marginTop: 32,
  },

  textCoffeeSize: {
    lineHeight: 24,
    textAlign: 'left',
  },
  textAbout: {
    lineHeight: 22,
    textAlign: 'left',
  },
  descWrapper: {
    marginTop: 12,
  },
  textDesc: {
    lineHeight: 16,
    textAlign: 'left',
  },
  btnAddToCart: {
    borderRadius: 40,
    marginHorizontal: 16,
  },
  btnSize: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
    minWidth: 100,
  },
  textSize: {
    color: COLORS.WHITE,
    lineHeight: 24,
    fontWeight: '400',
    fontSize: 16,
  },
  addToCartWrapper: {
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 16,
  },

  textAddToCart: {
    lineHeight: 24,
    color: COLORS.WHITE,
  },
  textPrice: {
    color: COLORS.WHITE,
    lineHeight: 24,
  },
  addToCartWrapperContent: {
    flex: 1,
    borderRightColor: COLORS.WHITE,
    borderWidth: 1,
    marginRight: 32,
    borderBottomColor: COLORS.TRANSPARENT,
    borderLeftColor: COLORS.TRANSPARENT,
    borderTopColor: COLORS.TRANSPARENT,
  },
});

export default ContentProduct;
