import React from 'react';
import {View, StyleSheet} from 'react-native';
import SlideImage from './components/slideImage';
import ContentProduct from './components/content';
import {COLORS} from '../../constants/color';

const DetailProduct = ({route, navigation}): JSX.Element => {
  function handleBack() {
    navigation.goBack();
  }
  const product = route.params;
  product.onPress = handleBack;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <SlideImage product={product} />
      </View>
      <View style={styles.contentWrapper}>
        <ContentProduct />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imageContainer: {
    flex: 0.5,
  },
  contentWrapper: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: COLORS.WHITE,
  },
});
export default DetailProduct;
