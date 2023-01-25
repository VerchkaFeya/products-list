import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterSelector } from 'redux/filter/selectors';
import { setCategory } from 'redux/filter/slice';
import { getCategories } from 'redux/products/selectors';

export const Categories = () => {
  const categories = useSelector(getCategories);
  const { category } = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  const [value, setValue] = useState(category);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    dispatch(setCategory(e.target.value));
  };

  console.log(value);

  return (
    <select value={value} onChange={handleChange} className="categories">
      {categories.map((category) => {
        return (
          <option key={`${category}`} value={`${category}`} className="categories__option">
            {category}
          </option>
        );
      })}
    </select>
  );
};
