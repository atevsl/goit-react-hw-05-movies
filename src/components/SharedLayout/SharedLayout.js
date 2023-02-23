import Nav from 'components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header>
        <Nav />
      </header>
      <Outlet />
    </div>
  );
};
