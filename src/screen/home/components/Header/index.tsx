import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AvatarSvg from '../../../../assets/img/avatar.svg';
import LocationSvg from '../../../../assets/img/location.svg';
import NotificationSvg from '../../../../assets/img/notification.svg';

const Header = (): JSX.Element => {
  return (
    <View style={[style['d-flex'], style.headerWrapper]}>
      <AvatarSvg color="red" width={60} height={60} />
      <View style={style['d-flex']}>
        <LocationSvg color="red" width={20} height={20} />
        <Text style={style.textLocation}>Ha Noi Viet Nam</Text>
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
  textLocation: {
    color: '#000',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 12,
  },
});

export default Header;
