import React, {useState, useCallback} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import style from './style';
import AppButton from '../../component/button';
import {PAGES} from '../../constants/fakeData';
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
        {PAGES.map((page, index) => (
          <RenderBackGroundPage key={index} pathImage={page.image} />
        ))}
      </PagerView>
      <RenderContent
        description={PAGES[currentPage].description}
        title={PAGES[currentPage].title}
        onPress={openMainPage}
        indexDotActive={currentPage}
      />
    </View>
  );
};
interface RenderBackGroundInterface {
  pathImage: string;
}
function RenderBackGroundPage(pathImage: RenderBackGroundInterface) {
  const styleBackGroundImage = StyleSheet.create({
    image: {
      flex: 1,
    },
  });
  return (
    <ImageBackground
      style={styleBackGroundImage.image}
      source={{
        uri: `${pathImage.pathImage}`,
      }}
    />
  );
}
interface RenderContentInterface {
  title: string[];
  description: string;
  indexDotActive: number;
  onPress: () => void | any;
}

function RenderContent(props: RenderContentInterface): JSX.Element {
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
      marginTop: 24,
      marginBottom: 16,
    },
    descWrapper: {
      marginTop: 20,
    },
  });
  return (
    <View style={styleContent.content}>
      {props.title.map((titleItem: string, index: number) => (
        <AppText
          fontSize={28}
          color={COLORS.GREY}
          key={index}
          title={titleItem}
        />
      ))}
      <View style={styleContent.descWrapper}>
        <AppText fontSize={14} color={COLORS.WHITE} title={props.description} />
      </View>
      <View style={styleContent.dotWrapper}>
        {PAGES.map((_, index) => (
          <DotIndicator key={index} isActive={props.indexDotActive === index} />
        ))}
      </View>
      <AppButton
        fontWeight="700"
        onPress={props.onPress}
        marginHorizontal={16}
        borderRadius={30}
        padding={20}
        backgroundColor={COLORS.BROWN}
        fontSize={20}
        textColor={COLORS.WHITE}
        title="Get started"
      />
    </View>
  );
}

export default SplashScreen;
