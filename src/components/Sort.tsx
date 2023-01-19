import React from 'react';

export const Sort = () => {
  return (
    <div className="sort">
      <span>Сортировать:</span>
      <span className="sort__item">по названию</span>
      <span className="sort__item">по просмотрам</span>
      <span className="sort__item">по дате начала</span>
      <span className="sort__item">по дате окончания</span>
    </div>
  );
};
