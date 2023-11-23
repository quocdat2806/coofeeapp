import React from 'react';
import StarSvg from '../../../../../assets/svg/starrr.svg';
import AddSvg from '../../../../../assets/svg/add.svg';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../../../../constants/color';
const { width } = Dimensions.get('window');
import { Shadow } from 'react-native-shadow-2';
import globalStyle from '../../../../../globalStyle';
import AppText from '../../../../../component/text';
interface ProductItem {
  category: string;
  image: string;
  rate: number;
  name: string;
  description: string;
  price: number;
}

interface ProductItemProps {
  product: ProductItem;
}

const ProductItem = ({ product }: ProductItemProps): JSX.Element => {
  return (
    <View style={style.containerWrapper}>
      <Shadow startColor={COLORS.SHADOW_COLOR2} endColor={COLORS.SHADOW_COLOR2}>
        <View style={style.container}>
          <View style={style.imageWrapper}>
            <Image
              style={style.image}
              source={{
                cache: 'force-cache',
                uri: `${product.image}`,
              }}
            />
            <View style={[globalStyle['d-flex'], style.ratingWrapper]}>
              <StarSvg width={12} height={12} />
              <AppText
                presetSize="h5"
                presetFontWeight="300"
                style={style.textRate}
                title={`${product.rate}`}
              />
            </View>
          </View>
          <View style={[globalStyle['d-flex'], style.infoWrapper]}>
            <View>
              <AppText
                presetSize="h3"
                presetFontWeight="400"
                style={style.textName}
                title={product.name}
              />
              <AppText
                presetSize="h6"
                presetFontWeight="400"
                style={style.textDesc}
                title={product.description}
              />
              <AppText
                presetSize="h5"
                presetFontWeight="700"
                style={style.textPrice}
                title={`${product.price} K`}
              />
            </View>
            <View style={style.addWrapper}>
              <AddSvg width={20} height={20} />
            </View>
          </View>
        </View>
      </Shadow>
    </View>
  );
};

const style = StyleSheet.create({
  containerWrapper: {
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    width: width / 2,
    aspectRatio: 0.85,
    marginRight: 17,
    marginTop: 20,
    borderRadius: 14,
    padding: 10,
  },
  imageWrapper: {
    aspectRatio: 1.2,
    position: 'relative',
  },
  image: {
    flex: 1,
    objectFit: 'cover',
    borderRadius: 15,
  },
  ratingWrapper: {
    position: 'absolute',
    right: 12,
    top: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 16,
    columnGap: 6,
    backgroundColor: COLORS.BROWN,
  },
  infoWrapper: {
    justifyContent: 'space-between',
  },
  addWrapper: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: COLORS.BROWN,
  },
  textRate: {
    lineHeight: 12,
    color: COLORS.WHITE,
  },
  textName: {
    textAlign: 'left',
  },
  textDesc: {
    lineHeight: 12,
    textAlign: 'left',
  },
  textPrice: {
    lineHeight: 20,
    textAlign: 'left',
  },
});

export default ProductItem;
