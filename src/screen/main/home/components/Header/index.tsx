import React from 'react';
import { View, StyleSheet } from 'react-native';
import AvatarSvg from '../../../../../assets/svg/avatar.svg';
import LocationSvg from '../../../../../assets/svg/location.svg';
import NotificationSvg from '../../../../../assets/svg/notification.svg';
import globalStyle from '../../../../../globalStyle';
import AppText from '../../../../../component/text';
const Header = (): JSX.Element => {
  return (
    <View
      style={[
        globalStyle['d-flex'],
        style['justify-content'],
        style.headerWrapper,
      ]}>
      <AvatarSvg color="red" width={60} height={60} />
      <View style={[globalStyle['d-flex'], style['justify-content']]}>
        <LocationSvg color="red" width={20} height={20} />
        <AppText
          presetSize="h5"
          presetFontWeight="800"
          title="Ha Noi Viet Nam"
          style={style.textLocation}
        />
      </View>
      <NotificationSvg color="red" width={24} height={24} />
    </View>
  );
};
const style = StyleSheet.create({
  'justify-content': {
    justifyContent: 'space-between',
  },
  textLocation: {
    lineHeight: 12,
  },
  headerWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Header;
