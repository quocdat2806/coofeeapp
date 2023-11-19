import React, {useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import SearchSvg from '../../../../assets/img/search.svg';
import SettingSvg from '../../../../assets/img/setting.svg';
import {useAppDispatch} from '../../../../hooks';
import filterSlice from '../../../../redux/filter/filterSlice';
const Search = (): JSX.Element => {
  const inputRef = useRef();
  const dispatch = useAppDispatch();

  function handleChangInput(e) {
    inputRef.current = e;
    dispatch(filterSlice.actions.search(inputRef.current));
  }

  return (
    <View style={style.container}>
      <View style={style.searchWrapper}>
        <SearchSvg width={24} height={24} />
        <TextInput
          onChangeText={handleChangInput}
          ref={inputRef}
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
    borderColor: '#CBCBD4',
    backgroundColor: '#F8F7FA',
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
