import React from 'react';
import { TProductProps } from 'types';
import { formatDate } from '../utils/formatData';
import { Link } from 'react-router-dom';

export const Product = ({ product }: TProductProps) => {
  return (
    <div className="product">
      <div className="product__img col col_1">
        <img src={product.image_url} alt="photo" className="product__image" loading="lazy" />
      </div>
      <div className="product__info col col_2">
        <Link className="product__link" to={`/card/${product.name.replace('/', '-')}`}>
          <h3 className="product__name">{product.name}</h3>
          <div className="product__category">{product.category}</div>
        </Link>
      </div>
      <div className="product__views col col_3">{product.views.toLocaleString()}</div>
      <div className="product__start-date col col_4">{formatDate(product.start_date)}</div>
      <div className="product__end-date col col_5">{formatDate(product.end_date)}</div>
    </div>
  );
};
