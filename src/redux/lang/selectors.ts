import { RootState } from 'redux/store';

export const getLangSelector = (state: RootState) => state.lang.lang;
