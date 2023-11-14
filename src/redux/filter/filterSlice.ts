import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../store';

export interface CounterState {
  search: string;
  filterByCategory: string;
}

const initialState: CounterState = {
  search: '',
  filterByCategory: 'Cappuccino',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
});

// export const selectSearch = (state: RootState) => state.filter.search;

export default filterSlice.reducer;
