import { CardPage } from 'pages/CardPage';
import { ListPage } from 'pages/ListPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="card/:id" element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
