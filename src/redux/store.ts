import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './pagination/slice';
import filtersReducer from './filter/slice';
import productsReducer from './products/slice';
import langReducer from './lang/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filters: filtersReducer,
    products: productsReducer,
    lang: langReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
