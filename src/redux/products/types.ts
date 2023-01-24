import { TProduct } from 'types';

export type TProductSliceState = {
  items: TProduct[];
  status: string;
};
