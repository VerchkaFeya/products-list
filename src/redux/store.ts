import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slices/paginationSlice';
import filtersReducer from './slices/filtersSlice';
import productsReducer from './slices/productsSlice';
import langReducer from './slices/langSlice';
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
