import { ProductCard } from 'components';
import { DATA } from 'products-data';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { ArrowGoBackBtn } from 'assets/svg';

export const CardPage = () => {
  const location = decodeURI(useLocation().pathname).slice(6);

  const currentProductIndex = DATA.findIndex(
    (product) => product.name.trim().replace('/', '-') === location,
  );

  return (
    <div className="card-page">
      <div className="wrapper">
        <div className="card-page__go-back">
          <Link to="/" className="card-page__go-back-link">
            <ArrowGoBackBtn />
            <span> Назад</span>
          </Link>
        </div>
        <ProductCard product={DATA[currentProductIndex]} />
      </div>
    </div>
  );
};
