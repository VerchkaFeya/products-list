import React, { useEffect, useState } from 'react';
import { TProduct } from 'types';
import { Product } from './Product';
import { useSelector } from 'react-redux';
import { getProductsPerPage, getSortedProducts, getSearchFilteredProducts } from './utils';
import { fetchProducts, getProductsSelector } from 'redux/slices/productsSlice';
import { getPaginationSelector, setPagesAmount } from 'redux/slices/paginationSlice';
import { getLangSelector } from 'redux/slices/langSlice';
import { getFilterSelector } from 'redux/slices/filtersSlice';
import { useAppDispatch } from 'redux/store';

export const ProductsList = () => {
  const dispatch = useAppDispatch();

  const products = useSelector(getProductsSelector);
  const { ascSort, sortParam, searchValue } = useSelector(getFilterSelector);
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
    const searchFilteredArray = getSearchFilteredProducts(searchValue, products);
    const filteredArray = getSortedProducts(searchFilteredArray, sortParam.sortProperty, ascSort);
    if (filteredArray) {
      const pagesAmount = Math.ceil(filteredArray.length / productsPerPage);
      dispatch(setPagesAmount(pagesAmount === 0 ? 1 : pagesAmount));
    }
    const paginatedArray = getProductsPerPage(filteredArray, productsPerPage)[currentPage - 1];
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
