import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import BackSvg from '../../../assets/svg/back.svg';
import StarSvg from '../../../assets/svg/starrr.svg';
import { COLORS } from '../../../constants/color';
import AppText from '../../../component/text';
import globalStyle from '../../../globalStyle';
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

const SlideImage = ({ product }: SlideImageProps): JSX.Element => {
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
        <View style={[globalStyle['d-flex'], style.infoProduct]}>
          <View>
            <AppText
              presetSize="h1"
              presetFontWeight="700"
              title={product.name}
              style={style.textName}
            />
            <AppText
              presetSize="h5"
              presetFontWeight="400"
              title={product.description}
              style={style.textDesc}
            />
          </View>
          <View style={[globalStyle['d-flex'], style.starWrapper]}>
            <StarSvg width={16} height={16} />
            <AppText
              presetSize="h3"
              presetFontWeight="800"
              title={`${product.rate}`}
              style={style.textRate}
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

    padding: 10,
  },
  infoWrapper: {
    backgroundColor: COLORS.BLACK1,
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  infoProduct: {
    justifyContent: 'space-between',
  },
  starWrapper: {
    backgroundColor: COLORS.BROWN,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    columnGap: 3,
  },

  textName: {
    color: COLORS.WHITE,
    lineHeight: 32,
    textAlign: 'left',
  },
  textDesc: {
    color: COLORS.WHITE,
    textAlign: 'left',
    lineHeight: 12,
  },
  textRate: {
    color: COLORS.WHITE,
  },
});
export default SlideImage;
