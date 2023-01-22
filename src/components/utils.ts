import { TProduct } from 'types';

export const formatDate = (date: string) => {
  return date
    .split('/')
    .map((item: string) => {
      if (item.length === 1) {
        return `0${item}`;
      }
      return item;
    })
    .join('.');
};

export const getPriceInteger = (price: string | number) => {
  const index = String(price).replace(',', '.').indexOf('.');
  return index !== -1
    ? Number(String(price).slice(0, index)).toLocaleString()
    : Number(price).toLocaleString();
};

export const getPriceDecimals = (price: string | number) => {
  const index = String(price).replace(',', '.').indexOf('.');
  const result = index !== -1 ? String(price).slice(index + 1) : '';
  return result.length === 1 ? result + '0' : result;
};

export const compareNames = (a: TProduct, b: TProduct): number => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

export const compareViews = (a: TProduct, b: TProduct): number => {
  return a.views - b.views;
};

export const compareStartDate = (a: TProduct, b: TProduct): number => {
  const startDateA = Date.parse(a.start_date);
  const startDateB = Date.parse(b.start_date);
  return startDateA - startDateB;
};

export const compareEndDate = (a: TProduct, b: TProduct): number => {
  const startDateA = Date.parse(a.end_date);
  const startDateB = Date.parse(b.end_date);
  return startDateA - startDateB;
};

export const getProductsPerPage = (
  arr: TProduct[],
  productsPerPage: number,
  currentPage: number,
) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += productsPerPage) {
    chunks.push(arr.slice(i, i + productsPerPage));
  }
  return chunks;
};
