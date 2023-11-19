import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface FilterState {
  search: string;
}

const initialState: FilterState = {
  search: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice;
