import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import SearchSvg from '../../../../../assets/img/search.svg';
import SettingSvg from '../../../../../assets/img/setting.svg';
import {COLORS} from '../../../../../constants/color';
const Search = (): JSX.Element => {
  return (
    <View style={style.container}>
      <View style={style.searchWrapper}>
        <SearchSvg width={24} height={24} />
        <TextInput style={style.input} placeholder="Search Coffee" />
        <SettingSvg width={24} height={24} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.GREY_1,
    backgroundColor: COLORS.WHITE_1,
    marginVertical: 32,
  },
  searchWrapper: {
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    marginLeft: 4,
    flex: 1,
  },
});
export default Search;
