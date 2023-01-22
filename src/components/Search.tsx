import React, { useState } from 'react';

export const Search = () => {
  // TODO get searchValue from reduxX

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск..."
        className="search__input"></input>
      {searchValue && <div className="search__reset" onClick={() => setSearchValue('')}></div>}
    </div>
  );
};
