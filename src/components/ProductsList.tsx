import React, { useEffect, useState } from 'react';
import { TProduct } from 'types';
import { Product } from './Product';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux/store';
import * as filterUtils from '../utils/filterProducts';

import { setPagesAmount, changePage } from 'redux/pagination/slice';
import { fetchProducts } from 'redux/products/asyncActions';

import { getLangSelector } from 'redux/lang/selectors';
import { getFilterSelector } from 'redux/filter/selectors';
import { getPaginationSelector } from 'redux/pagination/selectors';
import { getProductsSelector } from 'redux/products/selectors';

export const ProductsList = () => {
  const dispatch = useAppDispatch();

  const products = useSelector(getProductsSelector);
  const { ascSort, sortParam, searchValue } = useSelector(getFilterSelector);
  const { currentPage, productsPerPage, pagesAmount } = useSelector(getPaginationSelector);
  const lang = useSelector(getLangSelector);

  const [visibleProducts, setVisibleProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    await dispatch(fetchProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const searchFilteredArray = filterUtils.getSearchFilteredProducts(searchValue, products);
    const filteredArray = filterUtils.getSortedProducts(
      searchFilteredArray,
      sortParam.sortProperty,
      ascSort,
    );
    if (filteredArray) {
      const pageAmount = Math.ceil(filteredArray.length / productsPerPage);
      dispatch(setPagesAmount(pagesAmount === 0 ? 1 : pageAmount));

      if (currentPage > pageAmount && filteredArray.length !== 0) {
        dispatch(changePage(pageAmount));
      }
    }

    const paginatedArray = filterUtils.getProductsPerPage(filteredArray, productsPerPage)[
      currentPage - 1
    ];

    setVisibleProducts(paginatedArray);
  }, [products, sortParam, ascSort, currentPage, searchValue, productsPerPage]);

  const headers = [
    { nameRu: 'Фoто', nameEn: 'Photo' },
    { nameRu: 'Название', nameEn: 'Name' },
    { nameRu: 'Просмотры', nameEn: 'Views' },
    { nameRu: 'Начало ротации', nameEn: 'Start date' },
    { nameRu: 'Конец ротации', nameEn: 'End date' },
  ];

  return (
    <>
      <div className="products-list">
        <div className="products-list__header">
          {headers.map((item, index) => {
            return (
              <div key={index} className={`products-list__header-item col col_${index + 1}`}>
                {lang === 'ru' ? item.nameRu : item.nameEn}
              </div>
            );
          })}
        </div>
        <div className="products-list__body">
          {!visibleProducts?.length ? (
            <div className="products-list__placeholder">
              Извините, по вашему запросу ничего не найдено
            </div>
          ) : (
            <>
              {visibleProducts?.map((item: TProduct) => {
                return <Product key={item.name} product={item} />;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};
