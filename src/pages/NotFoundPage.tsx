import React from 'react';
import { useSelector } from 'react-redux';
import { getLangSelector } from 'redux/lang/selectors';

const NotFoundPage = () => {
  const lang = useSelector(getLangSelector);

  return (
    <div className="not-found-page">{lang === 'ru' ? 'Страница не найдена' : 'Page not found'}</div>
  );
};

export default NotFoundPage;
