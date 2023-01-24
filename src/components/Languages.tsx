import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLangSelector } from 'redux/lang/selectors';
import { setlang } from 'redux/lang/slice';

export const Languages = () => {
  const dispatch = useDispatch();

  const lang = useSelector(getLangSelector);

  const changeLang = (lang: string) => {
    dispatch(setlang(lang));
  };

  return (
    <div className="lang">
      <span
        className={`lang__item ${lang === 'ru' ? 'active' : ''}`}
        onClick={() => changeLang('ru')}>
        RU
      </span>
      <span className="lang__slash"> / </span>
      <span
        className={`lang__item ${lang === 'en' ? 'active' : ''}`}
        onClick={() => changeLang('en')}>
        EN
      </span>
    </div>
  );
};
