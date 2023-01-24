import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProduct } from 'types';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://files.rerotor.ru/rerotor/products.json');
  return (await response.json()) as TProduct[];
});
