import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'ru',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setlang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setlang } = langSlice.actions;

export default langSlice.reducer;
