import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    setProductsPerPage: (state, action) => {
      state.productsPerPage = action.payload;
    },
    setPagesAmount: (state, action) => {
      state.pagesAmount = action.payload;
    },
  },
});

export const { nextPage, prevPage, changePage, setProductsPerPage, setPagesAmount } =
  paginationSlice.actions;

export default paginationSlice.reducer;
