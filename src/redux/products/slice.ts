import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from 'types';
import { fetchProducts } from './asyncActions';
import { TProductSliceState } from './types';

const initialState: TProductSliceState = {
  items: [],
  status: '', // TODO loading | success | error
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TProduct[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
