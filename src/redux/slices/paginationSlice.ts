import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  productsPerPage: 5, // todo получать из ux
  pagesAmount: 3, // TODO получать в зависимости от количества общего
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
  },
});

export const { nextPage, prevPage, changePage } = paginationSlice.actions;

export default paginationSlice.reducer;
