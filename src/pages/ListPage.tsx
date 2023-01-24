import React from 'react';
import { Languages, Pagination, ProductsList, Search, Sort } from 'components';
import { useSelector } from 'react-redux';
import { getLangSelector } from 'redux/slices/langSlice';

const ListPage = () => {
  const lang = useSelector(getLangSelector);
  return (
    <div className="wrapper">
      <div className="list-page__lang">
        <Languages />
      </div>
      <h1 className="list-page__title">{lang === 'ru' ? 'Карточки контента' : 'Cards'}</h1>
      <div className="list-page__controls">
        <Sort />
        <div className="list-page__search">
          <Search />
        </div>
      </div>
      <div className="list-page__pagination">
        <Pagination />
      </div>
      <div className="products-list">
        <ProductsList />
      </div>
    </div>
  );
};

export default ListPage;
