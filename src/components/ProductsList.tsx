import React, { useState, useEffect } from 'react';
import { TProduct } from 'types';
import { Product } from './Product';

export const ProductsList = () => {
  // TODO get products perPage from redux
  // TODO get products currentPage from redux

  // TODO get products sortType from redux
  // TODO get products filterType from redux
  // TODO get products searchValue from redux

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://files.rerotor.ru/rerotor/products.json')
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  console.log(products);

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
          {products?.map((item: TProduct) => {
            return <Product key={item.name} product={item} />;
          })}
        </div>
      </div>
    </>
  );
};
