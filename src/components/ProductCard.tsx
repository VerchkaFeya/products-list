import React from 'react';
import { TProductProps } from 'types';
import { Stars } from './Stars';
import { getPriceDecimals, getPriceInteger } from './utils';

export const ProductCard = ({ product }: TProductProps) => {
  return (
    <div className="card">
      <div className="card__main">
        {Number(product.discount) ? (
          <div className="card__discount">{`-${product.discount}%`}</div>
        ) : (
          <></>
        )}
        <div className="card__logo">
          <img src={product.logo_url} alt="logo" />
        </div>
        <div className="card__content">
          <div className="card__image">
            <img src={product.image_url} />
          </div>
          <div className="card__info">
            <h1 className="card__name">{product.name}</h1>
            <div className="card__stars">
              <Stars stars={Number(product.stars)} />
            </div>

            {product.new_price ? (
              <div className="card__prices">
                <div className="card__price card-price">
                  <div className="card-price__price card-price__price_old">
                    <span className="card-price__integers">
                      {getPriceInteger(product.old_price)}
                    </span>
                    <span className="card-price__decimals">
                      {getPriceDecimals(product.old_price)}
                    </span>
                    <span className="card-price__symbol">&#8381;</span>
                  </div>
                  <div className="card-price__text">старая цена</div>
                </div>
                <div className="card__price card-price">
                  <div className="card-price__price card-price__price_new">
                    <span className="card-price__integers card-price__integers_new">
                      {getPriceInteger(product.new_price)}
                    </span>
                    <span className="card-price__decimals card-price__decimals_new">
                      {getPriceDecimals(product.new_price)}
                    </span>
                    <span className="card-price__symbol card-price__symbol_new">&#8381;</span>
                  </div>
                  <div className="card-price__text">цена по акции</div>
                </div>
              </div>
            ) : (
              <div className="card__prices">
                <div className="card__price card-price">
                  <div className="card-price__price card-price__price_new">
                    <span className="card-price__integers card-price__integers_new">
                      {getPriceInteger(product.old_price)}
                    </span>
                    <span className="card-price__decimals card-price__decimals_new">
                      {getPriceDecimals(product.old_price)}
                    </span>
                    <span className="card-price__symbol card-price__symbol_new">&#8381;</span>
                  </div>
                  <div className="card-price__text">актуальная цена</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {product.disclaimer && <div className="card__disclaimer">{product.disclaimer}</div>}
    </div>
  );
};
