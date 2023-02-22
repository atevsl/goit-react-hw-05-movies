import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
const Nav = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={css.nav}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.nav}>
          Movies
        </NavLink>
      </header>
    </>
  );
};
export default Nav;
