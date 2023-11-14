import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import TextSplash from './components/textSplash';
const SplashScreen = ({navigator}): JSX.Element => {
  return (
    // <SafeAreaView style={styles.container}>
    <ImageBackground
      resizeMode="cover"
      style={styles.imageSplash}
      source={{
        uri: 'https://demoda.vn/wp-content/uploads/2022/02/hinh-anh-cafe-dang-do-kem.jpg',
      }}>
      <View>
        <TextSplash title="Good Coffee" />
        <TextSplash title="Good Friend" />
        <TextSplash title="let it blends" />
        <TextSplash title="The best grain the finest roast,the most powerful flavor." />
        <TextSplash title="the most powerful flavor." />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigator.navigate('Main');
        }}>
        <Text>Get started</Text>
      </TouchableOpacity>
    </ImageBackground>
    // </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSplash: {
    flex: 1,
    objectFit: 'cover',
    backgroundColor: 'red',
    position: 'relative',
  },
});

export default SplashScreen;
