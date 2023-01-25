import { RootState } from 'redux/store';

export const getProductsSelector = (state: RootState) => state.products.items;

export const getCategories = (state: RootState) => state.products.categories;
