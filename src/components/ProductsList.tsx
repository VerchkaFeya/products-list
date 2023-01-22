import React, { useState, useEffect } from 'react';
import { TProduct } from 'types';
import { Product } from './Product';
import { useSelector } from 'react-redux';
import { compareEndDate, compareNames, compareStartDate, compareViews } from './utils';

export const ProductsList = () => {
  // TODO get products perPage from redux
  // TODO get products currentPage from redux

  // TODO get products filterType from redux
  // TODO get products searchValue from redux

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://files.rerotor.ru/rerotor/products.json')
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const isAscSort = useSelector((state: any) => state.filters.ascSort);
  const sortParam = useSelector((state: any) => state.filters.sortParam);

  let visibleProducts: TProduct[] = [];

  if (sortParam.sortProperty === 'name') {
    visibleProducts = [...products.sort((a, b) => compareNames(a, b))];
  } else if (sortParam.sortProperty === 'views') {
    visibleProducts = [...products.sort((a, b) => compareViews(a, b))];
  } else if (sortParam.sortProperty === 'start date') {
    visibleProducts = [...products.sort((a, b) => compareStartDate(a, b))];
  } else if (sortParam.sortProperty === 'end date') {
    visibleProducts = [...products.sort((a, b) => compareEndDate(a, b))];
  }

  if (!isAscSort) {
    visibleProducts.reverse();
  }

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
