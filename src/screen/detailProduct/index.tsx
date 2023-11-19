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
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 20,
            borderRadius: 999,
            backgroundColor: '#a6a6aa36',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderLeftColor: 'transparent',
              borderTopColor: 'transparent',
              borderBottomColor: 'transparent',
              marginVertical: 6,
              padding: 8,
              borderRightColor: '#000',
            }}>
            <CoffeeSvg />
            <Text>Coffee</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderLeftColor: 'transparent',
              borderTopColor: 'transparent',
              borderBottomColor: 'transparent',
              marginVertical: 6,
              padding: 8,
              borderRightColor: '#000',
            }}>
            <ChocolateSvg />
            <Text>Chocolate</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 6,
              padding: 8,
            }}>
            <Text>Medium Roasted</Text>
          </View>
        </View>
        <Text
          style={{
            marginHorizontal: 20,
          }}>
          Coffee Size
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              minWidth: 100,
            }}>
            <AppButton
              onPress={() => {}}
              isActive
              borderRadius={100}
              title="Small"
              padding={8}
            />
          </View>
          <View
            style={{
              minWidth: 100,
            }}>
            <AppButton
              onPress={() => {}}
              borderRadius={100}
              hasBorder
              title="Medium"
              padding={8}
            />
          </View>
          <View
            style={{
              minWidth: 100,
            }}>
            <AppButton
              onPress={() => {}}
              borderRadius={100}
              hasBorder
              title="Large"
              padding={8}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 22,
              fontWeight: '700',
            }}>
            About
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 18,
            }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur architecto nisi distinctio quos deserunt velit corrupti
            voluptates expedita! Iure facilis aliquam a voluptates alias facere
            laborum recusandae velit architecto dolore.
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <AppButton
            padding={22}
            borderRadius={40}
            marginHorizontal={16}
            title="Add To Cart"
            isActive
          />
        </View> */}
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
