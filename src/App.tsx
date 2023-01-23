import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from 'components';

const LazyListPage = lazy(() => import('./pages/ListPage'));
const LazyCardPage = lazy(() => import('./pages/CardPage'));
const LazyNotFoundPage = lazy(() => import('./pages//NotFoundPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<LazyListPage />} />
          <Route path="card/:id" element={<LazyCardPage />} />
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
