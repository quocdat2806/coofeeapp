import React, { useState, useCallback } from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import style from './style';
import globalStyle from '../../globalStyle';
import AppButton from '../../component/button';
import { PAGES } from '../../constants/dummyData';
import DotIndicator from './components/dotIndication';
import { COLORS } from '../../constants/color';
import AppText from '../../component/text';
import BackGroundImagePage from './components/imageBackground';
import ContentSplash from './components/content';
interface SplashScreenProps {
  navigation: any;
}
const SplashScreen: React.FC<SplashScreenProps> = ({
  navigation,
}): JSX.Element => {
  const { container, pagerViewWrapper } = style;
  const [currentPage, setCurrentPage] = useState(0);

  const openMainPage = useCallback(() => {
    navigation.replace('Main');
  }, [navigation]);

  const handleNextPageChange = useCallback((e: any) => {
    setCurrentPage(e.nativeEvent.position);
  }, []);

  return (
    <View style={container}>
      <PagerView
        onPageScroll={handleNextPageChange}
        style={pagerViewWrapper}
        initialPage={0}>
        {PAGES.map((page, index) => (
          <BackGroundImagePage key={index} pathImage={page.image} />
        ))}
      </PagerView>
      <ContentSplash
        description={PAGES[currentPage].description}
        title={PAGES[currentPage].title}
        onPress={openMainPage}
        indexDotActive={currentPage}
      />
    </View>
  );
};

export default SplashScreen;
