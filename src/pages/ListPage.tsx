import { Languages, Pagination, ProductsList, Search, Sort } from 'components';
import React from 'react';

export const ListPage = () => {
  return (
    <div className="wrapper">
      <div className="list-page__lang">
        <Languages />
      </div>
      <h1 className="list-page__title">Карточки контента</h1>
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
