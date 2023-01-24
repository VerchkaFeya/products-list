import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPaginationSliceState } from './types';

const initialState: TPaginationSliceState = {
  currentPage: 1,
  productsPerPage: 5,
  pagesAmount: 3,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.currentPage < state.pagesAmount) {
        state.currentPage = state.currentPage + 1;
      }
    },
    prevPage: (state) => {
      if (state.currentPage !== 1) {
        state.currentPage = state.currentPage - 1;
      }
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setProductsPerPage: (state, action: PayloadAction<number>) => {
      state.productsPerPage = action.payload;
    },
    setPagesAmount: (state, action: PayloadAction<number>) => {
      state.pagesAmount = action.payload;
    },
  },
});

export const { nextPage, prevPage, changePage, setProductsPerPage, setPagesAmount } =
  paginationSlice.actions;

export default paginationSlice.reducer;
