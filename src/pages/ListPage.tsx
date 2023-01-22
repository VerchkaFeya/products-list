import { ProductsList, Search, Sort } from 'components';
import React from 'react';

export const ListPage = () => {
  return (
    <div className="wrapper">
      <h1 className="list-page__title">Карточки контента</h1>
      <div className="list-page__controls">
        <Sort />
        <div className="list-page__search">
          <Search />
        </div>
      </div>
      {/* <div className="pagination"> 1 - 2 - 3 - 4 - 5</div> */}
      <div className="products-list">
        <ProductsList />
      </div>
    </div>
  );
};
