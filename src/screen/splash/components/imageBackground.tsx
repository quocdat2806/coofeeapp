import { View, StyleSheet, ImageBackground } from 'react-native';
import { COLORS } from '../../../constants/color';

interface BackGroundInterface {
  pathImage: string;
}
function BackGroundImagePage(pathImage: BackGroundInterface): JSX.Element {
  const styleBackGroundImage = StyleSheet.create({
    image: {
      flex: 1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: COLORS.OVERLAY_BACKGROUND,
    },
  });
  return (
    <ImageBackground
      style={styleBackGroundImage.image}
      source={{
        uri: `${pathImage.pathImage}`,
      }}>
      <View style={styleBackGroundImage.overlay} />
    </ImageBackground>
  );
}

export default BackGroundImagePage;
