import { ArrowPagination } from 'assets/svg';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage, changePage } from 'redux/slices/paginationSlice';

export const Pagination = () => {
  const currentPage = useSelector((state: any) => state.pagination.currentPage);
  const pagesAmount = useSelector((state: any) => state.pagination.pagesAmount);
  const dispatch = useDispatch();

  const nextPageHandler = () => {
    dispatch(nextPage());
  };

  const prevPageHandler = () => {
    dispatch(prevPage());
  };

  const changePageHandler = (i: number) => {
    dispatch(changePage(i));
  };
  const pagesArr = [...new Array(pagesAmount)];

  return (
    <div className="pagination">
      <div
        className={`pagination__item pagination__item_prev  ${currentPage === 1 ? 'inactive' : ''}`}
        onClick={prevPageHandler}>
        <ArrowPagination />
      </div>
      {pagesArr.map((_, index) => {
        const i = index + 1;
        return (
          <div
            key={index}
            className={`pagination__item ${currentPage === i ? 'active' : ''}`}
            onClick={() => changePageHandler(i)}>
            {i}
          </div>
        );
      })}
      <div
        className={`pagination__item pagination__item_next ${
          currentPage === pagesAmount ? 'inactive' : ''
        }`}
        onClick={nextPageHandler}>
        <ArrowPagination />
      </div>
    </div>
  );
};
