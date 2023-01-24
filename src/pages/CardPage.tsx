import { ProductCard } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { ArrowGoBackBtn } from 'assets/svg';
import { useSelector } from 'react-redux';
import { getLangSelector } from 'redux/lang/selectors';
import { getProductsSelector } from 'redux/products/selectors';

const CardPage = () => {
  const location = decodeURI(useLocation().pathname).slice(6);
  const lang = useSelector(getLangSelector);

  const products = useSelector(getProductsSelector);

  const currentProductIndex = products.findIndex(
    (product) => product.name.trim().replace('/', '-') === location,
  );

  return (
    <div className="card-page">
      <div className="card-page__go-back">
        <Link to="/" className="card-page__go-back-link">
          <ArrowGoBackBtn />
          <span>{lang === 'ru' ? ' Назад' : ' Go back'}</span>
        </Link>
      </div>
      <ProductCard product={products[currentProductIndex]} />
    </div>
  );
};

export default CardPage;
