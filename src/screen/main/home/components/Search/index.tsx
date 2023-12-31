import React, { useRef } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import SearchSvg from '../../../../../assets/svg/search.svg';
import SettingSvg from '../../../../../assets/svg/setting.svg';
import { COLORS } from '../../../../../constants/color';
import { useAppDispatch } from '../../../../../hooks';
import filterSlice from '../../../../../redux/filter/filterSlice';
import globalStyle from '../../../../../globalStyle';
const Search = (): JSX.Element => {
  const inputRef = useRef();
  const dispatch = useAppDispatch();

  function handleTextChange(e) {
    inputRef.current = e;
    dispatch(filterSlice.actions.search(inputRef.current));
  }
  return (
    <View style={style.container}>
      <View style={[globalStyle['d-flex'], style.searchWrapper]}>
        <SearchSvg width={24} height={24} />
        <TextInput
          ref={inputRef}
          onChangeText={handleTextChange}
          style={style.input}
          placeholder="Search Coffee"
        />
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
    justifyContent: 'space-between',
  },
  input: {
    marginLeft: 4,
    flex: 1,
  },
});
export default Search;
