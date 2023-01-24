import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from 'redux/slices/filtersSlice';
import { getLangSelector } from 'redux/slices/langSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const lang = useSelector(getLangSelector);

  const clearInputHandler = () => {
    dispatch(setSearchValue(''));
    setInputValue('');
    inputRef.current.focus();
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <div className="search">
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => inputChangeHandler(e)}
        placeholder={lang === 'ru' ? 'Поиск...' : 'Search...'}
        className="search__input"></input>
      {inputValue && <div className="search__reset" onClick={clearInputHandler}></div>}
    </div>
  );
};
