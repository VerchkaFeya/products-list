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
  const { ascSort, sortParam, searchValue, category } = useSelector(getFilterSelector);
  const { currentPage, productsPerPage } = useSelector(getPaginationSelector);
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

    const filteredByCategoryArray = filterUtils.getProductsByCAtegory(filteredArray, category);

    if (filteredByCategoryArray) {
      const pageAmount = Math.ceil(filteredByCategoryArray.length / productsPerPage);
      dispatch(setPagesAmount(pageAmount === 0 ? 1 : pageAmount));

      if (currentPage > pageAmount && filteredByCategoryArray.length !== 0) {
        dispatch(changePage(pageAmount));
      }
    }

    const paginatedArray = filterUtils.getProductsPerPage(filteredByCategoryArray, productsPerPage)[
      currentPage - 1
    ];

    setVisibleProducts(paginatedArray);
  }, [products, sortParam, ascSort, currentPage, searchValue, productsPerPage, category]);

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
