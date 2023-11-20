import React, {useState, useCallback} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import style from './style';
import AppButton from '../../component/button';
import {pages} from '../../constants/fakeData';
import DotIndicator from './components/dotIndication';
import AppText from '../../component/text';
import {COLORS} from '../../constants/color';
interface SplashScreenProps {
  navigation: any;
}
const SplashScreen: React.FC<SplashScreenProps> = ({
  navigation,
}): JSX.Element => {
  const {container, pagerViewWrapper} = style;
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
        {pages.map((page, index) => (
          <RenderPage key={index} page={page} />
        ))}
      </PagerView>
      <RenderContent
        onPress={openMainPage}
        indexDotActive={currentPage}
        contentPage={pages[currentPage]}
      />
    </View>
  );
};

function RenderPage({page}) {
  const styleBackGroundImage = StyleSheet.create({
    image: {
      flex: 1,
    },
  });
  return (
    <ImageBackground
      style={styleBackGroundImage.image}
      source={{
        uri: `${page.image}`,
      }}
    />
  );
}

function RenderContent({contentPage, indexDotActive, onPress}): JSX.Element {
  const styleContent = StyleSheet.create({
    content: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
    },
    dotWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 3,
      marginTop: 16,
      marginBottom: 16,
    },
  });
  return (
    <View style={styleContent.content}>
      {contentPage.title.map((titleItem, index) => (
        <AppText
          fontSize={28}
          color={COLORS.GREY}
          key={index}
          title={titleItem}
        />
      ))}
      <AppText
        fontSize={12}
        color={COLORS.WHITE}
        title="The best grain, the finest roast, the most powerful flavor."
      />
      <View style={styleContent.dotWrapper}>
        {pages.map((_, index) => (
          <DotIndicator isActive={indexDotActive === index} />
        ))}
      </View>

      <AppButton
        fontWeight="700"
        onPress={onPress}
        marginHorizontal={16}
        borderRadius={30}
        padding={20}
        isActive
        fontSize={20}
        textColor={COLORS.WHITE}
        title="Get started"
      />
    </View>
  );
}

export default SplashScreen;
