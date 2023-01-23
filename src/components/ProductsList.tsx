import React, { useEffect } from 'react';
import { TProduct } from 'types';
import { Product } from './Product';
import { useSelector, useDispatch } from 'react-redux';
import {
  compareEndDate,
  compareNames,
  compareStartDate,
  compareViews,
  getProductsPerPage, // todo убрать это чтоб не захламлять код
} from './utils';
import { fetchProducts } from 'redux/slices/productsSlice';

export const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state: any) => state.products.items);
  const { isAscSort, sortParam } = useSelector((state: any) => state.filters);
  const { currentPage, productsPerPage } = useSelector((state: any) => state.pagination);

  const getProducts = async () => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getProducts();
  }, [isAscSort, sortParam, currentPage, productsPerPage]);

  let visibleProducts: TProduct[] = [...products];

  // console.log(visibleProducts);

  // if (sortParam.sortProperty === 'name') {
  //   visibleProducts = [...products.sort((a: TProduct, b: TProduct) => compareNames(a, b))];
  // } else if (sortParam.sortProperty === 'views') {
  //   visibleProducts = [...products.sort((a: TProduct, b: TProduct) => compareViews(a, b))];
  // } else if (sortParam.sortProperty === 'start date') {
  //   visibleProducts = [...products.sort((a: TProduct, b: TProduct) => compareStartDate(a, b))];
  // } else if (sortParam.sortProperty === 'end date') {
  //   visibleProducts = [...products.sort((a: TProduct, b: TProduct) => compareEndDate(a, b))];
  // }

  // if (!isAscSort) {
  //   visibleProducts.reverse();
  // }

  visibleProducts = getProductsPerPage(visibleProducts, productsPerPage)[currentPage - 1];

  return (
    <>
      <div className="products-list">
        <div className="products-list__header">
          <div className="products-list__header-item col col_1">Фoто</div>
          <div className="products-list__header-item col col_2">Название</div>
          <div className="products-list__header-item col col_3">Просмотры</div>
          <div className="products-list__header-item col col_4">Начало ротации</div>
          <div className="products-list__header-item col col_5">Конец ротации</div>
        </div>
        <div className="products-list__body">
          {visibleProducts?.map((item: TProduct) => {
            return <Product key={item.name} product={item} />;
          })}
        </div>
      </div>
    </>
  );
};
