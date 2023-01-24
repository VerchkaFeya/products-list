import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

type TSortParam = {
  name: string;
  sortProperty: string;
  nameEn: string;
};

type TFilterSliceState = {
  sortParam: TSortParam;
  ascSort: boolean;
  searchValue: string;
};

const initialState: TFilterSliceState = {
  sortParam: {
    name: 'по названию',
    sortProperty: 'name',
    nameEn: 'by name',
  },
  ascSort: true,
  searchValue: '',
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
  },
});

export const getFilterSelector = (state: RootState) => state.filters;

export const { setSortParam, setAscSort, setSearchValue } = filtersSlice.actions;

export default filtersSlice.reducer;
