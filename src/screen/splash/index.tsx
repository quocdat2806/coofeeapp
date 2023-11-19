import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import style from './style';
import AppButton from '../../component/button';
import {pages} from '../../constants';
import SubPageSplash from './components/subPage';
import DotIndicator from './components/dotIndication';

interface SplashScreenProps {
  navigation: any; // Replace 'any' with the actual type of your navigation prop
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  navigation,
}): JSX.Element => {
  const {container, pagerViewWrapper, dotWrapper, textButton, buttonWrapper} =
    style;
  const [currentPage, setCurrentPage] = useState(0);

  const openMainPage = useCallback(() => {
    navigation.navigate('Main');
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
        {pages.map((page, indexPage) => (
          <SubPageSplash
            key={indexPage}
            listTitle={page.title}
            pathImage={page.image}
            description={page.description}
          />
        ))}
      </PagerView>

      <View style={dotWrapper}>
        {pages.map((_, index) => (
          <DotIndicator isActive={currentPage === index} key={index} />
        ))}
      </View>

      <View style={buttonWrapper}>
        <AppButton
          isActive
          onPress={openMainPage}
          style={textButton}
          padding={20}
          marginHorizontal={10}
          borderRadius={40}
          title="Get started"
        />
      </View>
    </View>
  );
};

export default SplashScreen;
