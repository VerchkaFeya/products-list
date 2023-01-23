import { ArrowPagination } from 'assets/svg';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage, changePage, setProductsPerPage } from 'redux/slices/paginationSlice';

export const Pagination = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const amountOptions = [3, 5, 10, 20, 50];

  const { currentPage, pagesAmount, productsPerPage } = useSelector(
    (state: any) => state.pagination,
  );
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

  const handleAmountOptionClick = (amount: number) => {
    setPopupOpen(false);
    dispatch(setProductsPerPage(amount));
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
      <div className="pagination__show-by-amount">
        <span>Показывать по:</span>
        <span className="pagination__amount" onClick={() => setPopupOpen(true)}>
          {productsPerPage} шт
        </span>
        <span className={`pagination__amount-arrow ${popupOpen ? 'open' : ''}`}>
          <ArrowPagination />
        </span>
        {popupOpen && (
          <div className="pagination__amount-popup">
            <ul className="pagination__amount-list">
              {amountOptions.map((item, index) => (
                <li key={index} onClick={() => handleAmountOptionClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
