import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants/color';
import { Shadow } from 'react-native-shadow-2';
import AppText from '../../../../../component/text';
interface SpecialOfferItem {
  image: string;
  description: string;
}
interface SpecialOfferItemProps {
  product: SpecialOfferItem;
}

const SpecialOfferItem = ({ product }: SpecialOfferItemProps): JSX.Element => {
  return (
    <View style={style.containerWrapper}>
      <Shadow startColor={COLORS.SHADOW_COLOR2} endColor={COLORS.SHADOW_COLOR2}>
        <View style={[style.container]}>
          <View style={style.imageWrapper}>
            <Image
              style={style.image}
              source={{
                cache: 'force-cache',
                uri: `${product.image}`,
              }}
            />
          </View>
          <View style={style.textDescWrapper}>
            <View style={style.textLimitedWrapper}>
              <AppText
                style={style.textLimited}
                presetSize="h6"
                presetFontWeight="900"
                title="Limited"
              />
            </View>
            <View style={style.textDescWrapper}>
              <AppText
                style={style.textDesc}
                presetSize="h3"
                presetFontWeight="800"
                title={product.description}
              />
            </View>
          </View>
        </View>
      </Shadow>
    </View>
  );
};
const style = StyleSheet.create({
  containerWrapper: {
    marginTop: 10,
  },
  container: {
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    aspectRatio: 2.5,
    columnGap: 8,
  },
  textLimited: {
    lineHeight: 12,
    color: COLORS.WHITE,
  },
  textDesc: {
    textAlign: 'left',
    lineHeight: 20,
  },
  imageWrapper: {
    width: '50%',
    aspectRatio: 1.4,
  },
  image: {
    flex: 1,
    objectFit: 'cover',
    borderRadius: 15,
  },
  textDescWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textLimitedWrapper: {
    backgroundColor: COLORS.BROWN,
    maxWidth: 100,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    justifyContent: 'center',
  },
});

export default SpecialOfferItem;
