import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface ProductState {
  products: any;
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<[]>) => {
      state.products = action.payload;
    },
  },
});
export default productSlice;
