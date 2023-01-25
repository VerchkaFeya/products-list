import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilterSliceState, TSortParam } from './types';

const initialState: TFilterSliceState = {
  sortParam: {
    name: 'по названию',
    sortProperty: 'name',
    nameEn: 'by name',
  },
  ascSort: true,
  searchValue: '',
  category: 'Все категории',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortParam: (state, action: PayloadAction<TSortParam>) => {
      state.sortParam = action.payload;
    },
    setAscSort: (state, action: PayloadAction<boolean>) => {
      state.ascSort = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setSortParam, setAscSort, setSearchValue, setCategory } = filtersSlice.actions;

export default filtersSlice.reducer;
