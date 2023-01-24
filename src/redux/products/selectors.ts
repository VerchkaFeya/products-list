import { RootState } from 'redux/store';

export const getProductsSelector = (state: RootState) => state.products.items;
