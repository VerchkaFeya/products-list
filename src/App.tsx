import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Spinner } from 'components';

const LazyListPage = lazy(() => import('./pages/ListPage'));
const LazyCardPage = lazy(() => import('./pages/CardPage'));
const LazyNotFoundPage = lazy(() => import('./pages//NotFoundPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LazyListPage />} />
            <Route path="card/:id" element={<LazyCardPage />} />
            <Route path="*" element={<LazyNotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
