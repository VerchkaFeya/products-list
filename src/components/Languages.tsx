import React, { useState } from 'react';

export const Languages = () => {
  const [lang, setLang] = useState('ru');

  return (
    <div className="lang">
      <span className={`lang__item ${lang === 'ru' ? 'active' : ''}`} onClick={() => setLang('ru')}>
        RU
      </span>
      <span className="lang__slash"> / </span>
      <span className={`lang__item ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
        EN
      </span>
    </div>
  );
};
