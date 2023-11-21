import React from 'react';
import StarSvg from '../../../../../assets/svg/starrr.svg';
import AddSvg from '../../../../../assets/svg/add.svg';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../../constants/color';
import AppText from '../../../../../component/text';
const {width} = Dimensions.get('window');

interface ProductItem {
  category: string;
  image: string;
  rate: number;
  name: string;
  description: string;
  price: number;
}

interface RenderProductItemProps {
  product: ProductItem;
}

const RenderProductItem = ({product}: RenderProductItemProps): JSX.Element => {
  return (
    <View style={[style.container]}>
      <View style={style.imageWrapper}>
        <Image
          style={style.image}
          source={{
            cache: 'force-cache',
            uri: `${product.image}`,
          }}
        />
        <View style={style.rating}>
          <StarSvg width={12} height={12} />
          <AppText
            color={COLORS.WHITE}
            fontSize={16}
            fontWeight="500"
            title={`${product.rate}`}
          />
        </View>
      </View>
      <View style={style.infoWrapper}>
        <View>
          <AppText
            lineHeight={28}
            fontWeight="500"
            fontSize={20}
            textAlign="left"
            title={product.name}
          />
          <AppText
            lineHeight={12}
            fontWeight="500"
            fontSize={10}
            textAlign="left"
            title={product.description}
          />
          <AppText
            lineHeight={20}
            fontWeight="700"
            fontSize={14}
            textAlign="left"
            title={`${product.price} K`}
          />
        </View>
        <View style={style.addWrapper}>
          <AddSvg width={20} height={20} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
  rating: {
    position: 'absolute',
    right: 12,
    top: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 16,
    columnGap: 6,
    backgroundColor: COLORS.BROWN,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addWrapper: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: COLORS.BROWN,
  },
});

export default RenderProductItem;
