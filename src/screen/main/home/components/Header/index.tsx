import React from 'react';
import {View, StyleSheet} from 'react-native';
import AvatarSvg from '../../../../../assets/img/avatar.svg';
import LocationSvg from '../../../../../assets/img/location.svg';
import NotificationSvg from '../../../../../assets/img/notification.svg';
import AppText from '../../../../../component/text';

const Header = (): JSX.Element => {
  return (
    <View style={[style['d-flex'], style.headerWrapper]}>
      <AvatarSvg color="red" width={60} height={60} />
      <View style={style['d-flex']}>
        <LocationSvg color="red" width={20} height={20} />
        <AppText
          title="Ha Noi Viet Nam"
          fontSize={12}
          fontWeight="800"
          lineHeight={12}
        />
      </View>
      <NotificationSvg color="red" width={21} height={19} />
    </View>
  );
};
const style = StyleSheet.create({
  'd-flex': {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Header;
