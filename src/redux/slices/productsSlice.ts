import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from 'types';
import { RootState } from 'redux/store';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://files.rerotor.ru/rerotor/products.json');
  return (await response.json()) as TProduct[];
});

type TProductSliceState = {
  items: TProduct[];
  status: string;
};

const initialState: TProductSliceState = {
  items: [],
  status: '', // loading | success | error
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

export const getProductsSelector = (state: RootState) => state.products.items;

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
