import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import BackSvg from '../../../assets/svg/back.svg';
import StarSvg from '../../../assets/svg/starrr.svg';
import AppText from '../../../component/text';
import {COLORS} from '../../../constants/color';

interface SlideImage {
  image: string;
  rate: number;
  name: string;
  description: string;
  onPress: () => void | any;
}

interface SlideImageProps {
  product: SlideImage;
}

const SlideImage = ({product}: SlideImageProps): JSX.Element => {
  return (
    <ImageBackground
      style={style.imageBgWrapper}
      source={{
        uri: `${product.image}`,
      }}>
      <TouchableOpacity onPress={product.onPress}>
        <View style={style.backWrapper}>
          <BackSvg width={16} height={16} />
        </View>
      </TouchableOpacity>
      <View style={style.infoWrapper}>
        <View style={style.infoProduct}>
          <View>
            <AppText
              title={product.name}
              color={COLORS.WHITE}
              fontSize={28}
              fontWeight="700"
            />
            <AppText
              title={product.description}
              color={COLORS.WHITE}
              fontSize={12}
              textAlign="left"
              lineHeight={12}
            />
          </View>
          <View style={style.starWrapper}>
            <StarSvg width={16} height={16} />
            <AppText
              title={`${product.rate}`}
              color={COLORS.WHITE}
              fontSize={12}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  imageBgWrapper: {
    position: 'relative',
    flex: 1,
  },
  backWrapper: {
    margin: 20,
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  infoWrapper: {
    backgroundColor: COLORS.BLACK1,
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    padding: 16,
  },
  infoProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starWrapper: {
    flexDirection: 'row',
    backgroundColor: COLORS.BROWN,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    columnGap: 3,
  },
});
export default SlideImage;
