import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

type TLangSliceState = {
  lang: string;
};

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

export const getLangSelector = (state: RootState) => state.lang.lang;

export const { setlang } = langSlice.actions;

export default langSlice.reducer;
