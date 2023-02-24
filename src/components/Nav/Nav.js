import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
const Nav = () => {
  return (
    <header>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.navActive : css.nav)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? css.navActive : css.nav)}
      >
        Movies
      </NavLink>
    </header>
  );
};
export default Nav;
