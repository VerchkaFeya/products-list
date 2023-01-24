import { TProduct } from 'types';

const compareNames = (a: TProduct, b: TProduct): number => {
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

const compareViews = (a: TProduct, b: TProduct): number => {
  return a.views - b.views;
};

const compareStartDate = (a: TProduct, b: TProduct): number => {
  const startDateA = Date.parse(a.start_date);
  const startDateB = Date.parse(b.start_date);
  return startDateA - startDateB;
};

const compareEndDate = (a: TProduct, b: TProduct): number => {
  const startDateA = Date.parse(a.end_date);
  const startDateB = Date.parse(b.end_date);
  return startDateA - startDateB;
};

export const getProductsPerPage = (arr: TProduct[], productsPerPage: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += productsPerPage) {
    chunks.push(arr.slice(i, i + productsPerPage));
  }
  return chunks;
};

export const getSortedProducts = (products: TProduct[], sortParam: string, isAscSort: boolean) => {
  const sortedProducts: TProduct[] = [...products];

  if (sortParam === 'name') {
    sortedProducts.sort((a: TProduct, b: TProduct) => compareNames(a, b));
  } else if (sortParam === 'views') {
    sortedProducts.sort((a: TProduct, b: TProduct) => compareViews(a, b));
  } else if (sortParam === 'start date') {
    sortedProducts.sort((a: TProduct, b: TProduct) => compareStartDate(a, b));
  } else if (sortParam === 'end date') {
    sortedProducts.sort((a: TProduct, b: TProduct) => compareEndDate(a, b));
  }

  return isAscSort ? sortedProducts : sortedProducts.reverse();
};

export const getSearchFilteredProducts = (searchValue: string, products: TProduct[]) => {
  const value = searchValue.trim().toLowerCase().split(' ').join('');

  return products.filter((item) => {
    const productValue = item.name.trim().toLowerCase().split(' ').join('');
    const categoryValue = item.category.trim().toLowerCase().split(' ').join('');
    return productValue.includes(value) || categoryValue.includes(value);
  });
};
