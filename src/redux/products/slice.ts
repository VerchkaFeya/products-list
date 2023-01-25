import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from 'types';
import { fetchProducts } from './asyncActions';
import { TProductSliceState } from './types';

const initialState: TProductSliceState = {
  items: [],
  categories: [],
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
      state.categories = [];
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;

      const categories = new Set(state.items.map((item) => item.category));
      state.categories = ['Все категории', ...Array.from(categories)];
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.categories = [];
      state.items = [];
    });
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
