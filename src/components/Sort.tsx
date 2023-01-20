import React from 'react';
import { useState } from 'react';

export const Sort = () => {
  const [activeSortParam, setActiveSortParam] = useState(0);
  const [isAscSort, setAscSort] = useState(true);

  const sortParams = ['по названию', 'по просмотрам', 'по дате начала', 'по дате окончания'];

  const sortParamClickHandler = (index: number) => {
    if (index === activeSortParam) {
      setAscSort(!isAscSort);
    }
    setActiveSortParam(index);
  };

  const getClassName = (index: number) => {
    if (activeSortParam === index && isAscSort) {
      return 'sort__item_active asc';
    } else if (activeSortParam === index && !isAscSort) {
      return 'sort__item_active desc';
    } else {
      return '';
    }
  };

  return (
    <div className="sort">
      <span>Сортировать:</span>
      {sortParams.map((param, index) => {
        return (
          <span
            className={`sort__item ${getClassName(index)}`}
            key={param}
            onClick={() => sortParamClickHandler(index)}>
            {param}
          </span>
        );
      })}
    </div>
  );
};
