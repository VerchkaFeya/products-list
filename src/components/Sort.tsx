import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAscSort, setSortParam } from 'redux/slices/filtersSlice';

export const Sort = () => {
  const { ascSort, sortParam } = useSelector((state: any) => state.filters);
  const lang = useSelector((state: any) => state.lang.lang);
  const dispatch = useDispatch();

  const sortParams = [
    {
      name: 'по названию',
      nameEn: 'by name',
      sortProperty: 'name',
    },
    {
      name: 'по просмотрам',
      nameEn: 'by views',
      sortProperty: 'views',
    },
    {
      name: 'по дате начала',
      nameEn: 'by start date',
      sortProperty: 'start date',
    },
    {
      name: 'по дате окончания',
      nameEn: 'by end date',
      sortProperty: 'end date',
    },
  ];

  const sortParamClickHandler = (name: string) => {
    if (name === sortParam.name) {
      dispatch(setAscSort(!ascSort));
    } else {
      dispatch(setAscSort(true));
    }
    dispatch(setSortParam(sortParams.find((item) => item.name === name)));
  };

  const getClassName = (name: string) => {
    if (sortParam.name === name && ascSort) {
      return 'sort__item_active asc';
    } else if (sortParam.name === name && !ascSort) {
      return 'sort__item_active desc';
    } else {
      return '';
    }
  };

  return (
    <div className="sort">
      <span>{lang === 'ru' ? 'Сортировать' : 'Sort by'}:</span>
      {sortParams.map((param) => {
        return (
          <span
            className={`sort__item ${getClassName(param.name)}`}
            key={param.sortProperty}
            onClick={() => sortParamClickHandler(param.name)}>
            {lang === 'ru' ? param.name : param.nameEn}
          </span>
        );
      })}
    </div>
  );
};
