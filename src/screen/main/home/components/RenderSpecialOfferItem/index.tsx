import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {COLORS} from '../../../../../constants/color';
import AppText from '../../../../../component/text';

interface SpecialOfferItem {
  image: string;
  description: string;
}
interface RenderSpecialOfferItemProps {
  product: SpecialOfferItem;
}

const RenderSpecialOfferItem = ({
  product,
}: RenderSpecialOfferItemProps): JSX.Element => {
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
      </View>
      <View style={style.textDescWrapper}>
        <View style={style.textLimitedWrapper}>
          <AppText
            lineHeight={22}
            fontWeight="700"
            fontSize={16}
            color={COLORS.WHITE}
            title="Limited"
          />
        </View>
        <View style={style.textDescWrapper}>
          <AppText
            fontWeight="700"
            fontSize={16}
            textAlign="left"
            title={product.description}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    aspectRatio: 2.5,
    columnGap: 8,
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

export default RenderSpecialOfferItem;
