import { ArrowPagination } from 'assets/svg';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLangSelector } from 'redux/slices/langSlice';
import {
  nextPage,
  prevPage,
  changePage,
  setProductsPerPage,
  getPaginationSelector,
} from 'redux/slices/paginationSlice';

export const Pagination = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const { currentPage, pagesAmount, productsPerPage } = useSelector(getPaginationSelector);
  const lang = useSelector(getLangSelector);

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

  const amountOptions = [3, 5, 10, 20, 50];

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
        <span>{lang === 'ru' ? 'Показывать по:' : 'Show'}</span>
        <span className="pagination__amount" onClick={() => setPopupOpen(true)}>
          {`${productsPerPage} ${lang === 'ru' ? 'шт' : 'items'}`}
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
