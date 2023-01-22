import { ArrowPagination } from 'assets/svg';
import React from 'react';

export const Pagination = () => {
  // TODO get currentPage from reduxX
  // TODO get pagesAmount from reduxX

  return (
    <div className="pagination">
      <div className="pagination__item pagination__item_prev inactive">
        <ArrowPagination />
      </div>
      <div className="pagination__item pagination__item_1">1</div>
      <div className="pagination__item pagination__item_2 active">2</div>
      <div className="pagination__item pagination__item_3">3</div>
      <div className="pagination__item pagination__item_next">
        <ArrowPagination />
      </div>
    </div>
  );
};
