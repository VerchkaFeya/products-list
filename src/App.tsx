import { CardPage, ListPage, NotFoundPage } from 'pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="card/:id" element={<CardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
