import Nav from 'components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spiner from 'components/Spiner/Spiner';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header>
        <Nav />
      </header>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
