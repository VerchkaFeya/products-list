import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slices/paginationSlice';
import filtersReducer from './slices/filtersSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filters: filtersReducer,
    products: productsReducer,
  },
});
