import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import BackSvg from '../../../assets/img/back.svg';
import StarSvg from '../../../assets/img/starrr.svg';
const SlideImage = ({product, handleBack}): JSX.Element => {
  return (
    <ImageBackground
      style={style.imageBgWrapper}
      source={{
        uri: `${product.image}`,
      }}>
      <TouchableOpacity onPress={handleBack}>
        <View style={style.backWrapper}>
          <BackSvg width={16} height={16} />
        </View>
      </TouchableOpacity>
      <View style={style.infoWrapper}>
        <View style={style.infoProduct}>
          <View>
            <Text style={style.textName}>{product.name}</Text>
            <Text style={style.textDesc}>{product.description}</Text>
          </View>
          <View style={style.starWrapper}>
            <StarSvg width={16} height={16} />
            <Text style={style.textStar}>4.9</Text>
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  infoWrapper: {
    backgroundColor: '#0000004d',
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
  textName: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
  },
  textDesc: {
    marginTop: 2,
    fontSize: 12,
    color: '#fff',
    lineHeight: 12,
  },
  starWrapper: {
    flexDirection: 'row',
    backgroundColor: '#846046',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  textStar: {
    marginLeft: 2,
    color: '#fff',
    fontWeight: '900',
  },
});
export default SlideImage;
