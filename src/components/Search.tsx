import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/slices/filtersSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

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
        placeholder="Поиск..."
        className="search__input"></input>
      {inputValue && <div className="search__reset" onClick={clearInputHandler}></div>}
    </div>
  );
};
