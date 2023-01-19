import React from 'react';
import { StarFilled, StarOutlined } from 'assets/svg';

type TStarsProps = {
  stars: number;
};

export const Stars = ({ stars }: TStarsProps) => {
  const filledStarsAmount = [...Array(stars).keys()];
  const outlinedStarsAmount = [...Array(5 - stars).keys()];

  return (
    <div className="stars">
      {filledStarsAmount.map((_, index) => {
        return <StarFilled key={index} />;
      })}
      {outlinedStarsAmount.map((_, index) => {
        return <StarOutlined key={index} />;
      })}
    </div>
  );
};
