import './Layout.sass';
import Header from '../../organisms/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Loader from '../../atoms/Loader';

export default function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main-content">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
}
