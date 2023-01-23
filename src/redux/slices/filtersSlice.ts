import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortParam: {
    name: 'по названию',
    sortProperty: 'name',
  },
  ascSort: true,
  searchValue: '',
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
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSortParam, setAscSort, setSearchValue } = filtersSlice.actions;

export default filtersSlice.reducer;
