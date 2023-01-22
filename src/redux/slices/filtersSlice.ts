import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortParam: {
    name: 'по названию',
    sortProperty: 'name',
  },
  ascSort: true,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortParam: (state, action) => {
      state.sortParam = action.payload;
    },
    setAscSort: (state, action) => {
      state.ascSort = action.payload;
    },
  },
});

export const { setSortParam, setAscSort } = filtersSlice.actions;

export default filtersSlice.reducer;
