import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAscSort, setSortParam } from 'redux/slices/filtersSlice';

export const Sort = () => {
  const isAscSort = useSelector((state: any) => state.filters.ascSort);
  const sortParam = useSelector((state: any) => state.filters.sortParam);
  const dispatch = useDispatch();

  const sortParams = [
    {
      name: 'по названию',
      sortProperty: 'name',
    },
    {
      name: 'по просмотрам',
      sortProperty: 'views',
    },
    {
      name: 'по дате начала',
      sortProperty: 'start date',
    },
    {
      name: 'по дате окончания',
      sortProperty: 'end date',
    },
  ];

  const sortParamClickHandler = (name: string) => {
    if (name === sortParam.name) {
      dispatch(setAscSort(!isAscSort));
    } else {
      dispatch(setAscSort(true));
    }
    dispatch(setSortParam(sortParams.find((item) => item.name === name)));
  };

  const getClassName = (name: string) => {
    if (sortParam.name === name && isAscSort) {
      return 'sort__item_active asc';
    } else if (sortParam.name === name && !isAscSort) {
      return 'sort__item_active desc';
    } else {
      return '';
    }
  };

  return (
    <div className="sort">
      <span>Сортировать:</span>
      {sortParams.map((param) => {
        return (
          <span
            className={`sort__item ${getClassName(param.name)}`}
            key={param.sortProperty}
            onClick={() => sortParamClickHandler(param.name)}>
            {param.name}
          </span>
        );
      })}
    </div>
  );
};
