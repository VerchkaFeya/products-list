import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Languages } from './Languages';

export const Layout = () => {
  const a = useLocation().pathname.trim().includes('card');

  return (
    <div className={`layout ${a ? 'layout_page' : ''}`}>
      <div className="wrapper">
        <header className="header">
          <Languages />
        </header>
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
