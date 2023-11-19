import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CoffeeSvg from '../../assets/img/coffeee.svg';
import ChocolateSvg from '../../assets/img/chocolate.svg';
import AppButton from '../../component/button';
import SlideImage from './components/slideImage';
import ContentProduct from './components/content';

const DetailProduct = ({route, navigation}): JSX.Element => {
  function handleBack() {
    navigation.goBack();
  }
  const product = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <SlideImage product={product} handleBack={handleBack} />
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
    backgroundColor: '#fff',
  },
});
export default DetailProduct;
