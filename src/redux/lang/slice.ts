import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TLangSliceState } from './types';

const initialState: TLangSliceState = {
  lang: 'ru',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setlang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setlang } = langSlice.actions;

export default langSlice.reducer;
