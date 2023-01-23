import React, { useEffect, useState } from 'react';
import { TProduct } from 'types';
import { Product } from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsPerPage, getSortedProducts, getSearchFilteredProducts } from './utils';
import { fetchProducts } from 'redux/slices/productsSlice';
import { setPagesAmount } from 'redux/slices/paginationSlice';

export const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state: any) => state.products.items);
  const { ascSort, sortParam, searchValue } = useSelector((state: any) => state.filters);
  const { currentPage, productsPerPage } = useSelector((state: any) => state.pagination);

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

  console.log(visibleProducts);

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
