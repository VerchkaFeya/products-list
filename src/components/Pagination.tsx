import { ArrowPagination } from 'assets/svg';
import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLangSelector } from 'redux/lang/selectors';
import { getPaginationSelector } from 'redux/pagination/selectors';
import { nextPage, prevPage, changePage, setProductsPerPage } from 'redux/pagination/slice';

export const Pagination = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const { currentPage, pagesAmount, productsPerPage } = useSelector(getPaginationSelector);
  const lang = useSelector(getLangSelector);
  const dispatch = useDispatch();

  const popupRef = useRef() as React.MutableRefObject<HTMLDivElement>;

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

  const popupHandler = () => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!popupRef.current) return;
      if (!popupRef.current.contains(e.target as HTMLDivElement)) {
        setPopupOpen(false);
      }
    };

    if (!popupOpen) {
      setPopupOpen(true);
      document.addEventListener('click', handleDocumentClick);
    } else {
      setPopupOpen(false);
      document.removeEventListener('click', handleDocumentClick);
    }
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
        <span className="pagination__amount" onClick={popupHandler} ref={popupRef}>
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
