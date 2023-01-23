import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts: any = createAsyncThunk('products/fetchProducts', async () => {
  const responce = await fetch('https://files.rerotor.ru/rerotor/products.json');
  const json = await responce.json();
  return json;
});

const initialState = {
  items: [],
  status: '', // loading | success | error
};

export const productsSlice: any = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state: any) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchProducts.fulfilled]: (state: any, action: any) => {
      state.items = action.payload;
      state.status = 'success';
    },

    [fetchProducts.rejected]: (state: any) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
