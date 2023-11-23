import { View, StyleSheet, ImageBackground } from 'react-native';
import { COLORS } from '../../../constants/color';
import AppText from '../../../component/text';
import AppButton from '../../../component/button';
import DotIndicator from './dotIndication';
import { PAGES } from '../../../constants/dummyData';
import globalStyle from '../../../globalStyle';
interface ContentInterface {
  title: string[];
  description: string;
  indexDotActive: number;
  onPress: () => void | any;
}

function ContentSplash(props: ContentInterface): JSX.Element {
  const styleContent = StyleSheet.create({
    contentWrapper: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
    },
    contentInner: {
      marginHorizontal: 90,
    },
    textTitle: {
      lineHeight: 32,
      color: COLORS.GREY_1,
    },
    textDesc: {
      color: COLORS.WHITE,
    },

    dotWrapper: {
      justifyContent: 'center',
      gap: 3,
      marginTop: 24,
      marginBottom: 16,
    },
    descWrapper: {
      marginTop: 20,
    },
    getStartedBtnStyle: {
      borderRadius: 30,
      marginHorizontal: 16,
      padding: 20,
    },
    textGetStartedStyle: {
      fontWeight: '700',
      fontSize: 20,
      lineHeight: 24,
      color: COLORS.WHITE,
    },
  });
  return (
    <View style={styleContent.contentWrapper}>
      <View style={styleContent.contentInner}>
        {props.title.map((titleItem: string, index: number) => (
          <AppText
            presetSize="h1"
            presetFontWeight="700"
            style={styleContent.textTitle}
            title={titleItem}
            key={index}
          />
        ))}
        <View style={styleContent.descWrapper}>
          <AppText
            presetSize="h5"
            presetFontWeight="400"
            style={styleContent.textDesc}
            title={props.description}
          />
        </View>
      </View>
      <View style={[globalStyle['d-flex'], styleContent.dotWrapper]}>
        {PAGES.map((_, index) => (
          <DotIndicator key={index} isActive={props.indexDotActive === index} />
        ))}
      </View>
      <AppButton
        isActive
        styleButton={styleContent.getStartedBtnStyle}
        styleTextButton={styleContent.textGetStartedStyle}
        title="Get Started"
        onPress={props.onPress}
      />
    </View>
  );
}
export default ContentSplash;
